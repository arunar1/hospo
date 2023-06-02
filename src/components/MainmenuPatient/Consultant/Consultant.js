import React from 'react'
import ConsultantHeader from './ConsultantHeader';
import axios from 'axios'
import { BrowserRouter as Router,Routes,Route, Switch,Link } from 'react-router-dom';

import { useEffect,useState } from 'react'
export default function Consultant() {
  const [datas,setdatas]=useState({});
  useEffect(()=>{
    try{
         axios.post('https://hospo-backend.vercel.app/consultanthome',{
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

      console.log(datas)
    
  return (
    <div>
        <Router>
        <Switch>
          <Route  exact path='/consultanthome' >
           <ConsultantHeader data={datas} />
          </Route>
        </Switch>
        </Router>
      
    </div>
  )
}
