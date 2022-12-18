import React from 'react'
import axios from "axios"
import { useState, useEffect } from "react"
import Sidebar from './Sidebar'

function Payment() {
    const [payment, setPayment] = useState([])
    useEffect(() => {
        try {
            getPayment()
        } catch (error) {
            console.log(error)
        }
    }, []);
    const getPayment = async () => {
        const get_payment = await axios.get(`${process.env.REACT_APP_API_URL}/manager/payment`)
        setPayment(get_payment.data)
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
                                    <th scope="col" className="px-6 py-3">Adresse</th>
                                    <th scope="col" className="px-6 py-3">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {payment.map((p, i) => (
                                    <tr className="bg-white border-b hover:bg-gray-50" key={i}>
                                        <td className="w-4 p-4">{p.client}</td>
                                        <td className="w-4 p-4">{p.adresse}</td>
                                        <td className="w-4 p-4">{p.price}</td>
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

export default Payment