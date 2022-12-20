import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { MdOutlineDashboard, MdOutlineDeliveryDining, MdOutlineNoMeals, MdOutlineCategory, MdOutlinePayment } from "react-icons/md";
import {TfiStatsUp} from "react-icons/tfi"
import { BiUserCircle } from "react-icons/bi";
export default function SidebarM() {
    const menus = [
        { name: "Statistique", link: "/statistique", icon: TfiStatsUp },
        { name: "Users", link: "/Users", icon: BiUserCircle },
        { name: "Produit", link: "/Produit", icon: MdOutlineNoMeals },
        { name: "Category", link: "/Category", icon: MdOutlineCategory },
        { name: "Command", link: "/Command", icon: MdOutlineDeliveryDining },
        { name: "Payement", link: "/Payement", icon: MdOutlinePayment },
    ]
    
  return (
    <Sidebar menus={menus}/>
  )
}
