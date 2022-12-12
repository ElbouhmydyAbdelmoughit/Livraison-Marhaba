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

function Category() {
    const menus = [
        { name: "Dashboard", link: "/statistique", icon: MdOutlineDashboard },
        { name: "Commande", link: "/", icon: MdOutlineDeliveryDining },
        { name: "Payement", link: "/", icon: MdOutlineDeliveryDining },
        { name: "Users", link: "/", icon: BiUserCircle },
        { name: "logout", link: "/", icon: BiLogOut, margin: true },
    ];
    const [showModal, setShowModal] = useState(false);
    
    const [category, setCategory] = useState([])
    useEffect(()=> {
        axios.post('http://localhost:2000/manager/findCategorie')
        .then((response)=>{
            setCategory(response.data)
        })
    }, [])

    const setData = (data) => {
        let{id, name} = data;
        localStorage.setItem('id', id)
        localStorage.setItem('name', name)
    }
    
    const onDelete = (id,e) => {
        e.preventDefault()
        axios.delete(`http://localhost:2000/manager/deleteCategorie/${id}`)
        .then(()=>{
            // console.log('deleted success')
            window.location.reload();
            // getData()
        })

    }

    const getData = () => {
        axios.get('http://localhost:2000/manager/findCategorie')
        .then((getData) => {
            setCategory(getData.data)
        })
    }

    return (

        
        <div className="flex w-screen">
            <Sidebar menus={menus} />
            <main className="w-full h-screen">
                <div className="relative w-full h-screen p-5 shadow-md overflw-x-auto sm:rounded-lg">
                    <div className="bg-white py-7">
                        <div className="flex items-center justify-between py-4">
                            <h1 className="ml-2 text-xl font-bold">Category</h1>
                            <input type="text" id="table-search-users" className="block w-40 p-2 pl-8 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Search For meal" />
                            <button className="flex px-4 py-1 mr-4 font-bold text-white border-2 rounded-md bg-amber-500 hover:text-amber-500 hover:bg-white border-amber-500">
                                {/* <IoIosAdd size={26} className="pt-1" /> */}
                                <button type='button' onClick={() => setShowModal(true)}>Add Category</button>
                            </button>
                        </div>
                        <table className="w-full text-sm text-center text-gray-500">
                            <thead className="text-gray-700 uppercase w-text-xs bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3">Categorie</th>
                                    <th scope="col" className="px-6 py-3"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {category.map((data) => (
                                    <tr className="bg-white border-b hover:bg-gray-50">
                                        <td className="w-4 p-4">{data.name}</td>
                                        <td className="w-4 p-4 text-gray-500">
                                            <div className='flex justify-evenly'>
                                                <button type='button' onClick={() => setData(data)} className='text-xl hover:text-amber-500'><AiOutlineEdit /></button>
                                                <button type='button' onClick={(e) => onDelete(data._id,e)} className='text-xl hover:text-amber-500'><AiOutlineDelete /></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
            {showModal ? (
                <>
                    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                        <div className="relative w-auto max-w-3xl mx-auto my-6">
                            <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200 ">
                                    <h3 className="text-3xl font-semibold">Add New Category</h3>
                                    <button className="float-right p-1 ml-8 text-3xl font-semibold leading-none text-gray-300 bg-transparent border-0 outline-none opacity-1 focus:outline-none" onClick={() => setShowModal(false)}>
                                        <span className="block w-6 h-6 text-2xl text-gray-300 outline-none focus:outline-none hover:text-amber-500">x</span>
                                    </button>
                                </div>
                                <div className="relative flex-auto px-6 py-2">
                                    <form className="text-lg leading-relaxed text-slate-500">
                                        <div className="flex flex-col">
                                            <div className='mt-2'>
                                                <label htmlFor="categorie" className='block mb-1 text-sm font-medium text-gray-900'>Categorie</label>
                                                <input type="text" name="categorie" id="categorie" placeholder="Categorie"
                                                onChange={(e) => setCategory (e.target.value)}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
                                            </div>
                                            <div class="flex items-center justify-center w-full mt-3">
                                                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-20 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                    <div class="flex flex-col items-center justify-center">
                                                        <svg aria-hidden="true" class="w-10 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                                        <p class="text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                                    </div>
                                                    <input id="dropzone-file" type="file" accept="image/png, image/jpeg, image/jpg" multiple class="hidden" />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-center p-4 border-t border-solid rounded-b border-slate-200">
                                            <button
                                            //  onClick={dataCategory}
                                             className="flex px-4 py-1 font-bold text-white border-2 rounded-md bg-amber-500 hover:text-amber-500 hover:bg-white border-amber-500" type="submit">Add Category</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </div>
    )
}

export default Category