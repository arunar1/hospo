import React from "react"; 
import { Link } from "react-router-dom";
import './Header1.css';

function Header1() {
  return (
    <div className="reg">
    <header>
        <div className="logo">
            {/* <a>Hospo</a> */}
            <h1>HOSPO</h1>
        </div>
        <div className="nav">
        <ul>
            <li className="rega"><Link to="/" className='a'>Home</Link></li>
        </ul>
        </div>
        
    </header>
    </div>
  )
}

export default Header1; 