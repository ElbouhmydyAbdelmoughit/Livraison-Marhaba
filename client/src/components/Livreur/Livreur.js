import React from "react";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import Sidebar from "./Sidebar";

export default function Livreur() {
  const [command, setCommand] = useState([])
  const [status, setStatus] = useState([])

  useEffect(() => {
    try {
      get()
    } catch (error) {
      console.log(error)
    }
  }, []);
  const get = async () => {
    const get_command = await axios.get(`${process.env.REACT_APP_API_URL}/livreur/get_command/${localStorage.getItem('token')}`)
    // setCommand(get_command.data.command)
    // setStatus(get_command.data.status)
  }

  return (
    <div className="flex w-screen">
      <Sidebar />
      <main className="w-full h-screen">
        <div className="relative w-full h-screen p-5 shadow-md overflw-x-auto sm:rounded-lg">
          <div className="bg-white py-7">
            <div className="flex items-center justify-between py-4">
              <h1 className="ml-2 text-xl font-bold">Meals</h1>
              <input type="text" id="table-search-users" className="block w-40 p-2 pl-8 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Search For meal" />
            </div>
            <table className="w-full text-sm text-center text-gray-500">
              <thead className="text-gray-700 uppercase w-text-xs bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">Client</th>
                  <th scope="col" className="px-6 py-3">Produit</th>
                  <th scope="col" className="px-6 py-3">Quantite</th>
                  <th scope="col" className="px-6 py-3">Price</th>
                  <th scope="col" className="px-6 py-3">Total</th>
                  <th scope="col" className="px-6 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {/* {produit.map((p, i) => (
                  <tr className="bg-white border-b hover:bg-gray-50" key={i}>
                    <td className="w-4 p-4">{p.title}</td>
                    <td className="w-4 p-4">{(p.categorie.length != 0) ? p.categorie[0].name : '---'}</td>
                    <td className="w-4 p-4">{p.description}</td>
                    <td className="w-4 p-4">{p.price} DH</td>
                    <td className={`w-4 p-4 text-gray-500 ${!(p.status) ? 'hidden' : ''}`}>
                      <div className='flex justify-evenly'>
                        <button type='button' onClick={() => { setEditProduit(p); setShowModalEdit(true) }} className='text-xl hover:text-amber-500'><AiOutlineEdit /></button>
                        <button type='button' onClick={(e) => deletProduit(p._id, false, e)} className='text-xl hover:text-amber-500'><AiOutlineDelete /></button>
                      </div>
                    </td>
                    <td className={`w-4 p-4 text-gray-500 ${(p.status) ? 'hidden' : ''}`}>
                      <div className='flex justify-evenly'>
                        <button type='button' onClick={(e) => deletProduit(p._id, true, e)} className='text-xl hover:text-amber-500'><BiReset /></button>
                      </div>
                    </td>
                  </tr>
                ))} */}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <ToastContainer />
    </div>
  );
}
