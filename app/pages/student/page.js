"use client";
import React, { useState } from "react";

const Page = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    // alert("clicked");
    setCount((count) => count + 1);
  };
  return (
    <div>
      <div className="ml-12 mt-4 gap-4 flex justify-between m-4">
        <div className=" mt-5 items-center justify-center rounded-3xl">
          Total Student Count : {count}
        </div>
        <button
          onClick={handleClick}
          className="border rounded-3xl w-40 bg-purple-400 p-3 text-white font-bold"
        >
          Add Student +
        </button>
      </div>
      <div>
        <h1 className="text-3xl font-bold ml-12">Students</h1>
        <input type="search" name="searchStu" id="srcStu" className="border-black bg-purple-300 p-3 ml-12 mt-4 w-72 h-9 rounded-lg" />
      </div>
    </div>
  );
};

export default Page;
