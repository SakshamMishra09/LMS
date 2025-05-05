'use client';
import { useParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/course/getbyid/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch course details');
        }
        const data = await response.json();
        setCourse(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching course details:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCourseDetails();
  }, [id]);

  const handleEnroll = async () => {
    try {
      const userId = "12345"; // Replace with actual user ID from context or authentication
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/enroll`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ courseId: id, userId }),
      });

      if (!response.ok) {
        throw new Error('Failed to enroll in the course');
      }

      alert('Successfully enrolled in the course!');
    } catch (err) {
      console.error('Error enrolling in the course:', err);
      alert('Error enrolling in the course. Please try again later.');
    }
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
          <Link href="/browse-course">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
              Back to Courses
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Back button */}
      <div className="mb-6">
        <Link href="/browse-course">
          <button className="flex items-center text-blue-500 hover:text-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Courses
          </button>
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Course Header */}
        <div className="relative">
          {course.image ? (
            <div className="h-64 md:h-96">
              <img 
                src={course.image.startsWith('http') ? course.image : `http://localhost:5000/${course.image}`}
                alt={course.title || "Course image"}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="bg-gray-100 h-64 md:h-96 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}
          
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white">{course.title}</h1>
          </div>
        </div>

        {/* Course Details */}
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">{course.level}</span>
            <span className="bg-gray-500 text-white px-3 py-1 rounded-full text-sm">{course.category}</span>
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">{course.duration}</span>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">About This Course</h2>
            <p className="text-gray-700">{course.description || 'No description available for this course.'}</p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-gray-200 pt-6">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-600">Price:</p>
              <p className="text-3xl font-bold text-blue-600">{course.price ? `$${course.price}` : 'Free'}</p>
            </div>
            <Link href="#" onClick={handleEnroll} className="px-8 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;