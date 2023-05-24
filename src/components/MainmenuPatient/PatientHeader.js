import React from 'react'
import { Link } from "react-router-dom";
import './PatientHeader.css'

import ProfileCard from './ProfileCard';
export default function PatientHeader() {
  return (
    <div>
      
      <div className='patientHeader'>
        <div className='MainMeanuButton'>
            <div className='headerPatient'>
              <h2>Hospo</h2>
            </div>
            <div className='selection'>
              <ul>
                <li><Link to='/takeappointment' className='selctionbutton'>Take Appointment</Link></li>
                <li><Link to='/appointmenthistory' className='selctionbutton'>Appointment Histroy</Link></li>
                <li><Link to='/rescheduleappointment' className='selctionbutton'>Reschedule Apppointment</Link></li>
                <li><Link to='cancelappointment' className='selctionbutton'>Cancel Appointment</Link></li>
              </ul>
            </div>
        </div>
        <div className='navBar'>
          <div className='topNav'>
            <div className='profile'><h1>Profile</h1></div>
            <div className='setting'>
              <ul>
                <li>User ID</li>
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
