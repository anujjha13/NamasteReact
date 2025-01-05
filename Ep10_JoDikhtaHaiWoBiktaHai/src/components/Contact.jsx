import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="bg-gradient-to-r from-blue-300 via-purple-600 to-indigo-400 shadow-lg rounded-lg max-w-4xl w-full p-8">
        {/* Header */}
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-800 font-bold text-center mb-6">
          We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
        </p>

        {/* Form */}
        <form className="space-y-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Write your message here"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Contact Info */}
        <div className="mt-8 text-center text-gray-800">
          <p className="mb-2">📞 Call us: +91-7827712638</p>
          <p className="mb-2">📧 Email: anujjha1301@gmail.com</p>
          <p>🏢 Address: Dwarka Sector 13, Delhi - 110078 </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
