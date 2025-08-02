import React from 'react'

function Card({title,description,icon}) {
  return (
    <div className='flex flex-col hover:scale-120 bg-green-800  text-white   space-y-3 border-2 border-white shadow-2xl shadow-black  rounded-lg px-3 py-8 items-center justify-center'>
     <img src={icon} className='w-12 h-12' alt="icon" />
     <h1 className='font-bold text-xl font-serif'>{title}</h1>
     <p className='text-sm'>{description}</p>
    </div>
  )
}

export default Card
