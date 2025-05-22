'use client';
import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useParams, useRouter } from 'next/navigation';

const UpdateCourse = () => {
    const { id } = useParams();
    const router = useRouter();
    const [chapters, setChapters] = useState([]);
    const levels = ['Beginner', 'Intermediate', 'Advanced'];
    const categories = ['Programming', 'Business', 'Design', 'Marketing', 'Languages', 'Personal Development'];

    useEffect(() => {
        // Fetch course details by id and populate form
        const fetchCourse = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/course/getbyid/${id}`);
                const data = res.data;
                formik.setValues({
                    title: data.title || '',
                    description: data.description || '',
                    image: data.image || '',
                    category: data.category || '',
                    level: data.level || '',
                    price: data.price || '',
                    duration: data.duration || '',
                    language: data.language || '',
                });
                setChapters(data.chapters || []);
            } catch (err) {
                toast.error('Failed to fetch course details');
            }
        };
        if (id) fetchCourse();
        // eslint-disable-next-line
    }, [id]);

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
        enableReinitialize: true,
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
                const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/course/update/${id}`, courseData);
                toast.success('Course updated successfully!');
                router.push('/user/manage-course');
            } catch (error) {
                toast.error(error.response?.data?.message || 'Failed to update course');
            }
        }
    });

    const uploadFile = (e) => {
        const file = e.target.files[0];
        if (!file) {
            return toast.error('Please select a file');
        }
        const fd = new FormData();
        fd.append('file', file);
        fd.append('upload_preset', 'hoodhogan');
        fd.append('cloud_name', 'ddsnnqpbv');
        axios.post('https://api.cloudinary.com/v1_1/ddsnnqpbv/image/upload', fd)
            .then((result) => {
                formik.setFieldValue('image', result.data.url);
                toast.success('Image uploaded!');
            }).catch(() => toast.error('Image upload failed'));
    };

    return (
        <div className="max-w-3xl mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold mb-8 text-indigo-700 text-center">Update Course</h1>
            <form onSubmit={formik.handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
                <div>
                    <label className="block font-semibold mb-1">Title</label>
                    <input type="text" name="title" value={formik.values.title} onChange={formik.handleChange} className="w-full border rounded px-4 py-2" />
                    {formik.touched.title && formik.errors.title && <div className="text-red-500 text-sm">{formik.errors.title}</div>}
                </div>
                <div>
                    <label className="block font-semibold mb-1">Description</label>
                    <textarea name="description" value={formik.values.description} onChange={formik.handleChange} className="w-full border rounded px-4 py-2" />
                    {formik.touched.description && formik.errors.description && <div className="text-red-500 text-sm">{formik.errors.description}</div>}
                </div>
                <div>
                    <label className="block font-semibold mb-1">Image</label>
                    <input type="file" accept="image/*" onChange={uploadFile} className="mb-2" />
                    {formik.values.image && <img src={formik.values.image} alt="Course" className="h-24 rounded mb-2" />}
                    {formik.touched.image && formik.errors.image && <div className="text-red-500 text-sm">{formik.errors.image}</div>}
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block font-semibold mb-1">Category</label>
                        <select name="category" value={formik.values.category} onChange={formik.handleChange} className="w-full border rounded px-4 py-2">
                            <option value="">Select Category</option>
                            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                        </select>
                        {formik.touched.category && formik.errors.category && <div className="text-red-500 text-sm">{formik.errors.category}</div>}
                    </div>
                    <div>
                        <label className="block font-semibold mb-1">Level</label>
                        <select name="level" value={formik.values.level} onChange={formik.handleChange} className="w-full border rounded px-4 py-2">
                            <option value="">Select Level</option>
                            {levels.map(lvl => <option key={lvl} value={lvl}>{lvl}</option>)}
                        </select>
                        {formik.touched.level && formik.errors.level && <div className="text-red-500 text-sm">{formik.errors.level}</div>}
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block font-semibold mb-1">Price</label>
                        <input type="text" name="price" value={formik.values.price} onChange={formik.handleChange} className="w-full border rounded px-4 py-2" />
                        {formik.touched.price && formik.errors.price && <div className="text-red-500 text-sm">{formik.errors.price}</div>}
                    </div>
                    <div>
                        <label className="block font-semibold mb-1">Duration</label>
                        <input type="text" name="duration" value={formik.values.duration} onChange={formik.handleChange} className="w-full border rounded px-4 py-2" />
                        {formik.touched.duration && formik.errors.duration && <div className="text-red-500 text-sm">{formik.errors.duration}</div>}
                    </div>
                </div>
                <div>
                    <label className="block font-semibold mb-1">Language</label>
                    <input type="text" name="language" value={formik.values.language} onChange={formik.handleChange} className="w-full border rounded px-4 py-2" />
                    {formik.touched.language && formik.errors.language && <div className="text-red-500 text-sm">{formik.errors.language}</div>}
                </div>
                <div>
                    <label className="block font-semibold mb-2">Chapters</label>
                    {chapters.map((chapter, idx) => (
                        <div key={idx} className="mb-4 p-4 border rounded-lg bg-gray-50">
                            <div className="flex gap-2 mb-2">
                                <input type="text" placeholder="Chapter Title" value={chapter.title} onChange={e => updateChapter(idx, 'title', e.target.value)} className="w-1/2 border rounded px-2 py-1" />
                                <input type="text" placeholder="Video URL" value={chapter.videoUrl} onChange={e => updateChapter(idx, 'videoUrl', e.target.value)} className="w-1/2 border rounded px-2 py-1" />
                            </div>
                            <textarea placeholder="Chapter Description" value={chapter.description} onChange={e => updateChapter(idx, 'description', e.target.value)} className="w-full border rounded px-2 py-1 mb-2" />
                            <button type="button" onClick={() => removeChapter(idx)} className="text-red-500 text-xs">Remove</button>
                        </div>
                    ))}
                    <button type="button" onClick={addChapter} className="bg-indigo-500 text-white px-4 py-2 rounded mt-2">Add Chapter</button>
                </div>
                <div className="flex justify-end">
                    <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-3 rounded-lg shadow">Update Course</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateCourse;