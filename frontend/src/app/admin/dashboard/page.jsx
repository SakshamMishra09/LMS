import React from 'react'
import Link from 'next/link';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-indigo-700">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <span className="text-4xl mb-2">👤</span>
            <h2 className="text-lg font-semibold mb-2">Manage Users</h2>
            <p className="text-gray-600 mb-4 text-center">View, edit, or remove users from the platform.</p>
            <Link href="/admin/manage-user">
              <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors">Go</button>
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <span className="text-4xl mb-2">📚</span>
            <h2 className="text-lg font-semibold mb-2">Manage Courses</h2>
            <p className="text-gray-600 mb-4 text-center">Oversee all courses, update or remove as needed.</p>
            <Link href="/user/manage-course">
              <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors">Go</button>
            </Link>
          </div>
        </div>
        {/* <div className="bg-white rounded-lg shadow p-6 mt-8">
          <h2 className="text-xl font-semibold mb-4 text-indigo-700">Quick Links</h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/admin/profile"><button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Profile</button></Link>
            <Link href="/user/add-course"><button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Add Course</button></Link>
            <Link href="/user/enroll-manage"><button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Manage Enrollments</button></Link>
            <Link href="/admin/manage-user"><button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">User Management</button></Link>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default AdminDashboard