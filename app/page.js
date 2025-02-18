"use client";
import React, { useState } from "react";
export default function Home() {
  return (
    <div>
      <div className=" bg--200 ">
        <div className="items-end">UserProfile</div>
        <hr />
        <div>
          <h1 className="text-2xl font-bold ml-12 mt-4  ">Dashboard </h1>
          <div className="boxes bg-red-400 ml-12 mt-5 flex w-[300px] h-[100px] rounded-lg">
            <div className="box flex mt-5">
              <div className="img ml-5">IC</div>
              <div className="ml-7">
                <div className="heading ">Total Students</div>
                <div className="value">20%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
