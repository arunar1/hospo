import React from 'react'
import { Link } from 'react-router-dom'
import './CancelAppointment.css'
import axios from 'axios'
import moment from 'moment';
import  { useState, useEffect } from 'react'

export default function CancelAppointment(props) {

  const [appdetails,setappdetails]=useState([]);
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_URL}/appointmentinfo`)
    .then(res=>{
      setappdetails(res.data);
    })
  },[])

  const myDate = new Date();
  const formattedDate = moment(myDate).format('YYYY-MM-DD');
const [appdata,setappdata]=useState([])

  useEffect(()=>{
    const  newdata=[];
    appdetails.map((data)=>{
        if(data.patientphone==props.details.userId && data.date>=formattedDate){

          newdata.push(data)
        }
       
      newdata.sort((a,b)=>moment(b.date).diff(moment(a.date)))
    },setappdata(newdata)
    )
  },[appdetails])

  return (
    <div>
      <div className='Cancel'>
        <div className='CancelHeader'>
            <h1>Cancel Appointment</h1>
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
            <th></th>
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
              <td>{<button>Cancel</button>}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
      </div>
    </div>
  )
}
