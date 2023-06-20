import { useState } from 'react'
import logo from '../images/logo.png'
import './styles/navbar.css'
const NavBar = () => {

    const [hide, setHide] = useState(true)

    const showHiddenLink = () => {
       setHide(!hide)
    }

    const hiddenStyle = {
        display: hide ?  'none' : 'block'
    }

    const hideLink = () => {
        setHide(!hide)
    }
 
  return (
    <nav className='nav'>
<div className='main-nav'>
    
    <div className="hidde-links" style={hiddenStyle}></div>
    <ul className='lists'>
    <img src={logo} className='logo' alt="logo" />
        <li onMouseEnter={showHiddenLink} onMouseLeave={hideLink}>Find Talent <span className='link-arrow'><p>C</p></span></li>
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