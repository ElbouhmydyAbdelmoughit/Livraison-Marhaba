import React from 'react'
import SidebarM from './SidebarM'
import Livreur from '../Livreur/Livreur'


function Manager() {

  return (
    <div className="flex w-screen">
      <SidebarM/>
      <main className="w-full h-screen"> 
        <Livreur/>
      </main>
    </div>
  )
}

export default Manager