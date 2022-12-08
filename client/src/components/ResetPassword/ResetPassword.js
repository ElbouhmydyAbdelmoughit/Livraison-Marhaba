import React from "react";
// import { useState } from "react";
// import { IoIosAdd } from "react-icons/io";
// import Generator from "../../helpes/Generator";
// import { ToastContainer } from "react-toastify";
// import axios from "axios";
// import env from "react-dotenv";

export default function ResetPassword() {

    return (
        <section class="bg-gray-50 dark:bg-gray-900">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-4xl font-bold text-center text-amber-500">Reset Password</h1>
                        <form class="space-y-4 md:space-y-6">
                            <div>
                                <label for="last_password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Password</label>
                                <input type="last_password" name="last_password" id="last_password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="••••••••" />
                            </div>
                            <div>
                                <label for="new_password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                                <input type="new_password" name="new_password" id="new_password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="••••••••" />
                            </div>
                            <div>
                                <label for="confirm_new_password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cofirm New Password</label>
                                <input type="confirm_new_password" name="confirm_new_password" id="confirm_new_password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="••••••••" />
                            </div>
                            <button type="submit" class="w-full text-white bg-amber-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
