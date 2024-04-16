import Link from "next/link";
import Image from "next/image";
import { menuItems } from "@/lib/constants";

// Icon
import { RiLogoutCircleFill } from "react-icons/ri";

export default function Index() {
  return (
    <aside className="w-[30vh] h-screen border-2 border-main rounded-tr-3xl">
      {/* Logo */}
      <div className=" flex justify-between items-center px-8 mt-8">
        <h1 className="uppercase">Digisailor</h1>
        <Image
          src={"/assets/auth/logo.svg"}
          alt=""
          height={512}
          width={512}
          className="w-16"
        />
      </div>

      {/* Menus */}
      <div className="p-8 mt-2 text-gray-500">
        <h1 className="uppercase text-sm font-bold text-black">Menus</h1>

        {menuItems.map((menus, menusKey) => (
          <Link
            key={menusKey}
            href={"/"}
            className="flex justify-start items-center gap-2 mt-5"
          >
            <menus.icon className="text-2xl" />
            <p>{menus.menu}</p>
          </Link>
        ))}

        <div className="flex justify-start items-center gap-2 mt-4">
          <RiLogoutCircleFill className="text-2xl" />
          <p>Logout</p>
        </div>
      </div>
    </aside>
  );
}
