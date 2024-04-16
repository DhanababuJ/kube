// Icons
import { IoIosAddCircle } from "react-icons/io";
import { LuLayoutList } from "react-icons/lu";
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
    href: "/",
    icon: LuLayoutList,
    menu: "Company list"
  },
  {
    href: "/",
    icon: BiSolidOffer,
    menu: "Coupon master"
  },
  {
    href: "/",
    icon: MdLocalOffer,
    menu: "Coupons"
  },
];
