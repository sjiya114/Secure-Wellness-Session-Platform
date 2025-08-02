import React from 'react'
import bannerImage from '../assets/banner.png'
function Contact() {
  return (
    <div className='mx-20 mt-40 flex flex-col '>
       <h1 className='text-3xl pt-5 font-serif  font-bold text-black text-center'>Contact Us</h1>
       <div className='flex flex-row max-md:flex-col space-y-8 pt-10 space-x-10'>
         <div className='w-1/4 max-md:w-full'>
           <img src={bannerImage} className='rounded-lg' alt="image" />
         </div>
         <div className='flex flex-col text-gray-700 w-3/4 max-md:w-full'>
           <h1 className='font-bold text-black'>OUR OFFICE</h1>
           <p>54709 New Street</p>
           <p>Raisen,M.P.</p>
           <p>Number:9856875645</p>
           <p>Email:sharma24@gmail.com</p>
           <h1 className='font-bold pt-4 text-black' >CAREERS AT WELLNESS PLATFORM</h1>
           <p className='pb-4'>Learn more about our team and job opening</p>
           <button className='border-1 w-fit px-1 py-1 border-gray-700 rounded-md'>Explore More</button>
         </div>
       </div>
    </div>
  )
}
export default Contact
