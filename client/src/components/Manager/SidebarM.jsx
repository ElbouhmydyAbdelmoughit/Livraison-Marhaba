import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { MdOutlineDashboard, MdOutlineDeliveryDining } from "react-icons/md";
import { BiLogOut, BiUserCircle } from "react-icons/bi";
export default function SidebarM() {
    const menus = [
        { name: "Dashboard", link: "/statistique", icon: MdOutlineDashboard },
        { name: "Commande", link: "/", icon: MdOutlineDeliveryDining },
        { name: "Payement", link: "/", icon: MdOutlineDeliveryDining },
        { name: "Users", link: "/", icon: BiUserCircle },
        { name: "logout", link: "/", icon: BiLogOut, margin: true },
    ];
  return (
    <Sidebar menus={menus}/>
  )
}
