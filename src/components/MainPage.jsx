import React from 'react'
import {  AiOutlineMenu } from "react-icons/ai";
import { HiChevronRight } from "react-icons/hi"
import { FaTimes,FaBook} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {Route, Routes} from 'react-router-dom'
import Dashboard from './Dashboard';
import Animation from './Animation';

function MainPage() {
  const [navControl, setNavControl] = useState(false);
  const [open, setOpen] = useState(true)
  const [activeNav, setActiveNav] = useState(1);
  const [ShowDefaultPage, setShowDefaultPage] = useState(true)

  const handlerNav = () => {
    setNavControl(navControl => !navControl)
    setShowDefaultPage(false)
  }
  return (
    <div className='w-full h-screen bg-[#e4ebee] relative flex'>
      <div className='absolute top-2 left-8 rounded-full md:p-2 xsm:p-2 z-10 bg-[#dee9f7] xsm:block lg:hidden hover:bg-[#b7cbe6] duration-200' onClick={handlerNav}><AiOutlineMenu size={'23px'} /></div>
      <div className={`miniNavigator fixed w-[100%] h-[100%]   bg-[#00000068] backdrop-blur-sm justify-center items-center ${navControl ? 'z-20 opacity-[1]': 'z-[-999] opacity-0'} xsm:flex lg:hidden transition duration-[400ms]`}>
          <div className='xsm:w-[200px] xsm:h-[250px] sm:w-[250px] sm:h-[300px] bg-[#ECECFE] xsm:p-2 relative flex flex-col items-center justify-center'>
            <div className="cross absolute top-0 m-auto bg-[#081D54] xsm:p-3 xsm:text-md sm:text-lg text-[#ECECFE]">
              <FaTimes onClick={() => handlerNav()} />
            </div>
            <ul>
              <Link to='/CMS-website/Dashboard' onClick={() => {handlerNav();}} ><li className='xsm:text-md sm:text-xl nav-title xsm:m-6 sm:m-8 cursor-pointer hover:text-[] font-bold text-[#585C65] text-center'>Dashboard</li></Link>
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
                <Link to='/CMS-website/Dashboard' >
                <li className={`flex items-center justify-start mb-3 py-3 md:mb-4 md:py-2 xsm:px-3 rounded-lg duration-200  cursor-pointer  hover:bg-[#EBF0FE] hover:text-[#2e4694] ${activeNav === 2 ? "bg-[#EBF0FE] text-[#192755]" : 'text-[#ffffff]'}` } onClick={() => {setActiveNav(2); setShowDefaultPage(false)}}>
                    <div className='md:mr-4 '><FaBook size={'20px'}/></div>
                    <p className={`xsm:text-sm lg:text-[1rem] duration-300 ${!open && "hidden"}`}>Dashboard</p>
                  </li>
                </Link>
            </ul>
        </div>
        <div className={` ${open ? 'md:w-[78.9%] lg:w-[87%]' : 'md:w-[93%] lg:w-[96%]' } xsm:w-full duration-300  xsm:h-screen xsm:flex flex-col  xsm:p-3 shadow-sm relative`}>
          <Routes>
              <Route path='/CMS-website/Dashboard' element={<Dashboard />} />
          </Routes>
          {ShowDefaultPage && <Dashboard />}
        </div>
    </div>
  )
}

export default MainPage