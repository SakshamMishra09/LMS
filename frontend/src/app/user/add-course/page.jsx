'use client';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import toast from 'react-hot-toast';

const AddCourse = () => {
    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            image: '',
            category: '',
            level: '',
            price: '',
            duration: '',
            language: '',
        },
        validationSchema: Yup.object({
            title: Yup.string().required('Title is required'),
            description: Yup.string().required('Description is required'),
            image: Yup.string().url('Invalid URL').required('Image URL is required'),
            category: Yup.string().required('Category is required'),
            level: Yup.string().required('Level is required'),
            price: Yup.string().required('Price is required'),
            duration: Yup.string().required('Duration is required'),
            language: Yup.string().required('Language is required')
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/course/add`, values);
                console.log(res.data);
                toast.success('Course added successfully!');
                resetForm();
            } catch (error) {
                console.error(error);
                toast.error('Failed to add course');
            }
        }
    });

    const uploadFile = (e) => {
        const file = e.target.files[0];
        if (!file) {
            return toast.error('Please select a file');
        }
        console.log(file);

        const fd = new FormData();
        fd.append('file', file);
        fd.append('upload_preset', 'hoodhogan');
        fd.append('cloud_name', 'ddsnnqpbv');

        axios.post('https://api.cloudinary.com/v1_1/ddsnnqpbv/image/upload', fd)
            .then((result) => {
                console.log(result.data.url);
                formik.setFieldValue('image', result.data.url);
                toast.success('File uploaded successfully!');
            }).catch((err) => {
                console.log(err);
                toast.error('File upload failed!');
            });
    };

    return (
        <div className="container mx-auto py-10 bg-gray-900 text-white min-h-screen">
            <h1 className="text-center font-bold text-4xl mb-5">Add New Course</h1>
            <form onSubmit={formik.handleSubmit} className="max-w-lg mx-auto bg-gray-800 p-6 rounded shadow">
                <div className="mb-4">
                    <label htmlFor="title" className="block font-bold mb-2">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className="w-full border rounded p-2 bg-gray-700 text-white"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.title}
                    />
                    {formik.touched.title && formik.errors.title ? (
                        <div className="text-red-400 text-sm">{formik.errors.title}</div>
                    ) : null}
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className="block font-bold mb-2">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        className="w-full border rounded p-2 bg-gray-700 text-white"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.description}
                    />
                    {formik.touched.description && formik.errors.description ? (
                        <div className="text-red-400 text-sm">{formik.errors.description}</div>
                    ) : null}
                </div>

                <div className="mb-4">
                    <label htmlFor="image" className="block font-bold mb-2">Image</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        className="w-full border rounded p-2 bg-gray-700 text-white"
                        onChange={uploadFile}
                    />
                    {formik.touched.image && formik.errors.image ? (
                        <div className="text-red-400 text-sm">{formik.errors.image}</div>
                    ) : null}
                </div>

                <div className="mb-4">
                    <label htmlFor="category" className="block font-bold mb-2">Category</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        className="w-full border rounded p-2 bg-gray-700 text-white"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.category}
                    />
                    {formik.touched.category && formik.errors.category ? (
                        <div className="text-red-400 text-sm">{formik.errors.category}</div>
                    ) : null}
                </div>

                <div className="mb-4">
                    <label htmlFor="level" className="block font-bold mb-2">Level</label>
                    <input
                        type="text"
                        id="level"
                        name="level"
                        className="w-full border rounded p-2 bg-gray-700 text-white"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.level}
                    />
                    {formik.touched.level && formik.errors.level ? (
                        <div className="text-red-400 text-sm">{formik.errors.level}</div>
                    ) : null}
                </div>

                <div className="mb-4">
                    <label htmlFor="price" className="block font-bold mb-2">Price</label>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        className="w-full border rounded p-2 bg-gray-700 text-white"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.price}
                    />
                    {formik.touched.price && formik.errors.price ? (
                        <div className="text-red-400 text-sm">{formik.errors.price}</div>
                    ) : null}
                </div>

                <div className="mb-4">
                    <label htmlFor="duration" className="block font-bold mb-2">Duration</label>
                    <input
                        type="text"
                        id="duration"
                        name="duration"
                        className="w-full border rounded p-2 bg-gray-700 text-white"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.duration}
                    />
                    {formik.touched.duration && formik.errors.duration ? (
                        <div className="text-red-400 text-sm">{formik.errors.duration}</div>
                    ) : null}
                </div>

                <div className="mb-4">
                    <label htmlFor="language" className="block font-bold mb-2">Language</label>
                    <input
                        type="text"
                        id="language"
                        name="language"
                        className="w-full border rounded p-2 bg-gray-700 text-white"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.language}
                    />
                    {formik.touched.language && formik.errors.language ? (
                        <div className="text-red-400 text-sm">{formik.errors.language}</div>
                    ) : null}
                </div>

                <button
                    type="submit"
                    disabled={formik.isSubmitting}
                    className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                >
                    {formik.isSubmitting ? 'Submitting...' : 'Add Course'}
                </button>
            </form>
        </div>
    );
};

export default AddCourse;