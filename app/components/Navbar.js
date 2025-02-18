import React from "react";
import { NavImg } from "../utilities/NavImg";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <div className="container flex flex-col ">
        <ul className="ml-4 text-lg font-semilight flex justify-center p-3">
          {NavImg.map((item) => (
              <li
              key={item.id}
              className="mt-4 ml-2 p-2 rounded-lg mr-3 cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-blue-900 flex"
              >
              <Image src={item.image} width={48} height={28}/>
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
    </div>
  );
};

export default Navbar;
