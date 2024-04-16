// Icons
import { IoIosAddCircle } from "react-icons/io";
import { FaClipboardList } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { MdLocalOffer } from "react-icons/md";

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
    icon: IoIosAddCircle,
    menu: "Customer"
  },
  {
    href: "/company-list",
    icon: FaClipboardList,
    menu: "Company list"
  },
  {
    href: "/coupon-master",
    icon: BiSolidOffer,
    menu: "Coupon master"
  },
  {
    href: "/coupons",
    icon: MdLocalOffer,
    menu: "Coupons"
  },
];
