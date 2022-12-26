import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { MdOutlineDashboard} from "react-icons/md";
import {AiOutlineShoppingCart, AiOutlineShopping} from "react-icons/ai";
import { FaHistory } from "react-icons/fa";
import Product from './Product'
export default function Client() {
  const menus = [
    { name: "Home", link: "/", icon: MdOutlineDashboard },
    { name: "Produit", link: "/", icon: AiOutlineShoppingCart },
    { name: "Cart", link: "/Cart", icon: AiOutlineShopping },
    { name: "Historique", link: "/Historique", icon: FaHistory },
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
