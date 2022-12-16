import React from 'react'
import food from '../../assets/images/food.png'
export default function Main() {
  return (
    <div className='bg-amber-500 h-[41rem] flex' id='home'>
        <div className='mt-48 ml-4 md:ml-20 lg:ml-8 '>
            <button className='btn bg-[#DC3535] text-white font-bold px-6 py-2 rounded-full'>New reduction</button>
            <p className='text-white text-4xl md:text-5xl lg:text-4xl font-serif py-1'>No more time wasting:</p>
            <p className='text-white text-4xl md:text-5xl lg:text-4xl font-serif'>No need to go out from Home</p>
            <p className='text-white text-4xl md:text-5xl lg:text-4xl font-serif py-1'>with +100 dishes</p>
            <p className='text-white text-4xl md:text-5xl lg:text-4xl font-serif'>Pick what you want,
            <br></br> anytime you want</p>    
        </div>
        <div className='hidden lg:block ml-32 '>
            <img className='h-5/6'
            src={food} 
            alt='food'
            />
        </div>
    </div>
  )
}
