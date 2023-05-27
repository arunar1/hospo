import React, { useState } from 'react'
import {Link } from 'react-router-dom';
import './Main1.css';
import axios from 'axios';
import { Route, Router } from 'react-router-dom/cjs/react-router-dom.min';
import patientMenu from './MainmenuPatient/patientMenu';

export default function Main1() {

  

  const [userid,setuserid]=useState('');
  const [password,setPassword]=useState('')
  async function submit(e){
    e.preventDefault();
    try{
      await axios.post('http://localhost:5000/',{
        userid,password
      }).then(res=>{
        console.log(res.data)
        
        
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
              <select required className='loginselction' >
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
