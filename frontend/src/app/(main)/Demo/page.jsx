import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";


const Demo = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <FaRegUserCircle size={30} className="mb-4" />
            <h2 className="text-xl font-semibold mb-4">LMS Demo Video</h2>
            <div className="w-full max-w-2xl aspect-video rounded-lg overflow-hidden shadow-lg border border-gray-200 bg-black">
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/7T7r_oSp0SE" // Example LMS demo video, replace with your own if needed
                    title="LMS Demo Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    )
}

export default Demo