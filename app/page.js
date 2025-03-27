"use client";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";
export default function Home() {
  const handelClick = () => {
    alert("you need to login");
  };
  useEffect(() => {
    // redirect("/api/auth/login?post_login_redirect_url=/pages/home");
  });
  return (
    <div>
      Welcome to my page
      <button onClick={handelClick}>you need to login </button>
    </div>
  );
}
