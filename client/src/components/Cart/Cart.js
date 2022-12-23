import { Link } from "react-router-dom";
import image from "../../assets/images/S1cd1579e3c2b4cc09c24c28ec64581af5.png_.webp";
import logo from "../../assets/images/logo.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { reactLocalStorage } from "reactjs-localstorage";

const Cart = () => {
  const mealData = JSON.parse(reactLocalStorage.get("mealData"));
  console.log(mealData)

  return mealData.length > 0 ? (
    <div className="flex flex-col">
      <div>
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 shadow">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <Link to={"/"} className="flex items-center">
              <img src={logo} className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
            </Link>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <HiMenuAlt3 className="text-2xl text-black" />
            </button>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link
                    to={"/"}
                    className="block py-2 pl-3 pr-4 b  rounded md:bg-transparent text-blanck md:p-0 text-black hover:text-amber-600"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="products_details">
        <div className="title col-auto mt-3 mb-7">
          <h1 className="text-center font-bold" style={{ fontSize: "40px" }}>
            Shopping Cart
          </h1>
        </div>
        <hr/>
        <div className="products mt-5 ml-5 px-3 py-5">
            {
              mealData.map((meal) => 
          <div className="product hover:shadow rounded py-5 px-5 my-5 bg-gray-100" style={{width:"50vw"}}>
                <div className="product flex">
                  <div className="image w-52">
                    <img src={process.env.REACT_APP_API_URL + '/' + meal.image} alt="" />
                  </div>
                  <div className="title flex flex-col ml-3">
                    <p className="font-bold"> {meal.title} </p>
                    <p className="font-normal text-gray-500 flex-wrap"> {meal.description} </p>
                    <p className="font-bold">Price : {meal.price} DHs</p>
                  </div>
                </div>
          </div>
            )}
            <hr />
            <button className="bg-amber-500 text-white py-2 px-10 rounded my-3"> Commande</button>
            <table className="hover:table-fixed">
              <thead>
                <tr>
                  <th>Song</th>
                  <th>Artist</th>
                  <th>Year</th>
                </tr>
              </thead>
            </table>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 shadow">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link to={"/"} className="flex items-center">
            <img src={logo} className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <HiMenuAlt3 className="text-2xl text-black" />
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to={"/"}
                  className="block py-2 pl-3 pr-4 b  rounded md:bg-transparent text-blanck md:p-0 text-black hover:text-amber-600"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="text-center" style={{ margin: "0px 0px 100px 0px" }}>
        <h1 className="text-4xl font-bold mt-4 mb-3">Shopping Cart</h1>
        <div className="text-center">
          <p className="">Your cart is currently empty</p>
        </div>
      </div>
      <div
        className="flex flex-col my-auto items-center"
        style={{ width: "100h", height: "100vh" }}
      >
        
        <img
          src={image} className="w-48 h-48 mb-4"/>
        <Link
          to={"/"}
          className="bg-[#f59e0b] rounded-full py-2 px-20 mt-9 font-bold text-white hover:bg-[#000] hover:text-[#f59e0b] "
        >
          Browse Meals
        </Link>
      </div>
    </div>
  );
};

export default Cart;