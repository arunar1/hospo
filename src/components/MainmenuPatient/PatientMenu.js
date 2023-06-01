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
  const [datas,setdatas]=useState({});
  useEffect(()=>{
    try{
         axios.post('http://localhost:5000/home',{
          token:window.localStorage.getItem("token")
        }).then(res=>{
          

          
          
          if(res.data.status=='ok'){            
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
console.log(datas.usertype)

  
  
  
  

  console.log(datas)
  
 

  return (
    <div>
      
      <Router>
        <Switch>
          <Route  exact path='/home' >
           <PatientHeader data={datas} />
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
          <Route  exact path='/home/takeappointment/slot' component={Slot}/>
        </Switch>
      </Router>
    </div>
  )
}

