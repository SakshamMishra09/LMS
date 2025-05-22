'use client';
import React, { useEffect, useState } from 'react';

const ManageContact = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await fetch('http://localhost:5000/contact/getall');
        if (!res.ok) throw new Error('Failed to fetch contacts');
        const data = await res.json();
        setContacts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchContacts();
  }, []);

  // Add delete handler
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this message?')) return;
    try {
      const res = await fetch(`http://localhost:5000/contact/delete/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setContacts(contacts.filter((c) => c._id !== id));
      } else {
        alert('Failed to delete message.');
      }
    } catch (err) {
      alert('Error deleting message.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-6 text-indigo-700">Contact Messages</h1>
      {loading && <div>Loading...</div>}
      {error && <div className="text-red-600">{error}</div>}
      {!loading && !error && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow">
            <thead>
              <tr>
                <th className="py-3 px-4 border-b text-left">Name</th>
                <th className="py-3 px-4 border-b text-left">Email</th>
                <th className="py-3 px-4 border-b text-left">Message</th>
                <th className="py-3 px-4 border-b text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts.length === 0 ? (
                <tr>
                  <td colSpan={4} className="py-4 px-4 text-center text-gray-500">No contact messages found.</td>
                </tr>
              ) : (
                contacts.map((contact) => (
                  <tr key={contact._id} className="hover:bg-gray-100">
                    <td className="py-3 px-4 border-b">{contact.name}</td>
                    <td className="py-3 px-4 border-b">{contact.email}</td>
                    <td className="py-3 px-4 border-b">{contact.message}</td>
                    <td className="py-3 px-4 border-b">
                      <button
                        onClick={() => handleDelete(contact._id)}
                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageContact;