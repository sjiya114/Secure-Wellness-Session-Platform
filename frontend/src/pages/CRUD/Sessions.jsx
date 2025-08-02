import React, { useContext, useEffect } from 'react'
import { rawData } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom';
function Sessions() {
  const {userSession,getUserSession,publishSession}=useContext(AppContext);
  const navigate=useNavigate();
  useEffect(()=>{
    getUserSession();
  },[]);
  return (
    <div className='max-w-screen-lg mt-10 mx-auto flex flex-col space-y-8  max-xl:mx-10 '>
      {userSession.map((data)=>(
        <div className='flex flex-row flex-wrap space-y-2  justify-between border-4 border-gray-600 rounded-lg px-6 py-6'>
            <div className='flex flex-col space-y-2'> 
                <h1 className='font-bold text-lg'>{data.title}</h1>
                <p className='text-sm font-semibold'>{data.description}</p>
                <p className='text-sm font-semibold'>{data.time}</p>
                <p className='text-sm font-semibold'>{data.date}</p>
            </div>
            <div className='flex flex-col space-y-4'>
            <button  onClick={()=>{navigate("/crud/update",{state:{session:data}})}}    className='text-white  w-fit px-8 py-2 cursor-pointer bg-emerald-900 rounded-2xl text-sm'>Edit</button>
            {data.status==="draft" && <button onClick={()=>{publishSession(data._id)}}  className='text-white  w-fit px-8 py-2 cursor-pointer bg-emerald-900 rounded-2xl text-sm'>Publish</button>}
            </div> 
        </div>
      ))}
    </div>
  )
}

export default Sessions
