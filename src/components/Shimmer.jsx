import React from "react";

const Shimmer = () => {
  return (
    <div className="animate-pulse flex flex-col items-center p-5">
      {/* Shimmer Image */}
      <div className="w-72 h-44 bg-gray-300 rounded-md mb-4 shadow-lg"></div>

      {/* Shimmer Title */}
      <div className="h-6 w-60 bg-gray-300 rounded-md mb-3"></div>

      {/* Shimmer Content (3 lines) */}
      <div className="h-4 w-72 bg-gray-300 rounded-md mb-2"></div>
      <div className="h-4 w-64 bg-gray-300 rounded-md mb-2"></div>
      <div className="h-4 w-56 bg-gray-300 rounded-md"></div>
    </div>
  );
};

export default Shimmer;
