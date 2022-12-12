import React from 'react'
import Sidebar from './Sidebar'
import Livreur from '../Livreur/Livreur'

function Manager() {
  return (
    <div className="flex w-screen">
      <Sidebar />
      <main className="w-full h-screen"> 
        <Livreur/>
      </main>
    </div>
  )
}

export default Manager