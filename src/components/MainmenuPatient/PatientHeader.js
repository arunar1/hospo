import React from 'react'
import { Link } from "react-router-dom";
import './PatientHeader.css'

import ProfileCard from './ProfileCard';
export default function PatientHeader() {
  const user=JSON.parse(window.localStorage.getItem("userid"))

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
                <li><Link to='/home/appointmenthistory' className='selctionbutton'>Appointment Histroy</Link></li>
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
                <li>User ID :{user.userId}</li>
                <li>settings</li>
              </ul>
            </div>
          </div>
          <ProfileCard/>
        
        </div>
      </div>
    </div>
  )
}
