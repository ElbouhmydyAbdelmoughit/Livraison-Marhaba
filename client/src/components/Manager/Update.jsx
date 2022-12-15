import axios from "axios"
import { useState } from "react"
import { useParams } from "react-router-dom"



const Update = () => {

    const [form, setForm] = useState({})
    const { id } = useParams()
    
    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const onSubmitHandler = (e) =>{
        e.preventDedault()
        axios.put(`http://localhost:2000/manager/updateCategorie/${id}`, form)
        .then(res => {

        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <>
            <form 
            onSubmit={onSubmitHandler}
            >
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                    <div className="relative w-auto max-w-3xl mx-auto my-6">
                        <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                            <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200 ">
                                <h3 className="text-3xl font-semibold">Update Category</h3>
                                <button className="float-right p-1 ml-8 text-3xl font-semibold leading-none text-gray-300 bg-transparent border-0 outline-none opacity-1 focus:outline-none">
                                    <span className="block w-6 h-6 text-2xl text-gray-300 outline-none focus:outline-none hover:text-amber-500">x</span>
                                </button>
                            </div>
                            <div className="relative flex-auto px-6 py-2">
                                <form className="text-lg leading-relaxed text-slate-500">
                                    <div className="flex flex-col">
                                        <div className='mt-2'>
                                            <label htmlFor="categorie" className='block mb-1 text-sm font-medium text-gray-900'>Categorie</label>
                                            {/* <input type="hidden" value={localStorage.getItem('id')}/> */}
                                            <input type="text" name="categorie" id="categorie" placeholder="Categorie" 
                                            onChange={onChangeHandler}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center p-4 border-t border-solid rounded-b border-slate-200">
                                        <button
                                            className="flex px-4 py-1 font-bold text-white border-2 rounded-md bg-amber-500 hover:text-amber-500 hover:bg-white border-amber-500" type="submit">Update
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Update