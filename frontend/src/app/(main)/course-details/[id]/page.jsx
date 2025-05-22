'use client';
import { useParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { jwtDecode } from 'jwt-decode';
import toast from 'react-hot-toast';

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');
  const [feedbackRating, setFeedbackRating] = useState(0);
  const [feedbackType, setFeedbackType] = useState('general');
  const [feedbackStatus, setFeedbackStatus] = useState(null);
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/course/getbyid/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch course details');
        }
        const data = await response.json();
        setCourse(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching course details:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCourseDetails();
  }, [id]);

  const token = localStorage.getItem('user');
  let decodedId;
  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      decodedId = decodedToken._id;
      // console.log('Decoded ID:', decodedId);
    } catch (error) {
      console.error('Error decoding token:', error);
    }
  }

  useEffect(() => {
    const checkEnrollmentStatus = async () => {
      if (!decodedId || !id) return;

      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/enroll/checkstatus/${decodedId}/${id}`);
        if (!response.ok) {
          throw new Error('Failed to check enrollment status');
        }
        const data = await response.json();
        setIsEnrolled(data.enrolled);
      } catch (err) {
        console.error('Error checking enrollment status:', err);
      }
    };

    checkEnrollmentStatus();
  }, [decodedId, id]);

  const handleEnroll = async () => {
    try {
      if (!decodedId) {
        throw new Error('User ID is not available. Please log in again.');
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/enroll/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ courseId: id, userId: decodedId }),
      });

      if (!response.ok) {
        throw new Error('Failed to enroll in the course');
      }

      setIsEnrolled(true);
      toast.success('Successfully enrolled in the course!');
    } catch (err) {
      console.error('Error enrolling in the course:', err);
      alert(err.message || 'Error enrolling in the course. Please try again later.');
    }
  };

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    setFeedbackStatus(null);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/feedback/add`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user: decodedId,
          course: id,
          rating: feedbackRating,
          type: feedbackType,
          feedback: feedbackText
        })
      });
      if (!response.ok) throw new Error('Failed to submit feedback');
      setFeedbackStatus('success');
      setFeedbackText('');
      setFeedbackRating(0);
      setFeedbackType('general');
    } catch (err) {
      setFeedbackStatus('error');
    }
  };

  // Fetch feedback for this course
  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const courseId = course?._id || id;
        if (!courseId) return;
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/feedback/course/${courseId}`);
        if (res.ok) {
          const data = await res.json();
          setFeedbackList(data);
        }
      } catch (err) {
        toast.error('Error fetching feedback');
        console.error('Error fetching feedback:', err);
      }
    };
    fetchFeedback();
  }, [course?._id, id, feedbackStatus]);

  if (loading) {
    return (
      <div className="container mx-auto py-10 text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-500 border-r-transparent" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-10">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded" role="alert">
          <p>Error: {error}</p>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="container mx-auto py-10">
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded" role="alert">
          <p>Course not found</p>
        </div>
        <div className="mt-4">
          <Link href="/browse-course">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
              Back to Courses
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="mb-8 flex items-center gap-4">
          <Link href="/browse-course">
            <button className="flex items-center text-indigo-600 hover:text-indigo-800 font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Courses
            </button>
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="relative">
            {course.image ? (
              <div className="h-72 md:h-96">
                <img 
                  src={course.image.startsWith('http') ? course.image : `http://localhost:5000/${course.image}`}
                  alt={course.title || 'Course image'}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="bg-gray-100 h-72 md:h-96 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            )}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-8">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">{course.title}</h1>
            </div>
          </div>

          <div className="p-8">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-semibold">{course.level}</span>
              <span className="bg-gray-500 text-white px-4 py-1 rounded-full text-sm font-semibold">{course.category}</span>
              <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">{course.duration}</span>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2 text-indigo-700">About This Course</h2>
              <p className="text-gray-700 text-lg leading-relaxed">{course.description || 'No description available for this course.'}</p>
            </div>

            {/* Chapters Section */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-indigo-700">Chapters</h2>
              {course.chapters && course.chapters.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {course.chapters.map((chapter, index) => (
                    <div key={index} className="bg-indigo-50 rounded-xl shadow p-5 flex flex-col justify-between h-full">
                      <div>
                        <h3 className="font-bold text-lg mb-2 text-indigo-900">{chapter.title}</h3>
                        <p className="text-gray-700 mb-4 text-sm">{chapter.description}</p>
                      </div>
                      <Link href={`/course-details/${id}/chapters/${chapter._id || index}`}>
                        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors w-full font-semibold mt-auto">View Details</button>
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No chapters available for this course.</p>
              )}
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-gray-200 pt-8 mt-8">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-600">Price:</p>
                <p className="text-4xl font-extrabold text-indigo-600">{course.price ? `₹${course.price}` : 'Free'}</p>
              </div>
              <button 
                onClick={handleEnroll}
                disabled={isEnrolled}
                className={`px-10 py-4 rounded-full text-lg font-bold transition-colors shadow-lg mt-4 md:mt-0 ${
                  isEnrolled 
                    ? 'bg-gray-400 cursor-not-allowed text-white' 
                    : 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:from-indigo-700 hover:to-violet-700'
                }`}
              >
                {isEnrolled ? 'Already Enrolled' : 'Enroll Now'}
              </button>
            </div>

            {/* Feedback Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8 mt-10">
              <h2 className="text-2xl font-bold mb-4 text-indigo-700">Share Your Feedback</h2>
              {feedbackStatus === 'success' && (
                <div className="mb-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                  Thank you for your feedback!
                </div>
              )}
              {feedbackStatus === 'error' && (
                <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  Failed to submit feedback. Please try again.
                </div>
              )}
              <form onSubmit={handleFeedbackSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Overall Rating</label>
                  <div className="flex space-x-2">
                    {[1,2,3,4,5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        className={`text-2xl ${feedbackRating >= star ? 'text-yellow-400' : 'text-gray-300'}`}
                        onClick={() => setFeedbackRating(star)}
                        aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Feedback Type</label>
                  <select
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    value={feedbackType}
                    onChange={e => setFeedbackType(e.target.value)}
                  >
                    <option value="general">General Feedback</option>
                    <option value="course">Course Content</option>
                    <option value="platform">Platform Usability</option>
                    <option value="technical">Technical Issues</option>
                    <option value="suggestion">Suggestions</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Your Feedback</label>
                  <textarea
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    rows={4}
                    placeholder="Please share your detailed feedback here..."
                    value={feedbackText}
                    onChange={e => setFeedbackText(e.target.value)}
                    required
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition duration-200"
                    disabled={feedbackRating === 0 || !feedbackText}
                  >
                    Submit Feedback
                  </button>
                </div>
              </form>
              {/* Show feedback list */}
              <div className="mt-10">
                <h3 className="text-xl font-semibold mb-4 text-indigo-700">Recent Feedback</h3>
                {feedbackList.length === 0 ? (
                  <p className="text-gray-500">No feedback yet for this course.</p>
                ) : (
                  <div className="space-y-6">
                    {feedbackList.map((fb) => (
                      <div key={fb._id} className="border-b pb-4">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium text-gray-800">{fb.type.charAt(0).toUpperCase() + fb.type.slice(1)}</span>
                          <span className="text-yellow-500 text-lg">{'★'.repeat(fb.rating)}{'☆'.repeat(5 - fb.rating)}</span>
                        </div>
                        <p className="text-gray-700 mb-1">{fb.feedback}</p>
                        <div className="text-sm text-gray-500">
                          {fb.user && fb.user.name ? `By ${fb.user.name}` : 'Anonymous'} | {new Date(fb.createdAt).toLocaleDateString()}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;