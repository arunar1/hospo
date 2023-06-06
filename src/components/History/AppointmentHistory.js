import React from 'react'
import  { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import './AppointmentHistory.css'
import axios from 'axios'

export default function AppointmentHistory(props) {

  const [appdetails,setappdetails]=useState([]);
  const senddata=props.details;
  useEffect(()=>{
    axios.get("http://localhost:5000/appointmentinfo")
    .then(res=>{
      setappdetails(res);
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
            <th>Sl no</th>
            <th>Date</th>
            <th>Hospital/Doctor</th>
            <th>Time</th>
            <th>Token</th>
          </tr>
        </thead>
        <tbody>
          {/* {appdetails.map((appointment,index) => (
            <tr>
              <td>{index+1}</td>
              <td>{}</td>
              <td>{}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>

      </div>
    </div>
  )
}


