import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {ADD} from "../../redux/actions/action"

export default function Repas() {
  const [data, setData] = useState([]);
  const [produit, setProduit] = useState([]);
  const [images, setImages] = useState([]);
  const dispatch = useDispatch();

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
    const get_produit = await axios.get(
      `${process.env.REACT_APP_API_URL}/manager/produit`
    );
    setProduit(get_produit.data.produit);
  };


  
  /* Send is a function that takes an event as an argument and dispatches an action to the reducer. */
  const Send = (e) => {
    dispatch(ADD(e))
  }


  return (
    <div className="bg-white">
      <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {produit.map((p) => (
            <div className="bg-white border rounded-lg hover:shadow-md">
              <div className="w-full overflow-hidden bg-gray-200 rounded-lg">
                <img className="rounded-t-lg hover:opacity-75"
                  style={{ 'background-attachment': 'fixed', 'background-position': 'center', 'background-size': 'cover' }}
                  src={process.env.REACT_APP_API_URL + '/' + p.image}
                  alt={p.image}
                />
              </div>
              <div className="p-2">
                <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">{p.title}</h5>
                <p className="flex gap-1 mb-1 font-normal text-gray-700 align-center">Price: <span className="font-bold">{p.price} DH</span></p>

                <p className="mb-1 text-sm text-gray-700">{p.description}</p>
              </div>
              <div className="flex justify-center my-2">
                <button type="button" onClick={() =>Send(p)} className="px-10 py-2 text-center text-white rounded bg-amber-500">Add To Card</button>
              </div>
            </div>
          ))}
        </div>
      </div >
    </div >
  );
}
