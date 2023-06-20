import React from 'react'
import logo from '../images/logo.png'
import './styles/navbar.css'
const NavBar = () => {
  return (
<nav className='main-nav'>
    <img src={logo} className='logo' alt="logo" />
    <ul className='lists'>
    
        <li>Find Talent</li>
        <li>Find Work</li>
        <li>Why Upwork</li>
        <li>Enterprise</li>
    </ul>

    <div className="search-bar">
        <div className="inputs">
            <input type="text" />
            <p>Drop Down</p>
        </div>

        <ul className='logs'>
            <li>Log in</li>
            <li>Sign Up</li>
        </ul>
    </div>

        

</nav>
  )
}

export default NavBar