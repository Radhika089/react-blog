import React, { useEffect, useState } from "react";
import { BlogList } from "../API/constant";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  const [popularBlogs, setPopularBlogs] = useState([]);

  useEffect(() => {
    setPopularBlogs(BlogList.slice(0, 10));
  }, []);

  return (
    <div>
      <div className="mt-28 px-4 py-6 bg-white rounded-xl shadow-md ">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">
          Latest Posts
        </h3>

        <div className="space-y-5">
          {popularBlogs.slice(0, 5).map((blog) => (
            <div key={blog.id} className="border-b pb-4">
              <Link to={`/blog/${blog.id}`}>
                <h4 className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors leading-snug">
                  {blog.title.length > 50
                    ? blog.title.slice(0, 50) + "..."
                    : blog.title}
                </h4>
              </Link>
              <Link
                to={`/blog/${blog.id}`}
                className="inline-flex items-center gap-1 text-sm text-blue-500 hover:underline mt-1"
              >
                Read more
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Blogs */}
      <div className="mt-15 px-4 py-6 bg-white rounded-xl shadow-md ">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">
          Popular Blogs
        </h3>

        <div className="space-y-5">
          {popularBlogs.slice(5, 11).map((blog) => (
            <div key={blog.id} className="border-b pb-4">
              <Link to={`/blog/${blog.id}`}>
                <h4 className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors leading-snug">
                  {blog.title.length > 50
                    ? blog.title.slice(0, 50) + "..."
                    : blog.title}
                </h4>
              </Link>
              <Link
                to={`/blog/${blog.id}`}
                className="inline-flex items-center gap-1 text-sm text-blue-500 hover:underline mt-1"
              >
                Read more
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
