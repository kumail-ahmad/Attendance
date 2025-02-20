import React from "react";
import { NavImg } from "../utilities/NavImg";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="container flex flex-col ">
        <ul className="ml-4 text-lg font-semilight flex justify-center p-3">
          {NavImg.map((item) => (
            <li
              key={item.id}
              className=" gap-2 mt-4 ml-2 p-2 rounded-lg mr-3 cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-blue-900 flex"
            >
              <Image
                src={item.image}
                width={24}
                height={28}
                alt="noimg"
                className="gap-3"
              />
              <Link href={`/${item.redirect}`}>{item.title}</Link>
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
