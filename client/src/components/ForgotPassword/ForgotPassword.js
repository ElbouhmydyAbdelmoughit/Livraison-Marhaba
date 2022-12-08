import React from "react";
import { useState } from "react";
// import { IoIosAdd } from "react-icons/io";
import Generator from "../../helpes/Generator";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import env from "react-dotenv";

export default function ForgetPassword() {

    const [forget, setForget] = useState({
        email: ''
    })

    const onChange = (e) => {
        const value = e.target.value;
        setForget({...forget, [e.target.name]: value})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}/api/auth/forgot-password`, forget)
            .then(e=>{
                if(e.data.message) {
                    Generator('success', e.data.message)
                }
                else Generator('error', e.data)
            })
            .catch(()=>{ console.log('Error') })
    }

    return (
        <section class="bg-gray-50 dark:bg-gray-900">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-4xl font-bold text-center text-amber-500">Forgot Password</h1>
                        <form onSubmit={onSubmit} class="space-y-4 md:space-y-6">
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" value={forget.email} onChange={onChange} name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" />
                            </div>
                            <button type="submit" class="w-full text-white bg-amber-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                            <p class="flex justify-between text-sm font-light text-gray-500">
                                <a href="/Login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</a>
                                <a href="/Register" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </section>
    );
}
