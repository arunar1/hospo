import React from 'react'
import ConsultantHeader from './ConsultantHeader';
import axios from 'axios'
import { BrowserRouter as Router,Routes,Route, Switch,Link } from 'react-router-dom';
import Register from '../../Registration/Register';
import { useEffect,useState } from 'react'
import SetAppointment from '../Hospital/SetAppointmentTime/SetAppointment';
import ShowAppointment from '../Hospital/ShowAppointment/Showppointment';
import EditAppointment from '../Hospital/EditAppointment/EditAppointment';
import Allapp from '../Hospital/Allapp';
export default function Consultant() {
  const [datas,setdatas]=useState({});

  useEffect(()=>{
    try{
         axios.post(`${process.env.REACT_APP_URL}/consultanthome`,{
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
       
          <Route  exact path='/consultanthome' >
          {loggeduser=="true"?<ConsultantHeader data={datas} />:<Register/>}
          </Route>
          <Route exact path='/consultanthome/showappointment'>
           
            {loggeduser=="true"? <ShowAppointment details={datas}/>:<Register/>}
          </Route>
          <Route exact path='/consultanthome/setappointment'>
           
            {loggeduser=="true"? <SetAppointment details={datas}/>:<Register/>}
          </Route>
          <Route exact path='/consultanthome/editappointment'>
            
            {loggeduser=="true"?<EditAppointment details={datas}/>:<Register/>}
          </Route>
          <Route exact path='/consultanthome/allappointment'>
            <Allapp details={datas}/>
          </Route>
      
        </Router>
      
    </div>
  )
}
