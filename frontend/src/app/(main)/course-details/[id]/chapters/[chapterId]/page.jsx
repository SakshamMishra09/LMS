'use client';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const ChapterDetails = () => {
    const { id, chapterId } = useParams();
    const router = useRouter();
    const [chapter, setChapter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchChapter = async () => {
            try {
                // Fetch the course to get chapters
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/course/getbyid/${id}`);
                if (!response.ok) throw new Error('Failed to fetch course');
                const course = await response.json();
                const foundChapter = course.chapters?.find((ch, idx) => ch._id === chapterId || idx.toString() === chapterId);
                if (!foundChapter) throw new Error('Chapter not found');
                setChapter(foundChapter);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchChapter();
    }, [id, chapterId]);

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
                <div className="mt-4">
                    <button onClick={() => router.back()} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-10">
            <div className="mb-6">
                <Link href={`/course-details/${id}`}>
                    <button className="flex items-center text-blue-500 hover:text-blue-700">
                        &larr; Back to Course
                    </button>
                </Link>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
                {chapter.videoUrl && (
                    <div className="mb-6">
                        <video
                            src={chapter.videoUrl}
                            controls
                            className="w-full max-h-96 rounded mb-4"
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                )}
                <h1 className="text-3xl font-bold mb-4">{chapter.title}</h1>
                <p className="mb-6 text-gray-700">{chapter.description}</p>

            </div>
        </div>
    );
};

export default ChapterDetails;