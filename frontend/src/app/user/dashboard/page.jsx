import React from 'react'
import { FaBook, FaUserGraduate, FaPlusCircle, FaClipboardList, FaChalkboardTeacher } from 'react-icons/fa';
import Link from 'next/link';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-indigo-700 mb-8 text-center">Company Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add Course */}
          <Link href="/user/add-course" className="block bg-white rounded-xl shadow-md hover:shadow-xl transition p-8 text-center border border-indigo-100 hover:border-indigo-400">
            <FaPlusCircle className="mx-auto text-indigo-600 mb-4" size={40} />
            <h2 className="text-xl font-semibold mb-2">Add New Course</h2>
            <p className="text-gray-500">Create and publish a new course for students.</p>
          </Link>
          {/* Manage Courses */}
          <Link href="/user/manage-course" className="block bg-white rounded-xl shadow-md hover:shadow-xl transition p-8 text-center border border-indigo-100 hover:border-indigo-400">
            <FaBook className="mx-auto text-indigo-600 mb-4" size={40} />
            <h2 className="text-xl font-semibold mb-2">Manage Courses</h2>
            <p className="text-gray-500">Edit, update, or delete your existing courses.</p>
          </Link>
          {/* Manage Enrollments */}
          <Link href="/user/enroll-manage" className="block bg-white rounded-xl shadow-md hover:shadow-xl transition p-8 text-center border border-indigo-100 hover:border-indigo-400">
            <FaClipboardList className="mx-auto text-indigo-600 mb-4" size={40} />
            <h2 className="text-xl font-semibold mb-2">Manage Enrollments</h2>
            <p className="text-gray-500">View and manage student enrollments in your courses.</p>
          </Link>
          {/* Manage Feedback */}
          <Link href="/user/feedback" className="block bg-white rounded-xl shadow-md hover:shadow-xl transition p-8 text-center border border-indigo-100 hover:border-indigo-400">
            <FaChalkboardTeacher className="mx-auto text-indigo-600 mb-4" size={40} />
            <h2 className="text-xl font-semibold mb-2">Feedback & Reviews</h2>
            <p className="text-gray-500">See feedback and reviews from students.</p>
          </Link>
          {/* Profile */}
          <Link href="/user/profile" className="block bg-white rounded-xl shadow-md hover:shadow-xl transition p-8 text-center border border-indigo-100 hover:border-indigo-400">
            <FaUserGraduate className="mx-auto text-indigo-600 mb-4" size={40} />
            <h2 className="text-xl font-semibold mb-2">Company Profile</h2>
            <p className="text-gray-500">View and update your company profile information.</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard