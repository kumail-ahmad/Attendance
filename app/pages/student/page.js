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
      i am a student testttt
      <button onClick={handleClick} className="border-red-800 p-3">
        CLICK ME {count}
      </button>
    </div>
  );
};

export default Page;
