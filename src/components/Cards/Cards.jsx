import React from 'react'
import { FaHeart, FaPlus } from 'react-icons/fa'
import Button from '../Button/Button'

const Cards = ({image,name,price}) => {
    return (
        <div className='bg-zinc-100 p-5 rounded-2xl'>
            {/* Card Icons */}
            <div className='flex justify-between items-center'>
                <span className='text-3xl text-zinc-300'>
                    <FaHeart />
                </span>
                <button className='bg-gradient-to-b from-orange-400 to-orange-500 text-white text-xl rounded-lg p-3 items-center'>
                    <FaPlus />
                </button>
            </div>

            {/* Card Image */}
            <div className='w-full h-60 items-center flex bottom-0 mt-10 mb-10'>
                <img src={image} alt="" className='w-full h-full mx-auto object-contain'/>
            </div>
            {/* Card Content */}
            <div className='text-center'>
                <h3 className='text-2xl font-semibold '>
                   {name}
                </h3>
                <p className='text-2xl font-bold mt-4 mb-3'>
                    ${price.toFixed(2)}
                </p>
                <Button content="Shop Now" />
            </div>
        </div>
    )
}

export default Cards