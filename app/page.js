"use client";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    alert("you need to login");

    router.push("/api/auth/login?post_login_redirect_url=/pages/home");
  };

  const [text, setText] = useState("");
  return (
    <div>
      <section className="bg-[#40531B] min-h-[100vh] grid grid-cols-1 md:grid-cols-2">
        <div className="text&all mx-3 md:mx-16">
          <div className="flex justify-center mt-36 md:mt-40 flex-col ml-[5vw] gap-3 font-poppins">
            <p className="text-[#def056] font-bold text-4xl md:text-6xl">
              PresenSee
            </p>
            <p className="  text-[#def056] font-bold text-3xl md:text-5xl">
              Best Monitoring app
            </p>
            <p className=" text-[#def056] font-bold text-4xl md:text-5xl"> </p>
            <p className=" text-[#def056] md:text-lg mt-4 ">
              Join millions of users already using this amazing
            </p>
            <p className="text-[#def056] md:text-xl  ">
              Join to get an amazing{" "}
            </p>

            <div className="Input&Button   ">
              <input
                className="md:rounded-3xl rounded-xl p-3 md:mr-6 w-60 md:w-auto "
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder=" Are you Ready "
              />
              <button
                className="  bg-[#7AA095] hover:bg-[#D7F9F1] text-black font-bold py-4 px-3 w-32 rounded-full mt-3"
                disabled=""
                onClick={() => handleClick()}
              >
                Log In
              </button>
            </div>
          </div>
        </div>
        <div className="imageofmobile hidden md:block  mt-20 ml-2">
          <Image
            alt="no image"
            width={482}
            height={382}
            src="/student.png"
            className="w- md:w-auto rounded-full"
          ></Image>
        </div>
      </section>
    </div>
  );
}
