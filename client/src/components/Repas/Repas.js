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
    const get_produit = await axios.get(
      `${process.env.REACT_APP_API_URL}/manager/produit`
    );
    setProduit(get_produit.data.produit);
  };

  const dispatch = useDispatch();

  const Send = (e) =>{
    console.log(e)
  } 

  return (
    <div className="bg-white">
      <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {produit.map((p) => (
            <a key={p.id} href={p.href} className="group shadow-md rounded pb-3" onClick={handleClick}>
              <div className="aspect-w-1 aspect-h-1 w-full h-72 overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img 
                src={process.env.REACT_APP_API_URL+'/'+p.image}
                alt={p.image} className="h-full w-full object-cover object-center group-hover:opacity-75" />
              </div>
              <div className="flex mt-4 justify-between px-3">
                <p className="mt-1 text-lg font-medium text-gray-900">{p.title}</p>
                <BsCartPlus onClick={() => Send(p)} style={{fontSize:"1.7rem", cursor:"pointer"}} className="hover:text-amber-500"/>
              </div>
              {/* <p className="mt-1 text-sm">{p.categorie[0].name}</p> */}
              <p className="mt-1 text-sm text-gray-900 px-3">{p.description}</p>
              <p className="mt-1 text-lg font-medium text-gray-900 px-3">{p.price} DH</p>
            </a>
          ))}
        </div>
      </div >
    </div >
  );
}




// <a key={p.id} href={p.href} className="pb-3 rounded shadow-md group" onClick={handleClick}>
//               <div className="w-full overflow-hidden bg-gray-200 rounded-lg aspect-w-1 aspect-h-1 h-72 xl:aspect-w-7 xl:aspect-h-8">
//                 <img
//                 src={process.env.REACT_APP_API_URL+'/'+p.image}
//                 alt={p.image} className="object-cover object-center w-full h-full group-hover:opacity-75" />
//               </div>
//               <div className="flex justify-between px-3 mt-4">
//                 <p className="mt-1 text-lg font-medium text-gray-900">{p.title}</p>
//                 <BsCartPlus onClick={() => Send(p)} style={{fontSize:"1.7rem", cursor:"pointer"}} className="hover:text-amber-500"/>
//               </div>
//               {/* <p className="mt-1 text-sm">{p.categorie[0].name}</p> */}
//               <p className="px-3 mt-1 text-sm text-gray-900">{p.description}</p>
//               <p className="px-3 mt-1 text-lg font-medium text-gray-900">{p.price} DH</p>
//             </a>
