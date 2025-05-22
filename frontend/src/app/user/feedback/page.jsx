'use client';
//         setLoading(false);
import React, { useEffect, useState } from 'react';

const page = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/feedback/getall`);
        if (!res.ok) throw new Error('Failed to fetch feedback');
        const data = await res.json();
        setFeedbacks(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchFeedbacks();
  }, []);

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8 text-red-600">{error}</div>;

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-indigo-700 text-center">All Feedback</h1>
      {feedbacks.length === 0 ? (
        <div className="text-gray-500 text-center">No feedback found.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {feedbacks.map((fb, idx) => (
            <div key={fb._id} className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between relative group border border-gray-100 hover:shadow-2xl transition">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-indigo-700">{fb.type?.charAt(0).toUpperCase() + fb.type?.slice(1)}</span>
                  <span className="text-yellow-500 text-lg">{'★'.repeat(fb.rating)}{'☆'.repeat(5 - fb.rating)}</span>
                </div>
                <div className="mb-2 text-gray-700 text-base">{fb.feedback}</div>
                <div className="text-sm text-gray-500 mb-1">
                  {fb.user && fb.user.name ? `By ${fb.user.name}` : 'Anonymous'} | {new Date(fb.createdAt).toLocaleDateString()}
                </div>
                {fb.course && (
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Course:</span> {fb.course.title || fb.course.name || fb.course._id}
                  </div>
                )}
              </div>
              <button
                onClick={async () => {
                  if (!window.confirm('Delete this feedback?')) return;
                  try {
                    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/feedback/delete/${fb._id}`, { method: 'DELETE' });
                    if (res.ok) setFeedbacks(feedbacks.filter(f => f._id !== fb._id));
                  } catch {}
                }}
                className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition bg-red-500 text-white rounded-full px-3 py-1 text-xs font-semibold shadow hover:bg-red-600"
                title="Delete Feedback"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default page;