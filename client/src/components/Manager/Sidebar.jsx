import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { MdOutlineDashboard, MdOutlineDeliveryDining } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
export default function SidebarM() {
    const menus = [
        { name: "Dashboard", link: "/statistique", icon: MdOutlineDashboard },
        { name: "Command", link: "/command", icon: MdOutlineDeliveryDining },
        { name: "Payement", link: "/payement", icon: MdOutlineDeliveryDining },
        { name: "Users", link: "/user", icon: BiUserCircle },
    ]
    
  return (
    <Sidebar menus={menus}/>
  )
}
