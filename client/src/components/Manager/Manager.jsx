import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Livreur from '../Livreur/Livreur'
import { MdOutlineDashboard, MdOutlineDeliveryDining } from "react-icons/md";
import { BiLogOut, BiUserCircle } from "react-icons/bi";

function Manager() {
  const menus = [
    { name: "Dashboard", link: "/statistique", icon: MdOutlineDashboard },
    { name: "Commande", link: "/", icon: MdOutlineDeliveryDining },
    { name: "Payement", link: "/", icon: MdOutlineDeliveryDining },
    { name: "Users", link: "/", icon: BiUserCircle },
    { name: "logout", link: "/", icon: BiLogOut, margin: true },
];
  return (
    <div className="flex w-screen">
      <Sidebar menus={menus}/>
      <main className="w-full h-screen"> 
        <Livreur/>
      </main>
    </div>
  )
}

export default Manager