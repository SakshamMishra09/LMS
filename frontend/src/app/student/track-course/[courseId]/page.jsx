'use client';
import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { jwtDecode } from 'jwt-decode';

const TrackCourse = () => {
//   const searchParams = useSearchParams();
  const {courseId} = useParams();
  
  const [course, setCourse] = useState(null);
  const [currentModule, setCurrentModule] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);
  const [completedLectures, setCompletedLectures] = useState([]);
  const [completedChapters, setCompletedChapters] = useState([]);

  // Fetch course data and progress
  useEffect(() => {
    const fetchCourse = async () => {
      if (!courseId) {
        setError("No course ID provided");
        setLoading(false);
        return;
      }
      
      try {
        // Fetch course details
        const courseResponse = await fetch(`http://localhost:5000/course/getbyid/${courseId}`);
        if (!courseResponse.ok) {
          throw new Error('Failed to fetch course');
        }
        const courseData = await courseResponse.json();
        
        // Fetch student progress (chapter-level)
        let userId = null;
        const token = localStorage.getItem('user');
        if (token) {
          const decoded = jwtDecode(token);
          userId = decoded._id;
        }
        let completedChaptersArr = [];
        let overallProgress = 0;
        if (userId) {
          const progressRes = await fetch(`http://localhost:5000/progress/get/${userId}/${courseId}`);
          if (progressRes.ok) {
            const progressData = await progressRes.json();
            completedChaptersArr = progressData.completedChapters || [];
            overallProgress = progressData.overallProgress || 0;
          }
        }
        setCompletedChapters(completedChaptersArr);
        setProgress(overallProgress);
        setCourse(courseData);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching course data:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCourse();
  }, [courseId]);

  // Handle marking a lecture as complete
  const handleMarkComplete = async (lectureId) => {
    const studentId = JSON.parse(localStorage.getItem('user'))._id;
    try {
      // Update on backend
      const response = await fetch('http://localhost:5000/progress/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          studentId,
          courseId,
          lectureId,
          completed: true
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update progress');
      }
      
      // Update locally
      if (!completedLectures.includes(lectureId)) {
        const newCompletedLectures = [...completedLectures, lectureId];
        setCompletedLectures(newCompletedLectures);
        
        // Calculate new progress
        if (course) {
          const totalLectures = course.modules.reduce(
            (sum, module) => sum + (module.lectures ? module.lectures.length : 0), 
            0
          );
          const newProgress = Math.round((newCompletedLectures.length / totalLectures) * 100);
          setProgress(newProgress);
        }
      }
    } catch (err) {
      console.error("Error updating progress:", err);
      // Consider showing an error message to the user
    }
  };

  // Mark chapter as complete
  const handleMarkChapterComplete = async (chapterId) => {
    const token = localStorage.getItem('user');
    let userId = null;
    if (token) {
      const decoded = jwtDecode(token);
      userId = decoded._id;
    }
    if (!userId) return;
    try {
      const res = await fetch('http://localhost:5000/progress/complete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, courseId, chapterId })
      });
      if (res.ok) {
        // Refetch progress from backend to ensure global update
        const progressRes = await fetch(`http://localhost:5000/progress/get/${userId}/${courseId}`);
        if (progressRes.ok) {
          const progressData = await progressRes.json();
          setCompletedChapters(progressData.completedChapters || []);
          setProgress(progressData.overallProgress || 0);
        }
      }
    } catch (err) {
      // Optionally show error
    }
  };

  // Switch to different module
  const handleModuleChange = (module) => {
    setCurrentModule(module);
  };

  if (loading) {
    return (
      <div className="container mx-auto py-10 text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-500 border-r-transparent" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-10">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded" role="alert">
          <p>Error: {error}</p>
        </div>
        <div className="mt-4">
          <Link href="/student/dashboard">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
              Back to Dashboard
            </button>
          </Link>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="container mx-auto py-10">
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded" role="alert">
          <p>Course not found</p>
        </div>
        <div className="mt-4">
          <Link href="/student/dashboard">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
              Back to Dashboard
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">{course?.title}</h2>
        <div className="mb-6">
          <div className="relative w-full bg-gray-200 rounded-full h-4">
            <div className="bg-blue-600 h-4 rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
          <p className="text-sm text-gray-600 mt-1">{progress}% complete</p>
        </div>
        <h3 className="font-semibold mb-3 text-gray-700">Chapters</h3>
        <div className="space-y-4">
          {course?.chapters?.map((chapter, idx) => (
            <div key={chapter._id} className={`border rounded-lg p-4 flex items-center justify-between ${completedChapters.includes(chapter._id) ? 'bg-green-50 border-green-200' : 'border-gray-200'}`}>
              <div>
                <h4 className="font-semibold">{idx + 1}. {chapter.title}</h4>
                <p className="text-gray-600 text-sm mt-1">{chapter.description}</p>
              </div>
              <div className="flex items-center gap-2">
                <Link href={`/course-details/${courseId}/chapters/${chapter._id}`}>
                  <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">View</button>
                </Link>
                <button
                  onClick={() => handleMarkChapterComplete(chapter._id)}
                  className={`px-3 py-1 text-sm rounded ${completedChapters.includes(chapter._id) ? 'bg-green-500 text-white' : 'border border-gray-300 hover:bg-gray-50'}`}
                  disabled={completedChapters.includes(chapter._id)}
                >
                  {completedChapters.includes(chapter._id) ? 'Completed' : 'Mark Complete'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrackCourse;