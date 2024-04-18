"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { menuItems } from "@/lib/constants";
import { usePathname } from "next/navigation";

// Icon
import { TbLogout2 } from "react-icons/tb";

export default function Index() {
  const pathname = usePathname();
  const [isMenuToggle, setIsMenuToggle] = useState<boolean>(false);

  return (
    <aside
      className={`${
        isMenuToggle ? "w-[10vh]" : "w-[35vh]"
      } h-screen border-r-2 border-t-2 border-b-2 border-main rounded-tr-3xl transition-all ease-in-out duration-500`}
    >
      {/* Logo */}
      <div
        className={`${
          isMenuToggle ? "px-0 justify-center" : "px-8 justify-between"
        } flex items-center mt-8`}
      >
        {!isMenuToggle && <h1 className="uppercase">Digisailor</h1>}

        {!isMenuToggle ? (
          <div onClick={() => setIsMenuToggle(true)}>
            <Image
              src={"/assets/auth/logo.svg"}
              alt=""
              height={512}
              width={512}
              className="w-16"
            />
          </div>
        ) : (
          <div onClick={() => setIsMenuToggle(false)}>
            <Image
              src={"/assets/auth/logo.svg"}
              alt=""
              height={512}
              width={512}
              className="w-10"
            />
          </div>
        )}
      </div>

      {/* Menus */}
      <div className={`${isMenuToggle ? "p-2" : "p-4"} mt-2`}>
        <h1
          className={`${
            isMenuToggle ? "text-center mt-4" : "text-left pl-4"
          } uppercase text-sm font-bold text-black mb-4`}
        >
          Menus
        </h1>

        {menuItems.map((menus, menusKey) => {
          const isActive = pathname === menus.href;
          return (
            <Link
              key={menusKey}
              href={menus.href}
              title={menus.menu}
              className={`${
                isMenuToggle ? "justify-center" : "justify-start"
              } ${
                isActive
                  ? "bg-main text-white"
                  : "bg-white text-black hover:text-main"
              } flex items-center gap-2 p-4 rounded-xl transition-all ease-in-out duration-500`}
            >
              <menus.icon className="text-2xl" />
              {!isMenuToggle && <p>{menus.menu}</p>}
            </Link>
          );
        })}

        <div
          className={`${
            isMenuToggle ? "justify-center" : "justify-start"
          } flex items-center gap-2 p-4 cursor-pointer hover:text-main transition-all ease-in-out duration-500`}
        >
          <TbLogout2 className="text-2xl" />
          {!isMenuToggle && <p>Logout</p>}
        </div>
      </div>
    </aside>
  );
}
