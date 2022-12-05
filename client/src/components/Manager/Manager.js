import React from 'react'
import Sidebar from './Sidebar'
function Manager() {
  return (
    <div className="flex w-screen">
      <Sidebar />
      <main className="h-screen w-full"> 
        hello world
      </main>
    </div>
  )
}

export default Manager