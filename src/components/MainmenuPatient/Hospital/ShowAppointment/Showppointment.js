import React from 'react'
import { Link } from 'react-router-dom'
import './ShowAppointment.css'
export default function ShowAppointment() {
  return (
    <div>
      <div className='showappointment'>
        <div className='showappointmentHeader'>
            <h1>Show Appointments</h1>
            <ul>
              <li><Link to="/hospitalhome" className='linker'>back</Link></li>
            </ul>
        </div>
      </div>
    </div>
  )
}
