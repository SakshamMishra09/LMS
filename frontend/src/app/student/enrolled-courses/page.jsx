'use client';
import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import Link from 'next/link';

const EnrolledCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('user');
    if (!token) return;

    const { _id: userId } = jwtDecode(token);

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/enroll/user/${userId}`)
      .then(res => res.json())
      .then(data => {
        setCourses(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">My Enrolled Courses</h1>
      {courses.length === 0 ? (
        <p>You have not enrolled in any courses yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((enroll) => (
            <CourseProgressCard key={enroll._id} enroll={enroll} />
          ))}
        </div>
      )}
    </div>
  );
}

// Helper component to fetch and display progress for each course
function CourseProgressCard({ enroll }) {
  const [progress, setProgress] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    async function fetchProgress() {
      try {
        const token = localStorage.getItem('user');
        let userId = null;
        if (token) {
          const decoded = jwtDecode(token);
          userId = decoded._id;
        }
        if (!userId || !enroll.courseId?._id) return;
        const res = await fetch(`http://localhost:5000/progress/get/${userId}/${enroll.courseId._id}`);
        if (res.ok) {
          const data = await res.json();
          setProgress(data.overallProgress || 0);
        } else {
          setProgress(0);
        }
      } catch {
        setProgress(0);
      } finally {
        setLoading(false);
      }
    }
    fetchProgress();
  }, [enroll.courseId?._id]);

  return (
    <div className="bg-white rounded shadow p-4 flex flex-col h-full">
      <h2 className="font-bold text-lg mb-2">{enroll.courseId?.title || 'Course unavailable'}</h2>
      <p>{enroll.courseId?.description || 'No description available.'}</p>
      {enroll.courseId?._id && (
        <div className="mt-4">
          {loading ? (
            <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse mb-2" />
          ) : (
            <div className="mb-2">
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="font-medium">Progress:</span>
                <span className="font-semibold text-indigo-600">{progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-indigo-500 h-2 rounded-full" style={{ width: `${progress}%` }}></div>
              </div>
              {progress === 100 && (
                <span className="inline-block mt-2 text-green-600 font-semibold">Completed</span>
              )}
            </div>
          )}
        </div>
      )}
      <div className='flex justify-left gap-5 mt-auto pt-6'>
        {enroll.courseId?._id && (
          <React.Fragment>
            <Link href={`/course-details/${enroll.courseId._id}`}>
              <span className="bg-blue-500 px-4 py-2 rounded-lg text-white">View Course</span>
            </Link>
            <Link href={`/student/track-course/${enroll.courseId._id}`}>
              <span className="bg-blue-500 px-4 py-2 rounded-lg text-white">Track Course</span>
            </Link>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default EnrolledCourses;