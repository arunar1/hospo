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
import Register from '../Registration/Register';


export default function PatientMenu() {
  const [datas,setdatas]=useState({});
  useEffect(()=>{
    try{
          axios.post('http://localhost:5000/home',{
          token:window.localStorage.getItem("token")
        }).then(res=>{
          

          
          
          if(res.data.status=='ok'){            
            
            setdatas(res.data.data)
            window.localStorage.setItem("isLoggedIn",true)
          }
          
          
        }).catch(err=>{
          console.log(err)
        })
  
      }catch(e){
        console.log(e)
      }
    
  },[])


  
const logout=()=>{
  window.localStorage.clear();
  window.location.href='./'
}
  
  

 
  
  const loggeduser=window.localStorage.getItem("isLoggedIn")
  
 

  return (
    <div>
      
      <Router>
          <Route  exact path='/home' >
          {loggeduser=="true"?<PatientHeader data={datas} />:<Register/>}
          </Route>
          <Route exact path='/home/takeappointment'>
          {loggeduser=="true"?<TakeAppointment/>:logout}
            
          </Route>
          <Route exact path='/home/appointmenthistory'>
          {loggeduser=="true"?<AppointmentHistory details={datas} />:logout}
            
          </Route>
          <Route exact path='/home/rescheduleappointment'>
          {loggeduser=="true"?<Rescheduleappointment/>:logout}
            
          </Route>
          <Route exact path='/home/cancelappointment'>
          {loggeduser=="true"?<CancelAppointment/>:logout}
            
          </Route>
          <Route  exact path='/home/takeappointment/slot'>
          {loggeduser=="true"?<Slot details={datas}/>:logout}
          
          </Route>
      </Router>
    </div>
  )
}

