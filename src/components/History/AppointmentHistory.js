import React from 'react'
import { Link } from 'react-router-dom'
import './AppointmentHistory.css'
export default function AppointmentHistory() {
  return (
    <div>
       <div className='History'>
        <div className='HistoryHeader'>
            <h1>Appointment History</h1>
            <ul>
              <li><Link to="/about" className='linker'>back</Link></li>
            </ul>
        </div>
      </div>
    </div>
  )
}
