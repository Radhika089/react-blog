import { useEffect, useState } from "react";
import { BlogList } from "../API/constant";

const useGetSingleBlog = (blogId) => {
  const [singlePost, setSinglePost] = useState(null);

  useEffect(() => {
    if (blogId) {
      const foundPost = BlogList.find((post) => post.id.toString() === blogId);
      setSinglePost(foundPost || null);
    }
  }, [blogId]);

  return singlePost;
};

export default useGetSingleBlog;
