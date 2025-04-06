import React, { useEffect, useState } from "react";
import Blog from "./BlogPage";
import { BlogList } from "../API/constant";
import SideBar from "./SideBar";

const BlogCard = () => {
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    setBlogList(BlogList.slice(0, 10));
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-6 mt-16 mb-20">
      <div className="flex flex-col lg:flex-row gap-10 items-start mt-12 px-4">
        <div className="w-full lg:w-3/4">
          {blogList.length === 0 ? (
            <div className="text-center mt-10">Loading...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2 gap-8">
              {blogList.map((product) => {
                // console.log("Rendering Product:", product);
                return <Blog key={product.id} product={product} />;
              })}
            </div>
          )}
        </div>
        {/* sidebar */}
        <div className="w-full lg:w-1/4 mt-10 lg:mt-0">
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
