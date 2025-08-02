import React from 'react'
import { rawData } from '../../assets/assets'
import { useEffect } from 'react'
import { AppContext } from '../../context/AppContext'
import { useContext } from 'react'
import Session from '../../components/Session'
function PublishedSession() {
    const {userSession,getUserSession}=useContext(AppContext);
       useEffect(()=>{
         getUserSession();
       },[]);
  return (
     <div className='max-w-screen-xl mx-auto  flex flex-row flex-wrap justify-between max-xl:mx-10 space-y-10  mt-10'>
           {userSession.map((data)=>(
            data.status==="published" && <Session title={data.title} description={data.description} date={data.date} status={data.status} profile={data.profile} time={data.time}  />
           ))}
        </div>
  )
}

export default PublishedSession
