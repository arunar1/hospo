import React from 'react'
import  { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import './Rescheduleappointment.css'
import axios from 'axios'
import moment from 'moment';
export default function Rescheduleappointment(props) {

  const [dltres,setdltres]=useState();
  const [appdetails,setappdetails]=useState([]);
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_URL}/appointmentinfo`)
    .then(res=>{
      setappdetails(res.data);
    })
  },[dltres])

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

  const [appdlt,setappdlt]=useState('')

console.log(appdetails)

  const deleteuser=(id)=>{
    setappdlt(id)

   if(appdlt){
    if(window.confirm("Are you want to Reschedule the appointment")){
      axios.post(`${process.env.REACT_APP_URL}/deleteuserapp`,{
       appdlt
      }
     ).then(res=>{
       setdltres(res.data.data)
       if(res.data.data='Appointment Cancelled'){
        window.location.href='/home/takeappointment'
       }

     })
 }
   }
    else{

    }
  }



  return (
    <div>
      <div className='Reschedule'>
        <div className='RescheduleHeader'>
            <h1>Reschedule Appointment</h1>
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
            <th>Place</th>
            <th>Time</th>
            <th>Token</th>
            <th>Reschedule</th>
          </tr>
        </thead>
        <tbody>
          {appdata.map((appointment,index) => (
            <tr>
              <td>{index+1}</td>
              <td>{appointment.date}</td>
              <td>{appointment.govhospitalname}</td>
              <td>{appointment.hospitaltype}</td>
              <td>{appointment.DistrictName}</td>
              <td>{appointment.time}</td>
              <td>{appointment.token}</td>
              <td>{<button className='reschedulebtn' onClick={()=>deleteuser(appointment._id)}>Reschedule</button>}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
      </div>
    </div>
  )
}
