import { Link } from "react-router-dom";
import image from '../../assets/images/S1cd1579e3c2b4cc09c24c28ec64581af5.png_.webp'
import logo from "../../assets/images/logo.png";
import {HiMenuAlt3} from "react-icons/hi"
import {reactLocalStorage} from "reactjs-localstorage"

const Cart = () => {

  const mealData = JSON.parse(reactLocalStorage.get('mealData'))

  const test = false
  return (
    (mealData.length > 0)? 
    <div>
      <div>
      <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 shadow">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <Link to={"/"} class="flex items-center">
              <img src={logo} class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
          </Link>
          <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <HiMenuAlt3 className="text-2xl text-black"/>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to={"/"} class="block py-2 pl-3 pr-4 b  rounded md:bg-transparent text-blanck md:p-0 text-black hover:text-amber-600" aria-current="page">Home</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold my-4 ">Shopping Cart</h1>
      </div>
    </div>
    :
    <div>
      <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 shadow">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <Link to={"/"} class="flex items-center">
              <img src={logo} class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
          </Link>
          <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <HiMenuAlt3 className="text-2xl text-black"/>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to={"/"} class="block py-2 pl-3 pr-4 b  rounded md:bg-transparent text-blanck md:p-0 text-black hover:text-amber-600" aria-current="page">Home</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="text-center" style={{margin:"0px 0px 100px 0px"}}>
        <h1 className="text-4xl font-bold mt-4 mb-3">Shopping Cart</h1>
        <div className="text-center">
          <p className="">Your cart is currently empty</p>
        </div>
      </div>
      <div className="flex flex-col my-auto items-center" style={{width :"100h", height:"100vh"}}>
        <img src={image} className="w-48 h-48 mb-4" alt="image for null products"/>
        <Link to={"/"} className="bg-[#f59e0b] rounded-full py-2 px-20 mt-9 font-bold text-white hover:bg-[#000] hover:text-[#f59e0b] ">Browse Meals</Link>
      </div>
    </div>
  );
};

export default Cart;
