import React from 'react'
import { rawData } from '../../assets/assets'
import { data } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import { useEffect } from 'react'
import { useContext } from 'react'
import Session from '../../components/Session'

function AllSessions() {
   const {session,getAllSession}=useContext(AppContext);
    useEffect(()=>{
      getAllSession();
    },[]);
  return (
    <div className='max-w-screen-xl mx-auto  flex flex-row flex-wrap justify-between space-y-10 max-xl:mx-10  mt-10'>
       {session.map((data)=>(
        <Session title={data.title} description={data.description} date={data.date} status={data.status} profile={data.profile} time={data.time}  />
       ))}
    </div>
  )
}

export default AllSessions
