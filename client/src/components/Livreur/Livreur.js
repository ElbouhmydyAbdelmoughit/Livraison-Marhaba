import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Generator from "../../helpes/Generator"
import { ToastContainer } from "react-toastify"

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
    const get_command = await axios.get(`${process.env.REACT_APP_API_URL}/livreur/get-command/${localStorage.getItem('token')}`)
    setCommand(get_command.data.command)
    setStatus(get_command.data.status)
  }

  const onClick = async (c, s) => {
    const status_command = await axios.post(`${process.env.REACT_APP_API_URL}/livreur/status-command`, { c, s })
    if (status_command.data.message) {
      Generator("success", status_command.data.message)
      setTimeout(() => { window.location.reload(false) }, "1000")
    }
    else Generator("error", status_command.data)
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
                  <th scope="col" className="px-6 py-3">Command</th>
                  <th scope="col" className="px-6 py-3">Client</th>
                  <th scope="col" className="px-6 py-3">Produit</th>
                  <th scope="col" className="px-6 py-3">Quantite</th>
                  <th scope="col" className="px-6 py-3">Price</th>
                  <th scope="col" className="px-6 py-3">Total</th>
                  <th scope="col" className="px-6 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {command.map((c, i) => (
                  <tr className="bg-white border-b hover:bg-gray-50" key={i}>
                    <td className="p-4">{c._id}</td>
                    <td className="p-4">{c.client[0].username}</td>
                    <td className="p-4">{c.produit[0].title}</td>
                    <td className="p-4">{c.quantite}</td>
                    <td className="p-4">{c.produit[0].price}</td>
                    <td className="p-4">{(c.produit[0].price) * (c.quantite)}</td>
                    <td className="flex justify-between p-4 align-center">
                      {status.map((s, i) => (
                        <button key={i} onClick={(e) => onClick(c._id, s._id)} className={`p-1 border-2 rounded-md border-amber-500 ${!(s.name === c.status[0].name) ? 'bg-amber-500 text-white' : 'border-amber-500 text-amber-500'}`}>{s.name}</button>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main >
      <ToastContainer />
    </div >
  );
}
