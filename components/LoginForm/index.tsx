"use client";
import { z } from "zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "../ui/checkbox";
import { Input } from "@/components/ui/input";
import React, { useState, ChangeEvent } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export default function Index() {
  const router = useRouter();
  const [isEmail, setIsEmail] = useState<string>("");
  const [isPassword, setIsPassword] = useState<string>("");

  // Error Handling
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(formData: z.infer<typeof formSchema>) {
    setIsLoading(true);

    if (!formData) {
      console.log("Something went wrong!");
    }

    const data = {
      email: isEmail,
      password: isPassword,
    };

    if (!data.email || !data.password) {
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        setIsSuccess(true);
        localStorage.setItem("token", responseData.customToken);
        console.log("success");

        router.push("/");
      } else {
        const error = await response.json();
        setError("Please check your email and password!");
      }
    } catch (error) {
      console.log("Error:", error);
      setError("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <h1 className="pb-4 text-center font-bold">Login into your account</h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="px-12 py-8 text-xs relative"
        >
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Email <span className=" text-main">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="your-email@xyz.com"
                    type="email"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      setIsEmail(e.target.value);
                      field.onChange(e);
                    }}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Password <span className=" text-main">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="password"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      setIsPassword(e.target.value);
                      field.onChange(e);
                    }}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* Remember me */}
          <div className="flex justify-between items-center text-xs py-8">
            <div className="flex items-center justify-center gap-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                remember me
              </label>
            </div>
            <div className="flex justify-center items-center gap-2">
              Forget Password?
              <Link href={"/register"} className="text-main underline">
                click here
              </Link>
            </div>
          </div>

          <Button
            disabled={!(isEmail && isPassword)}
            type="submit"
            className="bg-black text-white border border-black w-full h-10 rounded-2xl hover:bg-white hover:text-black transition-all ease-in-out duration-500"
          >
            {isLoading ? "Loading..." : "Login"}
          </Button>

          {error && <div className="text-red-600 mt-4">*{error}</div>}
        </form>
      </Form>
    </>
  );
}
