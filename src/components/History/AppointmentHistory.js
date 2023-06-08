import React from 'react'
import  { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import './AppointmentHistory.css'
import axios from 'axios'

export default function AppointmentHistory(props) {

  const [appdetails,setappdetails]=useState([]);
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_URL}/appointmentinfo`)
    .then(res=>{
      setappdetails(res.data);
    })
  },[])

  
const [appdata,setappdata]=useState([])

  useEffect(()=>{
    const  newdata=[];
    appdetails.map((data)=>{
        if(data.patientphone==props.details.userId){

          newdata.push(data)
        }
        
    },setappdata(newdata)
    )
  },[appdetails])


  return (
    <div className='tablecontent'>
       <div className='History'>
        <div className='HistoryHeader'>
            <h1>Appointment History</h1>
            <ul>
              <li><Link to="/home" className='linker'>back</Link></li>
            </ul>
        </div>
        <div>
      
      <table>
        <thead>
          <tr>
            <th>Sl no</th>
            <th>Date</th>
            <th>Hospital/Doctor</th>
            <th>Hospital Type</th>
            <th>Time</th>
            <th>Token</th>
          </tr>
        </thead>
        <tbody>
          {appdata.map((appointment,index) => (
            <tr>
              <td>{index+1}</td>
              <td>{appointment.date}</td>
              <td>{appointment.govhospitalname}</td>
              <td>{appointment.hospitaltype}</td>
              <td>{appointment.time}</td>
              <td>{appointment.token}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

      </div>
    </div>
  )
}


