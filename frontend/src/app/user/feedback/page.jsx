import React from 'react'

const feedback = () => {
  return (
    <div><>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Feedback - LMS</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
    />
    {/* Navigation */}
    
    {/* Main Content */}
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Share Your Feedback
        </h1>
        <p className="text-gray-600 mb-8">
          We value your opinion! Please let us know about your experience with our
          learning platform. Your feedback helps us improve.
        </p>
        {/* Feedback Form */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <form>
            {/* Rating */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Overall Rating
              </label>
              <div className="flex space-x-2">
                <button
                  type="button"
                  className="rating-btn text-2xl"
                  data-rating={1}
                >
                  ☆
                </button>
                <button
                  type="button"
                  className="rating-btn text-2xl"
                  data-rating={2}
                >
                  ☆
                </button>
                <button
                  type="button"
                  className="rating-btn text-2xl"
                  data-rating={3}
                >
                  ☆
                </button>
                <button
                  type="button"
                  className="rating-btn text-2xl"
                  data-rating={4}
                >
                  ☆
                </button>
                <button
                  type="button"
                  className="rating-btn text-2xl"
                  data-rating={5}
                >
                  ☆
                </button>
              </div>
              <input type="hidden" id="rating-value" name="rating" />
            </div>
            {/* Feedback Type */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Feedback Type
              </label>
              <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="">Select feedback type</option>
                <option value="general">General Feedback</option>
                <option value="course">Course Content</option>
                <option value="platform">Platform Usability</option>
                <option value="technical">Technical Issues</option>
                <option value="suggestion">Suggestions</option>
              </select>
            </div>
            {/* Feedback Text */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Your Feedback
              </label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                rows={5}
                placeholder="Please share your detailed feedback here..."
                defaultValue={""}
              />
            </div>
            {/* Anonymous Option */}
            <div className="mb-6 flex items-center">
              <input type="checkbox" id="anonymous" className="mr-2 h-5 w-5" />
              <label htmlFor="anonymous" className="text-gray-700">
                Submit anonymously
              </label>
            </div>
            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-200"
              >
                Submit Feedback
              </button>
            </div>
          </form>
        </div>
        {/* Previous Feedback */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Your Previous Feedback
          </h2>
          <div className="space-y-4">
            {/* Feedback Item 1 */}
            <div className="border-b pb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Platform Usability</span>
                <span className="text-yellow-500">★★★★☆</span>
              </div>
              <p className="text-gray-600 mb-2">
                The platform is generally easy to use, but the mobile experience
                could be improved. Sometimes the videos don't load properly on my
                phone.
              </p>
              <div className="text-sm text-gray-500">
                Submitted on: March 15, 2023
              </div>
            </div>
            {/* Feedback Item 2 */}
            <div className="border-b pb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Course Content</span>
                <span className="text-yellow-500">★★★★★</span>
              </div>
              <p className="text-gray-600 mb-2">
                The Advanced JavaScript course was excellent! The exercises were
                challenging but very informative. I learned a lot.
              </p>
              <div className="text-sm text-gray-500">
                Submitted on: February 2, 2023
              </div>
            </div>
            {/* Feedback Item 3 */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Suggestions</span>
                <span className="text-yellow-500">★★★☆☆</span>
              </div>
              <p className="text-gray-600 mb-2">
                It would be great to have more interactive coding exercises in the
                programming courses. The current ones are good but could be more
                engaging.
              </p>
              <div className="text-sm text-gray-500">
                Submitted on: January 10, 2023
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Footer */}
    
  </>
  </div>
  )
}

export default feedback