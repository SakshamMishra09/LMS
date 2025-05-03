'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const ManageCourse = () => {

    const [courseList, setCourseList] = useState([]);

    const fetchCourses = async () => {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/course/getall`);
        const data = res.data;
        console.table(data);
        setCourseList(data);
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    const deleteCourse = async (id) => {
        const res = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/course/delete/${id}`);
        toast.success('User deleted successfully!');
        fetchCourses();
    }

    return (
        <div>
            <div className='container mx-auto py-10'>
                <h1 className='text-center font-bold text-4xl'>Manage Courses</h1>

                <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {
                        courseList.map((course) => (
                            <div key={course._id} className='border rounded-lg shadow-lg p-5'>
                                <h2 className='font-bold text-xl mb-2'>{course.title}</h2>
                                <p className='text-gray-700'>Price: ${course.price}</p>
                                <p className='text-gray-500'>Created At: {new Date(course.createdAt).toLocaleDateString()}</p>
                                <button 
                                    onClick={() => { deleteCourse(course._id) }} 
                                    className='mt-3 bg-red-500 text-white rounded p-2 w-full'>
                                    Delete
                                </button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ManageCourse;