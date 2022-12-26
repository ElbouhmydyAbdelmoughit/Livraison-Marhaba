import React from "react";
import logo from "../../assets/images/logo.png";
import {Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import  Badge  from "@mui/material/Badge";
import {useSelector} from "react-redux"
import {reactLocalStorage} from "reactjs-localstorage"
import axios from "axios";

export default function Header() {
  const getData = useSelector((state) => state.cartreducer.carts)
  reactLocalStorage.set("mealData",JSON.stringify(getData))
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");

  const logout = async () => {
    await axios.get(`${process.env.REACT_APP_API_URL}/api/auth/logout`)
    localStorage.clear()
    window.location.reload(false)  
  }

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link  to={"/"} className="flex items-center">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="Marhaba logo" />
        </Link>
        <div className="flex justify-center items-center gap-x-8 md:order-2">
        {
          (role === "client")?

          <Link to={"/Cart"}>
            <Badge badgeContent={getData.length} color="error">
              <FaShoppingBag className="text-2xl text-black hover:text-amber-500" />
            </Badge>
          </Link>
          : ""
        }
        {
          (token) ?

          <Link onClick={logout}>
            <p className="btn text-white bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-amber-400 dark:hover:bg-amber-600 dark:focus:ring-amber-700">
              Logout
            </p>
          </Link>
          :
          <Link to={"/login"}>
            <p className="btn text-white bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-amber-400 dark:hover:bg-amber-600 dark:focus:ring-amber-700">
              Login
            </p>
          </Link>
        }
        </div>
        <div
          className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#home"
                className="block py-2 pr-4 pl-3 text-white bg-amber-600 rounded md:bg-transparent md:text-amber-600 md:p-0 dark:text-white"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-amber-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-amber-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-amber-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
            <li>
              <Link
                to={"/Statistique"}
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-amber-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
