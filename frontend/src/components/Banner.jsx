import React, { useContext } from 'react'
import banner_img from '../assets/banner.png'
import { useNavigate } from 'react-router-dom'
import {motion, scale} from 'framer-motion';
import { AppContext } from '../context/AppContext';
function Banner() {
  const {token,logout}=useContext(AppContext);
  const navigate=useNavigate();
  return (
    <div className=' mt-50 max-w-screen-xl  flex flex-row  max-md:flex-col  mx-auto max-xl:mx-10 max-md:space-y-4   '>
      <div className='w-1/2 max-md:w-full'>
         <h1 className='text-5xl leading-tight font-bold '>Elevate Your Wellness Journey Today</h1>
         <p className='text-medium tracking-tight mt-6 mr-2'>Discover a world of wellness with our app where you can explore sessions tailored 
            to your needs.Join our community to create,share and enhane your wellness experience. 
         </p>
        {!token && <div className='flex mt-6 flex-row space-x-4'>
            <button onClick={()=>{navigate("/signup")}}   className='px-4 py-2 rounded-lg cursor-pointer hover:bg-green-700 border-2 border-emerald-950  bg-green-900 text-white  '>Register</button>
             <button  onClick={()=>{navigate("/login")}}  className='px-4 py-2 rounded-lg cursor-pointer hover:bg-green-700 border-2 border-emerald-950   bg-green-900 text-white'>Login</button>
            
         </div>}
         {token && <div onClick={()=>{logout()}}   className='flex mt-6 flex-row space-x-4'>  <button  className='px-4 py-2 rounded-lg cursor-pointer hover:bg-green-700 border-2 border-emerald-950  bg-green-900 text-white  '>LogOut</button>
          </div>}
      </div>
      <div className='w-1/2  max-md:w-full'>
        <motion.img className='rounded-lg shadow-2xl shadow-black '  animate={{opacity:0.9}} transition={{from:1,duration:2,repeat:Infinity}}  src={banner_img} alt="bannerimage" />
      </div>
    </div>
  )
}

export default Banner
