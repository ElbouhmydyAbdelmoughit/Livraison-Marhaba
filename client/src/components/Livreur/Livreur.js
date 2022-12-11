import React from "react";
import { useState } from "react";
import axios from "../../api/axios";
import { ToastContainer } from "react-toastify";
import { IoIosAdd } from "react-icons/io";
import Generator from "../../helpes/Generator";
import env from "react-dotenv";

export default function Livreur() {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const data = { username, email };
  console.log("username :" + username, "email :" + email);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("data: " + data);
    axios
      .post(process.env.URL, data)
      .then((res) => {
        console.log(res.data);
        Generator("success", "Un email a été envoyé à votre compte");
      })
      .catch((err) => {
        Generator("error", err.message);
      });
  };
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg w-full h-screen">
      <div className="flex justify-between items-center py-4 bg-white dark:bg-gray-800">
        <div className="ml-2">
          <h1>Bonjour Admin</h1>
        </div>
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative mr-4">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></div>
          <input
            type="text"
            id="table-search-users"
            className="block p-2 pl-8 w-40 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search For user"
          />
        </div>
      </div>
      <div className="flex justify-between items-center py-4 bg-white dark:bg-gray-800 ">
        <h3 className="ml-2">Le tableau des livreurs</h3>
        <button
          className="bg-amber-500 flex text-white mr-4 px-4 py-1 rounded-md font-bold hover:text-amber-500 hover:bg-white border-2 border-amber-500"
          onClick={() => setShowModal(true)}
        >
          <IoIosAdd size={26} className="pt-1" />
          <span>Ajouter</span>
        </button>
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="py-3 px-6">
              Name
            </th>
            <th scope="col" className="py-3 px-6">
              Position
            </th>
            <th scope="col" className="py-3 px-6">
              Status
            </th>
            <th scope="col" className="py-3 px-6">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="p-4 w-4">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-table-search-1" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
            >
              {/* <img
              src={foodIcon}
              className="w-10 h-10 rounded-full"
              alt="image"
            /> */}
              <div className="pl-3">
                <div className="text-base font-semibold">Neil Sims</div>
                <div className="font-normal text-gray-500">
                  neil.sims@flowbite.com
                </div>
              </div>
            </th>
            <td className="py-4 px-6">React Developer</td>
            <td className="py-4 px-6">
              <div className="flex items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>{" "}
                Online
              </div>
            </td>
            <td className="py-4 px-6">
              {/* <!-- Modal toggle --> */}
              Edit user
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="p-4 w-4">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-2"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-table-search-2" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {/* <img
              className="w-10 h-10 rounded-full"
              src={foodIcon}
              alt="image"
            /> */}
              <div className="pl-3">
                <div className="text-base font-semibold">Bonnie Green</div>
                <div className="font-normal text-gray-500">
                  bonnie@flowbite.com
                </div>
              </div>
            </th>
            <td className="py-4 px-6">Designer</td>
            <td className="py-4 px-6">
              <div className="flex items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>{" "}
                Online
              </div>
            </td>
            <td className="py-4 px-6">
              {/* <!-- Modal toggle --> */}
              Edit user
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="p-4 w-4">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-2"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-table-search-2" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {/* <img
              className="w-10 h-10 rounded-full"
              src=""
              alt="Jese image"
            /> */}
              <div className="pl-3">
                <div className="text-base font-semibold">Jese Leos</div>
                <div className="font-normal text-gray-500">
                  jese@flowbite.com
                </div>
              </div>
            </th>
            <td className="py-4 px-6">Vue JS Developer</td>
            <td className="py-4 px-6">
              <div className="flex items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>{" "}
                Online
              </div>
            </td>
            <td className="py-4 px-6">
              {/* <!-- Modal toggle --> */}
              Edit user
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="p-4 w-4">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-2"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-table-search-2" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {/* <img
              className="w-10 h-10 rounded-full"
              src={foodIcon}
              alt="Jese image"
            /> */}
              <div className="pl-3">
                <div className="text-base font-semibold">Thomas Lean</div>
                <div className="font-normal text-gray-500">
                  thomes@flowbite.com
                </div>
              </div>
            </th>
            <td className="py-4 px-6">UI/UX Engineer</td>
            <td className="py-4 px-6">
              <div className="flex items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>{" "}
                Online
              </div>
            </td>
            <td className="py-4 px-6">
              {/* <!-- Modal toggle --> */}
              Edit user
            </td>
          </tr>
          <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="p-4 w-4">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-3"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-table-search-3" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {/* <img
              className="w-10 h-10 rounded-full"
              src={foodIcon}
              alt="Jese image"
            /> */}
              <div className="pl-3">
                <div className="text-base font-semibold">Leslie Livingston</div>
                <div className="font-normal text-gray-500">
                  leslie@flowbite.com
                </div>
              </div>
            </th>
            <td className="py-4 px-6">SEO Specialist</td>
            <td className="py-4 px-6">
              <div className="flex items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>{" "}
                Offline
              </div>
            </td>
            <td className="py-4 px-6">
              {/* <!-- Modal toggle --> */}
              Edit user
            </td>
          </tr>
        </tbody>
      </table>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t ">
                  <h3 className="text-3xl font-semibold">
                    Ajouter un nouveau Livreur
                  </h3>
                  <button
                    className="p-1 bg-transparent border-0 text-gray-300 opacity-1 float-right text-3xl leading-none font-semibold outline-none focus:outline-none ml-8"
                    onClick={() => setShowModal(false)}
                  >
                    <span className=" text-gray-300 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      x
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form
                    className="my-4 text-slate-500 text-lg leading-relaxed"
                    onSubmit={handleSubmit}
                  >
                    <div className="flex flex-col">
                      <div>
                        <label htmlFor="prenom" className="mb-2">
                          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Prenom
                          </span>
                        </label>
                        <input
                          type="text"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          name="prenom"
                          id="prenom"
                          placeholder="Inserer le prenom"
                          className=" block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mb-5 hover:border-2  hover:border-cyan-500"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="mb-2">
                          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Email
                          </span>
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          name="email"
                          id="email"
                          placeholder="Inserer l'email"
                          className=" block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mb-5 hover:border-2  hover:border-cyan-500"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button
                        className="bg-amber-500 text-white active:bg-amber-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                        // onClick={() => setShowModal(false)}
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <ToastContainer />
    </div>
  );
}
