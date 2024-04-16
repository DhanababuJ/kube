"use client";
import Link from "next/link";
import Image from "next/image";
import LoginForm from "@/components/LoginForm";

// Icons
import { FaArrowRight } from "react-icons/fa6";

export default function Login() {
  return (
    <main className="bg-backgroundMain h-screen overflow-hidden flex items-center justify-center">
      <section className="flex justify-between h-[85vh] w-[90vw] mt-14 relative">
        {/* Container1 */}
        <div className="bg-white h-full w-1/2 rounded-l-3xl flex justify-center items-center">
          <div>
            <div className="flex flex-col justify-center items-center py-12">
              <p className="text-lg uppercase">
                WhatsApp Integration Web Application
              </p>

              <div className="uppercase text-5xl w-96 text-center py-6">
                <h1 className="z-10">Powered by</h1>
                <div className="py-2 flex items-center justify-center gap-4">
                  digisailor.
                  <Image
                    src={"/assets/auth/logo.svg"}
                    alt=""
                    height={200}
                    width={200}
                    className="w-24"
                  />
                </div>
              </div>
            </div>

            <div className="text-center text-sm">
              <p className="text-[#CCCC]">Don&apos;t have an account?</p>
              <div className="flex justify-center items-center">
                <Link
                  href={"/register"}
                  className="text-black underline flex justify-center items-center gap-2"
                >
                  click here <FaArrowRight />
                </Link>
              </div>
            </div>

            {/* <div className="absolute bottom-0 left-0 bg-main h-[30vh] w-1/2 rounded-bl-3xl"></div> */}
          </div>
        </div>

        {/* Container 2 */}
        <div className="h-full w-1/2 relative border-y bg-main rounded-r-3xl flex justify-center items-center">
          {/* Login Form */}
          <div className="top-12 left-[20%] h-fit w-[30vw] bg-white rounded-xl py-12 overflow-hidden">
            <LoginForm />
          </div>
        </div>
      </section>
    </main>
  );
}
