import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Icons
import { IoIosAddCircle } from "react-icons/io";
import { MdDelete, MdBlock } from "react-icons/md";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  name: z.string(),
  phoneNumber: z.string(),

});

export default function Index() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(formData: z.infer<typeof formSchema>) {}
  return (
    <section className="text-black p-8">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Create Users</AccordionTrigger>
          <AccordionContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="px-12 py-8 text-xs relative"
              >
                {/* Full Name */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Full Name <span className="text-main">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="full name" type="text" />
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
                        Phone Number <span className="text-main">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="phone number" />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email ID */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Email ID <span className="text-main">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="phone number" />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="bg-black text-white border border-black w-full h-10 rounded-2xl hover:bg-white hover:text-black transition-all ease-in-out duration-500"
                >
                  Create
                </Button>
              </form>
            </Form>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Delete Users</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Block Users</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
