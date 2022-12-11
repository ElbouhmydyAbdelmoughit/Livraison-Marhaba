import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import axios from "axios"
import { useState, useEffect } from "react"
import { MdOutlineDashboard, MdOutlineDeliveryDining } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { BiLogOut, BiUserCircle } from "react-icons/bi";
// import Generator from "../../helpes/Generator"
// import { ToastContainer } from "react-toastify"

function Produit() {
    const menus = [
        { name: "Dashboard", link: "/statistique", icon: MdOutlineDashboard },
        { name: "Commande", link: "/", icon: MdOutlineDeliveryDining },
        { name: "Payement", link: "/", icon: MdOutlineDeliveryDining },
        { name: "Users", link: "/", icon: BiUserCircle },
        { name: "logout", link: "/", icon: BiLogOut, margin: true },
    ];
    let [produit, setProduit] = useState([])
    useEffect(() => {
        try {
            getProduit()
            console.log()
        } catch (error) {
            console.log(error)
        }
    }, []);
    const getProduit = async () => {
        const get_produit = await axios.get(`${process.env.REACT_APP_API_URL}/manager/produit`)
        setProduit(get_produit.data.produit)
    }

    return (
        <div className="flex w-screen">
            <Sidebar menus={menus}/>
            <main className="w-full h-screen">
                <div className="relative w-full h-screen p-5 shadow-md overflw-x-auto sm:rounded-lg">
                    <div className="bg-white py-7">
                        <div className="flex items-center justify-between py-4">
                            <h1 className="ml-2">Meals</h1>
                            <input type="text" id="table-search-users" className="block w-40 p-2 pl-8 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Search For meal" />
                            <button className="flex px-4 py-1 mr-4 font-bold text-white border-2 rounded-md bg-amber-500 hover:text-amber-500 hover:bg-white border-amber-500">
                                {/* <IoIosAdd size={26} className="pt-1" /> */}
                                <span>Add Meal</span>
                            </button>
                        </div>
                        <table className="w-full text-sm text-center text-gray-500">
                            <thead className="text-gray-700 uppercase w-text-xs bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3">Title</th>
                                    <th scope="col" className="px-6 py-3">Categorie</th>
                                    <th scope="col" className="px-6 py-3">Description</th>
                                    <th scope="col" className="px-6 py-3">Price</th>
                                    <th scope="col" className="px-6 py-3"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {produit.map((p, i) => (
                                    <tr className="bg-white border-b hover:bg-gray-50" key={i}>
                                        <td className="w-4 p-4">{p.title}</td>
                                        <td className="w-4 p-4">{p.categorie}</td>
                                        <td className="w-4 p-4">{p.description}</td>
                                        <td className="w-4 p-4">{p.price}</td>
                                        <td className="w-4 p-4 text-gray-500">
                                            <AiOutlineEdit /><AiOutlineDelete/>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Produit