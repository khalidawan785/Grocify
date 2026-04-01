import React from 'react'
import { FaSearch } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='bg-zinc-100 md:py-20 py-10'>
            <div className='flex flex-wrap md:max-w-[1400px] max-w-[95%] mx-auto md:gap-y-2 gap-y-8'>
                <div className='flex-1 md:basis-[300px] basis-[100%]'>
                    <a href='http://localhost:5173/' className='text-3xl font-bold'>
                        Gr<span className='text-orange-500 uppercase'>O</span>cify
                    </a>
                    <p className='text-zinc-600 mt-6 max-w-[350px]'>
                        Bled for a h.gh content of beneficial substances.
                        Our products are all fresh and healthy.
                    </p>
                    <p className='text-zinc-800 mt-6'>
                        2026 &copy; All Right Reserved
                    </p>
                </div>
                <ul className='md:flex-1 flex-1/3'>
                    <li>
                        <h5 className='text-zinc text-2xl font-bold'>
                            Company
                        </h5>
                    </li>
                    <li className='mt-6'>
                        <a href='#' className='text-zinc-800 hover:text-orange-500'>About</a>
                    </li>
                    <li className='mt-6'>
                        <a href='#' className='text-zinc-800 hover:text-orange-500'>FAQ'S</a>
                    </li>
                </ul>
                <ul className='flex-1'>
                    <li>
                        <h5 className='text-zinc text-2xl font-bold'>
                            Support
                        </h5>
                    </li>
                    <li className='mt-6'>
                        <a href='#' className='text-zinc-800 hover:text-orange-500'>Support Center</a>
                    </li>
                    <li className='mt-6'>
                        <a href='#' className='text-zinc-800 hover:text-orange-500'>Feedback</a>
                    </li>
                    <li className='mt-6'>
                        <a href='#' className='text-zinc-800 hover:text-orange-500'>Contact Us</a>
                    </li>
                </ul>
                <div className=''>
                    <h5 className='text-zinc text-2xl font-bold'>
                        Stay Connected
                    </h5>
                    <p className='mt-6 mb-6 text-zinc-600'>
                        Questions or Feedback?<br />
                        we'd love to hear from you.
                    </p>
                    <div className='md:flex border-2 border-orange-500 bg-white rounded-lg p-0 hidden' >
                        <input type="text" name='text' id='text' placeholder='Search' autoComplete='off' className='flex-1 h-[4vh] px-3 focus:outline-none' />
                        <button className='bg-gradient-to-b from-red-600 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded text-xl cursor-pointer'>
                            <FaSearch />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer