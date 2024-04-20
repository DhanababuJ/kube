// Icons
import { IoIosList } from "react-icons/io";
import { IoAddCircleOutline } from "react-icons/io5";

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
];
