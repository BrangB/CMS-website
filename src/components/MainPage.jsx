import React from 'react'
import {  AiOutlineMenu } from "react-icons/ai";
import { HiChevronRight } from "react-icons/hi"
import { FaTimes,FaBook} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from 'react';

function MainPage() {
  const [navControl, setNavControl] = useState(false);
  const [open, setOpen] = useState(true)
  const [activeNav, setActiveNav] = useState(1);

  const handlerNav = () => {
    setNavControl(navControl => !navControl)
  }
  return (
    <div className='w-full h-screen bg-[#F8FAFB] relative'>
      <div className='absolute top-5 left-8 rounded-full p-2 z-10 bg-white xsm:block lg:hidden hover:bg-[#dee9f7] duration-200' onClick={handlerNav}><AiOutlineMenu size={'25px'} /></div>
        <div className={`miniNavigator fixed w-[100%] h-[100%]   bg-[#00000068] backdrop-blur-sm justify-center items-center ${navControl ? 'z-20 opacity-[1]': 'z-[-999] opacity-0'} xsm:flex lg:hidden transition duration-[400ms]`}>
          <div className='xsm:w-[200px] xsm:h-[250px] sm:w-[250px] sm:h-[300px] bg-[#ECECFE] xsm:p-2 relative flex flex-col items-center justify-center'>
            <div className="cross absolute top-0 m-auto bg-[#081D54] xsm:p-3 xsm:text-md sm:text-lg text-[#ECECFE]">
              <FaTimes onClick={() => handlerNav()} />
            </div>
            <ul>
              <Link to='/Dashboard' onClick={() => handlerNav()} ><li className='xsm:text-md sm:text-xl nav-title xsm:m-6 sm:m-8 cursor-pointer hover:text-[] font-bold text-[#585C65] text-center'>Dashboard</li></Link>
            </ul>
          </div>
      </div>
      <div className={`${open ? "w-72" : "w-24" } duration-300 h-screen p-5 pt-3 bg-[#081D54] xsm:hidden lg:block relative z-10`}>
            <div className={`absolute border-2 border-[#2e4694] cursor-pointer bg-white rounded-full p-1 -right-3 duration-300 top-20 ${open && 'rotate-180'}`} onClick={() => setOpen(!open)}><HiChevronRight color='#2e4694' size={'16px'} /></div>
            <div className='flex flex-col items-center'>
              <h1 className={`${!open && "scale-0"} text-white duration-300 md:text-lg xsm:hidden lg:block lg:text-2xl font-bold mb-[20px]`}>LOGO</h1>
              <hr className='bg-white h-[.8px] w-full' />
            </div>
            <ul className='flex flex-col pt-8'>
                <Link to='/Dashboard' >
                <li className={`flex items-center justify-start mb-3 py-3 md:mb-4 md:py-2 xsm:px-3 rounded-lg duration-200  cursor-pointer  hover:bg-[#EBF0FE] hover:text-[#2e4694] ${activeNav === 2 ? "bg-[#EBF0FE] text-[#2e4694]" : 'text-[#ffffff]'}` } onClick={() => setActiveNav(2)}>
                    <div className='md:mr-4 '><FaBook size={'20px'}/></div>
                    <p className={`xsm:text-sm lg:text-[1rem] duration-300 ${!open && "hidden"}`}>Dashboard</p>
                  </li>
                </Link>
            </ul>
        </div>
        <div className={`fixed top-0 right-0 bg-white ${open ? 'xsm:w-[78.9%]' : 'xsm:w-[93%]' } duration-300  xsm:h-[60px] xsm:hidden lg:flex xsm:p-3 items-center justify-end z-0 shadow-sm`}>
          <input type="text" placeholder='Search...' className='text-black xsm:px-3 xsm:py-3 mr-4 xsm:text-sm md:text-md w-[250px] bg-[#e6eef1] rounded-md' />
        </div>
    </div>
  )
}

export default MainPage