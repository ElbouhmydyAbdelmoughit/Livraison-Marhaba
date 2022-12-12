import React from 'react'
import {TbMailFast} from 'react-icons/tb'
import {IoFastFoodOutline} from 'react-icons/io5'
import {RiSecurePaymentLine} from 'react-icons/ri'
export default function Hero() {
  return (
    <div className='bg-white md:flex md:gap-32 mt-12 lg:gap-x-80 pb-24 pt-12'>
        <div className='flex flex-col items-center md:ml-8 lg:ml-64'>
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
  )
}
