'use client';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import toast from 'react-hot-toast';

const AddCourse = () => {
    const [chapters, setChapters] = useState([]);

    const levels = ['Beginner', 'Intermediate', 'Advanced'];

    const categories = ['Programming', 'Business', 'Design', 'Marketing', 'Languages', 'Personality Development'];

    const addChapter = () => {
        setChapters([...chapters, { title: '', description: '', videoUrl: '' }]);
    };

    const removeChapter = (index) => {
        setChapters(chapters.filter((_, i) => i !== index));
    };

    const updateChapter = (index, field, value) => {
        const updatedChapters = [...chapters];
        updatedChapters[index][field] = value;
        setChapters(updatedChapters);
    };

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
            image: Yup.string().required('Image is required'),
            category: Yup.string().required('Category is required'),
            level: Yup.string()
                .oneOf(['Beginner', 'Intermediate', 'Advanced'], 'Invalid level')
                .required('Level is required'),
            price: Yup.string().required('Price is required'),
            duration: Yup.string().required('Duration is required'),
            language: Yup.string().required('Language is required')
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                const courseData = { ...values, chapters };
                const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/course/add`, courseData);
                console.log(res.data);
                toast.success('Course added successfully!');
                resetForm();
                setChapters([]);
            } catch (error) {
                console.error(error);
                toast.error(error.response?.data?.message || 'Failed to add course');
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

    const uploadVideoFile = (e) => {
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
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-10 px-2">
            <div className="max-w-3xl mx-auto bg-white/10 rounded-2xl shadow-2xl p-8">
                <h1 className="text-4xl font-extrabold text-center text-indigo-300 mb-8 tracking-tight">Add New Course</h1>
                <form onSubmit={formik.handleSubmit} className="space-y-8">
                    {/* Title field */}
                    <div>
                        <label htmlFor="title" className="block font-bold mb-2 text-indigo-200">Title *</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            className="w-full border-none rounded-lg p-3 bg-gray-800 text-white focus:ring-2 focus:ring-indigo-500"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.title}
                        />
                        {formik.touched.title && formik.errors.title && (
                            <div className="text-red-400 text-sm mt-1">{formik.errors.title}</div>
                        )}
                    </div>
                    {/* Description field */}
                    <div>
                        <label htmlFor="description" className="block font-bold mb-2 text-indigo-200">Description *</label>
                        <textarea
                            id="description"
                            name="description"
                            rows="4"
                            className="w-full border-none rounded-lg p-3 bg-gray-800 text-white focus:ring-2 focus:ring-indigo-500"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.description}
                        />
                        {formik.touched.description && formik.errors.description && (
                            <div className="text-red-400 text-sm mt-1">{formik.errors.description}</div>
                        )}
                    </div>
                    {/* Image field */}
                    <div>
                        <label htmlFor="image" className="block font-bold mb-2 text-indigo-200">Image *</label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            className="w-full border-none rounded-lg p-3 bg-gray-800 text-white"
                            onChange={uploadFile}
                        />
                        {formik.values.image && (
                            <img src={formik.values.image} alt="Course" className="h-24 rounded mt-2 border-2 border-indigo-400 mx-auto" />
                        )}
                        {formik.touched.image && formik.errors.image && (
                            <div className="text-red-400 text-sm mt-1">{formik.errors.image}</div>
                        )}
                    </div>
                    {/* Category & Level */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="category" className="block font-bold mb-2 text-indigo-200">Category *</label>
                            <select
                                id="category"
                                name="category"
                                className="w-full border-none rounded-lg p-3 bg-gray-800 text-white"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.category}
                            >
                                <option value="">Select a category</option>
                                {categories.map(category => (
                                    <option key={category} value={category}>{category}</option>
                                ))}
                            </select>
                            {formik.touched.category && formik.errors.category && (
                                <div className="text-red-400 text-sm mt-1">{formik.errors.category}</div>
                            )}
                        </div>
                        <div>
                            <label htmlFor="level" className="block font-bold mb-2 text-indigo-200">Level *</label>
                            <select
                                id="level"
                                name="level"
                                className="w-full border-none rounded-lg p-3 bg-gray-800 text-white"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.level}
                            >
                                <option value="">Select a level</option>
                                {levels.map(level => (
                                    <option key={level} value={level}>{level}</option>
                                ))}
                            </select>
                            {formik.touched.level && formik.errors.level && (
                                <div className="text-red-400 text-sm mt-1">{formik.errors.level}</div>
                            )}
                        </div>
                    </div>
                    {/* Price & Duration */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="price" className="block font-bold mb-2 text-indigo-200">Price *</label>
                            <input
                                type="text"
                                id="price"
                                name="price"
                                placeholder="e.g., Free, $29.99"
                                className="w-full border-none rounded-lg p-3 bg-gray-800 text-white"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.price}
                            />
                            {formik.touched.price && formik.errors.price && (
                                <div className="text-red-400 text-sm mt-1">{formik.errors.price}</div>
                            )}
                        </div>
                        <div>
                            <label htmlFor="duration" className="block font-bold mb-2 text-indigo-200">Duration *</label>
                            <input
                                type="text"
                                id="duration"
                                name="duration"
                                placeholder="e.g., 2 hours, 8 weeks"
                                className="w-full border-none rounded-lg p-3 bg-gray-800 text-white"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.duration}
                            />
                            {formik.touched.duration && formik.errors.duration && (
                                <div className="text-red-400 text-sm mt-1">{formik.errors.duration}</div>
                            )}
                        </div>
                    </div>
                    {/* Language field */}
                    <div>
                        <label htmlFor="language" className="block font-bold mb-2 text-indigo-200">Language *</label>
                        <input
                            type="text"
                            id="language"
                            name="language"
                            placeholder="e.g., English, Spanish"
                            className="w-full border-none rounded-lg p-3 bg-gray-800 text-white"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.language}
                        />
                        {formik.touched.language && formik.errors.language && (
                            <div className="text-red-400 text-sm mt-1">{formik.errors.language}</div>
                        )}
                    </div>
                    {/* Chapters Section */}
                    <div>
                        <h2 className="font-bold text-lg mb-4 text-indigo-200">Chapters</h2>
                        {chapters.map((chapter, index) => (
                            <div key={index} className="mb-6 border border-indigo-400 p-4 rounded-xl bg-gray-800">
                                <div className="mb-2">
                                    <label className="block font-bold mb-1 text-indigo-100">Chapter Title</label>
                                    <input
                                        type="text"
                                        className="w-full border-none rounded p-2 bg-gray-700 text-white"
                                        value={chapter.title}
                                        onChange={(e) => updateChapter(index, 'title', e.target.value)}
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="block font-bold mb-1 text-indigo-100">Chapter Description</label>
                                    <textarea
                                        className="w-full border-none rounded p-2 bg-gray-700 text-white"
                                        value={chapter.description}
                                        onChange={(e) => updateChapter(index, 'description', e.target.value)}
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="block font-bold mb-1 text-indigo-100">Video URL</label>
                                    <input
                                        type="text"
                                        className="w-full border-none rounded p-2 bg-gray-700 text-white mb-2"
                                        value={chapter.videoUrl}
                                        onChange={(e) => updateChapter(index, 'videoUrl', e.target.value)}
                                    />
                                    <input
                                        type="file"
                                        accept="video/*"
                                        className="w-full border-none rounded p-2 bg-gray-700 text-white mb-2"
                                        onChange={async (e) => {
                                            const file = e.target.files[0];
                                            if (!file) return toast.error('Please select a video file');
                                            const fd = new FormData();
                                            fd.append('file', file);
                                            fd.append('upload_preset', 'hoodhogan');
                                            fd.append('cloud_name', 'ddsnnqpbv');
                                            try {
                                                const result = await axios.post('https://api.cloudinary.com/v1_1/ddsnnqpbv/video/upload', fd);
                                                updateChapter(index, 'videoUrl', result.data.secure_url);
                                                toast.success('Video uploaded successfully!');
                                            } catch (err) {
                                                toast.error('Video upload failed!');
                                            }
                                        }}
                                    />
                                    {chapter.videoUrl && (
                                        <a href={chapter.videoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline text-sm">View Uploaded Video</a>
                                    )}
                                </div>
                                <button
                                    type="button"
                                    onClick={() => removeChapter(index)}
                                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 mt-2"
                                >
                                    Remove Chapter
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={addChapter}
                            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 mt-2"
                        >
                            Add Chapter
                        </button>
                    </div>
                    <button
                        type="submit"
                        disabled={formik.isSubmitting}
                        className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 text-lg font-bold disabled:bg-green-300 disabled:cursor-not-allowed mt-4 shadow-lg"
                    >
                        {formik.isSubmitting ? 'Adding Course...' : 'Add Course'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddCourse;