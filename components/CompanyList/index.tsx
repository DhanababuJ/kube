import React, { useState } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input, Select } from "../ui/input";
import { Button } from "../ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
// Icons
import { IoAddCircleOutline } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";

const formSchema = z.object({
  companyName: z.string(),
  shortName: z.string(),
  location: z.string(),
  status: z.string(),
  discountPercentage: z.string(),
  dailyCode: z.string(),
  numOfCustomer: z.string(),
});

interface AddCompanyProps {
  setToggleAdd: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CompanyForm({ setToggleAdd }: AddCompanyProps) {
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const createCompany = async (e: React.FormEvent) => {
    setIsLoading(true);
    e.preventDefault();

    const data = form.getValues();

    try {
      const response = await fetch("http://localhost:4000/company/add", {
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
        className="bg-white border-4 border-main shadow-sm h-[70vh] w-[30vw] px-12 py-8 rounded-xl relative overflow-hidden"
      >
        <h1 className="text-center text-main uppercase text-xl font-bold">Add a Company</h1>

        <Form {...form}>
          <form className="text-xs relative">
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} placeholder="Company Name" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="shortName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Short Name</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} placeholder="Short Name" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} placeholder="Location" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <FormControl>
                    <Select {...field}>
                      <option value="">Select Status</option>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="discountPercentage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Discount Percentage</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} placeholder="Discount Percentage" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dailyCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Daily Code</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} placeholder="Daily Code" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="numOfCustomer"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of Customers</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} placeholder="Number of Customers" />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="flex justify-start items-center gap-4">
              <Button
                onClick={createCompany}
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
