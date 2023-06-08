import React, { useState } from 'react'
import {Link } from 'react-router-dom';
import './Main1.css';
import axios from 'axios';
import { Route, Router } from 'react-router-dom/cjs/react-router-dom.min';
import PatientMenu from './MainmenuPatient/PatientMenu';
export default function Main1() {
// window.localStorage.setItem("isLoggedIn",false)

  const [usertype,setuserType]=useState();

  const [userid,setuserid]=useState('');
  const [password,setPassword]=useState('')
  async function submit(e){
    e.preventDefault();
    try{
      await axios.post(`${process.env.REACT_APP_URL}/`,{
        usertype,userid,password
      }).then(res=>{
        if(res.data.message=='choose account type')
        {
          alert(res.data.message)
        }
       
        if(res.data.status=='ok'){
          window.localStorage.setItem("token",res.data.data);
          window.localStorage.setItem("isLoggedIn",true)
          // window.localStorage.setItem("userid",JSON.stringify(res.data.details));
          if(res.data.details.usertype=='patient')
          {
          window.location.href='./home'
          }
          else if(res.data.details.usertype=='hospital')
          {
            window.location.href='./hospitalhome'

          }
          else if(res.data.details.usertype=='privateconsultant'){
            window.location.href='./consultanthome'

          }
        }
        else{
          alert("invalid credentials")
        }
        
        
      }).catch(err=>{
        console.log("Some error")
      })

    }catch(e){
      console.log(e)
    }

  }
  


  return (
    <main>
      <div className='main'>
        <div className='Registration'>
          <div className='reg-info'>
            <h2>Welcome to Hospo</h2>
            <p>Hospital Appointment Scheduler developed by Hospo team</p>
            <Link class='a' to='/registration'>Registration</Link>
          </div>
        </div>
        < div className='loginForm'>
          <form action="POST" autocomplete="off">
            <caption>Login</caption>
            <div class="input-group">
              <select required className='loginselction'  onChange={(e)=>(setuserType(e.target.value))} >
                <option>Account Type</option>
                <option value='patient'>Patient</option>
                <option value='hospital'>Hospital</option>
                <option value='privateconsultant'>Private Consultant</option>
              </select>
            </div>
            <div class="input-group">
              <input type="text" id="name" required onChange={(e)=>(setuserid(e.target.value))}/>
              <label for="name">User ID</label>
            </div>
            <div class="input-group">
              <input type="password" id="password" required onChange={(e)=>(setPassword(e.target.value))}/>
                <label for="password">Password</label>
            </div>
            <div class="submit-btn">
              <button  class="submit" onClick={submit}>Log in</button>
            </div>
          </form>
      </div>
      </div>


    </main>
  )
}
