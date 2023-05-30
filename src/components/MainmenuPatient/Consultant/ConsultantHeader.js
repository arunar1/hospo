import React from 'react'
import { Link } from "react-router-dom";
import ConprofileCard from './ConprofileCard';
export default function ConsultantHeader() {
const user=JSON.parse(window.localStorage.getItem("userid"))



const logout=()=>{
  window.localStorage.clear();
  window.location.href='./'
}
  return (
    <div>
      
      <div className='patientHeader'>
        <div className='MainMeanuButton'>
            <div className='headerPatient'>
              <h2>Hospo</h2>
            </div>
            <div className='selection'>
              <ul>
                <li><Link to='/home/' className='selctionbutton'>Show Appointment</Link></li>
                <li><Link to='/home/' className='selctionbutton'>Edit Appointment</Link></li>
              </ul>
            </div>
        </div>
        <div className='navBar'>
          <div className='topNav'>
            <div className='profile'><h1>Consultant Profile</h1></div>
            <div className='setting'>
              <ul>
                <li>Account Type : Private Consultant</li>
                <li>User ID :{user.userId}</li>
                <li>settings</li>
                <li><button  onClick={logout} className='logoutbtn'>LogOut</button></li>
              </ul>
            </div>
          </div>
          <ConprofileCard/>
        </div>
      </div>
    </div>
  )
}
