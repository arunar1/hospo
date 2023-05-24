import React from 'react'
import { Link } from 'react-router-dom'
import './CancelAppointment.css'
export default function CancelAppointment() {
  return (
    <div>
      <div className='Cancel'>
        <div className='CancelHeader'>
            <h1>Cancel Appointment</h1>
            <ul>
              <li><Link to="/about" className='linker'>back</Link></li>
            </ul>
        </div>
      </div>
    </div>
  )
}
