'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { jwtDecode } from 'jwt-decode';

const Enroll = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      try {
        const token = localStorage.getItem('user');
        if (!token) {
          throw new Error('Please login to view enrolled courses');
        }

        const decodedToken = jwtDecode(token);
        const userId = decodedToken._id;

        // Fetch enrolled courses
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/enroll/user/${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch enrolled courses');
        }

        const data = await response.json();
        setEnrolledCourses(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching enrolled courses:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchEnrolledCourses();
  }, []);

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
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (enrolledCourses.length === 0) {
    return (
      <div className="container mx-auto py-10 text-center">
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded" role="alert">
          <p>You haven't enrolled in any courses yet.</p>
        </div>
        <Link href="/browse-course" className="mt-4 inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
          Browse Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">My Enrolled Courses</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {enrolledCourses.map((enrollment) => (
          <div key={enrollment._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48">
              <img
                src={enrollment.course?.image?.startsWith('http') 
                  ? enrollment.course.image 
                  : `${process.env.NEXT_PUBLIC_API_URL}/${enrollment.course?.image}`}
                alt={enrollment.course?.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{enrollment.course?.title}</h2>
              <p className="text-gray-600 mb-4 line-clamp-2">{enrollment.course?.description}</p>
              
              <div className="flex justify-between items-center">
                <Link 
                  href={`/student/track-course/${enrollment.course?._id}`}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                  Continue Learning
                </Link>
                
                <div className="text-sm text-gray-500">
                  Enrolled on: {new Date(enrollment.createdAt).toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Enroll;

