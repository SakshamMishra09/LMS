import { FaVideo, FaChartLine, FaClipboardList, FaDatabase, FaPuzzlePiece, FaUserCog } from 'react-icons/fa';

export default function Features() {
  const features = [
    {
      icon: <FaVideo className="text-blue-500 text-5xl" />, 
      title: "Interactive Learning Environment",
      description: "Engaging multimedia content, interactive quizzes, and dynamic course modules."
    },
    {
      icon: <FaUserCog className="text-green-500 text-5xl" />, 
      title: "Personalized Dashboards",
      description: "Customizable dashboards for students and educators to track progress and manage assignments."
    },
    {
      icon: <FaClipboardList className="text-purple-500 text-5xl" />, 
      title: "Dynamic Content Management",
      description: "Easy content updates and organization for educators to keep learning materials relevant."
    },
    {
      icon: <FaChartLine className="text-red-500 text-5xl" />, 
      title: "Real-time Analytics & Reports",
      description: "Performance tracking and analytics for both students and educators."
    },
    {
      icon: <FaDatabase className="text-yellow-500 text-5xl" />, 
      title: "API Integration",
      description: "Seamless integration with external educational resources and services."
    },
    {
      icon: <FaPuzzlePiece className="text-indigo-500 text-5xl" />, 
      title: "AI-Driven Enhancements",
      description: "Future-ready AI-based personalized learning paths and recommendations."
    }
  ];

  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">LMS Features</h2>
        <p className="text-gray-600 mb-12">Discover the core functionalities that make our Learning Management System interactive and engaging.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-2xl flex flex-col items-center">
              {feature.icon}
              <h3 className="mt-4 text-xl font-semibold text-gray-700">{feature.title}</h3>
              <p className="mt-2 text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
