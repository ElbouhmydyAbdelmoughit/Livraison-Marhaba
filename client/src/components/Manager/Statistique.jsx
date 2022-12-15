import React from 'react'
import axios from 'axios'
import { AiOutlineUser } from "react-icons/ai";
import { useState, useEffect } from "react"
import SidebarM from './Sidebar';

function Statistique() {

  let [statistique, setStatistique] = useState([])
  useEffect(() => {
    try {
      getStatistique()
    } catch (error) {
      console.log(error)
    }
  }, []);
  const getStatistique = async () => {
    const get_statistique = await axios.get(`${process.env.REACT_APP_API_URL}/manager/`)
    setStatistique(get_statistique.data)
  }

  const card = [
    { name: "Users", number: statistique.user, icon: AiOutlineUser },
    { name: "Commandes", number: statistique.command, icon: '' },
    { name: "Payements", number: statistique.payement, icon: '' },
    { name: "Categories", number: statistique.categorie, icon: '' },
    { name: "Produit", number: statistique.produit, icon: '' }
  ];

  return (
    <div className="flex w-screen">
      <SidebarM />
      <main className="w-full h-screen">
        <div className="flex flex-wrap px-5 mt-9">
          {card?.map((card, i) => (
            <div className="w-full max-w-full px-3 mt-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4" key={i}>
              <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                <div className="flex-auto p-4">
                  <div className="flex flex-row -mx-3">
                    <div className="flex-none w-2/3 max-w-full px-3">
                      <div className='text-xl'>
                        <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase">{card.name}</p>
                        <p className="mb-2 font-bold text-amber-500">{card.number}</p>
                      </div>
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