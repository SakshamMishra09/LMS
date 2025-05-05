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
      
    </div>
  );
}