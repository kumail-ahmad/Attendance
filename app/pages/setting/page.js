"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { User } from "lucide-react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";


const SettingsPage = () => {
  const { user } = useKindeBrowserClient();
  const { theme, setTheme } = useTheme();
  const [userEmail, setUserEmail] = useState("");
  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 h-[100vh] bg-[#BFD7EA] text-white p-5 rounded-xl">
        <h2 className="text-xl text-black font-bold">Settings</h2>
        <ul className="mt-4 space-y-2">
          <li className="p-2 text-black hover:bg-gray-500 cursor-pointer md:rounded-xl">
            Profile
          </li>
          <li className="p-2 text-black hover:bg-gray-500 cursor-pointer md:rounded-xl">
            Security
          </li>
          <li className="p-2 text-black hover:bg-gray-500 cursor-pointer md:rounded-xl">
            Logout
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-[] dark:bg-gray-800">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          Settings Page
        </h1>

        {/* Theme Toggle */}
        <div className="mt-6">
          <button
            onClick={handleThemeToggle}
            className="px-4 py-2 bg-[#9893DA] text-white rounded-md"
          >
            Toggle Theme
          </button>
        </div>

        <div className="mt-6 bg-[#f6ffff] dark:bg-gray-900 p-4  rounded-xl shadow-lg">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
            User Information:
          </h2>
          <p className="text-gray-600 dark:text-gray-400">Name : {user?.name ? user.name : "Name not loaded"}</p>
          
        </div>
      </main>
    </div>
  );
};

export default SettingsPage;
