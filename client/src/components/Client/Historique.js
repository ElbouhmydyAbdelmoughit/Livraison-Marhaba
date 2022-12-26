import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineShoppingCart, AiOutlineShopping } from "react-icons/ai";
import { FaHistory } from "react-icons/fa";
import axios from "axios";

export default function Client() {
  const menus = [
    { name: "Home", link: "/", icon: MdOutlineDashboard },
    { name: "Produit", link: "/", icon: AiOutlineShoppingCart },
    { name: "Cart", link: "/Cart", icon: AiOutlineShopping },
    { name: "Historique", link: "/Historique", icon: FaHistory },
  ];

  const [history, setHistory] = useState([]);
  useEffect(() => {
    try {
      getHistory();
    } catch (error) {
      console.log(error);
    }
  }, [history]);

  const getHistory = async () => {
    const get_produit = await axios.get(
      `${
        process.env.REACT_APP_API_URL
      }/client/historique/${localStorage.getItem("token")}`
    );
    setHistory(get_produit.data.command);
  };

  return (
    <div className="flex w-screen">
      <Sidebar menus={menus} />
      <main className="w-full h-screen">
        <div className="relative w-full h-screen p-5 shadow-md overflw-x-auto sm:rounded-lg">
          <div className="bg-white py-7">
            <div className="flex items-center justify-between py-4">
              <h1 className="ml-2 text-xl font-bold">Meals</h1>
              <input
                type="text"
                id="table-search-users"
                className="block w-40 p-2 pl-8 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                placeholder="Search For meal"
              />
            </div>
            <table className="w-full text-sm text-center text-gray-500">
              <thead className="text-gray-700 uppercase w-text-xs bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Livreur
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Produit
                  </th>
                  <th scope="col" className="px-6 py-3">
                    price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    quantity
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {history.map((h, i) => (
                  <tr className="bg-white border-b hover:bg-gray-50" key={i}>
                    <td className="w-4 p-4">{h.livreur[0].username}</td>
                    <td className="w-4 p-4">{h.produit[0].title}</td>
                    <td className="w-4 p-4">{h.produit[0].price} DH</td>
                    <td className="w-4 p-4">{h.produit[0].quantity}</td>
                    <td className="w-4 p-4">{(h.produit[0].quantity)*(h.produit[0].price)} DH</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
