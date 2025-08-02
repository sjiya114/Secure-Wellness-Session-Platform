import React from 'react'
import { faq } from '../assets/assets'
import Question from '../components/Question'

function FAQ() {
  return (
    <>
    <div   className=' max-w-screen-xl  mt-10 hover:scale-101  mx-auto max-xl:mx-10  pt-10 bg-[#0d0d30] rounded-lg '>
        <h1 className='text-5xl text-white font-bold text-center mb-10'>Frequently asked questions</h1>
        <div className='w-full flex flex-col'>
        {
        faq.map((faq)=>(
            <Question question={faq.question} answer={faq.answer}  />
        ))
        }
     </div>
    </div>
     
    </>
  )
}

export default FAQ
