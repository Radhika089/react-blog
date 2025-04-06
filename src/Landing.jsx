import React from "react";

const LandingPage = () => {
  return (
    <div className=" bg-white p-4 rounded-lg shadow-md w-full max-w-lg">
      <h1 className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold h-44 text-3xl w-screen flex justify-center items-center">
        News you can trust
      </h1>
      <h3 className="text-center font-bold text-xl mt-4">
        Stay up to date with our Newsletter
      </h3>
      <p className="text-center max-w-[90%] md:max-w-[600px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt natus
        quisquam delectus amet!
      </p>
      <button className="bg-gray-200 p-4 text-black w-[250px] text-center m-5">
        you@gmail.com
      </button>
      <button className="bg-blue-500 text-white rounded-md p-4 w-[250px] mt-2 hover:bg-blue-700 shadow-lg transition duration-300">
        Subscribe Now
      </button>
    </div>
  );
};

export default LandingPage;
