import React from 'react';
import { useState,useEffect } from 'react';
import { BrowserRouter as Router,Routes,Route, Switch,Link } from 'react-router-dom';
import axios from 'axios';
import PatientHeader from './PatientHeader'
import TakeAppointment from '../TakeAppointment/TakeAppointment';
import Rescheduleappointment from '../Reschedule/Rescheduleappointment';
import AppointmentHistory from '../History/AppointmentHistory';
import CancelAppointment from '../Cancel/CancelAppointment';
import Slot from '../TakeAppointment/Slot';
export default function PatientMenu() {
  const [datas,setdatas]=useState();
  useEffect(async()=>{
    try{
        await axios.post('http://localhost:5000/home',{
          token:window.localStorage.getItem("token")
        }).then(res=>{

          setdatas(res.data.data)
          if(res.data.status=='ok'){
            console("hello")
          }
          
          
        }).catch(err=>{
          console.log("Some error")
        })
  
      }catch(e){
        console.log(e)
      }
    
  },[])
  console.log(datas);
 

  return (
    <div>
      
      <Router>
        <Switch>
          <Route exact path='/home'>
          <PatientHeader details={datas}/>
          </Route>
          <Route path='/home/takeappointment'>
            <TakeAppointment/>
          </Route>
          <Route path='/home/appointmenthistory'>
            <AppointmentHistory/>
          </Route>
          <Route path='/home/rescheduleappointment'>
            <Rescheduleappointment/>
          </Route>
          <Route path='/home/cancelappointment'>
            <CancelAppointment/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

