import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Home from './Home'
import Prediction from './Prediction'
import Navbar from './Navbar'
import Footer from './Footer'
import Contact from './Contact'
import Probability from './Probability'
import Login from './Login'
const Allroutes = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/prediction' element={<Prediction/>}/>
    <Route path='/probability' element={<Probability/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/login' element={<Login/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
   
    </>
  )
}

export default Allroutes