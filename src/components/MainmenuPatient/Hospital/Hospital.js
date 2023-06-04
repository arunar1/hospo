import React from 'react'
import HospitalHeader from './HospitalHeader'
import axios from 'axios'
import { BrowserRouter as Router,Routes,Route, Switch,Link } from 'react-router-dom';
import Register from '../../Registration/Register';

import { useEffect,useState } from 'react'
export default function Hospital() {
  const [datas,setdatas]=useState({});
  useEffect(()=>{
    try{
         axios.post('http://localhost:5000/hospitalhome',{
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
      console.log("success")
      const logout=()=>{
        window.localStorage.clear();
        window.location.href='./'
      }
        
        
      
        
        const loggeduser=window.localStorage.getItem("isLoggedIn")
       
    
  return (
    <div>
        <Router>
        <Switch>
          <Route  exact path='/hospitalhome' >
           
           {loggeduser=="true"?<HospitalHeader data={datas} />:<Register/>}

          </Route>
        </Switch>
        </Router>
      
    </div>
  )
}
