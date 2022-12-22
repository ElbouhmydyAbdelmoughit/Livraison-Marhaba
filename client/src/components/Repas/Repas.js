import React from "react";
import rice from "../../assets/images/rice.jpg";
import cake from "../../assets/images/cake.jpg";
import plate from "../../assets/images/plate.jpg";
import ananas from "../../assets/images/ananas.jpg";
import axios from "axios";
import { BsCartPlus } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Repas() {

  const [data, setData] = useState([]);
  const [produit, setProduit] = useState([]);
  const [images, setImages] = useState([]);

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

  const dispatch = useDispatch()

  const Send = (e) => {
    console.log(e)
  }

  return (
    <div className="bg-white">
      <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {produit.map((p) => (
            <div className="bg-white border rounded-lg hover:shadow-md">
              <div className="w-full overflow-hidden bg-gray-200 rounded-lg aspect-w-1 aspect-h-1 h-72 xl:aspect-w-7 xl:aspect-h-8">
                <img className="rounded-t-lg hover:opacity-75"
                  src={process.env.REACT_APP_API_URL + '/' + p.image}
                  alt={p.image}
                />
              </div>
              <div className="p-4">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{p.title}</h5>
                <p className="mb-2 font-normal text-gray-700">{p.description}</p>
                <p className="mb-2 font-normal text-gray-500">{p.categorie[0].name}</p>
                <button type="button" className="inline-flex items-center px-3 px-12 py-2 text-white rounded ftext-center ont-medium ptext-sm bg-amber-500">
                  Add to card
                </button>
              </div>
            </div>
          ))}
        </div>
      </div >
    </div >
  );
}
