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
            <li><Link to="/">Home</Link></li>
            <li><a href="www.google.com">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        </div>
        
    </header>
  )
}

export default Header; 