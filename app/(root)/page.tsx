"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    router.push("/customer");
  }, []);

  const router = useRouter();
  return <div>please wait...</div>;
}
