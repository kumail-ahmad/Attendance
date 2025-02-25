"use client"
import { redirect } from "next/navigation";
import React, { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    redirect("/api/auth/login?post_login_redirect_url=/dashboard");
  });
  return <div>hey</div>;
}
