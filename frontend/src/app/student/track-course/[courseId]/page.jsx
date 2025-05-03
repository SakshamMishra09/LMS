'use client';
import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import Link from 'next/link';

const TrackCourse = () => {
//   const searchParams = useSearchParams();
  const {courseId} = useParams();
  
  const [course, setCourse] = useState(null);
  const [currentModule, setCurrentModule] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);
  const [completedLectures, setCompletedLectures] = useState([]);

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
        
        // Fetch course modules and lectures
        const modulesResponse = await fetch(`http://localhost:5000/module/getbycourse/${courseId}`);
        if (!modulesResponse.ok) {
          throw new Error('Failed to fetch modules');
        }
        const modulesData = await modulesResponse.json();
        
        // Fetch student progress
        // You would need to have the student ID from your auth system
        const studentId = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))._id : null;
        
        if (studentId) {
          const progressResponse = await fetch(`http://localhost:5000/progress/get/${studentId}/${courseId}`);
          if (progressResponse.ok) {
            const progressData = await progressResponse.json();
            setCompletedLectures(progressData.completedLectures || []);
            setProgress(progressData.overallProgress || 0);
          }
        }
        
        // Set the course with its modules
        setCourse({...courseData, modules: modulesData});
        
        // Set the first module as current if available
        if (modulesData && modulesData.length > 0) {
          setCurrentModule(modulesData[0]);
        }
        
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
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar - Course Structure */}
        <div className="md:w-1/3 lg:w-1/4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2">{course.title}</h2>
              <div className="relative w-full bg-gray-200 rounded-full h-4">
                <div 
                  className="bg-blue-600 h-4 rounded-full" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-1">{progress}% complete</p>
            </div>

            <h3 className="font-semibold mb-3 text-gray-700">Course Content</h3>
            <div className="space-y-2">
              {course.modules && course.modules.map((module, index) => (
                <div key={module._id} className="border border-gray-200 rounded-md">
                  <button
                    className={`w-full text-left p-3 flex items-center justify-between ${
                      currentModule && currentModule._id === module._id ? 'bg-blue-50' : ''
                    }`}
                    onClick={() => handleModuleChange(module)}
                  >
                    <span className="font-medium">
                      Module {index + 1}: {module.title}
                    </span>
                    <span className="text-sm text-gray-500">
                      {module.lectures ? module.lectures.filter(
                        lecture => completedLectures.includes(lecture._id)
                      ).length : 0}
                      /{module.lectures ? module.lectures.length : 0}
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content - Current Module/Lecture */}
        <div className="md:w-2/3 lg:w-3/4">
          <div className="bg-white rounded-lg shadow-md p-6">
            {currentModule ? (
              <>
                <h2 className="text-2xl font-bold mb-6">{currentModule.title}</h2>
                <p className="text-gray-700 mb-6">{currentModule.description}</p>

                {/* Lectures List */}
                <div className="space-y-4">
                  {currentModule.lectures && currentModule.lectures.map((lecture, index) => (
                    <div 
                      key={lecture._id} 
                      className={`border ${
                        completedLectures.includes(lecture._id) 
                          ? 'border-green-200 bg-green-50' 
                          : 'border-gray-200'
                      } rounded-lg p-4`}
                    >
                      <div className="flex flex-wrap justify-between items-center gap-4">
                        <div>
                          <h3 className="font-semibold">{index + 1}. {lecture.title}</h3>
                          <p className="text-gray-600 text-sm mt-1">{lecture.description}</p>
                          
                          {/* Lecture type indicator */}
                          <div className="mt-2 flex items-center">
                            {lecture.type === 'video' && (
                              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Video
                              </span>
                            )}
                            {lecture.type === 'document' && (
                              <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Document
                              </span>
                            )}
                            {lecture.type === 'quiz' && (
                              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Quiz
                              </span>
                            )}
                            <span className="ml-3 text-xs text-gray-500">
                              {lecture.duration || '15 mins'}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Link href={`/student/lecture/${lecture._id}?course=${courseId}&module=${currentModule._id}`}>
                            <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                              View Lecture
                            </button>
                          </Link>
                          
                          <button 
                            onClick={() => handleMarkComplete(lecture._id)}
                            className={`px-3 py-1 text-sm rounded ${
                              completedLectures.includes(lecture._id)
                                ? 'bg-green-500 text-white'
                                : 'border border-gray-300 hover:bg-gray-50'
                            }`}
                            disabled={completedLectures.includes(lecture._id)}
                          >
                            {completedLectures.includes(lecture._id) ? 'Completed' : 'Mark Complete'}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-600">Select a module from the sidebar to view its content</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackCourse;