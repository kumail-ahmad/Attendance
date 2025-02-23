"use client";
import React, { useState } from "react";

const Page = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    // alert("clicked");
    setCount((count) => count + 1);
  };
  return (
    <div className="ml-12 mt-4 gap-4">
      <div>i am a student testttt</div>
      <button
        onClick={handleClick}
        className="border rounded-3xl bg-blue-600 border-red-800 p-3"
      >
        Add Student +
      </button>
      <div className="bg-red-200 w-40 mt-5 items-center justify-center rounded-3xl">
        {count}
      </div>
    </div>
  );
};

export default Page;
