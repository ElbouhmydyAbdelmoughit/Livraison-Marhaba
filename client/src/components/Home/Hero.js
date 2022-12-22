import React from 'react'
import {TbMailFast} from 'react-icons/tb'
import {IoFastFoodOutline} from 'react-icons/io5'
import {RiSecurePaymentLine} from 'react-icons/ri'
import Repas from '../Repas/Repas'



export default function Hero() {

  return (
    <div className='pt-12'>
      <p className='text-center font-bold text-4xl' id='about'>About</p>
      <hr className="my-2 mx-auto w-48 h-1 bg-amber-400 rounded border-0 dark:bg-gray-700"></hr>
      <div className='bg-white md:flex md:justify-center md:gap-32 mt-12 lg:gap-x-80 pb-24 pt-4'>
          
          <div className='flex flex-col items-center'>
              <TbMailFast className="text-5xl mb-2"/>
              <p className='font-bold'>Fast delivery</p>
          </div>
          <div className='flex flex-col items-center my-12 md:my-0'>
              <IoFastFoodOutline className="text-5xl mb-2" />
              <p className='font-bold'>Various delicious food</p>
          </div>
          <div className='flex flex-col items-center'>
              <RiSecurePaymentLine className="text-5xl mb-2" />
              <p className='font-bold'>secure payment</p>
          </div>
      </div>
      <p className='text-center font-bold text-4xl' id='services'>Services</p>
      <hr className="my-2 mx-auto w-48 h-1 bg-amber-400 rounded border-0 dark:bg-gray-700"></hr>
      <Repas />
    </div>
  )
}
