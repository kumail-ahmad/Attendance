"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import { DashItems } from "../../utilities/dash";
import React, { useEffect, useState } from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const Dashboard = () => {
  // const { setTheme } = useTheme();
  // useEffect(() => {
  //   setTheme("system");
  // }, []);

  const { user } = useKindeBrowserClient();
  return (
    <div>
      <div>
        <div className="flex justify-end p-4 rounded-full">
          <Image
            src={user?.picture ? user.picture : "/user.svg"}
            width={35}
            height={35}
            alt="U"
          />
        </div>
        <hr />
        <h1 className="text-2xl font-bold ml-12 mt-4">Dashboard</h1>

        <div className="flex flex-wrap gap-4 ml-9 mt-6">
          {DashItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-blue-200 p-4 w-[250px] h-[100px] rounded-lg shadow-md"
            >
              <Image
                src={item.image}
                alt="noimg"
                width={38}
                height={28}
                className=""
              />
              <h1>{user?.given_name}</h1>

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
