'use client';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EditCourse = () => {
  const { courseId } = useParams();
  const router = useRouter();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/course/getbyid/${courseId}`);
        setCourse(res.data);
        setChapters(res.data.chapters || []);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [courseId]);

  const handleCourseChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleChapterChange = (index, field, value) => {
    const updated = [...chapters];
    updated[index][field] = value;
    setChapters(updated);
  };

  const addChapter = () => {
    setChapters([...chapters, { title: '', description: '', videoUrl: '' }]);
  };

  const removeChapter = (index) => {
    setChapters(chapters.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/course/update/${courseId}`, {
        ...course,
        chapters,
      });
      alert('Course updated successfully!');
      router.push('/user/my-courses');
    } catch (err) {
      alert('Failed to update course');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!course) return <div>Course not found</div>;

  return (
    <div className="max-w-2xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Edit Course</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          value={course.title}
          onChange={handleCourseChange}
          className="w-full border p-2 rounded"
          placeholder="Course Title"
        />
        <textarea
          name="description"
          value={course.description}
          onChange={handleCourseChange}
          className="w-full border p-2 rounded"
          placeholder="Course Description"
        />
        <input
          name="image"
          value={course.image}
          onChange={handleCourseChange}
          className="w-full border p-2 rounded"
          placeholder="Image URL"
        />
        <input
          name="category"
          value={course.category}
          onChange={handleCourseChange}
          className="w-full border p-2 rounded"
          placeholder="Category"
        />
        <input
          name="level"
          value={course.level}
          onChange={handleCourseChange}
          className="w-full border p-2 rounded"
          placeholder="Level"
        />
        <input
          name="price"
          value={course.price}
          onChange={handleCourseChange}
          className="w-full border p-2 rounded"
          placeholder="Price"
        />
        <input
          name="duration"
          value={course.duration}
          onChange={handleCourseChange}
          className="w-full border p-2 rounded"
          placeholder="Duration"
        />
        <input
          name="language"
          value={course.language}
          onChange={handleCourseChange}
          className="w-full border p-2 rounded"
          placeholder="Language"
        />

        <div>
          <h2 className="font-bold mb-2">Chapters</h2>
          {chapters.map((chapter, idx) => (
            <div key={idx} className="border p-3 mb-2 rounded bg-gray-50">
              <input
                value={chapter.title}
                onChange={e => handleChapterChange(idx, 'title', e.target.value)}
                className="w-full border p-1 mb-1 rounded"
                placeholder="Chapter Title"
              />
              <textarea
                value={chapter.description}
                onChange={e => handleChapterChange(idx, 'description', e.target.value)}
                className="w-full border p-1 mb-1 rounded"
                placeholder="Chapter Description"
              />
              <input
                value={chapter.videoUrl}
                onChange={e => handleChapterChange(idx, 'videoUrl', e.target.value)}
                className="w-full border p-1 mb-1 rounded"
                placeholder="Video URL"
              />
              <button type="button" onClick={() => removeChapter(idx)} className="text-red-500 text-sm">Remove</button>
            </div>
          ))}
          <button type="button" onClick={addChapter} className="bg-blue-500 text-white px-3 py-1 rounded mt-2">Add Chapter</button>
        </div>

        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Update Course</button>
      </form>
    </div>
  );
};

export default EditCourse;