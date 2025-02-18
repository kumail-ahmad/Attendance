"use client";
import { DashItems } from "./utilities/dash";
import React, { useState } from "react";
export default function Home() {
  return (
    <div>
      <div className="  ">
        <div className="items-end">UserProfile</div>
        <hr />
        <div>
          <h1 className="text-2xl font-bold ml-12 mt-4  ">Dashboard </h1>
          <div className="flex flex-col">
            {DashItems.map((item) => (
              <div key={item.id} className="container flex w-full">
                <div className="boxes bg-blue-200 ml-12 mt-5 flex w-[300px] h-[100px] rounded-lg items-center  ">
                  <div className="box flex items-center space-x-4">
                    <div className="img ml-5">IC</div>
                    <div className="ml-7 flex flex-col">
                      <div className="heading text-lg">{item.title}</div>
                      <div className="value text-lg">{item.percentage}%</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
