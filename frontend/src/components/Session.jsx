import React from 'react'

function Session({title,description,date,time ,profile,status}) {
  return (
    <div className='flex flex-col  px-2 py-2 rounded-lg  shadow-2xl  shadow-gray-400 bg-sky-50 w-[400px] max-md:w-[400px] max-sm:w-full '>
        <div>
          <img src={profile} className='w-full h-80 rounded-lg ' alt="sessionlogo" />
        </div>
        <div className='flex flex-col px-2 py-2'>
            <h1 className=' font-bold text-2xl' >{title}</h1>
            <p className='font-semibold text-medium'>{description}</p>
             <p className='font-semibold text-medium'>{date}</p>
             <p className='font-semibold text-medium'>{time}</p>
             <button className='border-2 border-emerald-950 px-2 py-2 bg-green-300 text-emerald-950 w-fit rounded-lg'>{status}</button>
        </div>
    </div>
  )
}

export default Session
