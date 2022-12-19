import React from "react";
import rice from "../../assets/images/rice.jpg";
import cake from "../../assets/images/cake.jpg";
import plate from "../../assets/images/plate.jpg";
import ananas from "../../assets/images/ananas.jpg";
import axios from "axios";
import { BsCartPlus } from "react-icons/bs";
import { useEffect, useState } from "react";

export default function Repas() {
  const [data, setData] = useState([]);
  const [produit, setProduit] = useState([]);

  const handleClick = (product) => {
    data.push(product);
    console.log(data);
  };
  useEffect(() => {
    localStorage.setItem("produit", JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    try {
      getProduit();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getProduit = async () => {
    const get_produit = await axios.get(`${process.env.REACT_APP_API_URL}/manager/produit`);
    setProduit(get_produit.data.produit);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {produit.map((p) => (
            <a key={p.id} href={p.href} className="group" onClick={handleClick}>
              <div className="aspect-w-1 aspect-h-1 w-full h-72 overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img src={p.image} alt={p.image} className="h-full w-full object-cover object-center group-hover:opacity-75" />
              </div>
              <div className="flex mt-4 justify-between">
                <p className="mt-1 text-lg font-medium text-gray-900">{p.title}</p>
                <BsCartPlus />
              </div>
              {/* <p className="mt-1 text-sm">{p.categorie[0].name}</p> */}
              <p className="mt-1 text-sm text-gray-900">{p.description}</p>
              <p className="mt-1 text-lg font-medium text-gray-900">{p.price} DH</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
