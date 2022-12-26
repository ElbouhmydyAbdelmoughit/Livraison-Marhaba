import React, { useState } from "react";
import PayButton from "../Cart/PayButton";

export default function Form() {
  const cart = JSON.parse(localStorage.getItem("mealData"));
  const[phone,setPhone]= useState('')
  const[adress,setAdress]= useState('')
  const[city,setCity]= useState('')
  const[country,setCountry]= useState('')
  const[zip,setZip]= useState('')
  return (
    <div className="leading-loose">
      <form className="max-w-xl m-4 p-10 bg-white rounded shadow-xl" >
        <p className="text-amber-500 text-center text-2xl font-bold mb-6">Customer information</p>
        <div className="">
          <label className="block text-sm font-medium text-gray-900" htmlFor="cus_name">
            Phone
          </label>
          <input
            className="w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block"
            id="cus_name"
            name="phone"
            type="text"
            required=""
            placeholder="+212*********"
            aria-label="Name"
            value={phone}
            onChange={e=>setPhone(e.target.value)}
          />
        </div>
        <div className="mt-2">
          <label className=" block text-sm font-medium text-gray-900" htmlFor="cus_email">
            Address
          </label>
          <input
            className="w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block"
            id="cus_email"
            name="adress"
            type="text"
            required=""
            placeholder="Street"
            value={adress}
            onChange={e=>setAdress(e.target.value)}
          />
        </div>
        <div className="mt-2">
          <label className="text-sm block text-gray-600" htmlFor="cus_email">
            City
          </label>
          <input
            className="w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block"
            id="cus_email"
            name="city"
            type="text"
            required=""
            placeholder="City"
            value={city}
            onChange={e=>setCity(e.target.value)}
          />
        </div>
        <div className="inline-block mt-2 w-1/2 pr-1">
          <label className="block text-sm text-gray-600" htmlFor="cus_email">
            Country
          </label>
          <input
            className="w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block"
            id="cus_email"
            name="country"
            type="text"
            required=""
            placeholder="Country"
            value={country}
            onChange={e=>setCountry(e.target.value)}
          />
        </div>
        <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
          <label className="block text-sm text-gray-600" htmlFor="cus_email">
            Zip
          </label>
          <input
            className="w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block"
            id="cus_email"
            name="zip"
            type="text"
            required=""
            placeholder="Zip"
            value={zip}
            onChange={e=>setZip(e.target.value)}
          />
        </div>
        <p className="mt-4 text-gray-800 font-medium">Payment information</p>
        <div className="flex justify-between">
          <button className="border px-4 py-1 text-white tracking-wider bg-gray-500 rounded hover:bg-white hover:text-gray-500 hover:border-gray-500">Cash on delivery</button>
          <PayButton cartItems={cart} />
        </div>
      </form>
    </div>
  );
}
