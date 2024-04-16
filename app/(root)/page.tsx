"use client";
import Customer from "@/pages/Customer";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="flex justify-between bg-backgroundMain">
      {/* Sidebar */}
      <div>
        <Sidebar />
      </div>

      {/* Pages */}
      <div className="w-full">
        <Customer />
      </div>
    </main>
  );
}
