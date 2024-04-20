"use client";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    redirect("/customer");
  }, []);

  return (
    <div className="h-screen flex justify-center items-center">
      please wait... This page will redirect to customer page.
    </div>
  );
}
