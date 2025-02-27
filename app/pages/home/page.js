"use client";
import Image from "next/image";
import useTheme from 'next-themes'
import { DashItems } from "../../utilities/dash";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const { setTheme } = useTheme();
  useEffect(() => {
    setTheme("dark");
  }, []);
  return (
    <div>
      <div>
        <div className="flex justify-end p-4">UserProfile</div>
        <hr />
        <h1 className="text-2xl font-bold ml-12 mt-4">Dashboard</h1>

        <div className="flex flex-wrap gap-4 ml-9 mt-6">
          {DashItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-blue-200 p-4 w-[300px] h-[100px] rounded-lg shadow-md"
            >
              <Image
                src={item.image}
                alt="noimg"
                width={38}
                height={28}
                className=""
              />

              <div className="ml-5 flex flex-col">
                <div className="text-lg font-semibold">{item.title}</div>
                <div className="text-lg">{item.percentage}%</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
