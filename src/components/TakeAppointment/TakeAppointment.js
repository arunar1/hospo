import React from 'react'
import './TakeAppointment.css';
import { useState } from 'react';

export default function TakeAppointment() {
  let [selectType,activeType]=useState("")
  let formPopup=useState("Click")
let[btnclick,btnsetForm]=formPopup
  //create state
const createClass=()=>{
  btnsetForm((prevState)=>{
    if(prevState=='Click'){
      return "Clicked"
    }
    else{
      return "Click"
    }
  })
}

  return (
    <div className='appointment'>
      <div className='takeappointment'>
        <div className='header'>
          <h1>Take Appointment</h1>
        </div>
      </div>
      <div className='selectsection'>
 
        <div className='apointmentform'>
        <div>
          <label>Hospital Type</label>
          <select className='SelectType' required>
            <option></option>
            <option value="Governemt">Governemt Hospital</option>
            <option value="Private">Private Hospital</option>
            <option value="Private">Private Consultant</option>
          </select>
        </div>
          <div className='appointmentcheck'>
            <button onClick={createClass} className='appobtn'>{btnclick}</button>
          </div>
        </div>
        <div>
          <form className={`form1 ${selectType}`}>
          </form>
        </div>

      </div>
    </div>
  )
}
