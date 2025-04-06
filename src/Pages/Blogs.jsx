import React from "react";
import BlogCard from "../components/BlogCard";

const Blogs = () => {
  return (
    <div>
      <div className="bg-black text-white px-4 py-40 text-center">
        <h1 className="text-4xl lg:text-6xl font-semibold">Blog Page</h1>
      </div>
      <div className="mx-">
        <BlogCard />
      </div>
    </div>
  );
};

export default Blogs;
