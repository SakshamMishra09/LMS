import React from 'react'
import { FaBookOpen, FaChartLine, FaUser, FaClipboardList, FaStar } from 'react-icons/fa';
import Link from 'next/link';

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-indigo-700 mb-8 text-center">Student Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Enrolled Courses */}
          <Link href="/student/enrolled-courses" className="block bg-white rounded-xl shadow-md hover:shadow-xl transition p-8 text-center border border-indigo-100 hover:border-indigo-400">
            <FaBookOpen className="mx-auto text-indigo-600 mb-4" size={40} />
            <h2 className="text-xl font-semibold mb-2">My Courses</h2>
            <p className="text-gray-500">View and access all your enrolled courses.</p>
          </Link>
          {/* Feedback & Reviews */}
          {/* Profile */}
          <Link href="/student/profile" className="block bg-white rounded-xl shadow-md hover:shadow-xl transition p-8 text-center border border-indigo-100 hover:border-indigo-400">
            <FaUser className="mx-auto text-indigo-600 mb-4" size={40} />
            <h2 className="text-xl font-semibold mb-2">My Profile</h2>
            <p className="text-gray-500">View and update your student profile information.</p>
          </Link>
      
        </div>
      </div>
    </div>
  )
}

export default StudentDashboard