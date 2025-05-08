'use client'
import { useState } from 'react';
import { 
  Home, 
  Book, 
  FileText, 
  Calendar, 
  MessageSquare, 
  User, 
  Users, 
  Settings, 
  Bell, 
  Search, 
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'New course available: "Advanced React"', time: '2 hours ago', read: false },
    { id: 2, message: 'Assignment due tomorrow', time: '5 hours ago', read: false },
    { id: 3, message: 'Your progress report is ready', time: '1 day ago', read: true }
  ]);
  const [courses, setCourses] = useState([
    { id: 1, title: 'Introduction to React', progress: 75, instructor: 'Jane Smith', dueDate: '2025-05-15' },
    { id: 2, title: 'Advanced JavaScript', progress: 45, instructor: 'John Doe', dueDate: '2025-05-22' },
    { id: 3, title: 'Tailwind CSS Mastery', progress: 10, instructor: 'Alex Johnson', dueDate: '2025-06-01' },
    { id: 4, title: 'Web Security Fundamentals', progress: 0, instructor: 'Sarah Williams', dueDate: '2025-06-10' }
  ]);
  const [upcomingEvents, setUpcomingEvents] = useState([
    { id: 1, title: 'JavaScript Workshop', date: '2025-05-08', time: '10:00 AM' },
    { id: 2, title: 'Group Project Meeting', date: '2025-05-10', time: '2:00 PM' },
    { id: 3, title: 'React Final Exam', date: '2025-05-20', time: '9:00 AM' }
  ]);
  const [showNotifications, setShowNotifications] = useState(false);

  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: <Home size={20} /> },
    { id: 'courses', name: 'Courses', icon: <Book size={20} /> },
    { id: 'assignments', name: 'Assignments', icon: <FileText size={20} /> },
    { id: 'schedule', name: 'Schedule', icon: <Calendar size={20} /> },
    { id: 'messages', name: 'Messages', icon: <MessageSquare size={20} /> },
    { id: 'profile', name: 'Profile', icon: <User size={20} /> },
    { id: 'students', name: 'Students', icon: <Users size={20} /> },
    { id: 'settings', name: 'Settings', icon: <Settings size={20} /> },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const markAsRead = (id) => {
    setNotifications(
      notifications.map(notification => 
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const unreadCount = notifications.filter(notification => !notification.read).length;

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-30">
        <button 
          onClick={toggleSidebar}
          className="p-2 rounded-md bg-white shadow-md"
        >
          {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-20 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out bg-white shadow-lg w-64 overflow-y-auto`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold text-blue-600">Learn next LMS</h1>
            <button className="lg:hidden" onClick={toggleSidebar}>
              <X size={20} />
            </button>
          </div>
          
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
                MS
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium">Saksham mishra</p>
                <p className="text-xs text-gray-500">Student</p>
              </div>
            </div>
          </div>
          
          <nav>
            <ul>
              {menuItems.map(item => (
                <li key={item.id} className="mb-1">
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center w-full px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === item.id
                        ? 'bg-blue-100 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    <span>{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'lg:ml-64' : 'ml-0'}`}>
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="relative flex items-center w-full max-w-md">
              <Search size={18} className="absolute left-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses, assignments..."
                className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center">
              <div className="relative mr-4">
                <button 
                  onClick={toggleNotifications}
                  className="p-2 rounded-full hover:bg-gray-100 relative"
                >
                  <Bell size={20} />
                  {unreadCount > 0 && (
                    <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                      {unreadCount}
                    </span>
                  )}
                </button>
                
                {/* Notification dropdown */}
                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg overflow-hidden z-30">
                    <div className="px-4 py-3 border-b border-gray-200">
                      <h3 className="text-sm font-semibold">Notifications</h3>
                    </div>
                    <div className="max-h-72 overflow-y-auto">
                      {notifications.length > 0 ? (
                        notifications.map(notification => (
                          <div 
                            key={notification.id}
                            className={`px-4 py-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${!notification.read ? 'bg-blue-50' : ''}`}
                            onClick={() => markAsRead(notification.id)}
                          >
                            <p className="text-sm text-gray-800">{notification.message}</p>
                            <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                          </div>
                        ))
                      ) : (
                        <div className="px-4 py-6 text-center text-gray-500">
                          No notifications
                        </div>
                      )}
                    </div>
                    <div className="px-4 py-2 border-t border-gray-200">
                      <button className="text-xs text-blue-600 hover:text-blue-800">
                        Mark all as read
                      </button>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-medium">
                  MS
                </div>
                <button className="ml-2 flex items-center text-gray-700 hover:text-gray-900">
                  <span className="mr-1 hidden sm:inline-block">Saksham</span>
                  <ChevronDown size={16} />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {activeTab === 'dashboard' && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Dashboard</h2>
              
              {/* Stats Overview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center">
                    <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                      <Book size={24} />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-gray-500 text-sm">Enrolled Courses</h3>
                      <p className="text-2xl font-semibold">{courses.length}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center">
                    <div className="p-3 rounded-full bg-green-100 text-green-600">
                      <FileText size={24} />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-gray-500 text-sm">Assignments Due</h3>
                      <p className="text-2xl font-semibold">3</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center">
                    <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                      <Calendar size={24} />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-gray-500 text-sm">Upcoming Events</h3>
                      <p className="text-2xl font-semibold">{upcomingEvents.length}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Courses */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">My Courses</h3>
                  <button className="text-sm text-blue-600 hover:text-blue-800">View All</button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {courses.map(course => (
                    <div key={course.id} className="bg-white rounded-lg shadow overflow-hidden">
                      <div className="h-32 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                      <div className="p-4">
                        <h4 className="font-semibold mb-2">{course.title}</h4>
                        <p className="text-gray-500 text-sm mb-3">Instructor: {course.instructor}</p>
                        <div className="mb-2">
                          <div className="flex justify-between text-xs mb-1">
                            <span>Progress</span>
                            <span>{course.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        <p className="text-xs text-gray-500">Due: {course.dueDate}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Two column layout for calendar and activities */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Calendar Events */}
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-semibold mb-4">Upcoming Events</h3>
                  <div className="space-y-4">
                    {upcomingEvents.map(event => (
                      <div key={event.id} className="flex items-start">
                        <div className="flex-shrink-0 w-12 text-center">
                          <p className="text-sm font-medium text-blue-600">
                            {new Date(event.date).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </p>
                        </div>
                        <div className="ml-4 flex-1">
                          <div className="bg-gray-50 rounded-lg p-3">
                            <h4 className="font-medium">{event.title}</h4>
                            <p className="text-sm text-gray-500 mt-1">{event.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="mt-4 text-sm text-blue-600 hover:text-blue-800">
                    View Full Calendar
                  </button>
                </div>
                
                {/* Recent Activities */}
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
                  <div className="space-y-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                          <FileText size={16} className="text-green-600" />
                        </div>
                      </div>
                      <div className="ml-3 flex-1">
                        <p className="text-sm">
                          <span className="font-medium">Assignment Submitted:</span> JavaScript Fundamentals
                        </p>
                        <p className="text-xs text-gray-500 mt-1">Yesterday at 11:42 PM</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <Book size={16} className="text-blue-600" />
                        </div>
                      </div>
                      <div className="ml-3 flex-1">
                        <p className="text-sm">
                          <span className="font-medium">Course Progress:</span> Completed Chapter 5 in React Basics
                        </p>
                        <p className="text-xs text-gray-500 mt-1">2 days ago</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                          <MessageSquare size={16} className="text-purple-600" />
                        </div>
                      </div>
                      <div className="ml-3 flex-1">
                        <p className="text-sm">
                          <span className="font-medium">Discussion:</span> Replied to "React Hooks Best Practices"
                        </p>
                        <p className="text-xs text-gray-500 mt-1">3 days ago</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                          <Calendar size={16} className="text-yellow-600" />
                        </div>
                      </div>
                      <div className="ml-3 flex-1">
                        <p className="text-sm">
                          <span className="font-medium">Event:</span> Attended "Web Development Workshop"
                        </p>
                        <p className="text-xs text-gray-500 mt-1">1 week ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Placeholder for other tabs */}
          {activeTab !== 'dashboard' && (
            <div className="bg-white rounded-lg shadow p-8 text-center">
              <h2 className="text-xl font-semibold mb-4">{menuItems.find(item => item.id === activeTab)?.name}</h2>
              <p className="text-gray-500">This section is under development.</p>
            </div>
          )}
        </main>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Dashboard;