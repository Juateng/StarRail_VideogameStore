import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {

  const [menu,setMenu] = useState("home");

  return (
    <div className='navbar'>
        <img src={assets.logo} alt="Image Error" className="logo"/>
        <ul className='navbar-menu'>
          <li onClick={()=>setMenu("home")} className={menu=="home"?"active":""}>Home</li>
          <li onClick={()=>setMenu("xbox")} className={menu=="xbox"?"active":""}>Xbox</li>
          <li onClick={()=>setMenu("ps5")} className={menu=="ps5"?"active":""}>PS5</li>
          <li onClick={()=>setMenu("nintendo_switch")} className={menu=="nintendo_switch"?"active":""}>Nintendo Switch</li>
          <li onClick={()=>setMenu("other")} className={menu=="other"?"active":""}>Other</li>
        </ul>
        <div className='navbar-right'>
            <div className='navbar-search-icon'>
              <img src={assets.shopping_cart} alt="Image Error" className='cart-img'/>
              <div className='dot'></div>
            </div>
            <button>Sign in</button>
        </div>
    </div>

  )
}

export default Navbar