import React from 'react'
import axios from "axios"
import { useState, useEffect } from "react"
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { BiReset } from "react-icons/bi";
import Generator from "../../helpes/Generator"
import { ToastContainer } from "react-toastify"
import SidebarM from './Sidebar';

function Produit() {
    const [produit, setProduit] = useState([])
    const [categorie, setCategorie] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [add_produit, setAddProduit] = useState({})

    useEffect(() => {
        try {
            getProduit()
        } catch (error) {
            console.log(error)
        }
    }, []);
    const getProduit = async () => {
        const get_produit = await axios.get(`${process.env.REACT_APP_API_URL}/manager/produit`)
        setProduit(get_produit.data.produit)
        const get_categorie = await axios.get(`${process.env.REACT_APP_API_URL}/manager/categorie`)
        setCategorie(get_categorie.data.categorie)
    }
    const onChange = (e) => {
        const value = e.target.value;
        setAddProduit({ ...add_produit, [e.target.name]: value });
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        const produit_add = await axios.post(`${process.env.REACT_APP_API_URL}/manager/add-produit`, add_produit)
        console.log(produit_add.data)
    };
    const deletProduit = async (id, status, e) => {
        e.preventDefault()
        const delete_produit = await axios.delete(`${process.env.REACT_APP_API_URL}/manager/delet-produit/${id}/${status}`)
        if (delete_produit.data.message) {
            Generator("success", delete_produit.data.message)
            window.location.reload(false);
        }
        else Generator("error", delete_produit.data)
    }

    return (
        <div className="flex w-screen">
            <SidebarM />
            <main className="w-full h-screen">
                <div className="relative w-full h-screen p-5 shadow-md overflw-x-auto sm:rounded-lg">
                    <div className="bg-white py-7">
                        <div className="flex items-center justify-between py-4">
                            <h1 className="ml-2 text-xl font-bold">Meals</h1>
                            <input type="text" id="table-search-users" className="block w-40 p-2 pl-8 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Search For meal" />
                            <button className="flex px-4 py-1 mr-4 font-bold text-white border-2 rounded-md bg-amber-500 hover:text-amber-500 hover:bg-white border-amber-500">
                                {/* <IoIosAdd size={26} className="pt-1" /> */}
                                <button type='button' onClick={() => setShowModal(true)}>Add Meal</button>
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
                                        <td className="w-4 p-4">{(p.categorie.length != 0) ? p.categorie[0].name : '---'}</td>
                                        <td className="w-4 p-4">{p.description}</td>
                                        <td className="w-4 p-4">{p.price} DH</td>
                                        <td className={`w-4 p-4 text-gray-500 ${!(p.status) ? 'hidden' : ''}`}>
                                            <div className='flex justify-evenly'>
                                                <button type='button' className='text-xl hover:text-amber-500'><AiOutlineEdit /></button>
                                                <button type='button' onClick={(e) => deletProduit(p._id, false, e)} className='text-xl hover:text-amber-500'><AiOutlineDelete /></button>
                                            </div>
                                        </td>
                                        <td className={`w-4 p-4 text-gray-500 ${(p.status) ? 'hidden' : ''}`}>
                                            <div className='flex justify-evenly'>
                                                <button type='button' onClick={(e) => deletProduit(p._id, true, e)} className='text-xl hover:text-amber-500'><BiReset /></button>
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
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                    <div className="relative w-auto max-w-3xl mx-auto my-6">
                        <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                            <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200 ">
                                <h3 className="text-3xl font-semibold">Add new meal</h3>
                                <button className="float-right p-1 ml-8 text-3xl font-semibold leading-none text-gray-300 bg-transparent border-0 outline-none opacity-1 focus:outline-none" onClick={() => setShowModal(false)}>
                                    <span className="block w-6 h-6 text-2xl text-gray-300 outline-none focus:outline-none hover:text-amber-500">x</span>
                                </button>
                            </div>
                            <div className="relative flex-auto px-6 py-2">
                                <form onSubmit={onSubmit} className="text-lg leading-relaxed text-slate-500">
                                    <div className="flex flex-col">
                                        <div>
                                            <label htmlFor="title" className='block mb-1 text-sm font-medium text-gray-900'>Title</label>
                                            <input type="text" value={add_produit.title} onChange={onChange} name="title" id="title" placeholder="Title" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
                                        </div>
                                        <div className='mt-2'>
                                            <label htmlFor="categorie" className='block mb-1 text-sm font-medium text-gray-900'>Categorie</label>
                                            <select onChange={onChange} name="categorie" id="categorie" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">
                                                <option value=''>Select categorie</option>
                                                {categorie.map((c, i) => (
                                                    <option value={c.name}>{c.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className='mt-2'>
                                            <label htmlFor="description" className='block mb-1 text-sm font-medium text-gray-900'>Description</label>
                                            <input type="text" value={add_produit.description} onChange={onChange} name="description" id="description" placeholder="Description" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
                                        </div>
                                        <div className='mt-2'>
                                            <label htmlFor="price" className='block mb-1 text-sm font-medium text-gray-900'>Price</label>
                                            <input type="text" value={add_produit.price} onChange={onChange} name="price" id="price" placeholder="Price" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
                                        </div>
                                        <div class="flex items-center justify-center w-full mt-3">
                                            <label htmlFot="dropzone-file" class="flex flex-col items-center justify-center w-full h-20 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                <div class="flex flex-col items-center justify-center">
                                                    <svg aria-hidden="true" class="w-10 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                                    <p class="text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                                </div>
                                                <input type="file" value={add_produit.image} onChange={onChange} name="image" id="dropzone-file" accept="image/png, image/jpeg, image/jpg" multiple class="hidden" />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center p-4 border-t border-solid rounded-b border-slate-200">
                                        <button type="submit" className="flex px-4 py-1 font-bold text-white border-2 rounded-md bg-amber-500 hover:text-amber-500 hover:bg-white border-amber-500">Add Meal</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
            <ToastContainer />
        </div>
    )
}

export default Produit