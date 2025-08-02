import React from 'react'
import Session from '../../components/Session'
import { rawData } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'
import { useEffect } from 'react'
import { useContext } from 'react'
function DraftSession() {
   const {userSession,getUserSession}=useContext(AppContext);
    useEffect(()=>{
      getUserSession();
    },[]);
  return (
     <div className='max-w-screen-xl mx-auto  flex flex-row flex-wrap justify-between space-y-10 max-xl:mx-10  mt-10'>
           {userSession.map((data)=>(
            data.status==="draft" && <Session title={data.title} description={data.description} date={data.date} status={data.status} profile={data.profile} time={data.time}  />
           ))}
        </div>
  )
}

export default DraftSession
