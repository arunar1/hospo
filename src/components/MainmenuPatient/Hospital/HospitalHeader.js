import React from 'react'
import { Link } from "react-router-dom";

import HosprofileCard from './HosprofileCard';
import './HosprofileCard.css'

export default function HospitalHeader(props) {



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
                <li><Link to='/hospitalhome/showappointment' className='selctionbutton'>Show Appointment</Link></li>
                <li><Link to='/hospitalhome/allappointment' className='selctionbutton'>Show All Appointment</Link></li>
                <li><Link to='/hospitalhome/setappointment' className='selctionbutton'>Set Appointment Time</Link></li>
                <li><Link to='/hospitalhome/editappointment' className='selctionbutton'>Delete Appointment</Link></li>
              </ul>
            </div>
        </div>
        <div className='navBar'>
          <div className='topNav'>
            <div className='profile'><h1>Hospital Profile</h1></div>
            <div className='setting'>
              <ul>
                <li>Account Type : Hospital</li>
                <li>User ID :{props.data.userId}</li>
                <li><button  onClick={logout} className='logoutbtn'>LogOut</button></li>
              </ul>
            </div>
          </div>
          <HosprofileCard data={props.data}/>
        </div>
        
      </div>




    </div>
  )
}
