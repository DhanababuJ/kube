import { FaTimes } from "react-icons/fa";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import React, { ChangeEvent, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";

// Iconsnp
import { IoAddCircleOutline } from "react-icons/io5";


const formSchema = z.object({
  dob: z.string(),
  fullName: z.string(),
  location: z.string(),
  companyName: z.string(),
  phoneNumber: z.string(),
  emailId: z.string().email({
    message: "Invalid email address.",
  }),
});

interface AddCustomerProps {
  setToggleAdd: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Index({ setToggleAdd }: AddCustomerProps) {
  const [isDOB, setIsDOB] = useState<string>("");
  const [isEmailId, setIsEmailId] = useState<string>("");
  const [isFullName, setIsFullName] = useState<string>("");
  const [isLocation, setIsLocation] = useState<string>("");
  const [isCompanyName, setIsCompanyName] = useState<string>("");
  const [isPhoneNumber, setIsPhoneNumber] = useState<string>("");

  // Error Handling
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const createCustomer = async (e: React.FormEvent) => {
    setIsLoading(true);
    e.preventDefault();

    const data = {
      dob: isDOB,
      emailID: isEmailId,
      fullName: isFullName,
      location: isLocation,
      companyName: isCompanyName,
      phoneNumber: isPhoneNumber,
    };

    if (
      !data.dob ||
      !data.emailID ||
      !data.fullName ||
      !data.location ||
      !data.companyName ||
      !data.phoneNumber
    ) {
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/customer/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        console.log("success");
      } else {
        const responseData = await response.json();
        setError(responseData.error);
      }
    } catch (error) {
      console.log("Error:", error);
      setError("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed top-0 left-0 bg-transparent h-screen w-full flex justify-center items-center">
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ ease: "easeInOut", delay: 0.3 }}
        className="bg-white border-4 border-main shadow-sm h-[65vh] w-[30vw] px-12 py-8 rounded-xl relative overflow-hidden"
      >
        <h1 className="text-center text-main uppercase text-xl font-bold">Add a customer</h1>

        {/* Form */}
        <Form {...form}>
          <form className="text-xs relative">
            {/* Full Name */}
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Full Name <span className=" text-main">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="full name"
                      type="text"
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setIsFullName(e.target.value);
                        field.onChange(e);
                      }}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone Number */}
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Phone Number <span className=" text-main">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="phone number"
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setIsPhoneNumber(e.target.value);
                        field.onChange(e);
                      }}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email Id */}
            <FormField
              control={form.control}
              name="emailId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Email Id <span className="text-main">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      required
                      placeholder="email ID"
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setIsEmailId(e.target.value);
                        field.onChange(e);
                      }}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Company Name */}
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
                      type="text"
                      placeholder="company name"
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setIsCompanyName(e.target.value);
                        field.onChange(e);
                      }}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* DOB */}
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    DOB <span className="text-main">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      placeholder="date of birth"
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setIsDOB(e.target.value);
                        field.onChange(e);
                      }}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Location */}
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Location <span className="text-main">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="location"
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setIsLocation(e.target.value);
                        field.onChange(e);
                      }}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Buttons */}
            <div className="flex justify-start items-center gap-4">
              <Button
                disabled={
                  !(
                    isFullName &&
                    isEmailId &&
                    isCompanyName &&
                    isPhoneNumber &&
                    isLocation &&
                    isDOB
                  )
                }
                onClick={createCustomer}
                type="submit"
                className="bg-black text-white border border-black w-fit h-10 rounded-2xl hover:bg-white hover:text-black transition-all ease-in-out duration-500 mt-8 flex justify-center items-center gap-2"
              >
                <IoAddCircleOutline className="text-xl" />
                {isLoading ? "Loading..." : "Create"}
              </Button>

              <Button
                type="button"
                onClick={() => setToggleAdd(false)}
                className="bg-red-600 text-white border border-red-600 w-fit h-10 rounded-2xl hover:bg-white hover:text-red-600 transition-all ease-in-out duration-500 mt-8 flex justify-center items-center gap-2"
              >
                <FaTimes />
                Cancel
              </Button>
            </div>

            {error && !isSuccess && <div className="text-red-600 mt-4">*{error}</div>}
            {isSuccess && !error && (
              <div className="text-main mt-4">SuccessFully Added</div>
            )}
          </form>
        </Form>
      </motion.div>
    </div>
  );
}
