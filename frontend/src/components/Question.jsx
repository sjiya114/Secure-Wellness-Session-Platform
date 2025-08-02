import React, { useState } from 'react'
import {motion} from 'framer-motion';
function Question({question,answer}) {
    const [open,setOpen]=useState(false);
  return (
    <div className='mx-10 pb-8 pt-4 border-b-2 border-gray-500 space-y-2'>
      <div className='flex flex-row justify-between'>
        <h1  className='text-white text-bold' >{question}</h1>
      <h1 onClick={()=>{setOpen(!open)}} className='text-white text-4xl cursor-pointer text-bold'>{open?'-':'+'}</h1>
      </div>
      {open && <motion.p initial={{opacity:0}} transition={{duration:1}} animate={{opacity:1}}  className='text-gray-400 font-semibold'  >{answer}</motion.p>}
    </div>
  )
}

export default Question
