import React from 'react'
import upload_icon from '../../assets/upload_area.png'
import { useState } from 'react';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
function Edit() {
  const {state}=useLocation();
  const [draft,setDraft]=useState(false);
  const session=state.session || {};
 const [data, setData] = useState({
     title: session.title,
     description:session.description,
     tags:session.tags,
     image:session.profile,
     duration:session.duration,
     location:session.location,
     time:session.time,
     date:session.date,
     seats:session.seats,
     price:session.price,
     requirements:session.requirements,
   });
   const onChangeHandler = (e) => {
     e.preventDefault();
     if (e.target.name === "image")
       setData({ ...data, [e.target.name]: e.target.files[0] });
     else
       setData({ ...data, [e.target.name]: e.target.value });
   }
   const fileInput = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    const stats=draft?"draft":"published";
    let formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("tags", data.tags);
    formData.append("image", data.image);
    formData.append("duration", data.duration);
    formData.append("location", data.location);
    formData.append("time", data.time);
    formData.append("date", data.date);
    formData.append("seats", data.seats);
    formData.append("price", data.price);
    formData.append("requirements", data.requirements);
    formData.append("status",stats);
       const res = await axios.post("/session/my-sessions/save-draft", formData, {
        headers: { "Content-Type": "multipart/form-data" }, // Required for file uploads
      });
       console.log(res.data);
            if(res.data.success)
            {
               toast.success(res.data.message);
            }
  }
   return (
     <div className='mt-16 max-md:ml-4 max-md:mr-6 max-w-screen-xl mx-auto max-xl:mx-10  '>
       <h1 className='text-black font-bold font-serif text-4xl mb-10'>Edit Session</h1>
       <form id="form" onSubmit={handleSubmit} className='flex flex-col space-y-1 py-4  bg-white border-gray-400 px-8 rounded-md w-full border-2 ' action="">
         <div className='flex flex-row max-md:flex-col max-md:space-y-2 space-x-4'>
           <img src={data.image} className='w-40 h-40' alt="" />
           <input type="file" ref={fileInput} onChange={onChangeHandler} name='image' id='image' hidden />
           <label htmlFor="image" className='px-4 py-8'>Upload Session Image</label>
         </div>
         <div className='flex flex-row max-md:flex-col max-md:space-y-2 space-x-4'>
           <div className='flex flex-col  space-y-2'>
             <label htmlFor="">Title</label>
             <input className='border-1 w-80 px-2 py-1 border-gray-600 rounded-md' type="text" onChange={onChangeHandler} value={data.title} name="title" id="" />
           </div>
           <div className='flex flex-col  space-y-2' >
             <label htmlFor="">Requirements</label>
               <input onChange={onChangeHandler} value={data.requirements} name='requirements' className='border-1 w-80 py-1 border-gray-600 rounded-md' type="text" />
           </div>
           <div className='flex flex-col  space-y-2' >
             <label htmlFor="">Tags</label>
               <input onChange={onChangeHandler} value={data.tags} name='tags' className='border-1 w-80 py-1 border-gray-600 rounded-md' type="text" />
           </div>
         </div>
         <div className='flex flex-row max-md:flex-col max-md:space-y-2 space-x-4'>
           <div className='flex flex-col  space-y-2'>
             <label htmlFor="">Date</label>
             <input onChange={onChangeHandler} value={data.date} name='date' className='border-1 w-80 py-1 border-gray-600 rounded-md' type="date" />
           </div>
           <div className='flex flex-col  space-y-2'>
             <label htmlFor="">Time</label>
             <input onChange={onChangeHandler} value={data.time} name='time' className='border-1  w-80 px-2 py-1 border-gray-600 rounded-md' type="text" />
           </div>
         </div>
         <div className='flex flex-row max-md:flex-col max-md:space-y-2 space-x-4' >
           <div className='flex flex-col space-y-2'>
             <label htmlFor="">Duration</label>
             <input onChange={onChangeHandler} value={data.duration} name='duration' className='border-1 w-80 px-2 py-1 border-gray-600 rounded-md' type="text" />
           </div>
           <div className='flex flex-col space-y-2'>
             <label htmlFor="">Location</label>
             <input onChange={onChangeHandler} value={data.location} name='location' className='border-1 w-80 px-2 py-1 border-gray-600 rounded-md' type="text" />
           </div>
         </div>
         <div className='flex flex-col  space-y-2'>
           <label htmlFor="">Seats</label>
           <input onChange={onChangeHandler} value={data.seats} name='seats' className='border-1 px-2 py-1 border-gray-600 rounded-md' type="text" />
         </div>
         <div className='flex flex-col  space-y-2'>
           <label htmlFor="">Price</label>
           <input onChange={onChangeHandler} value={data.price} name='price' className='border-1 px-2 py-1 border-gray-600 rounded-md' type="text" />
         </div>
         <div className='flex flex-col  space-y-2'>
           <label htmlFor="">Description</label>
           <textarea onChange={onChangeHandler} value={data.description} name='description' className='border-1 px-2 py-1 border-gray-600 rounded-md' placeholder='write about yourself...' row={5} cols={6} id=""></textarea>
         </div>
         <div className='flex flex-row space-x-6'>
          <button type='submit' className='text-white  my-6 w-fit px-8 py-2 bg-emerald-900 rounded-2xl text-sm'>Publish Session</button>
          <button type='submit' onClick={()=>{setDraft(true)}}  className='text-white  my-6 w-fit px-8 py-2 bg-emerald-900 rounded-2xl text-sm'>Save as draft</button>
         </div>
       </form>
     </div>
   )
}

export default Edit
