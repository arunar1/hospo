import React from 'react'
import HospitalHeader from './HospitalHeader'
import axios from 'axios'
import { BrowserRouter as Router,Routes,Route, Switch,Link } from 'react-router-dom';
import Register from '../../Registration/Register';
import ShowAppointment from './ShowAppointment/Showppointment';
import { useEffect,useState } from 'react'
import SetAppointment from './SetAppointmentTime/SetAppointment';
import EditAppointment from './EditAppointment/EditAppointment';
import Allapp from './Allapp';
import SetCalender from './SetCalender/SetCalender';
export default function Hospital() {
  const [datas,setdatas]=useState({});
  useEffect(()=>{
    try{
         axios.post(`${process.env.REACT_APP_URL}/hospitalhome`,{
          token:window.localStorage.getItem("token")
        }).then(res=>{
          

          
          
          if(res.data.status=='ok'){            
            
            setdatas(res.data.data)
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
          <Route  exact path='/hospitalhome' >
           {loggeduser=="true"?<HospitalHeader data={datas} />:<Register/>}
          </Route>
          <Route exact path='/hospitalhome/showappointment'>
            <ShowAppointment details={datas}/>
          </Route>
          <Route exact path='/hospitalhome/setappointment'>
            <SetAppointment details={datas}/>
          </Route>
          <Route exact path='/hospitalhome/editappointment'>
            <EditAppointment details={datas}/>
          </Route>
          <Route exact path='/hospitalhome/allappointment'>
            <Allapp details={datas}/>
          </Route>
          <Route exact path='/hospitalhome/setcalender'>
            <SetCalender details={datas}/>
          </Route>
        </Router>
      
    </div>
  )
}
