'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const BrowseCourse = () => {
  const [courseList, setCourseList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:5000/course/getall');
        if (!response.ok) {
          throw new Error('Failed to fetch courses');
        }
        const data = await response.json();
        setCourseList(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching courses:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCourses();
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
          <p>Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Browse Courses</h1>
      
      {courseList.length === 0 ? (
        <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded">
          No courses available at the moment.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courseList.map((course) => (
            <div key={course._id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
              {course.image ? (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={course.image}
                    alt={course.title || "Course image"}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="bg-gray-100 h-48 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              )}
              
              <div className="p-4 flex-grow">
                <div className="flex justify-between mb-2">
                  <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">{course.level}</span>
                  <span className="bg-gray-500 text-white text-xs px-2 py-1 rounded-full">{course.category}</span>
                </div>
                <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                <p className="text-gray-600 text-sm">
                  {course.description ? (
                    course.description.length > 100 
                      ? `${course.description.substring(0, 100)}...` 
                      : course.description
                  ) : 'No description available'}
                </p>
              </div>
              <div className="px-4 py-3 bg-gray-50 border-t flex justify-between items-center">
                <div>
                  <span className="text-blue-600 font-bold">{course.price ? `₹${course.price}` : 'Free'}</span>
                  <span className="text-gray-500 text-sm ml-2">{course.duration}</span>
                </div>
                <Link href={`/course-details/${course._id}`}>
                  <button className="px-3 py-1 text-sm border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition-colors">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowseCourse;