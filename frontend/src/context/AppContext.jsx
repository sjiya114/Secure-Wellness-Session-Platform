import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export const AppContext=createContext();
axios.defaults.baseURL=import.meta.env.VITE_BACKEND_URL;
export const AppContextProvider=({children})=>
{
const [token,setToken]=useState(localStorage.getItem("token"));
const [user,setUser]=useState({});
const [session,setSession]=useState([]);
const [userSession,setUserSession]=useState([]);
const navigate=useNavigate();
const authUser=async()=>{
try {
    const res=await axios.get("/user/auth");
    if(res.data.success)
    {
        setUser(res.data.user);
        localStorage.setItem("user",res.data.user);
    }
} catch (error) {
    toast.error(error.message || "error while authenticating user");
}
}

const login=async(data)=>{
try {
 const res=await axios.post("/user/login",data,{
        headers: { "Content-Type": "application/json" }, // Required for file uploads
      });   
 
 if(res.data.success)
 {
    console.log(res.data.token);
    setToken(res.data.token);
    localStorage.setItem("token",res.data.token);
    setUser(res.data.user);
    localStorage.setItem("user",res.data.user);
    toast.success(res.data.message);
    navigate("/");
 }
} catch (error) {
     toast.error(error.message || "error while logging user");
}
}
const register=async(data)=>
{
try {
   const res=await axios.post("/user/register",data,{
        headers: { "Content-Type": "application/json" }, // Required for file uploads
      }); 
   console.log(res);
   if(res.data.success)
 {
    setToken(res.data.token);
    localStorage.setItem("token",token);
    setUser(res.data.user);
    localStorage.setItem("user",user);
    toast.success(res.data.message);
    navigate("/");
 }
} catch (error) {
    toast.error(error.message || "error while registering user");
}
}
const logout=()=>
{
    localStorage.clear("token");
    localStorage.clear("user");
    setToken("");
    setUser("");
}
const handleCreateSession=async(formData)=>
{
try {
    console.log(axios.defaults.headers.token);
   const res=await axios.post("/session/my-sessions/save-draft",formData, {
        headers: { "Content-Type": "multipart/form-data" }, // Required for file uploads
      }) 
      console.log(res);
      if(res.data.success)
      {
        toast.success(res.data.message);
      }
} catch (error) {
     toast.error(error.message || "error while registering user");
}
}
const getAllSession=async()=>
{
try {
    console.log(axios.defaults.headers.token);
   const res=await axios.get("/session/sessions") 
      console.log(res);
      if(res.data.success)
      {
        setSession(res.data.sessions);
      }
} catch (error) {
     toast.error(error.message || "error while fetching user sessions");
}
}
const getUserSession=async()=>
{
try {
    console.log(axios.defaults.headers.token);
   const res=await axios.get(`/session/my-sessions/${user._id}`) 
      console.log(res);
      if(res.data.success)
      {
        setUserSession(res.data.sessions);
      }
} catch (error) {
     toast.error(error.message || "error while fetching user sessions");
}
}

const publishSession=async(sessionId)=>
{
try {
  const res=await axios.post("/session/my-sessions/publish",{sessionId:sessionId});
  if(res.data.success)
  {
    toast.success(res.data.message);
    getUserSession();
    getAllSession();
  }
} catch (error) {
  toast.error(error.message || "error while fetching user sessions");
}
}

useEffect(()=>{
if(token)
{
axios.defaults.headers.token=token;
}
authUser();
},[])
const values={
    token,setToken,user,setUser,login,register,logout,handleCreateSession,getAllSession,getUserSession,
    session,setSession,userSession,setUserSession,publishSession
};
return(
<AppContext.Provider value={values}>
    {children}
</AppContext.Provider>
);
}
