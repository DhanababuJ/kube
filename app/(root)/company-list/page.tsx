"use client";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import AddCompany from "@/components/CompanyList/index";
import { useAuth } from "@/app/providers/AuthContextProvider";

// Icons
import { FaBan } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { MdEditSquare } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";

export default function CompanyList() {
  const { uid } = useAuth();
  const [toggleAdd, setToggleAdd] = useState<boolean>(false);

  return (
    <>
      {uid ? (
        <div className="text-black px-8 py-5 h-screen overflow-y-scroll">
          <div className="flex justify-between items-center">
            <div>Company Management</div>

            <div
              onClick={() => setToggleAdd(true)}
              className="flex justify-center items-center gap-2 bg-main px-4 py-2 rounded-full"
            >
              <h1>Add Company</h1>
              <IoIosAddCircle className="text-2xl" />
            </div>
          </div>

          <div className="mt-8">
            <TableDemo />
          </div>

          <AnimatePresence>
            {toggleAdd && <AddCompany setToggleAdd={setToggleAdd} />}
          </AnimatePresence>
        </div>
      ) : (
        <div className="flex justify-center items-center gap-4 h-screen">
          <h1>Access Denied.</h1>
          <Link href="/login" className="underline">
            Go to Login
          </Link>
        </div>
      )}
    </>
  );
}

function TableDemo() {
  return (
    <Table>
      <TableHeader>
        <TableRow className="uppercase">
          <TableHead className="text-center">Company Name</TableHead>
          <TableHead className="text-center">Short Name</TableHead>
          <TableHead className="text-center">Location</TableHead>
          <TableHead className="text-center">Status</TableHead>
          <TableHead className="text-center">Discount Percentage</TableHead>
          <TableHead className="text-center">Daily Code</TableHead>
          <TableHead className="text-center">No.Of.Customers</TableHead>
          <TableHead className="text-center">Actions</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {/* Hardcoded company list */}
        {companies.map((company) => (
          <TableRow key={company.id}>
            <TableCell className="text-center">{company.name}</TableCell>
            <TableCell className="text-center">{company.shortName}</TableCell>
            <TableCell className="text-center">{company.location}</TableCell>
            <TableCell className="text-center">{company.status}</TableCell>
            <TableCell className="text-center">{company.discountPercentage}</TableCell>
            <TableCell className="text-center">{company.dailyCode}</TableCell>
            <TableCell className="text-center">{company.numOfCustomers}</TableCell>

            {/* Actions */}
            <TableCell className="text-center">
              <div className="flex justify-center items-center gap-4 text-xl">
                <div className="text-red-600 cursor-pointer" title="delete" >
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

const companies = [
  {
    "id": 1,
    "name": " Alpha",
    "shortName": "Alpha",
    "location": "Location One",
    "status": "Enable",
    "discountPercentage": "12",
    "dailyCode": "Code Alpha",
    "numOfCustomers": "105"
  },
  {
    "id": 2,
    "name": "Beta",
    "shortName": "Beta",
    "location": "Location Two",
    "status": "Disable",
    "discountPercentage": "18",
    "dailyCode": "Code Beta",
    "numOfCustomers": "120"
  },
  {
    "id": 3,
    "name": "Gamma",
    "shortName": "Gamma",
    "location": "Location Three",
    "status": "Enable",
    "discountPercentage": "15",
    "dailyCode": "Code Gamma",
    "numOfCustomers": "95"
  },
  {
    "id": 4,
    "name": "Delta",
    "shortName": "Delta",
    "location": "Location Four",
    "status": "Disable",
    "discountPercentage": "20",
    "dailyCode": "Code Delta",
    "numOfCustomers": "130"
  },
  {
    "id": 5,
    "name": "Epsilon",
    "shortName": "Epsilon",
    "location": "Location Five",
    "status": "Enable",
    "discountPercentage": "10",
    "dailyCode": "Code Epsilon",
    "numOfCustomers": "110"
  },
  {
    "id": 6,
    "name": "Zeta",
    "shortName": "Zeta",
    "location": "Location Six",
    "status": "Disable",
    "discountPercentage": "22",
    "dailyCode": "Code Zeta",
    "numOfCustomers": "140"
  },
  {
    "id": 7,
    "name": "Eta",
    "shortName": "Eta",
    "location": "Location Seven",
    "status": "Enable",
    "discountPercentage": "14",
    "dailyCode": "Code Eta",
    "numOfCustomers": "100"
  },
  {
    "id": 8,
    "name": "Theta",
    "shortName": "Theta",
    "location": "Location Eight",
    "status": "Disable",
    "discountPercentage": "19",
    "dailyCode": "Code Theta",
    "numOfCustomers": "125"
  },
  {
    "id": 9,
    "name": "iotaaa",
    "shortName": "Iota",
    "location": "Location Nine",
    "status": "Enable",
    "discountPercentage": "16",
    "dailyCode": "Code Iota",
    "numOfCustomers": "105"
  },
  {
    "id": 10,
    "name": "Kappa",
    "shortName": "Kappa",
    "location": "Location Ten",
    "status": "Disable",
    "discountPercentage": "21",
    "dailyCode": "Code Kappa",
    "numOfCustomers": "135"
  }
]

