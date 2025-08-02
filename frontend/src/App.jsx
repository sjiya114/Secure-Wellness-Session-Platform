import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Banner from './components/Banner'
import Footer from './components/Footer'
import {Toaster} from 'react-hot-toast';
import Question from './components/Question'
import FAQ from './pages/FAQ'
import Feature from './pages/Feature'
import Login from './pages/Login'
import Signup from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import AllSessions from './pages/sessions/AllSessions'
import PublishedSession from './pages/sessions/PublishedSession'
import DraftSession from './pages/sessions/DraftSession'
import Crud from './pages/Crud'
import Create from './pages/CRUD/Create'
import Sessions from './pages/CRUD/Sessions'
import { useContext } from 'react'
import { AppContext } from './context/AppContext'
import Edit from './pages/CRUD/Edit'
import Contact from './pages/Contact'

function App() {
  const {token}=useContext(AppContext);
  return (
    <div>
      <Toaster/>
      <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}  ></Route>
        <Route path='/login' element={<Login/>}  ></Route>
        <Route path='/signup' element={<Signup/>}  ></Route>
        <Route  path='/dashboard' element={<Dashboard/>} >
         <Route path="/dashboard" element={<AllSessions/>} ></Route>
          {token && <Route path="/dashboard/published" element={<PublishedSession/>} ></Route>}
           {token && <Route path="/dashboard/drafted" element={<DraftSession/>} ></Route>}
        </Route>
         {token && <Route path="/crud" element={<Crud/>} >
         <Route path="/crud"  element={<Create/>}  ></Route>
          <Route path="/crud/edit"  element={<Sessions/>}  ></Route>
           <Route path="/crud/update"  element={<Edit/>}  ></Route>
         </Route>}
         <Route path="/contact" element={<Contact/>}  ></Route>
       </Routes>
       <Footer/>
    </div>
  )
}

export default App
