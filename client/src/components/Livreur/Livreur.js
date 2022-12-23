import React from "react";
import { useState } from "react";
// import { useParams } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";
import Generator from "../../helpes/Generator";
import { ToastContainer } from "react-toastify";
import axios from "axios";
// import env from "react-dotenv";

export default function Livreur() {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  let [users, setUsers] = useState([]);

  const data = { username, email };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("data: " + data);
    axios
      .post(`${process.env.REACT_APP_API_URL}/livreur/add-livreur`, data)
      .then((res) => {
        console.log(res.data);
        Generator("success", "Un email a été envoyé à votre compte");
      })
      .catch((err) => {
        Generator("error", err.message);
        console.log(err);
      });
  };
  axios
    .get(`${process.env.REACT_APP_API_URL}/manager/get-users`)
    .then((res) => {
      setUsers((users = res.data));
    })
    .catch((err) => {
      Generator("error".err.message);
    });

  const handleBan = (e) => {
    const id = e.target.value;
    e.preventDefault();
    axios
      .get(`${process.env.REACT_APP_API_URL}/manager/user/${id}`)
      .then((res) => {})
      .catch((err) => {
        Generator("error".err.message);
      });
  };
  return (
    <div className="relative w-full h-screen px-3 overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex items-center justify-between py-4 bg-white dark:bg-gray-800 ">
        <div className="ml-2">
          <h1>Bonjour Admin</h1>
        </div>
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative mr-4">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
          <input
            type="text"
            id="table-search-users"
            className="block w-40 p-2 pl-8 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search For user"
          />
        </div>
      </div>
      <div className="flex items-center justify-between py-4 bg-white dark:bg-gray-800 ">
        <h3 className="ml-2">Le tableau des livreurs</h3>
        <button className="flex px-4 py-1 mr-4 font-bold text-white border-2 rounded-md bg-amber-500 hover:text-amber-500 hover:bg-white border-amber-500" onClick={() => setShowModal(true)}>
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
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              Name & Email
            </th>
            <th scope="col" className="px-6 py-3">
              Role
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        {users.map((user, i) => (
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                <div className="pl-3">
                  <div className="text-base font-semibold">{user.username}</div>
                  <div className="font-normal text-gray-500">{user.email}</div>
                </div>
              </th>
              <td className="px-6 py-4">{user.roles[0].name}</td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div className={(user.status && "h-2.5 w-2.5 rounded-full bg-green-400 mr-2") || "h-2.5 w-2.5 rounded-full bg-red-500 mr-2"}></div> {(user.status && "Authorizde") || "Blocked"}
                </div>
              </td>
              <td className="px-6 py-4">
                <button
                  value={user._id}
                  onClick={handleBan}
                  className={
                    (user.status && "btn border bg-red-600 text-white rounded px-2 py-1 font-semibold hover: border-red-600 hover:bg-white hover:text-red-600") ||
                    "btn border bg-green-600 text-white rounded px-2 py-1 font-semibold hover: border-green-600 hover:bg-white hover:text-green-600"
                  }
                >
                  {(user.status && "Banne user") || "Unbanne user"}
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-auto max-w-3xl mx-auto my-6">
              {/*content*/}
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200 ">
                  <h3 className="text-3xl font-semibold">Ajouter un nouveau Livreur</h3>
                  <button
                    className="float-right p-1 ml-8 text-3xl font-semibold leading-none text-gray-300 bg-transparent border-0 outline-none opacity-1 focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="block w-6 h-6 text-2xl text-gray-300 outline-none focus:outline-none">x</span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative flex-auto p-6">
                  <form className="my-4 text-lg leading-relaxed text-slate-500" onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                      <div>
                        <label htmlFor="prenom" className="mb-2">
                          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Prenom</span>
                        </label>
                        <input
                          type="text"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          name="prenom"
                          id="prenom"
                          placeholder="Inserer le prenom"
                          className="block w-full py-2 pr-3 mb-5 bg-white border rounded-md shadow-sm border-slate-300 pl-9 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm hover:border-2 hover:border-cyan-500"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="mb-2">
                          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Email</span>
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          name="email"
                          id="email"
                          placeholder="Inserer l'email"
                          className="block w-full py-2 pr-3 mb-5 bg-white border rounded-md shadow-sm border-slate-300 pl-9 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm hover:border-2 hover:border-cyan-500"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-slate-200">
                      <button
                        className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button
                        className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-amber-500 active:bg-amber-600 hover:shadow-lg focus:outline-none"
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
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
      <ToastContainer />
    </div>
  );
}
