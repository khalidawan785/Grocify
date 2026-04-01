import React, { useEffect, useState } from 'react'
import { IoMdHeart } from "react-icons/io";
import { BiSolidShoppingBag } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { RiMenuFill } from "react-icons/ri";
import { RiMenu4Line } from "react-icons/ri";

const Navbar = () => {

  const[showMenu, setShowMenu] = useState(false)
  const[isScrolled,setIsScrolled] = useState(false)

  const toggleMenu =() =>{
    setShowMenu(!showMenu);
  }
  useEffect(()=> {

      const handleScroll =()=>{
          setIsScrolled(window.scrollY > 10 )
      }
      window.addEventListener('scroll', handleScroll);
      return()=> window.removeEventListener('scroll' , handleScroll)

  },[])

  return (
  <header className={`bg-white fixed top-0 right-0 left-0 z-50 ${isScrolled ? 'shadow-lg' : ''}`}>
    <nav className='max-w-[1400px] w-[95%] mx-auto md:h-[10vh] h-[10vh] flex justify-between items-center'>
        <a href='http://localhost:5173/' className='text-3xl font-bold'>
          Gr<span className='text-orange-500 uppercase'>O</span>cify
        </a>
        {/* Desktop Menu */}
        <ul className='md:flex items-center gap-x-15 hidden'>
          <li>
            <a href="#" className='font-semibold tracking-wider text-orange-500'>Home</a>
          </li>
          <li>
            <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About Us</a>
          </li>
          <li>
            <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a>
          </li>
          <li>
            <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact Us</a>
          </li>
        </ul>

        {/* Nav action*/}
        <div className='flex items-center gap-5'>
          {/* input field */}
          <div className='md:flex border-2 border-orange-500 rounded-full p-1 hidden' >
            <input type="text" name='text' id='text' placeholder='Search' autoComplete='off' className='flex-1 h-[4vh] px-3 focus:outline-none'/>
            <button className='bg-gradient-to-b from-red-600 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl cursor-pointer'>
              <FaSearch />
            </button>
          </div>
          <a href="#" className='text-zinc-800 text-2xl'>
            <IoMdHeart />
          </a>
          <a href="#" className='text-zinc-800 text-2xl'>
            <BiSolidShoppingBag />
          </a>

          {/* menu button for mobile */}
          <button onClick={toggleMenu} className='text-zinc-800 text-3xl md:hidden'>
          {showMenu ? <RiMenu4Line />  : <RiMenuFill/>}
          </button>

           <ul className={`flex flex-col gap-y-10 bg-orange-500/15 backdrop-blur-xl shadow-xl rounded-xl p-10 items-center gap-x-15 md:hidden absolute top-30 -left-full transform -translate-x-1/2 transition-all duration-800 ${showMenu ? 'left-1/2' : ""}`}>
              <li>
                <a href="#" className='font-semibold tracking-wider text-orange-500'>Home</a>
              </li>
              <li>
                <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About Us</a>
              </li>
              <li>
                <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a>
              </li>
              <li>
                <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact Us</a>
              </li>
              <li className='flex border-2 border-orange-500 rounded-full p-1 md:hidden' >
                <input type="text" name='text' id='text' placeholder='Search' autoComplete='off' className='md:flex-1 h-[6vh] flex-1 h-[6vh] px-3 focus:outline-none'/>
                <button onClick={toggleMenu} className='bg-gradient-to-b from-red-600 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl cursor-pointer'>
                  <FaSearch />
                </button>
              </li>
          </ul>

        </div>
    </nav>
  </header>
  )
}

export default Navbar