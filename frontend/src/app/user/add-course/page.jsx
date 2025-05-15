'use client';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import toast from 'react-hot-toast';

const AddCourse = () => {
    const [chapters, setChapters] = useState([]);
    const levels = ['Beginner', 'Intermediate', 'Advanced'];
    const categories = ['Programming', 'Business', 'Design', 'Marketing', 'Languages', 'Personal Development'];

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
        <div className="container mx-auto py-10 bg-gray-900 text-white min-h-screen">
            <h1 className="text-center font-bold text-4xl mb-5">Add New Course</h1>
            <form onSubmit={formik.handleSubmit} className="max-w-lg mx-auto bg-gray-800 p-6 rounded shadow">
                {/* Title field */}
                <div className="mb-4">
                    <label htmlFor="title" className="block font-bold mb-2">Title *</label>
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

                {/* Description field */}
                <div className="mb-4">
                    <label htmlFor="description" className="block font-bold mb-2">Description *</label>
                    <textarea
                        id="description"
                        name="description"
                        rows="4"
                        className="w-full border rounded p-2 bg-gray-700 text-white"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.description}
                    />
                    {formik.touched.description && formik.errors.description ? (
                        <div className="text-red-400 text-sm">{formik.errors.description}</div>
                    ) : null}
                </div>

                {/* Image field */}
                <div className="mb-4">
                    <label htmlFor="image" className="block font-bold mb-2">Image *</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        className="w-full border rounded p-2 bg-gray-700 text-white"
                        onChange={uploadFile}
                    />
                    {formik.touched.image && formik.errors.image ? (
                        <div className="text-red-400 text-sm">{formik.errors.image}</div>
                    ) : null}
                </div>

                {/* Category field */}
                <div className="mb-4">
                    <label htmlFor="category" className="block font-bold mb-2">Category *</label>
                    <select
                        id="category"
                        name="category"
                        className="w-full border rounded p-2 bg-gray-700 text-white"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.category}
                    >
                        <option value="">Select a category</option>
                        {categories.map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                    {formik.touched.category && formik.errors.category ? (
                        <div className="text-red-400 text-sm">{formik.errors.category}</div>
                    ) : null}
                </div>

                {/* Level field */}
                <div className="mb-4">
                    <label htmlFor="level" className="block font-bold mb-2">Level *</label>
                    <select
                        id="level"
                        name="level"
                        className="w-full border rounded p-2 bg-gray-700 text-white"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.level}
                    >
                        <option value="">Select a level</option>
                        {levels.map(level => (
                            <option key={level} value={level}>{level}</option>
                        ))}
                    </select>
                    {formik.touched.level && formik.errors.level ? (
                        <div className="text-red-400 text-sm">{formik.errors.level}</div>
                    ) : null}
                </div>

                {/* Price field */}
                <div className="mb-4">
                    <label htmlFor="price" className="block font-bold mb-2">Price *</label>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        placeholder="e.g., Free, $29.99"
                        className="w-full border rounded p-2 bg-gray-700 text-white"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.price}
                    />
                    {formik.touched.price && formik.errors.price ? (
                        <div className="text-red-400 text-sm">{formik.errors.price}</div>
                    ) : null}
                </div>

                {/* Duration field */}
                <div className="mb-4">
                    <label htmlFor="duration" className="block font-bold mb-2">Duration *</label>
                    <input
                        type="text"
                        id="duration"
                        name="duration"
                        placeholder="e.g., 2 hours, 8 weeks"
                        className="w-full border rounded p-2 bg-gray-700 text-white"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.duration}
                    />
                    {formik.touched.duration && formik.errors.duration ? (
                        <div className="text-red-400 text-sm">{formik.errors.duration}</div>
                    ) : null}
                </div>

                {/* Language field */}
                <div className="mb-4">
                    <label htmlFor="language" className="block font-bold mb-2">Language *</label>
                    <input
                        type="text"
                        id="language"
                        name="language"
                        placeholder="e.g., English, Spanish"
                        className="w-full border rounded p-2 bg-gray-700 text-white"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.language}
                    />
                    {formik.touched.language && formik.errors.language ? (
                        <div className="text-red-400 text-sm">{formik.errors.language}</div>
                    ) : null}
                </div>

                {/* Chapters Section */}
                <div className="mb-4">
                    <h2 className="font-bold text-lg mb-2">Chapters</h2>
                    {chapters.map((chapter, index) => (
                        <div key={index} className="mb-4 border p-4 rounded bg-gray-700">
                            <div className="mb-2">
                                <label className="block font-bold mb-1">Chapter Title</label>
                                <input
                                    type="text"
                                    className="w-full border rounded p-2 bg-gray-600 text-white"
                                    value={chapter.title}
                                    onChange={(e) => updateChapter(index, 'title', e.target.value)}
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block font-bold mb-1">Chapter Description</label>
                                <textarea
                                    className="w-full border rounded p-2 bg-gray-600 text-white"
                                    value={chapter.description}
                                    onChange={(e) => updateChapter(index, 'description', e.target.value)}
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block font-bold mb-1">Video URL</label>
                                <input
                                    type="text"
                                    className="w-full border rounded p-2 bg-gray-600 text-white mb-2"
                                    value={chapter.videoUrl}
                                    onChange={(e) => updateChapter(index, 'videoUrl', e.target.value)}
                                />
                                <input
                                    type="file"
                                    accept="video/*"
                                    className="w-full border rounded p-2 bg-gray-600 text-white mb-2"
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
                                            console.log(err);
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
                                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                            >
                                Remove Chapter
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={addChapter}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Add Chapter
                    </button>
                </div>

                <button
                    type="submit"
                    disabled={formik.isSubmitting}
                    className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 disabled:bg-green-300 disabled:cursor-not-allowed"
                >
                    {formik.isSubmitting ? 'Adding Course...' : 'Add Course'}
                </button>
            </form>
        </div>
    );
};

export default AddCourse;