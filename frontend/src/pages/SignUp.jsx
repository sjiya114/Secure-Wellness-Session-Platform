import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import cross_icon from '../assets/cross_icon.png';
import { AppContext } from '../context/AppContext';
function Signup() {
  const navigate=useNavigate();
  const {register}=useContext(AppContext);
    const [data,setData]=useState({
      name:"",
      email:"",
      password:""
    })
    const onChangeHandler=(e)=>
    {
      e.preventDefault();
      setData({...data,[e.target.name]:e.target.value});

    }
    // const handleSubmit=async(e)=>
    // {
    //  e.preventDefault();
    //  const res=await axios.post("",data);
    //  if(res.data.success)
    //  {
    //   toast.success(res.data.message);
    //   setData({
    //   name:"",
    //   email:"",
    //   password:""
    //   });
    //  }
    //  else
    //  {
    //   toast.error(res.data.error);
    //  }
    // }
    const handleSubmit=async(e)=>
      {
       e.preventDefault();
       console.log(data.name+" "+data.email+" "+data.password);
       const formData=new FormData();
       formData.append("name",data.name);
       formData.append("email",data.email);
       formData.append("password",data.password);
       register(formData);
    }
  return (
    <div className='bg-black/80 w-full top-0 bottom-0 left-0 right-0 z-100 fixed'>
      <div className='fixed py-10 mt-40 shadow-2xl bg-white  px-10 max-md:mx-[12vw] max-md:px-2 mx-[37vw] max-lg:mx-[28vw]   rounded-lg'>
      <form onSubmit={handleSubmit} className='flex flex-col space-y-1' action="">
        <div className='flex flex-row justify-between'>
         <h1 className='text-black font-bold'>Create Account</h1>
         <img src={cross_icon} onClick={()=>navigate("/")}  className='w-6 h-6' alt="" />
        </div>
        <p className='text-gray-500 '>Please signup to book appointment</p>
        <label htmlFor="">FullName</label>
        <input onChange={onChangeHandler} name='name' value={data.name}  className='border-1 border-gray-700 rounded-lg py-1 px-1' type="text" />
        <label htmlFor="">Email</label>
        <input onChange={onChangeHandler} name='email' value={data.email} className='border-1 border-gray-700 rounded-lg py-1 px-1' type="text" />
        <label htmlFor="">Password</label>
        <input onChange={onChangeHandler} name='password' value={data.password} className='border-1 border-gray-700 rounded-lg py-1 px-1' type="password" />
        <button className='bg-indigo-950 mt-2 rounded-md px-2 py-2  text-white'>Create Account</button>
        <p>Already have an account?<b className='cursor-pointer' onClick={()=>{navigate("/login")}}>Login here</b></p>
      </form>
    </div>
    </div>
    
  )
}

export default Signup
