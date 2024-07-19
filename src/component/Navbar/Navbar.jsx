// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { assets } from '../../../public/assets';
import { StoreContext } from '../context/storecontext';

const  Navbar = ({setshowLogin}) => {
  const [menu, setMenu] = useState("hidden");

  const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <div className='Navbar'>
      <Link to='/'><img src="logo.png" alt="Logo" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
        <a href='#app-dowload' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? " active" : ""}>mobile-app</a>
        <a href='#footer' onClick={() => setMenu("contact us")} className={menu === "contact us" ? "active" : ""}>contact us</a>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon}alt="Search" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="Basket" /></Link>
          <div className={getTotalCartAmount() === 0? "": "dot"}></div>
        </div>
        <button onClick={()=> setshowLogin(true)} >Sign in</button>
      </div>
    </div>
  );
}

export default Navbar;



// import React, { useState } from 'react';
// import './Navbar.css';
// import { NavLink, Link } from 'react-router-dom';
// import { assets } from '../../../public/assets';

// const Navbar = ({ setshowLogin }) => {
//   const [menu, setMenu] = useState("hidden");

//   return (
//     <div className='Navbar'>
//       <Link to='/'><img src="logo.png" alt="Logo" className="logo" /></Link>
//       <ul className="navbar-menu">
//         <NavLink to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""} key="home">home</NavLink>
//         <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""} key="menu">menu</a>
//         <a href='#app-dowload' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? " active" : ""} key="mobile-app">mobile-app</a>
//         <a href='#footer' onClick={() => setMenu("contact us")} className={menu === "contact us" ? "active" : ""} key="contact-us">contact us</a>
//       </ul>

//       <div className="navbar-right">
//         <img src={assets.search_icon} alt="Search" />
//         <div className="navbar-search-icon">
//           <Link to='/cart'><img src={assets.basket_icon} alt="Basket" /></Link>
//           <div className="dot"></div>
//         </div>
//         <button onClick={() => setshowLogin(true)}>Sign in</button>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
