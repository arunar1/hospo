import React from 'react'
import { Link } from "react-router-dom";
import './Rescheduleappointment.css'
export default function Rescheduleappointment() {
  return (
    <div>
      <div className='Reschedule'>
        <div className='RescheduleHeader'>
            <h1>Reschedule Appointment</h1>
            <ul>
              <li><Link to="/home" className='linker'>back</Link></li>
            </ul>
        </div>
      </div>
    </div>
  )
}
