import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { MdOutlineDashboard} from "react-icons/md";
import {AiOutlineShoppingCart, AiOutlineShopping} from "react-icons/ai";
import { FaHistory } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
// import { Link } from "react-router-dom";
import Product from './Product'
export default function Client() {
  const menus = [
    { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "Produit", link: "/", icon: AiOutlineShoppingCart },
    { name: "Cart", link: "/Cart", icon: AiOutlineShopping },
    { name: "Historique", link: "/", icon: FaHistory },
    { name: "Logout", link: "/", icon: BiLogOut, margin: true },
  ];
  return (
    <div className="flex w-screen">
    <Sidebar menus={menus}/>
    <main className="w-full h-screen"> 
      <Product/>
    </main>
  </div>
  )
}
