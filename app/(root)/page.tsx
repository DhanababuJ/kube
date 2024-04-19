"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Icons
import { FaBan } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { MdEditSquare } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";


export default function Home() {

  return (
    <div className="text-black px-8 py-5 h-screen overflow-y-scroll">
      

      <div className="flex justify-between items-center">
        <div>Customer Management</div>

        <div className="flex justify-center items-center gap-2 bg-main px-4 py-2 rounded-full">
          <h1>Add customer</h1>
          <IoIosAddCircle className="text-2xl" />
        </div>
      </div>

      <div className="mt-8">
        <TableDemo />
      </div>
    </div>
  );
}

function TableDemo() {
  return (
    <Table>
      <TableHeader>
        <TableRow className="uppercase">
          <TableHead className="text-center">Customers</TableHead>
          <TableHead className="text-center">Company Name</TableHead>
          <TableHead className="text-center">Phone Number</TableHead>
          <TableHead className="text-center">Email</TableHead>
          <TableHead className="text-center">Full Name</TableHead>
          <TableHead className="text-center">Location</TableHead>
          <TableHead className="text-center">DOB(DD/MM)</TableHead>
          <TableHead className="text-center">Unique Id</TableHead>
          <TableHead className="text-center">Actions</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {customers.map((customer) => (
          <TableRow key={customer.customer}>
            <TableCell className="font-medium text-center">
              {customer.customer}
            </TableCell>
            <TableCell className="text-center">
              {customer.customerName}
            </TableCell>
            <TableCell className="text-center">
              {customer.phoneNumber}
            </TableCell>
            <TableCell className="text-center">{customer.email}</TableCell>
            <TableCell className="text-center">{customer.fullName}</TableCell>
            <TableCell className="text-center">{customer.location}</TableCell>
            <TableCell className="text-center">{customer.dob}</TableCell>
            <TableCell className="text-center">{customer.uniqueId}</TableCell>

            {/* Actions */}
            <TableCell className="text-center">
              <div className="flex justify-center items-center gap-4 text-xl">
                <div className="text-red-600 cursor-pointer" title="delete">
                  <AiFillDelete />
                </div>

                <div className="text-blue-600 cursor-pointer" title="block">
                  <FaBan />
                </div>

                <div className="text-green cursor-pointer" title="edit">
                  <MdEditSquare />
                </div>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

const customers = [
  {
    customer: "Customer1",
    customerName: "CustomerName-1",
    phoneNumber: "9876543210",
    email: "company@gmail.com",
    fullName: "FullName",
    location: "singapore",
    dob: "dd-mm-yy",
    uniqueId: "UID",
  },
  {
    customer: "Customer2",
    customerName: "CustomerName-2",
    phoneNumber: "9876543210",
    email: "company@gmail.com",
    fullName: "FullName",
    location: "singapore",
    dob: "dd-mm-yy",
    uniqueId: "UID",
  },
  {
    customer: "Customer3",
    customerName: "CustomerName-3",
    phoneNumber: "9876543210",
    email: "company@gmail.com",
    fullName: "FullName",
    location: "singapore",
    dob: "dd-mm-yy",
    uniqueId: "UID",
  },
  {
    customer: "Customer4",
    customerName: "CustomerName-4",
    phoneNumber: "9876543210",
    email: "company@gmail.com",
    fullName: "FullName",
    location: "singapore",
    dob: "dd-mm-yy",
    uniqueId: "UID",
  },
  {
    customer: "Customer5",
    customerName: "CustomerName-5",
    phoneNumber: "9876543210",
    email: "company@gmail.com",
    fullName: "FullName",
    location: "singapore",
    dob: "dd-mm-yy",
    uniqueId: "UID",
  },
  {
    customer: "Customer6",
    customerName: "CustomerName-6",
    phoneNumber: "9876543210",
    email: "company@gmail.com",
    fullName: "FullName",
    location: "singapore",
    dob: "dd-mm-yy",
    uniqueId: "UID",
  },
  {
    customer: "Customer7",
    customerName: "CustomerName-7",
    phoneNumber: "9876543210",
    email: "company@gmail.com",
    fullName: "FullName",
    location: "singapore",
    dob: "dd-mm-yy",
    uniqueId: "UID",
  },
];
