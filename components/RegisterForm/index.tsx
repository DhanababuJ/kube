"use client";
import { z } from "zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import React, { ChangeEvent, useState, FormEvent } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "../ui/checkbox";

// Icons
import { FaArrowRight } from "react-icons/fa6";
import { GoArrowLeft } from "react-icons/go";

const formSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  confirmPassword: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  file: z.any().refine((value) => value instanceof FileList, {
    message: "File must be a valid file.",
  }),
  name: z.string(),
  number: z.number().refine((value) => !Number.isNaN(value), {
    message: "Number must be a valid number.",
  }),
  companyName: z.string(),
  companyShortName: z.string(),
  membershipName: z.string(),
  discount: z.string(),
  DOB: z.string(),
});

export default function Index() {
  // Form1
  const [isForm, setIsForm] = useState<boolean>(false);
  const [isFullName, setIsFullName] = useState<string>("");
  const [isDiscount, setIsDiscount] = useState<string>("");
  const [isCompanyName, setIsCompanyName] = useState<string>("");
  const [isMobileNumber, setIsMobileNumber] = useState<string>("");
  const [isProfilePic, setIsProfilePic] = useState<File | null>(null);
  const [isMembershipName, setIsMembershipName] = useState<string>("");
  const [isCompanyShortName, setIsCompanyShortName] = useState<string>("");

  // Form2
  const [isEmail, setIsEmail] = useState<string>("");
  const [isDOB, setIsDOB] = useState<string>("");
  const [isPassword, setIsPassword] = useState<string>("");
  const [isConfirmPassword, setIsConfirmPassword] = useState<string>("");

  // File handling
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setIsProfilePic(file);
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="text-center font-bold mt-8 flex justify-center items-center gap-8">
        {isForm && (
          <div onClick={() => setIsForm(false)}>
            <GoArrowLeft className="text-xl" />
          </div>
        )}
        Create your new account
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="px-12 py-8 text-xs relative"
        >
          {!isForm && (
            <>
              <FormField
                control={form.control}
                name="file"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Display Pic <span className=" text-main">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept=".jpg,.jpeg,.png"
                        {...field}
                        onChange={handleFileChange}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Full Name <span className=" text-main">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="full name"
                        type="text"
                        {...field}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                          setIsFullName(e.target.value);
                        }}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Mobile Number <span className=" text-main">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="mobile number"
                        type="text"
                        {...field}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                          setIsMobileNumber(e.target.value);
                        }}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Company Name <span className=" text-main">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="company name"
                        type="text"
                        {...field}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                          setIsCompanyName(e.target.value);
                        }}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="companyShortName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Company Short Name <span className=" text-main">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="company short name"
                        type="text"
                        {...field}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                          setIsCompanyShortName(e.target.value);
                        }}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="membershipName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Membership Name <span className=" text-main">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="membership name"
                        type="text"
                        {...field}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                          setIsMembershipName(e.target.value);
                        }}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="discount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Additional Discount Preferences (if applicable)
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="discount"
                        type="text"
                        {...field}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                          setIsDiscount(e.target.value);
                        }}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}

          {isForm && (
            <>
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
                        {...field}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                          setIsEmail(e.target.value);
                        }}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

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
                        {...field}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                          setIsPassword(e.target.value);
                        }}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Confirm Password <span className=" text-main">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="confirm password"
                        {...field}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                          setIsConfirmPassword(e.target.value);
                        }}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="DOB"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Date Of Birth <span className=" text-main">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="company name"
                        type="date"
                        {...field}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                          setIsDOB(e.target.value);
                        }}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}

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
              Already registered?
              <Link href={"/register"} className="text-main underline">
                click here
              </Link>
            </div>
          </div>

          {isForm ? (
            <Button
              disabled={!(isEmail && isPassword && isConfirmPassword && isDOB)}
              className="bg-black text-white border border-black w-full h-10 rounded-2xl hover:bg-white hover:text-black transition-all ease-in-out duration-500"
            >
              Register
            </Button>
          ) : (
            <Button
              disabled={
                !(
                  isFullName &&
                  isProfilePic &&
                  isMobileNumber &&
                  isCompanyName &&
                  isCompanyShortName &&
                  isMembershipName
                )
              }
              type="submit"
              onClick={() => setIsForm(true)}
              className="bg-black text-white border border-black w-full h-10 rounded-2xl hover:bg-white hover:text-black transition-all ease-in-out duration-500 flex justify-center items-center gap-2"
            >
              Next step <FaArrowRight />
            </Button>
          )}
        </form>
      </Form>
    </>
  );
}
