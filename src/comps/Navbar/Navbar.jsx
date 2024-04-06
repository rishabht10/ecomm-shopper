import React, { useContext, useState, useRef } from 'react'
import './Navbar.css'
 import logo from "../assets/logo.png"
 import cart_icon from '../assets/cart_icon.png'
 import { Link } from 'react-router-dom'
 import nav_dropdown from '../assets/nav_dropdown.png'
import { ShopContext } from '../../context/ShopContext'
export default function Navbar() {

  const [menu,setMenu]=useState("shop");
  const {getCartCount}=useContext(ShopContext);
  const menuRef=useRef();

  const dropdown_toggle=(e)=>{
menuRef.current.classList.toggle('nav-menu-visible');
e.target.classList.toggle('open');
  }

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="loading"/>
        <p>SHOPPER</p>

      </div>
      <img className="nav-dropdown" onClick={dropdown_toggle} src={nav_dropdown} alt=""/>
      <ul ref={menuRef} className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}><Link to='/' style={{textDecoration:'none'}}>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link to='/mens' style={{textDecoration:'none'}}>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link to='/womens' style={{textDecoration:'none'}}>Women </Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link to='/kids' style={{textDecoration:'none'}}>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      
        

      
        </ul>
        <div className='nav-login-cart'>

        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt=""/></Link>
        <div className='nav-cart-count'>{getCartCount()}</div>
        </div>

        
    </div>
  )
}
