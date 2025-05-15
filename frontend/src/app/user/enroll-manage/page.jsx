'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const EnrollManage = () => {
  const [courses, setCourses] = useState([]);
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch all courses and enrollments in parallel
    const fetchData = async () => {
      try {
        const [courseRes, enrollRes] = await Promise.all([
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/course/getall`),
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/enroll/getall`)
        ]);
        const courseData = await courseRes.json();
        const enrollData = await enrollRes.json();
        setCourses(courseData);
        setEnrollments(enrollData);
      } catch (err) {
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Helper to count enrollments for a course
  const getEnrollCount = (courseId) =>
    enrollments.filter((enroll) => enroll.courseId === courseId || enroll.courseId?._id === courseId).length;

  if (loading) {
    return (
      <div className="container mx-auto py-10 text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-500 border-r-transparent" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">All Courses & Enrollments</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course._id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-2">{course.title}</h2>
            <p className="mb-2 text-gray-600">{course.description}</p>
            <div className="mb-2">
              <span className="font-semibold">Enrolled Students: </span>
              <span className="text-blue-600 font-bold">{getEnrollCount(course._id)}</span>
            </div>
            <Link href={`/course-details/${course._id}`}>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">View Course</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnrollManage;