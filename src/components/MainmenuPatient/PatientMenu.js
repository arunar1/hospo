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
import Consultant from './Consultant/Consultant';
import Hospital from './Hospital/Hospital';
import HospitalHeader from './Hospital/HospitalHeader';

export default function PatientMenu() {
  const [datas,setdatas]=useState({});
  useEffect(()=>{
    try{
         axios.post('http://localhost:5000/home',{
          token:window.localStorage.getItem("token")
        }).then(res=>{
          

          
          
          if(res.data.status=='ok'){
            // window.localStorage.setItem("userid",JSON.stringify(res.data.data));
            // window.location.href='./home'
            console.log("success")
            setdatas(res.data.data)
          }
          
          
        }).catch(err=>{
          console.log(err)
        })
  
      }catch(e){
        console.log(e)
      }
    
  },[])
  
  
  
  

  console.log(datas)
  
 

  return (
    <div>
      
      <Router>
        <Switch>
          <Route  exact path='/home' >
           <PatientHeader />
          </Route>
          <Route  exact path='/hospitalhome' >
           <Hospital />
          </Route>
          <Route  exact path='/consultantlhome' >
           <Consultant/>
          </Route>
          <Route exact path='/home/takeappointment'>
            <TakeAppointment/>
          </Route>
          <Route exact path='/home/appointmenthistory'>
            <AppointmentHistory/>
          </Route>
          <Route path='/home/rescheduleappointment'>
            <Rescheduleappointment/>
          </Route>
          <Route path='/home/cancelappointment'>
            <CancelAppointment/>
          </Route>
          <Route  path='/home/takeappointment/slot' component={Slot}/>
        </Switch>
      </Router>
    </div>
  )
}

