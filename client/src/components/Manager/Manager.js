import React from 'react'
import Sidebar from './Sidebar'
import Livreur from '../Livreur/Livreur'
function Manager() {
  return (
    <div className="flex w-screen">
      <Sidebar />
      <main className="h-screen w-full"> 
        <Livreur/>
      </main>
    </div>
  )
}

export default Manager