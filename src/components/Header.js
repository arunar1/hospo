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
            <li><a href="#" className='link'>About</a></li>
            <li><a href="#" className='link'>Contact</a></li>
            <li><Link class='a' to='/registration' className='link'>SignUp</Link></li>
        </ul>
        </div>
        
    </header>
  )
}

export default Header; 