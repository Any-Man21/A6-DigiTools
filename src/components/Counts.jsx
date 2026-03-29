import React from "react";

const Counts = () => {
  return (
    <div className="bg-[#8F17FA] flex items-center justify-center gap-10 md:gap-30 py-10 text-center">
      <div className="">
        <h1 className=" text-white text-3xl md:text-5xl font-bold">50K+</h1>
        <p className="text-gray-300 mt-4 font-semibold">Active Users</p>
      </div>
      <div>
        <h1 className="text-white text-3xl md:text-5xl font-bold">200+</h1>
        <p className="text-gray-300 mt-4 font-semibold">Premium Tools</p>
      </div>
      <div>
        <h1 className="text-white text-3xl md:text-5xl font-bold">4.9</h1>
        <p className="text-gray-300 mt-4 font-semibold">Rating</p>
      </div>
    </div>
  );
};

export default Counts;
