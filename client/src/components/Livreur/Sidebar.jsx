import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { MdOutlineDashboard, MdOutlineDeliveryDining, MdOutlineNoMeals, MdOutlineCategory, MdOutlinePayment } from "react-icons/md";
import { TfiStatsUp } from "react-icons/tfi"
import { BiUserCircle } from "react-icons/bi";
export default function SidebarM() {
  const menus = [
    { name: "Statistique", link: "/statistique", icon: TfiStatsUp },
    { name: "Command", link: "/Command", icon: MdOutlinePayment }
  ]

  return (
    <Sidebar menus={menus} />
  )
}
