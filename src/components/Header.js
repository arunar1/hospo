import React from "react"; 
import { useState } from "react";
import { Link } from "react-router-dom";
import './Header.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    setIsActive(current => !current);
  };
  return (
    <header>
        <div className="logo">
            <a>Hospo</a>
            <h1>HOSPO</h1>
        </div>
        
        <div className='nav'>
        <FontAwesomeIcon className="fontaw" icon={faBars} onClick={handleClick}>menu</FontAwesomeIcon>
        <ul className={isActive ? 'menu' : ''}>
            <li><Link to="/" className='link'>Home</Link></li>
            <li><Link to='/about' className='link'>About</Link></li>
            <li><Link to='/contactus' className='link'>Contact Us</Link></li>
            <li><Link to='/registration' className='link'>SignUp</Link></li>
        </ul>
        </div>
        
    </header>
  )
}

export default Header; 