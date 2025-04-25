// pages/about.js
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>About Us | LMS Learning Platform</title>
        <meta name="description" content="Learn about our mission to provide quality education through our learning management system" />
      </Head>


      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <div className="bg-indigo-700">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              About Our Learning Platform
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-indigo-200">
              Empowering learners through accessible, high-quality education
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Mission
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                At LMS, our mission is to revolutionize education by providing accessible, engaging, and effective
                learning experiences for everyone. We believe that quality education should be available to all,
                regardless of geographical or socioeconomic barriers.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Through our cutting-edge learning management system, we deliver interactive video lectures,
                comprehensive learning materials, and personalized learning paths that adapt to each learner's needs.
              </p>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="bg-indigo-50 rounded-lg overflow-hidden">
                <div className="h-64 bg-gray-300 flex items-center justify-center">
                  <svg className="h-24 w-24 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <div className="px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">Education for Everyone</h3>
                  <p className="mt-2 text-base text-gray-600">
                    Our platform is designed to be intuitive and accessible, enabling learners of all backgrounds to take
                    control of their educational journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
            <div className="space-y-12">
              <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Meet Our Team</h2>
                <p className="text-xl text-gray-500">
                  Our diverse team of educators, technologists, and learning designers is passionate about creating the best
                  learning experience for you.
                </p>
              </div>
              <ul className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl">
                {/* Team Member 1 */}
                <li>
                  <div className="space-y-6">
                    <div className="h-40 w-40 mx-auto rounded-full xl:h-56 xl:w-56 bg-gray-300 flex items-center justify-center">
                      <svg className="h-24 w-24 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h3>Dr. Sarah Johnson</h3>
                        <p className="text-indigo-600">Chief Education Officer</p>
                      </div>
                      <div className="text-gray-500">
                        <p>Ph.D. in Educational Technology with over 15 years of experience in online learning.</p>
                      </div>
                    </div>
                  </div>
                </li>

                {/* Team Member 2 */}
                <li>
                  <div className="space-y-6">
                    <div className="h-40 w-40 mx-auto rounded-full xl:h-56 xl:w-56 bg-gray-300 flex items-center justify-center">
                      <svg className="h-24 w-24 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h3>Michael Chen</h3>
                        <p className="text-indigo-600">Chief Technology Officer</p>
                      </div>
                      <div className="text-gray-500">
                        <p>Software architect specializing in educational technology platforms and interactive learning experiences.</p>
                      </div>
                    </div>
                  </div>
                </li>

                {/* Team Member 3 */}
                <li>
                  <div className="space-y-6">
                    <div className="h-40 w-40 mx-auto rounded-full xl:h-56 xl:w-56 bg-gray-300 flex items-center justify-center">
                      <svg className="h-24 w-24 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h3>Elena Rodriguez</h3>
                        <p className="text-indigo-600">Head of Content</p>
                      </div>
                      <div className="text-gray-500">
                        <p>Curriculum development expert with experience in creating engaging and effective learning materials across disciplines.</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-indigo-800">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Trusted by learners worldwide</h2>
              <p className="mt-3 text-xl text-indigo-200 sm:mt-4">
                Our platform has helped thousands of students achieve their educational goals
              </p>
            </div>
            <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
              <div className="flex flex-col">
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">Courses</dt>
                <dd className="order-1 text-5xl font-extrabold text-white">500+</dd>
              </div>
              <div className="flex flex-col mt-10 sm:mt-0">
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">Students</dt>
                <dd className="order-1 text-5xl font-extrabold text-white">50,000+</dd>
              </div>
              <div className="flex flex-col mt-10 sm:mt-0">
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">Countries</dt>
                <dd className="order-1 text-5xl font-extrabold text-white">100+</dd>
              </div>
            </dl>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center">
            <div className="px-5 py-2">
              <Link href="/" className="text-base text-gray-300 hover:text-white">
                Home
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link href="/about" className="text-base text-gray-300 hover:text-white">
                About
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link href="/contact" className="text-base text-gray-300 hover:text-white">
                Contact
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link href="#" className="text-base text-gray-300 hover:text-white">
                Terms
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link href="#" className="text-base text-gray-300 hover:text-white">
                Privacy
              </Link>
            </div>
          </nav>
          <p className="mt-8 text-center text-base text-gray-400">
            &copy; 2025 LMS Learning Platform. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}