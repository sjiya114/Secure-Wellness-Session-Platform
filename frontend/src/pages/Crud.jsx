import React from 'react'
import { NavLink } from 'react-router-dom'
import searchbar from '../assets/searchIcon.svg';
import { Outlet } from 'react-router-dom';
import { rawData } from '../assets/assets';
function Crud() {
  return (
    <div>
        <div className='mt-40 px-4 shadow-2xl shadow-black  py-5 max-w-screen-xl mx-auto  rounded-lg bg-emerald-950   max-xl:mx-10  '> 
         <div className='flex flex-row  space-y-3 max-md:flex-col max-md:px-2 justify-between max-w-screen-xl mx-auto '   >
         <NavLink to="/crud"  className="font-bold text-xl font-sans bg-green-200 shadow-2xl  border-2 border-emerald-800 rounded-lg px-2 py-2  tracking-tight"  >Create Session</NavLink>
         <NavLink to="/crud/edit" className="font-bold  text-xl font-sans  bg-green-200 shadow-2xl   border-2 border-emerald-800 rounded-lg px-2 py-2   tracking-tight"   >Edit Sessions</NavLink>
         <button className='bg-black border-2 border-white  rounded-lg w-[30%] max-md:w-full flex flex-row px-2 py-2 text-white' >
                 <img src={searchbar} alt="searchbar" />
                 <input type="text" className='text-white' placeholder='Search by title,tag or host...' />
               </button>
         </div>
        </div>
         <Outlet/>
         </div>
  )
}

export default Crud
