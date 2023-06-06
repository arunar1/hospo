import React from 'react'
import  { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import './AppointmentHistory.css'
import axios from 'axios'

export default function AppointmentHistory() {

  const [appdetails,setappdetails]=useState([]);

  useEffect(()=>{
    axios.get("http://localhost:5000/appointmentinfo")
    .then(res=>{
      setappdetails(res.data);
    })
  },[])


  return (
    <div>
       <div className='History'>
        <div className='HistoryHeader'>
            <h1>Appointment History</h1>
            <ul>
              <li><Link to="/home" className='linker'>back</Link></li>
            </ul>
        </div>
        <div>
      <h1>Appointment History</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Doctor</th>
          </tr>
        </thead>
        <tbody>
          {appdetails.map(appointment => (
            <tr>
              <td>{appointment.date}</td>
              <td>{appointment.doctor_id.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

      </div>
    </div>
  )
}
