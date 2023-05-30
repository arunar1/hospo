import React from 'react'
import HospitalHeader from './HospitalHeader'
import axios from 'axios'
import { BrowserRouter as Router,Routes,Route, Switch,Link } from 'react-router-dom';

import { useEffect,useState } from 'react'
export default function Hospital() {
    useEffect(()=>{
        try{
             axios.post('http://localhost:5000/hospitalhome',{
              token:window.localStorage.getItem("token")
            }).then(res=>{
              
    
              
              
              if(res.data.status=='ok'){
                // window.localStorage.setItem("userid",JSON.stringify(res.data.data));
                // window.location.href='./home'
                console.log("success")
    
              }
              
              
            }).catch(err=>{
              console.log(err)
            })
      
          }catch(e){
            console.log(e)
          }
        
      },[])

      console.log("success")
    
  return (
    <div>
        <Router>
        <Switch>
          <Route  exact path='/hospitalhome' >
           <HospitalHeader  />
          </Route>
        </Switch>
        </Router>
      
    </div>
  )
}
