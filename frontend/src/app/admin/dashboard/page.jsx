'use client';
import { useState } from 'react';
import { Calendar, ChevronDown, ChevronRight, Clock, BookOpen, Users, Settings, LogOut, Search, Bell, UserCircle,Home,BarChart,CheckCircle,PlusCircle,Edit,Trash,AlertTriangle,Layers,Video,File,Grid,Menu,X,ChevronLeft } from 'lucide-react';

const LMSAdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sample data
  const courseData = [
    { id: 1, title: "Introduction to React", students: 245, completion: 78, status: "Active" },
    { id: 2, title: "Advanced JavaScript", students: 189, completion: 64, status: "Active" },
    { id: 3, title: "Tailwind CSS Masterclass", students: 137, completion: 92, status: "Active" },
    { id: 4, title: "Node.js Fundamentals", students: 210, completion: 45, status: "Draft" }
  ];

  const recentActivities = [
    { user: "John Doe", action: "enrolled in", course: "React Fundamentals", time: "2 hours ago" },
    { user: "Jane Smith", action: "completed", course: "JavaScript Basics", time: "5 hours ago" },
    { user: "Mike Johnson", action: "submitted assignment for", course: "CSS Layout", time: "12 hours ago" },
    { user: "Sarah Williams", action: "requested feedback on", course: "Web Design", time: "1 day ago" }
  ];

  const upcomingDeadlines = [
    { title: "Update React Course Content", due: "Today", priority: "High" },
    { title: "Review Student Submissions", due: "Tomorrow", priority: "Medium" },
    { title: "Prepare New JavaScript Module", due: "May 10", priority: "Medium" },
    { title: "Scheduled Maintenance", due: "May 15", priority: "Low" }
  ];

  const stats = [
    { title: "Total Students", value: "1,245", icon: <Users size={20} />, change: "+12%" },
    { title: "Active Courses", value: "24", icon: <BookOpen size={20} />, change: "+3%" },
    { title: "Completion Rate", value: "68%", icon: <CheckCircle size={20} />, change: "+5%" },
    { title: "Total Revenue", value: "$18,245", icon: <BarChart size={20} />, change: "+8%" }
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="flex h-screen bg-gray-50 text-gray-800">
      {/* Sidebar - Desktop */}
      <div className={`bg-indigo-800 text-white ${sidebarOpen ? 'w-64' : 'w-20'} hidden md:block transition-all duration-300 ease-in-out`}>
        <div className="p-4 flex items-center justify-between">
          {sidebarOpen && <h1 className="text-xl font-bold">LMS Admin</h1>}
          <button onClick={toggleSidebar} className="text-white p-1 rounded-full hover:bg-indigo-700">
            {sidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
        </div>
        <nav className="mt-6">
          <div className={`px-4 py-3 cursor-pointer flex items-center ${activeTab === 'dashboard' ? 'bg-indigo-700' : 'hover:bg-indigo-700'}`} onClick={() => setActiveTab('dashboard')}>
            <Home size={20} />
            {sidebarOpen && <span className="ml-3">Dashboard</span>}
          </div>
          <div className={`px-4 py-3 cursor-pointer flex items-center ${activeTab === 'courses' ? 'bg-indigo-700' : 'hover:bg-indigo-700'}`} onClick={() => setActiveTab('courses')}>
            <BookOpen size={20} />
            {sidebarOpen && <span className="ml-3">Courses</span>}
          </div>
          <div className={`px-4 py-3 cursor-pointer flex items-center ${activeTab === 'students' ? 'bg-indigo-700' : 'hover:bg-indigo-700'}`} onClick={() => setActiveTab('students')}>
            <Users size={20} />
            {sidebarOpen && <span className="ml-3">Students</span>}
          </div>
          <div className={`px-4 py-3 cursor-pointer flex items-center ${activeTab === 'calendar' ? 'bg-indigo-700' : 'hover:bg-indigo-700'}`} onClick={() => setActiveTab('calendar')}>
            <Calendar size={20} />
            {sidebarOpen && <span className="ml-3">Calendar</span>}
          </div>
          <div className={`px-4 py-3 cursor-pointer flex items-center ${activeTab === 'statistics' ? 'bg-indigo-700' : 'hover:bg-indigo-700'}`} onClick={() => setActiveTab('statistics')}>
            <BarChart size={20} />
            {sidebarOpen && <span className="ml-3">Statistics</span>}
          </div>
          <div className={`px-4 py-3 cursor-pointer flex items-center ${activeTab === 'settings' ? 'bg-indigo-700' : 'hover:bg-indigo-700'}`} onClick={() => setActiveTab('settings')}>
            <Settings size={20} />
            {sidebarOpen && <span className="ml-3">Settings</span>}
          </div>
          <div className="px-4 py-3 cursor-pointer flex items-center hover:bg-indigo-700 mt-auto">
            <LogOut size={20} />
            {sidebarOpen && <span className="ml-3">Logout</span>}
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={toggleMobileMenu}></div>
          <div className="fixed inset-y-0 left-0 flex flex-col w-64 bg-indigo-800 text-white">
            <div className="p-4 flex items-center justify-between">
              <h1 className="text-xl font-bold">LMS Admin</h1>
              <button onClick={toggleMobileMenu} className="text-white p-1 rounded-full hover:bg-indigo-700">
                <X size={20} />
              </button>
            </div>
            <nav className="mt-6">
              <div className={`px-4 py-3 cursor-pointer flex items-center ${activeTab === 'dashboard' ? 'bg-indigo-700' : 'hover:bg-indigo-700'}`} onClick={() => {
                setActiveTab('dashboard');
                toggleMobileMenu();
              }}>
                <Home size={20} />
                <span className="ml-3">Dashboard</span>
              </div>
              <div className={`px-4 py-3 cursor-pointer flex items-center ${activeTab === 'courses' ? 'bg-indigo-700' : 'hover:bg-indigo-700'}`} onClick={() => {
                setActiveTab('courses');
                toggleMobileMenu();
              }}>
                <BookOpen size={20} />
                <span className="ml-3">Courses</span>
              </div>
              <div className={`px-4 py-3 cursor-pointer flex items-center ${activeTab === 'students' ? 'bg-indigo-700' : 'hover:bg-indigo-700'}`} onClick={() => {
                setActiveTab('students');
                toggleMobileMenu();
              }}>
                <Users size={20} />
                <span className="ml-3">Students</span>
              </div>
              <div className={`px-4 py-3 cursor-pointer flex items-center ${activeTab === 'calendar' ? 'bg-indigo-700' : 'hover:bg-indigo-700'}`} onClick={() => {
                setActiveTab('calendar');
                toggleMobileMenu();
              }}>
                <Calendar size={20} />
                <span className="ml-3">Calendar</span>
              </div>
              <div className={`px-4 py-3 cursor-pointer flex items-center ${activeTab === 'statistics' ? 'bg-indigo-700' : 'hover:bg-indigo-700'}`} onClick={() => {
                setActiveTab('statistics');
                toggleMobileMenu();
              }}>
                <BarChart size={20} />
                <span className="ml-3">Statistics</span>
              </div>
              <div className={`px-4 py-3 cursor-pointer flex items-center ${activeTab === 'settings' ? 'bg-indigo-700' : 'hover:bg-indigo-700'}`} onClick={() => {
                setActiveTab('settings');
                toggleMobileMenu();
              }}>
                <Settings size={20} />
                <span className="ml-3">Settings</span>
              </div>
              <div className="px-4 py-3 cursor-pointer flex items-center hover:bg-indigo-700 mt-auto">
                <LogOut size={20} />
                <span className="ml-3">Logout</span>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="px-4 py-4 flex items-center justify-between">
            <div className="flex items-center">
              <button onClick={toggleMobileMenu} className="md:hidden mr-2 text-gray-600">
                <Menu size={24} />
              </button>
              <h2 className="text-xl font-bold text-gray-800">
                {activeTab === 'dashboard' && 'Dashboard'}
                {activeTab === 'courses' && 'Courses Management'}
                {activeTab === 'students' && 'Students Directory'}
                {activeTab === 'calendar' && 'Calendar & Schedule'}
                {activeTab === 'statistics' && 'Analytics & Reports'}
                {activeTab === 'settings' && 'System Settings'}
              </h2>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-40 sm:w-64 pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
              </div>
              <button className="relative p-2 text-gray-600 hover:text-indigo-500">
                <Bell size={22} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center cursor-pointer">
                <UserCircle size={28} className="text-gray-600" />
                <span className="ml-2 hidden sm:block text-sm font-medium">Admin User</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4 bg-gray-50">
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-500">{stat.title}</p>
                        <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                        <span className="text-xs text-green-500">{stat.change} this month</span>
                      </div>
                      <div className="p-3 bg-indigo-100 rounded-full text-indigo-500">
                        {stat.icon}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <button className="flex flex-col items-center justify-center p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
                    <PlusCircle size={24} className="text-indigo-500 mb-2" />
                    <span className="text-sm font-medium">New Course</span>
                  </button>
                  <button className="flex flex-col items-center justify-center p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
                    <Users size={24} className="text-indigo-500 mb-2" />
                    <span className="text-sm font-medium">Add Students</span>
                  </button>
                  <button className="flex flex-col items-center justify-center p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
                    <Calendar size={24} className="text-indigo-500 mb-2" />
                    <span className="text-sm font-medium">Schedule Class</span>
                  </button>
                  <button className="flex flex-col items-center justify-center p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
                    <BarChart size={24} className="text-indigo-500 mb-2" />
                    <span className="text-sm font-medium">View Reports</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Activity */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Recent Activity</h2>
                    <button className="text-indigo-500 text-sm font-medium hover:underline">View All</button>
                  </div>
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-start">
                        <div className="p-2 bg-gray-100 rounded-full mr-3">
                          <UserCircle size={18} className="text-gray-500" />
                        </div>
                        <div>
                          <p className="text-sm">
                            <span className="font-medium">{activity.user}</span> {activity.action} <span className="font-medium">{activity.course}</span>
                          </p>
                          <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Upcoming Deadlines */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Upcoming Deadlines</h2>
                    <button className="text-indigo-500 text-sm font-medium hover:underline">View Calendar</button>
                  </div>
                  <div className="space-y-4">
                    {upcomingDeadlines.map((deadline, index) => (
                      <div key={index} className="flex items-center">
                        <div className={`w-2 h-10 rounded-full mr-4 ${
                          deadline.priority === "High" ? "bg-red-500" : 
                          deadline.priority === "Medium" ? "bg-yellow-500" : "bg-green-500"
                        }`}></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{deadline.title}</p>
                          <p className="text-xs text-gray-500 mt-1">Due: {deadline.due}</p>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          deadline.priority === "High" ? "bg-red-100 text-red-600" : 
                          deadline.priority === "Medium" ? "bg-yellow-100 text-yellow-600" : "bg-green-100 text-green-600"
                        }`}>
                          {deadline.priority}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Courses Table */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Active Courses</h2>
                  <button className="bg-indigo-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add New Course</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Students</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Completion</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {courseData.map((course) => (
                        <tr key={course.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{course.title}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">{course.students}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div className="bg-indigo-500 h-2.5 rounded-full" style={{ width: `${course.completion}%` }}></div>
                            </div>
                            <span className="text-xs text-gray-500 mt-1">{course.completion}%</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              course.status === "Active" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"
                            }`}>
                              {course.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex space-x-2">
                              <button className="text-indigo-500 hover:text-indigo-700">
                                <Edit size={16} />
                              </button>
                              <button className="text-red-500 hover:text-red-700">
                                <Trash size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold">Course Management</h2>
                  <div className="flex space-x-3">
                    <button className="bg-indigo-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex items-center">
                      <PlusCircle size={16} className="mr-2" />
                      Add New Course
                    </button>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-6">
                  <div className="relative flex-1">
                    <input 
                      type="text" 
                      placeholder="Search courses..." 
                      className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                  </div>
                  <select className="border border-gray-300 rounded-md py-2 px-4 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option value="">All Categories</option>
                    <option value="development">Web Development</option>
                    <option value="design">Design</option>
                    <option value="business">Business</option>
                    <option value="marketing">Marketing</option>
                  </select>
                  <select className="border border-gray-300 rounded-md py-2 px-4 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option value="">All Status</option>
                    <option value="active">Active</option>
                    <option value="draft">Draft</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Instructor</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Students</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Completion</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {[
                        { id: 1, title: "Introduction to React", category: "Development", instructor: "John Smith", students: 245, completion: 78, status: "Active" },
                        { id: 2, title: "Advanced JavaScript", category: "Development", instructor: "Jane Doe", students: 189, completion: 64, status: "Active" },
                        { id: 3, title: "UI/UX Design Principles", category: "Design", instructor: "Mike Johnson", students: 156, completion: 92, status: "Active" },
                        { id: 4, title: "Digital Marketing Basics", category: "Marketing", instructor: "Sarah Williams", students: 210, completion: 45, status: "Draft" },
                        { id: 5, title: "Business Analytics", category: "Business", instructor: "Robert Brown", students: 178, completion: 58, status: "Active" },
                        { id: 6, title: "Python for Data Science", category: "Development", instructor: "Emma Wilson", students: 267, completion: 32, status: "Draft" },
                        { id: 7, title: "Graphic Design Masterclass", category: "Design", instructor: "David Miller", students: 145, completion: 87, status: "Active" },
                        { id: 8, title: "Social Media Strategy", category: "Marketing", instructor: "Lisa Davis", students: 198, completion: 75, status: "Archived" },
                      ].map((course) => (
                        <tr key={course.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{course.title}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">{course.category}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">{course.instructor}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">{course.students}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div className="bg-indigo-500 h-2.5 rounded-full" style={{ width: `${course.completion}%` }}></div>
                            </div>
                            <span className="text-xs text-gray-500 mt-1">{course.completion}%</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              course.status === "Active" ? "bg-green-100 text-green-600" : 
                              course.status === "Draft" ? "bg-yellow-100 text-yellow-600" : 
                              "bg-gray-100 text-gray-600"
                            }`}>
                              {course.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex space-x-2">
                              <button className="text-indigo-500 hover:text-indigo-700">
                                <Edit size={16} />
                              </button>
                              <button className="text-red-500 hover:text-red-700">
                                <Trash size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="flex justify-between items-center mt-6">
                  <div className="text-sm text-gray-500">
                    Showing 1 to 8 of 24 entries
                  </div>
                  <div className="flex space-x-1">
                    <button className="px-3 py-1 border rounded-md text-sm">Previous</button>
                    <button className="px-3 py-1 bg-indigo-500 text-white rounded-md text-sm">1</button>
                    <button className="px-3 py-1 border rounded-md text-sm">2</button>
                    <button className="px-3 py-1 border rounded-md text-sm">3</button>
                    <button className="px-3 py-1 border rounded-md text-sm">Next</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'students' && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold mb-4">Students Management</h2>
                <p className="text-gray-500">Student management content will go here</p>
              </div>
            </div>
          )}

          {activeTab === 'calendar' && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold mb-4">Calendar & Schedule</h2>
                <p className="text-gray-500">Calendar content will go here</p>
              </div>
            </div>
          )}

          {activeTab === 'statistics' && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold mb-4">Analytics & Reports</h2>
                <p className="text-gray-500">Statistics content will go here</p>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold mb-4">System Settings</h2>
                <p className="text-gray-500">Settings content will go here</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default LMSAdminDashboard;
         