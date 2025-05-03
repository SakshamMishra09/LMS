'use client'
import { useState } from "react";
import { BookOpen, Users, Award, CalendarDays, Clock, Video, MessageSquare, ChevronRight } from "lucide-react";

export default function LMSLandingPage() {
  const [email, setEmail] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Demo account request submitted for: " + email);
    setEmail("");
  };
  
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <BookOpen className="h-8 w-8 text-indigo-600" />
                <span className="ml-2 text-xl font-bold text-indigo-600">EduHub LMS</span>
              </div>
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                <a href="#features" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-indigo-600">Features</a>
                <a href="#pricing" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-indigo-600">Pricing</a>
                <a href="#testimonials" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-indigo-600">Testimonials</a>
                <a href="#contact" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-indigo-600">Contact</a>
              </div>
            </div>
            <div className="flex items-center">
              <button className="hidden md:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Log in
              </button>
              <button className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Transform your</span>
                  <span className="block text-indigo-600">learning experience</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  EduHub LMS provides a seamless, intuitive platform for course creation, student engagement, and progress tracking—all in one place.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                      Get started
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-gray-100 hover:bg-gray-200 md:py-4 md:text-lg md:px-10">
                      Watch demo
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-indigo-100 flex items-center justify-center">
          <div className="h-64 w-full lg:h-full lg:w-full flex items-center justify-center">
            <div className="w-3/4 h-3/4 bg-indigo-200 rounded-xl shadow-lg flex items-center justify-center">
              <Video className="h-16 w-16 text-indigo-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need for online learning
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our LMS platform provides powerful tools for educators and an engaging experience for learners.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <Video className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Interactive Content</h3>
                <p className="mt-2 text-base text-gray-500">
                  Create engaging lessons with videos, quizzes, and interactive materials that keep students motivated.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Collaborative Learning</h3>
                <p className="mt-2 text-base text-gray-500">
                  Foster community with discussion forums, group projects, and peer-to-peer feedback.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Certification</h3>
                <p className="mt-2 text-base text-gray-500">
                  Issue custom certificates upon course completion to recognize student achievements.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <CalendarDays className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Scheduling</h3>
                <p className="mt-2 text-base text-gray-500">
                  Plan and organize course timelines with our intuitive calendar and scheduling tools.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Progress Tracking</h3>
                <p className="mt-2 text-base text-gray-500">
                  Monitor student engagement and performance with comprehensive analytics and reports.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Communication Tools</h3>
                <p className="mt-2 text-base text-gray-500">
                  Stay connected with integrated messaging, announcements, and email notifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Pricing</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Simple, transparent pricing
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Choose the plan that works best for your educational needs
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="px-6 py-8">
                <h3 className="text-2xl font-medium text-gray-900">Basic</h3>
                <p className="mt-4 text-5xl font-extrabold text-gray-900">$29</p>
                <p className="mt-2 text-base text-gray-500">per month</p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <ChevronRight className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-base text-gray-700">Up to 500 students</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <ChevronRight className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-base text-gray-700">5 courses</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <ChevronRight className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-base text-gray-700">Basic reporting</p>
                  </li>
                </ul>
              </div>
              <div className="px-6 py-4 bg-gray-50">
                <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                  Get started
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-indigo-500">
              <div className="px-6 py-8">
                <h3 className="text-2xl font-medium text-gray-900">Professional</h3>
                <p className="mt-4 text-5xl font-extrabold text-gray-900">$79</p>
                <p className="mt-2 text-base text-gray-500">per month</p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <ChevronRight className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-base text-gray-700">Up to 2,000 students</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <ChevronRight className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-base text-gray-700">20 courses</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <ChevronRight className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-base text-gray-700">Advanced analytics</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <ChevronRight className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-base text-gray-700">Priority support</p>
                  </li>
                </ul>
              </div>
              <div className="px-6 py-4 bg-gray-50">
                <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                  Get started
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="px-6 py-8">
                <h3 className="text-2xl font-medium text-gray-900">Enterprise</h3>
                <p className="mt-4 text-5xl font-extrabold text-gray-900">$199</p>
                <p className="mt-2 text-base text-gray-500">per month</p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <ChevronRight className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-base text-gray-700">Unlimited students</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <ChevronRight className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-base text-gray-700">Unlimited courses</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <ChevronRight className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-base text-gray-700">Custom integrations</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <ChevronRight className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-base text-gray-700">24/7 dedicated support</p>
                  </li>
                </ul>
              </div>
              <div className="px-6 py-4 bg-gray-50">
                <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                  Contact sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Testimonials</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by educators worldwide
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <p className="text-gray-600 italic">"EduHub LMS transformed how we deliver our online courses. The intuitive interface and robust features allowed us to focus on content creation rather than technical issues."</p>
              <div className="mt-4 flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-indigo-200"></div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Sarah Johnson</p>
                  <p className="text-sm text-gray-500">Online Course Creator</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <p className="text-gray-600 italic">"The analytics and reporting features have been game-changing for our institution. We can now track student progress in real-time and provide targeted support when needed."</p>
              <div className="mt-4 flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-indigo-200"></div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Michael Chen</p>
                  <p className="text-sm text-gray-500">University Professor</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <p className="text-gray-600 italic">"As a corporate trainer, I've tried many LMS platforms, but EduHub stands out with its user-friendly interface and comprehensive features. It's made training our global team so much easier."</p>
              <div className="mt-4 flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-indigo-200"></div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Lisa Rodriguez</p>
                  <p className="text-sm text-gray-500">Corporate Training Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div id="contact" className="bg-indigo-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block text-indigo-200">Request a demo today.</span>
          </h2>
          <div className="mt-8 lg:mt-0 lg:flex-shrink-0">
            <form onSubmit={handleSubmit} className="sm:flex">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white focus:border-white sm:max-w-xs rounded-md"
              />
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Request demo
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center">
                <BookOpen className="h-8 w-8 text-white" />
                <span className="ml-2 text-xl font-bold text-white">EduHub LMS</span>
              </div>
              <p className="mt-2 text-sm text-gray-300">
                Empowering educators and learners with innovative tools for online education.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Platform</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white">Testimonials</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Resources</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white">Tutorials</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white">Webinars</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white">Privacy</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
              &copy; 2025 EduHub LMS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}