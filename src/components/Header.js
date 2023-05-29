import React from "react"; 
import { Link } from "react-router-dom";
import './Header.css';

function Header() {
  return (
    <header>
        <div className="logo">
            <a>Hospo</a>
            <h1>HOSPO</h1>
        </div>
        <div className="nav">
        <ul>
            <li><Link to="/" className='link'>Home</Link></li>
            <li><Link to='/about' className='link'>About</Link></li>
            <li><Link to='/contacts' className='link'>Contact</Link></li>
            <li><Link to='/registration' className='link'>SignUp</Link></li>
        </ul>
        </div>
        
    </header>
  )
}

export default Header; 