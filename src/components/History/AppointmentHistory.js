import React from 'react'
import  { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import './AppointmentHistory.css'
import axios from 'axios'
import moment from 'moment'

export default function AppointmentHistory(props) {
  const [dates,setdates]=useState('');
  const [view,setview]=useState()
const token=window.localStorage.getItem("token");
  const [appdetails,setappdetails]=useState([]);
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_URL}/appointmentinfo`,{
      headers:{token}
    })
    .then(res=>{
      setappdetails(res.data);
    })
  },[view])

  
  
const [appdata,setappdata]=useState([])

  useEffect(()=>{
    const  newdata=[];
    appdetails.map((data)=>{
        if((data.patientphone==props.details.userId) && data.date==view){

          newdata.push(data)
        }
        newdata.sort((a,b)=>moment(b.date).diff(moment(a.date)))
        
    },setappdata(newdata)
    )
  },[appdetails])

  const select=()=>{
    setview(dates)
  }


  return (
    <div className='tablecontent'>
       <div className='History'>
        <div className='HistoryHeader'>
            <h1> Appointments </h1>
            <ul>
              <li><Link to="/home" className='linker'>back</Link></li>
            </ul>
        </div>
        <div className='setdate'>
        <div><h4>Select Date :</h4></div>
          <div><input type='date'  name='select' onChange={(e)=>setdates(e.target.value)}/></div>
          <div className='select'><button onClick={select}>select</button></div>
        </div>
        <div>
      {appdata.length==0?(<h3>No appointments on {view}</h3>):(
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
              <td>{moment(appointment.date).format('DD-MM-YYYY')}</td>
              <td>{(appointment.category)?`${appointment.govhospitalname} - ${appointment.category}`:`${appointment.govhospitalname}`}</td>
              <td>{appointment.hospitaltype}</td>
              <td>{appointment.time}</td>
              <td>{appointment.token}</td>
            </tr>
          ))}
        </tbody>
      </table>)}
    </div>

      </div>
    </div>
  )
}


