import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { MdOutlineDashboard} from "react-icons/md";
import {AiOutlineShoppingCart, AiOutlineShopping} from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
// import { Link } from "react-router-dom";
import Product from './Product'
export default function Client() {
  const menus = [
    { name: "dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "produit", link: "/", icon: AiOutlineShopping },
    { name: "cart", link: "/", icon: AiOutlineShoppingCart },
    { name: "parametre", link: "/", icon: FiSettings },
    { name: "logout", link: "/", icon: BiLogOut, margin: true },
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
