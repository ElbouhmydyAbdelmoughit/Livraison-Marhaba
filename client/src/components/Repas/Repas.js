import React from 'react'
import rice from '../../assets/images/rice.jpg'
import cake from '../../assets/images/cake.jpg'
import plate from '../../assets/images/plate.jpg'
import ananas from '../../assets/images/ananas.jpg'
import {BsCartPlus} from 'react-icons/bs'
import { useEffect, useState } from 'react'

export default function Repas() {
const [data, setData] = useState([]);
const handleClick = (product)=>{
    data.push(product)
    console.log(data);
 
 }
useEffect(() => {
      localStorage.setItem('produit', JSON.stringify(data));
}, [data]);

const products = [
    {
        id: 1,
        name: 'Earthen Bottle',
        href: '#',
        price: '$48',
        imageSrc: rice,
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 2,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        imageSrc: plate,
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 3,
        name: 'Focus Paper Refill',
        href: '#',
        price: '$89',
        imageSrc: cake,
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 4,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: ananas,
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
        // More products...
    ]
      
return (
    <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>
      
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {products.map((product) => (
                <a key={product.id} href={product.href} className="group" onClick={handleClick} >
                    <div className="aspect-w-1 aspect-h-1 w-full h-72 overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                    <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                    </div>
                    <div className='flex mt-4 justify-between'>
                        <h3 className=" text-sm text-gray-700">{product.name}</h3>
                        <BsCartPlus 
                            
                            />
                    </div>
                    <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                </a>
                
                ))}
            </div>
        </div>
    </div>
)
}
