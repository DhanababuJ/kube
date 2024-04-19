"use client";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { Input } from "../ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

//   Icons
import { GoPeople } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useAuth } from "@/app/providers/AuthContextProvider";

export default function Index() {
  const { email, uid, signOut } = useAuth();

  const router = useRouter();
  const pathname = usePathname();

  // Sign Out
  const handleSignOut = () => {
    signOut();
    router.push("/login");
  };

  return (
    <section className="h-10 flex items-center justify-between p-8">
      {pathname && (
        <div className="capitalize font-bold tracking-wide">
          {pathname.replace(/\//g, "Customer ").replace(/-/g, " ")}
        </div>
      )}

      {/* Search Bar */}
      <div className="relative">
        <div>
          <Input
            id="searchBar"
            placeholder="search..."
            className="w-96 p-4 border rounded-xl h-10"
          />
          <label htmlFor="searchBar" className="absolute top-3 right-2 text-xl">
            <CiSearch />
          </label>
        </div>
      </div>

      {/* Notification & Profile */}
      <div className="flex justify-end items-center gap-4">
        <div>
          <IoIosNotificationsOutline className="text-2xl" />
        </div>
        <div>
          <Popover>
            <PopoverTrigger asChild>
              <Avatar>
                <AvatarImage
                  src="https://images.pexels.com/photos/20138200/pexels-photo-20138200/free-photo-of-the-cover-of-the-album-with-a-woman-s-face.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Admin"
                />
                <AvatarFallback>
                  <GoPeople />
                </AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-fit text-sm mr-10 p-8 bg-white">
              {email && uid ? (
                <>
                  <div>
                    <p>Email: {email}</p>
                    <p>Full Name: {uid}</p>
                  </div>

                  <div className="pt-4">
                    <Button
                      onClick={handleSignOut}
                      variant={"outline"}
                      className="rounded-full border border-main text-white bg-main hover:text-main"
                    >
                      Sign Out
                    </Button>
                  </div>
                </>
              ) : (
                <div className="font-bold">You have to login first</div>
              )}
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </section>
  );
}
