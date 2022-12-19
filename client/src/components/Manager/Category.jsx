import React from 'react'
import axios from "axios"
import { useState, useEffect } from "react"
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai"
import Sidebar from './Sidebar'

import Generator from "../../helpes/Generator"
import { ToastContainer } from "react-toastify"

function Category() {

    const [category, setCategory] = useState([])
    const [showModal, setShowModal] = useState(false);
    const [updatModal, setUpdatModal] = useState(false);
    const [name, setName] = useState({name: ""})
    const [updatName, setUpdatName] = useState({name: ""})

    useEffect(()=> {
        getCategory()
    }, [])
    const getCategory = async () => {
        const categorie = await axios.get('http://localhost:2000/manager/categorie')
        setCategory(categorie.data.categorie)
    }

    const postData = async (e) => {
        e.preventDefault()
        const add_categorie = await axios.post('http://localhost:2000/manager/add-categorie',{name})
        if (add_categorie.data.message) {
            Generator("success", add_categorie.data.message)
            setShowModal(false)
            setTimeout(() => { window.location.reload(false) }, "1000")
        }
        else Generator("error", add_categorie.data)
    }
    
    const onDelete = async (id,e) => {
        e.preventDefault()
        const delete_categorie = await axios.delete(`http://localhost:2000/manager/deleteCategorie/${id}`)
        if (delete_categorie.data.message) {
            Generator("success", delete_categorie.data.message)
            setShowModal(false)
            setTimeout(() => { window.location.reload(false) }, "1000")
        }
        else Generator("error", delete_categorie.data)
    }

    const updateCategorie = async (e) => {
        e.preventDefault()
        console.log(updatName)
        const update_categorie = await axios.put(`http://localhost:2000/manager/updateCategorie/${updatName._id}`, updatName)
        if (update_categorie.data.message) {
            Generator("success", update_categorie.data.message)
            setShowModal(false)
            setTimeout(() => { window.location.reload(false) }, "1000")
        }
        else Generator("error", update_categorie.data)
    }


    return (
        <div className="flex w-screen">
            <Sidebar />
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
                                {category.map((data, i) => (
                                    <tr className="bg-white border-b hover:bg-gray-50" key={i}>
                                        <td className="w-4 p-4">{data.name}</td>
                                        <td className="w-4 p-4 text-gray-500">
                                            <div className='flex justify-evenly'>
                                                <button type='button' button onClick={() => {setUpdatName(data);setUpdatModal(true)}} className='text-xl hover:text-amber-500'><AiOutlineEdit /></button>
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
                                        <button type='button' onClick={() => setUpdatModal(false)} className="block w-6 h-6 text-2xl text-gray-300 outline-none focus:outline-none hover:text-amber-500">x</button>
                                    </button>
                                </div>
                                <div className="relative flex-auto px-6 py-2">
                                    <form className="text-lg leading-relaxed text-slate-500">
                                        <div className="flex flex-col">
                                            <div className='mt-2'>
                                                <label htmlFor="categorie" className='block mb-1 text-sm font-medium text-gray-900'>Categorie</label>
                                                <input type="text" name="categorie" id="categorie" placeholder="Categorie"
                                                onChange={(e) => setName (e.target.value)}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-center p-4 border-t border-solid rounded-b border-slate-200">
                                            <button
                                                onClick={postData}
                                                className="flex px-4 py-1 font-bold text-white border-2 rounded-md bg-amber-500 hover:text-amber-500 hover:bg-white border-amber-500" type="submit">Add Category
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
            {updatModal ? (
                <>
                    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                        <div className="relative w-auto max-w-3xl mx-auto my-6">
                            <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200 ">
                                    <h3 className="text-3xl font-semibold">Update Category</h3>
                                    <button className="float-right p-1 ml-8 text-3xl font-semibold leading-none text-gray-300 bg-transparent border-0 outline-none opacity-1 focus:outline-none" onClick={() => setShowModal(false)}>
                                        <button type='button' onClick={() => setUpdatModal(false)} className="block w-6 h-6 text-2xl text-gray-300 outline-none focus:outline-none hover:text-amber-500">x</button>
                                    </button>
                                </div>
                                <div className="relative flex-auto px-6 py-2">
                                    <form className="text-lg leading-relaxed text-slate-500">
                                        <div className="flex flex-col">
                                            <div className='mt-2'>
                                                <label htmlFor="categorie" className='block mb-1 text-sm font-medium text-gray-900'>Categorie</label>
                                                <input type="text" value={updatName.name} onChange={(e)=>setUpdatName({ ...updatName, [e.target.name]: e.target.value })} name="name" id="categorie" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-center p-4 border-t border-solid rounded-b border-slate-200">
                                            <button
                                                onClick={updateCategorie}
                                                className="flex px-4 py-1 font-bold text-white border-2 rounded-md bg-amber-500 hover:text-amber-500 hover:bg-white border-amber-500" type="submit">Update Category
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
            <ToastContainer/>
        </div>
    )
}

export default Category