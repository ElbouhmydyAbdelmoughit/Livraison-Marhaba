
import React, { useState } from "react";
import axios from "axios";


export default function Form() {


  const[phone,setPhone]= useState('')
  const[adress,setAdress]= useState('')
  const[city,setCity]= useState('')
  const[country,setCountry]= useState('')
  const[zip,setZip]= useState('')
  // let [full,setFull]=useState('')
  // setFull(full = (adress+' '+city+' '+country+' '+zip))
  const mode = 'cash on delivery'
  const client = localStorage.getItem('_id')
  const meal = JSON.parse(localStorage.getItem('mealData'))
  const price = meal[0].price
  const data ={phone,adress,mode,client,price}
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post(`${process.env.REACT_APP_API_URL}/client/cash`,data)
    .then((res)=>{
      console.log(res.data)
    })
    .catch((err)=>{console.log(err.msg)})
  }

  return (
    <div className="leading-loose">
      <form className="max-w-xl m-4 p-10 bg-white rounded shadow-xl" onSubmit={handleSubmit}>

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
        <div className="flex justify-center">
          <button className="border px-4 py-1 text-white tracking-wider bg-amber-500 rounded hover:bg-white hover:text-amber-500 hover:border-amber-500">Cash on delivery</button>
        </div>
      </form>
    </div>
  );
}
