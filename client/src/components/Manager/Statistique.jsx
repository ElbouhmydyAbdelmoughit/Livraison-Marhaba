import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import axios from 'axios'
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { BiLogOut, BiUserCircle } from "react-icons/bi";
import { useState, useEffect } from "react"
import { MdOutlineDashboard, MdOutlineDeliveryDining } from "react-icons/md";

function Statistique() {

  let [statistique, setStatistique] = useState([])
  useEffect(() => {
    try {
      getStatistique()
      console.log()
    } catch (error) {
      console.log(error)
    }
  }, []);
  const getStatistique = async () => {
    const get_statistique = await axios.get(`${process.env.REACT_APP_API_URL}/manager/statistique`)
    setStatistique(get_statistique.data)
  }

  const card = [
    { name: "Users", number: statistique.user.sum, icon: AiOutlineUser },
    { name: "Commandes", number: statistique.command.sum, icon: '' },
    { name: "Payements", number: statistique.payement.sum, icon: '' },
    { name: "Categories", number: statistique.categorie.sum, icon: '' },
    { name: "Produit", number: statistique.produit.sum, icon: '' }
  ];

  const menus = [
    { name: "Dashboard", link: "/statistique", icon: MdOutlineDashboard },
    { name: "Commande", link: "/", icon: MdOutlineDeliveryDining },
    { name: "Payement", link: "/", icon: MdOutlineDeliveryDining },
    { name: "Users", link: "/", icon: BiUserCircle },
    { name: "logout", link: "/", icon: BiLogOut, margin: true },
  ];

  return (
    <div className="flex w-screen">
      <Sidebar menus={menus} />
      <main className="w-full h-screen">
        <div class="flex flex-wrap mt-9 px-5">
          {card?.map((card, i) => (
            <div class="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
              <div class="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                <div class="flex-auto p-4">
                  <div class="flex flex-row -mx-3">
                    <div class="flex-none w-2/3 max-w-full px-3">
                      <div>
                        <p class="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">{card.name}</p>
                        <h5 class="mb-2 font-bold dark:text-white">{card.number}</h5>
                        <p class="mb-0 dark:text-white dark:opacity-60">
                          <span class="text-sm font-bold leading-normal text-emerald-500">+0%</span>
                        </p>
                      </div>
                    </div>
                    <div class="px-3 text-right basis-1/3">
                      {card.icon}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </main>
    </div>
  )
}

export default Statistique