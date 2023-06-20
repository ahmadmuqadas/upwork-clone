import React from 'react'
import logo from '../images/logo.png'
import './styles/navbar.css'
const NavBar = () => {
  return (
    <nav className='nav'>
<div className='main-nav'>
    
    <ul className='lists'>
    <img src={logo} className='logo' alt="logo" />
        <li>Find Talent</li>
        <li>Find Work</li>
        <li>Why Upwork</li>
        <li>Enterprise</li>
    </ul>

    <div className="search-bar">
        <div className="inputs">
            <input type="text" className='search-input' />
            <p className='search-link'>drop</p>
        </div>

        <ul className='logs'>
            <li className='log-in'>Log in</li>
            <li className='sign-up'>Sign Up</li>
        </ul>
      
    </div>

</div>
<ul className='additional-list'>
    <li>Devlopment & IT</li>
    <li>AI services</li>
    <li>Design & Creative</li>
    <li>Sales & Marketing</li>
    <li>Admin & Customer Support</li>
    <li>More</li>
</ul>
</nav>
  )
}

export default NavBar