import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { AiOutlineUser } from "react-icons/ai";

function Manager() {

  const card = [
    { name: "Users", number: 0, icon: AiOutlineUser },
    { name: "Commandes", number: 0, icon: '' },
    { name: "Payements", number: 0, icon: '' },
    { name: "Payements", number: 0, icon: '' },
  ];

  return (
    <div className="flex w-screen">
      <Sidebar />
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

export default Manager