import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import axios from "axios"
import { useState } from "react"
import Generator from "../../helpes/Generator"
import { ToastContainer } from "react-toastify"
import { AiOutlineUser } from "react-icons/ai"

function Manager() {

    const [user, setUser] = useState({})
    axios.get(`${process.env.REACT_APP_API_URL}/manager/get-user`)
            .then(e=>{
                setUser(e.data)
                console.log(user)
            })
            .catch(()=>{ console.log('Error') })

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
                <div className="relative w-full h-screen p-5 shadow-md overflw-x-auto sm:rounded-lg">
                    <div className="bg-white py-7">
                        <div className="flex items-center justify-between py-4">
                            <h1 className="ml-2">Users</h1>
                            <input type="text" id="table-search-users" className="block w-40 p-2 pl-8 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Search For user" />
                            <button className="flex px-4 py-1 mr-4 font-bold text-white border-2 rounded-md bg-amber-500 hover:text-amber-500 hover:bg-white border-amber-500">
                                {/* <IoIosAdd size={26} className="pt-1" /> */}
                                <span>Ajouter Livreur</span>
                            </button>
                        </div>
                        <table className="w-full text-sm text-center text-gray-500">
                            <thead className="text-gray-700 uppercase w-text-xs bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3">Username</th>
                                    <th scope="col" className="px-6 py-3">Email</th>
                                    <th scope="col" className="px-6 py-3">Role</th>
                                    <th scope="col" className="px-6 py-3">Activation</th>
                                    <th scope="col" className="px-6 py-3"></th>
                                </tr>
                            </thead>
                            <tbody>
                            {/* {user.map((user, index) => {
                                return (
                                    <tr className="bg-white border-b hover:bg-gray-50">
                                        <td className="w-4 p-4">User</td>
                                        <td className="w-4 p-4">User@gmail.com</td>
                                        <td className="w-4 p-4">client</td>
                                        <td className="w-4 p-4">true</td>
                                        <td className="w-4 p-4 text-gray-500">edit + ban</td>
                                    </tr>
                                );
                            })} */}
                                <tr className="bg-white border-b hover:bg-gray-50">
                                    <td className="w-4 p-4">User</td>
                                    <td className="w-4 p-4">User@gmail.com</td>
                                    <td className="w-4 p-4">client</td>
                                    <td className="w-4 p-4">true</td>
                                    <td className="w-4 p-4 text-gray-500">edit + ban</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Manager