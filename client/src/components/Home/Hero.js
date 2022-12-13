import React from 'react'
import {TbMailFast} from 'react-icons/tb'
import {IoFastFoodOutline} from 'react-icons/io5'
import {RiSecurePaymentLine} from 'react-icons/ri'
// import food from '../../assets/images/mozarela.jpg'
// import delivery from '../../assets/images/deliveryman.jpg'
// import mobile from '../../assets/images/mobile.jpg'
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
      {/* <div className='flex flex-col md:flex-row md:flex-wrap lg:flex-row  md:justify-center items-center gap-x-20 mt-8 gap-y-10 lg:gap-y-0 mb-12'>
      <div className='w-72 h-72'>
          <img 
            className='w-full h-full rounded-xl'
            src={mobile} 
            alt='mobile'         
          />
        </div>
        <div className='w-72 h-72'>
          <img 
            className='w-full h-full rounded-xl'
            src={food} 
            alt='food'         
          />
        </div>
        <div className='w-72 h-72 md:item-center'>
          <img 
          className='w-full h-full rounded-xl'
          src={delivery}
          alt='delivery'
          />
        </div>
      </div> */}
      <Repas />
    </div>
  )
}
