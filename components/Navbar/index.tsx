import Link from "next/link";

export default function Index() {
  return (
    <nav className="w-full fixed top-4 left-0 px-10">
      <div className="bg-white flex justify-between items-center rounded-2xl py-2 px-4">
        <div className="text-xl font-bold tracking-wide">KUBE</div>

        {/* MenuItems */}
        <div>Home</div>

        <Link href={"/register"} className="underline text-lg">Register</Link>
      </div>
    </nav>
  );
}
