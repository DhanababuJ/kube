// Icons
import { IoIosList } from "react-icons/io";
import { CiBarcode } from "react-icons/ci";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdOutlineLocalOffer } from "react-icons/md";

// Interfaces for constants
interface MenuItem {
  href: string;
  icon: any;
  menu: string;
}

// constants
export const menuItems: MenuItem[] = [
  {
    href: "/",
    icon: IoAddCircleOutline,
    menu: "Customer",
  },
  {
    href: "/company-list",
    icon: IoIosList,
    menu: "Company list",
  },
  {
    href: "/coupon-master",
    icon: CiBarcode,
    menu: "Coupon master",
  },
  {
    href: "/coupons",
    icon: MdOutlineLocalOffer,
    menu: "Coupons",
  },
];
