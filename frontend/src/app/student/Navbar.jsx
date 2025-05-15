'use client'
import Link from 'next/link';
import { FaBookOpen } from "react-icons/fa";
import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check for token in localStorage
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('user');
      setIsLoggedIn(!!token);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    // Optionally, redirect or reload
    window.location.reload();
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <FaBookOpen color='blue' />
              <Link href='/' className="ml-2 text-xl font-bold text-indigo-600">LearnNext</Link>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link href="/student/dashboard" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-indigo-600">Dashboard</Link>
              <Link href="/student/enrolled-courses" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-indigo-600">Enrolled-Courses</Link>
            </div>
          </div>
          <div className="flex items-center">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Logout
              </button>
            ) : (
              <>
                <Link href="/login" className="hidden md:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Log in
                </Link>
                <Link href="/signup" className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;