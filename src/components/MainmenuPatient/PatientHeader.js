import React from 'react'
import { Link } from "react-router-dom";
import './PatientHeader.css'

import ProfileCard from './ProfileCard';
export default function PatientHeader(props) {
 
// const user=JSON.parse(window.localStorage.getItem("userid"))


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
                <li><Link to='/home/takeappointment' className='selctionbutton'>Take Appointment</Link></li>
                <li><Link to='/home/appointmenthistory' className='selctionbutton'>Show Appointments</Link></li>
                <li><Link to='/home/rescheduleappointment' className='selctionbutton'>Reschedule Apppointment</Link></li>
                <li><Link to='/home/cancelappointment' className='selctionbutton'>Cancel Appointment</Link></li>
              </ul>
            </div>
        </div>
        <div className='navBar'>
          <div className='topNav'>
            <div className='profile'><h1>Profile</h1></div>
            <div className='setting'>
              <ul>
                <li>Account Type : Patient</li>
                <li>User ID :{props.data.userId}</li>
                
              </ul>
              <button  onClick={logout} className='logoutbtn'>LogOut</button>
            </div>
          </div>
          <ProfileCard data={props.data}/>
        </div>
      </div>
    </div>
  )
}
