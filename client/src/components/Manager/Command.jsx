import React from 'react'
import axios from "axios"
import { useState, useEffect } from "react"
import Sidebar from './Sidebar'

function Command() {
    const [command, setCommand] = useState([])
    const [livreur, setLivreur] = useState([])
    useEffect(() => {
        try {
            getCommand()
        } catch (error) {
            console.log(error)
        }
    }, []);
    const getCommand = async () => {
        const get_command = await axios.get(`${process.env.REACT_APP_API_URL}/manager/command`)
        setCommand(get_command.data.command)
        setLivreur(get_command.data.livreur)
    }

    const onChange = (e) => {
        const value = e.target.value;
        // const get_command = await axios.get(`${process.env.REACT_APP_API_URL}/manager/command`)
    }

    return (
        <div className="flex w-screen">
            <Sidebar />
            <main className="w-full h-screen">
                <div className="relative w-full h-screen p-5 shadow-md overflw-x-auto sm:rounded-lg">
                    <div className="bg-white py-7">
                        <div className="flex items-center justify-between py-4">
                            <h1 className="ml-2 text-xl font-bold">Payments</h1>
                            <input type="text" id="table-search-users" className="block w-40 p-2 pl-8 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Search For meal" />
                        </div>
                        <table className="w-full text-sm text-center text-gray-500">
                            <thead className="text-gray-700 uppercase w-text-xs bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3">Client</th>
                                    <th scope="col" className="px-6 py-3">Livreur</th>
                                    <th scope="col" className="px-6 py-3">Produit</th>
                                    <th scope="col" className="px-6 py-3">Quantite</th>
                                    <th scope="col" className="px-6 py-3">Price</th>
                                    <th scope="col" className="px-6 py-3">Total</th>
                                    <th scope="col" className="px-6 py-3">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {command.map((c, i) => (
                                    <tr className="bg-white border-b hover:bg-gray-50">
                                        <td className="w-4 p-4">{c.client[0].username}</td>
                                        <td className="w-4 p-4">{(c.livreur) ? c.livreur[0].username :
                                            <select className='bg-gray-50' onChange={onChange} name="id">
                                                <option value=''>Livreur</option>
                                                {livreur.map((l) => (
                                                    <option value={l._id}>{l.username}</option>
                                                ))}
                                            </select>
                                        }</td>
                                        <td className="w-4 p-4">{c.produit[0].title}</td>
                                        <td className="w-4 p-4">{c.quantite}</td>
                                        <td className="w-4 p-4">{c.produit[0].price}</td>
                                        <td className="w-4 p-4">{c.total}</td>
                                        <td className="w-4 p-4">{c.status[0].name}</td>
                                        <td className="w-4 p-4">
                                            {(c.livreur) ? c.livreur[0].username :
                                                <div className='font-bold text-red-600 border-2 border-red-600 solide'>NEW</div>
                                            }
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main >
        </div >
    )
}

export default Command