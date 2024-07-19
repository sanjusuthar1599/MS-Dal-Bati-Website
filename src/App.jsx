// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Navbar from './component/Navbar/Navbar'
import Home from './pages/Home/Home'
import {Routes,Route } from 'react-router-dom'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Cart from './pages/Cart/Cart'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import LoginPopup from './component/LoginPopup/LoginPopup'
// import ExploreMenu from './component/ExploreMenu/ExploreMenu'

const App = () => {

const[showLogin, setshowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopup setshowLogin ={setshowLogin}/>:<></>}
    <div className='app'>
      <Navbar setshowLogin = {setshowLogin}/> 
      <Routes>
        <Route path = '/' element = {<Home/>} />
        <Route path = '/Cart' element = {<Cart/>} />
        <Route path='/Order' element ={<PlaceOrder/>} />
        <Route path='/Header' element = {<Header/>} />
      </Routes> 
    </div>
    <Footer/>
    </>
  )
}  

export default App
