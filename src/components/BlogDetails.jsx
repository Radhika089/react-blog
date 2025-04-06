import React from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useGetSingleBlog from "../Hooks/SingleBlog";
import SideBar from "./SideBar";

const BlogDetails = () => {
  const { id } = useParams();
  const singlePost = useGetSingleBlog(id);

  if (!singlePost) {
    return <Shimmer />;
  }

  return (
    <div className="flex flex-col gap-10 lg:flex-row items-start">
      <div className="hidden lg:block"></div>
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-30">
        <img
          className="w-full h-64 object-cover rounded-md"
          src={singlePost.image}
          alt={singlePost.title}
        />
        <h1 className="text-3xl font-bold mt-4 text-gray-900 text-center">
          {singlePost.title}
        </h1>
        <p className="text-gray-600 text-lg mt-3 leading-relaxed text-center">
          {singlePost.content}
        </p>
        <div className="text-base text-gray-500">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            consectetur possimus voluptates beatae iure fugiat exercitationem
            sunt voluptatum atque! Asperiores eius quia consequuntur, unde ea
            sequi cum. Deleniti libero delectus labore nostrum natus placeat
            architecto excepturi. Repellat repudiandae itaque voluptates
            suscipit, libero reprehenderit soluta fugiat?
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
            distinctio temporibus consequuntur nulla facere doloremque at
            ducimus modi neque, harum possimus ad nostrum magnam vitae
            voluptates! Quaerat nisi quod unde nostrum omnis inventore
            repellendus.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            soluta consequatur expedita perferendis ab similique quos adipisci
            illum fugiat ea sequi debitis obcaecati, nesciunt natus vel hic
            accusantium deserunt? Omnis, maiores vitae officiis quo assumenda
            iste soluta voluptatibus deserunt, iusto impedit atque ducimus
            aspernatur dolore dignissimos cumque repudiandae pariatur hic
            voluptatum, totam tempore modi beatae eius.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            magnam quasi asperiores vero debitis sint ea dolore corrupti, nisi
            iure eum voluptates nemo!
          </p>
        </div>
      </div>
      <div className="lg:w-1/4 w-full">
        <SideBar />
      </div>
    </div>
  );
};

export default BlogDetails;
