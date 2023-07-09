import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect,useState } from 'react';
import axios from 'axios';
export default function SetCalender(props) {
  return (
      <div className='showappointment'>
        <div className='showappointmentHeader'>
            <h1>Set Appointment Calender</h1>
            <ul>
            {props.details.usertype=='privateconsultant'?<li><Link to="/consultanthome" className='linker'>back</Link></li>:<li><Link to="/hospitalhome" className='linker'>back</Link></li>}
            </ul>
        </div>
      
    </div>
  )
}