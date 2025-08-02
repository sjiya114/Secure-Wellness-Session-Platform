import React from 'react'
import logo from '../assets/logo.png'
function Footer() {
  return (
    <>
     <div className='flex flex-col items-center  mx-auto max-lg:mx-10  justify-center mt-10'>
       <img src={logo} className='w-20 h-20'  alt="footer_image" />
       <p className='pb-4 border-b-2 border-emerald-950 font-semibold text-sm '>Our mission is to help you live a healthier, happier, and more balanced life. Explore expert-led sessions on yoga, meditation, fitness, and holistic wellness tailored to your lifestyle</p>
       <p className='py-4 text-sm font-normal'>wellness©2025. All rights reserved.</p> 
     </div>
    </>
  )
}

export default Footer
