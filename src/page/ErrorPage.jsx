import React from "react";
import { Link, Navigate } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="text-center space-y-6">
        {/* Error Code */}
        <h1 className="text-9xl font-bold text-white">404</h1>

        {/* Description */}
        <h2 className="text-4xl text-white font-semibold">
          Oops! Page Not Found
        </h2>
        <p className="text-lg text-gray-400">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="btn bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg shadow-md transition duration-200"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
