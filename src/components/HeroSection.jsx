import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="px-6 mx-auto bg-black py-13">
      <div className="w-full min-h-[40vh] md:min-h-[50vh] lg:min-h-[60vh] flex items-center justify-center ">
        {/* Content */}
        <div className=" flex flex-col items-center justify-center h-full text-center px-6 py-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide drop-shadow-lg mb-5  text-white">
            Welcome to My Blog
          </h1>
          <p className=" mt-2 lg:w-3/4 max-w-2xl drop-shadow-md text-gray-300 md:text-xl mb-5">
            Explore insightful articles on technology, lifestyle, and
            creativity. Stay updated with fresh perspectives, expert opinions,
            and engaging stories. Join a community of curious minds and discover
            ideas that inspire growth and innovation.
          </p>
          {/* button */}
          <Link
            to={"/"}
            className="mt-6 px-6 py-3.5 bg-gradient-to-r from-pink-600 to-orange-600 text-lg text-white rounded-full transition-all duration-300 hover:scale-105 hover:bg-orange-600 border-white shadow-lg hover:shadow-xl font-semibold"
          >
            Read Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
