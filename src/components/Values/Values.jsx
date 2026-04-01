import React from 'react'
import Heading from '../Heading/Heading'
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import basket from '../../assets/basket-full-vegetables.png'


const Values = () => {

    const leftValues=Value.slice(0,2).map(item=>{
        return(
            <div className='flex flex-row-reverse items-center gap-7' key={item.id}>
                <div>
                    <span className='flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full'>{item.icon}</span>
                </div>
                <div className='text-right'>
                    <h3 className='text-zinc-800 text-3xl font-bold'>
                        {item.title}
                    </h3>
                    <p className='text-zinc-600 mt-2'>
                        {item.descr}
                    </p>
                </div>
            </div>
        )
    })
       const rightValues=Value.slice(2).map(item=>{
        return(
           <div className='flex items-center gap-7' key={item.id}>
                <div>
                    <span className='flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full'>{item.icon}</span>
                </div>
                <div>
                    <h3 className='text-zinc-800 text-3xl font-bold'>
                        {item.title}
                    </h3>
                    <p className='text-zinc-600 mt-2'>
                        {item.descr}
                    </p>
                </div>
            </div>
        )
    })
  return (
    <section>
        <div className='md:max-w-[1400px] max-w-[95%] mx-auto md:py-20 py-0'>
            <Heading highlight="Our" heading="Value" />

            <div className='flex md:flex-row flex-col gap-5 mt-15'>
                {/* left values */}
                <div className='md:min-h-100 min-h-60 flex flex-col justify-between '> 
                        {leftValues}
                </div>
                {/* center image  */}
                <div className='md:flex md:w-1/2 w-full '>
                    <img src={basket} alt="" />
                </div >
                 {/* right values */}
                <div className='md:min-h-100 min-h-60 flex flex-col justify-between'>
                    {rightValues}
                </div>
            </div>

        </div>
    </section>
  )
}

export default Values


const Value=[

    {
    id: 1,
    title:'Trust',
    descr:'It is a long established fact that a reader will be distracted by the readable.',
    icon:<FaHeart />,
    },
    {
    id: 2,
    title:'Always Fresh',
    descr:'It is a long established fact that a reader will be distracted by the readable.',
    icon:<FaLeaf />,
    },
    {
    id: 3,
    title:'Food Safety',
    descr:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    icon:<FaShieldAlt />,
    },
    {
    id: 4,
    title:'100% Organic',
    descr:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    icon:<FaSeedling />,
    },
]