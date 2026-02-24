import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Register from '../Components/Register'
import About from '../Components/About'
import Info from '../Components/Info'
import Home from '../Components/Home'
import Login from '../Components/Login'
import Product from '../Components/Product'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import UserProfile from '../Components/UserProfile'
// import Landing from '../Components/Landing'


export default function UserRouter() {
   
    const location=useLocation();
    const noAppBar=['/reg','/login'];
    const noFooter=['/reg','/login']

  return (
    <div>
        
        {!noAppBar.includes(location.pathname) && <Header/>}
      <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/reg' element={<Register/>}/>
            <Route path='/info' element={<Info/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/prod' element={<Product/>}/>
            <Route path='/profile' element={<UserProfile/>}/>
            

      </Routes>
              {!noFooter.includes(location.pathname) && <Footer/>}

    </div>
  )
}
