import React from 'react'
import  { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import './Rescheduleappointment.css'
import axios from 'axios'
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCalendarCheck} from '@fortawesome/free-solid-svg-icons';
export default function Rescheduleappointment(props) {

  const [dltres,setdltres]=useState();
  const [appdetails,setappdetails]=useState([]);
  const token=window.localStorage.getItem("token");

  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_URL}/appointmentinfo`,{
      headers:{token}
    })
    .then(res=>{
      setappdetails(res.data);
    })
  },[dltres,props.details])

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
  },[appdetails,props.details])

  const [appdlt,setappdlt]=useState('')



  const deleteuser=(id)=>{
    setappdlt(id)
    window.localStorage.setItem('resid',id)
    window.location.href='/home/rescheduleappointment/reschdule'

//    if(appdlt){
//     if(window.confirm("Are you want to Reschedule the appointment")){
//       axios.post(`${process.env.REACT_APP_URL}/deleteuserapp`,{
//        appdlt
//       },
//       {
//         headers:{token}
//       }
//      ).then(res=>{
//        setdltres(res.data.data)
//        if(res.data.data='Appointment Cancelled'){
//         window.location.href='/home/takeappointment'
//        }

//      })
//  }
//    }
//     else{

//     }
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
            <th>Hospital/ Doctor</th>
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
              <td>{moment(appointment.date).format('DD-MM-YYYY')}</td>
              <td>{(appointment.category)?`${appointment.govhospitalname} - ${appointment.category}`:`${appointment.govhospitalname}`}</td>
              <td>{appointment.hospitaltype}</td>
              <td>{appointment.DistrictName}</td>
              <td>{appointment.time}</td>
              <td>{appointment.token}</td>
              <td>{<FontAwesomeIcon  icon={faCalendarCheck} className='reschedulebtn' onClick={()=>deleteuser(appointment._id)}/>}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
      </div>
    </div>
  )
}
