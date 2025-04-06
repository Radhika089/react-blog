import React from "react";
import { useNavigate } from "react-router-dom";

const Blog = ({ product }) => {
  const navigate = useNavigate();

  if (!product || !product.id) {
    return <div className="text-red-500">Invalid Product Data</div>;
  }

  return (
    <div className=" w-full p-4  rounded-lg shadow-xl hover:shadow-black">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-cover rounded-md"
      />
      <h1 className="text-xl font-semibold text-black">{product.title}</h1>
      {/* <p className="mt-4 text-gray-700">{product.content}</p> */}
      <button
        className="mt-6 text-blue-500 hover:bg-blue-500 rounded-full p-2 hover:text-white transition-all"
        onClick={() => navigate(`/blog/${product.id}`)}
      >
        Read More...
      </button>
    </div>
  );
};

export default Blog;
