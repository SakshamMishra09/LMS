'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ManageUser = () => {

  const [userList, setUserList] = useState([]);

  const fetchUsers = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/getall`);
    const data = res.data;
    console.table(data);
    setUserList(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUser = async (id) => {
    const res = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/user/delete/${id}`)
    .then((result) => {
      toast.success('user deleted successfully');
    }).catch((err) => {
      console.log(err);
    });
    fetchUsers();

  }



  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto py-10 px-4">
        <h1 className="text-center font-bold text-4xl text-indigo-700 mb-8">Manage Users</h1>
        <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-indigo-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-indigo-700 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-indigo-700 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-indigo-700 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-indigo-700 uppercase tracking-wider">Created At</th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-indigo-700 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {userList.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center py-8 text-gray-400">No users found.</td>
                </tr>
              ) : (
                userList.map((user) => (
                  <tr key={user._id} className="hover:bg-indigo-50 transition">
                    <td className="px-6 py-4 text-xs text-gray-700 break-all">{user._id}</td>
                    <td className="px-6 py-4 text-base font-medium text-gray-900">{user.name}</td>
                    <td className="px-6 py-4 text-base text-gray-700">{user.email}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{new Date(user.createdAt).toLocaleDateString()}</td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => deleteUser(user._id)}
                        className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg shadow transition"
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
      </div>
    </div>
  )
}

export default ManageUser;