import React from "react";

const Navbar = () => {
  return (
    <div>
      <ul className="ml-4 text-lg font-semilight flex justify-center">
        <li className="mt-4 ml-2 p-2 rounded-lg mr-3  cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-blue-800">
          Dashboard
        </li>
        <li className="mt-4 ml-2 p-2 rounded-lg mr-3 hover:bg-gray-200 cursor-pointer">
          Students
        </li>
        <li className="mt-4 ml-2 p-2 rounded-lg mr-3 hover:bg-blue-200 cursor-pointer">
          Attendance
        </li>
        <li className="mt-4 ml-2 p-2 rounded-lg mr-3 hover:bg-blue-200 cursor-pointer">
          Setting
        </li>
      </ul>
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />;
    </div>
  );
};

export default Navbar;
