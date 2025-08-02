import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import dropdown_icon from '../assets/dropdown_icon.svg'
import cross_icon from '../assets/cross_icon.png';
import { AppContext } from '../context/AppContext';
function Navbar() {
  const {token}=useContext(AppContext);
  const [hidden,setHidden]=useState(true);
  const [menu,setMenu]=useState(false);
  const [open,setOpen]=useState(false);
  const navigate=useNavigate();
  const MotionNavLink = motion(NavLink);
  return (
     <>
    <div className='flex max-lg:hidden min-xl:visible border-blue-950 border-4    items-center max-md:px-10 max-md:right-10 bg-white rounded-lg mt-4 px-4 hover:border-indigo-900 hover:text-white max-md:left-10 max-sm:flex-col  max-sm:space-y-4 justify-between mb-5 py-4 fixed top-0 right-20 left-20 shadow-2xl shadow-gray-400 text-shadow-black    '>
        <div  className='flex flex-row  justify-between'>
          <img onClick={()=>{navigate("/")}} src={logo} className='w-20 h-20 cursor-pointer' alt="" />
          <h1 className='mt-7 font-bold text-xl text-green-950  tracking-tight'>WELLNESS PLATFORM</h1>
        </div>
      <ul className='flex flex-col min-md:flex-row max-sm:space-y-4 space-x-6 text-green-950 font-bold text-xl'>
      <MotionNavLink  animate={{scale:1}}  className="cursor-pointer"  transition={{duration:1,from:0}}  to="/">
        <li >Home</li>
        <hr className='w-0.8 h-0.5 bg-black' />
      </MotionNavLink>
      <MotionNavLink  animate={{scale:1}}  transition={{duration:1,from:0}} className="cursor-pointer"  to={`${token?'/crud':'/login'}`}>
         <li >User Session Management</li>
        <hr className='w-0.8 h-0.5 bg-black' />
      </MotionNavLink>
      <MotionNavLink animate={{scale:1}} className="cursor-pointer" transition={{duration:1,from:0}} to="/dashboard">
         <li >Sessions</li>
        <hr className='w-0.8 h-0.5 bg-black' />
      </MotionNavLink>
      <MotionNavLink animate={{scale:1}} className="cursor-pointer"   transition={{duration:1,from:0}}    to="/contact">
         <li >Contact</li>
        <hr className='w-0.8 h-0.5 bg-black' />
      </MotionNavLink>
     
      </ul>
          </div>
          {/* mobile */}
     <div className='flex flex-col   min-xl:hidden  rounded-lg mt-4 px-4 hover:border-indigo-900 hover:text-white justify-between mb-5 py-4 fixed top-0 right-1 left-1 bg-white border-b-2  shadow-2xl shadow-black/60 border-b-gray-400   '>
        <div className='flex  flex-row justify-evenly'>
          <img onClick={()=>{navigate("/")}} src={logo} className='w-20 h-20 cursor-pointer' alt="" />
            <h1 className='mt-7 font-bold text-xl max-md:text-sm text-blue-950  tracking-tight'>WELLNESS PLATFORM</h1>
          <img onClick={()=>{setHidden(!hidden)}}  src={`${hidden?dropdown_icon:cross_icon}`} className='w-8 h-8 mt-2' alt=""/>
        </div>
        {!hidden  && < ul className='flex flex-col bg-white  items-center space-y-4  text-blue-900 font-bold text-xl'>
      <NavLink to="/">
        <li >Home</li>
        <hr className='w-0.8 h-0.5 bg-black' />
      </NavLink>
      <NavLink to={`${token?'/crud':'/login'}`}>
        <li>User Session Management</li>
        <hr className='w-0.8 h-0.5 bg-black' />
      </NavLink>
      <NavLink to="/dashboard">
        <li>Sessions</li>
        <hr className='w-0.8 h-0.5 bg-black' />
      </NavLink>
      <NavLink  to="/contact">
        <li>Contact</li>
        <hr className='w-0.8 h-0.5 bg-black' />
      </NavLink>
      </ul> 
}
                </div> 
           </>
  )
}

export default Navbar
