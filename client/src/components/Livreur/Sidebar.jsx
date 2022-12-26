import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { MdOutlinePayment } from "react-icons/md";
import { BiHomeAlt } from "react-icons/bi";
import { TfiStatsUp } from "react-icons/tfi"
import { BiUserCircle } from "react-icons/bi";
export default function SidebarM() {
  const menus = [
    { name: "Home", link: "/", icon: BiHomeAlt },
    { name: "Command", link: "/Command", icon: MdOutlinePayment }
  ]

  return (
    <Sidebar menus={menus} />
  )
}
