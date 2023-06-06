import React from 'react'
import ConsultantHeader from './ConsultantHeader';
import axios from 'axios'
import { BrowserRouter as Router,Routes,Route, Switch,Link } from 'react-router-dom';
import Register from '../../Registration/Register';
import { useEffect,useState } from 'react'
export default function Consultant() {
  const [datas,setdatas]=useState({});
  useEffect(()=>{
    try{
         axios.post('http://localhost:5000/consultanthome',{
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
        <Switch>
          <Route  exact path='/consultanthome' >
          {loggeduser=="true"?<ConsultantHeader data={datas} />:<Register/>}

           
          </Route>
        </Switch>
        </Router>
      
    </div>
  )
}
