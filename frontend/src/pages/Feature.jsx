import React from 'react'
import { cardData } from '../assets/assets'
import Card from '../components/Card'
import {motion} from 'framer-motion';

function Feature() {
  return (
    <div    className='max-w-screen-xl mt-20   mx-auto max-xl:mx-10  space-y-3 ' >
      <motion.p  animate={{opacity:1}} transition={{from:0,duration:3,repeat:Infinity}}  className='text-center font-bold text-xl'>Empower</motion.p>
      <motion.h1  animate={{opacity:1}}   transition={{from:0,duration:3,repeat:Infinity}}   className='text-center  font-bold text-4xl'>Explore Our Comprehensive Wellness Features</motion.h1>
      <motion.p   animate={{opacity:1}}  transition={{from:0,duration:3,repeat:Infinity}}  className='text-center text-sm'>Experience a seamless journey to wellness with our secure platform.From guided sessions to personalized 
        creations,we cater to your unique needs.
      </motion.p>
      <motion.div animate={{scale:'100%'}}  transition={{duration:5,from:'90%' ,repeat:Infinity }} className='flex flex-row flex-wrap  space-y-4  justify-between mt-20'>
        {cardData.map((data)=>(
        <Card title={data.title}   description={data.description} icon={data.icon}  />
       ))
       }
      </motion.div>
    </div>
  )
}

export default Feature
