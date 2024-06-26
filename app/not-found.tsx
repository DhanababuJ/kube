import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex justify-center items-center text-2xl text-black uppercase">
      This page is not found! Visit&nbsp;
      <Link href={"/"} className="underline text-main">
        Home
      </Link>
    </div>
  );
}
