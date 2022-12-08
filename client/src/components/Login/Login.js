import React from "react";
import { useState } from "react";
// import { IoIosAdd } from "react-icons/io";
import Generator from "../../helpes/Generator";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import env from "react-dotenv";

export default function Login() {

    let email = ''
    let password = ''
    if(localStorage.getItem('email')) email = localStorage.getItem('email')
    if(localStorage.getItem('password')) password = localStorage.getItem('password')
    localStorage.clear()

    const [login, setLogin] = useState({
        email: email,
        password: password
    })

    const onChange = (e) => {
        const value = e.target.value;
        setLogin({...login, [e.target.name]: value})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`, login)
            .then(e=>{
                if(e.data.message) {
                    Generator('success', e.data.message)
                    localStorage.setItem('email', e.data.email)
                    localStorage.setItem('username', e.data.username)
                    localStorage.setItem('role', e.data.role)
                }
                else Generator('error', e.data)
            })
            .catch(()=>{ console.log('Error') })
    }

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-4xl font-bold text-center text-amber-500">Sign in</h1>
                        {/* <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" className="inline-block p-3 mx-1 text-xs font-medium leading-tight text-white uppercase transition duration-150 ease-in-out rounded-full shadow-md bg-amber-500 hover:bg-white hover:text-amber-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4">
                                <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                            </svg>
                        </button>
                        <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                            <p className="mx-4 mb-0 font-semibold text-center">OR</p>
                        </div> */}
                        <form onSubmit={onSubmit} className="space-y-4 md:space-y-6">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" value={login.email} onChange={onChange} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" value={login.password} onChange={onChange} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
                            </div>
                            <div className="flex items-center justify-between">
                                <a href="/Forgot-Password" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                            </div>
                            <button type="submit" className="w-full text-white bg-amber-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <a href="/Register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </section>
    );
}
