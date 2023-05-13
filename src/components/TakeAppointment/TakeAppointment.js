import React from 'react'
import './TakeAppointment.css';

export default function TakeAppointment() {
  return (
    <div className='appointment'>
      <div className='takeappointment'>
        <div className='header'>
          <h1>Take Appointment</h1>
        </div>
      </div>
      <div className='selectsection'>
 
        <form className='apointmentform'>
        <div>
          <label>Hospital Type</label>
          <select className='SelectType' required>
            <option></option>
            <option value="Governemt">Governemt</option>
            <option value="Private">Female</option>
          </select>
          {/* <button></button> */}
        </div>
          <div>
            <label>Hospital Name</label>
            <input type=''></input>
          </div>
          <div>
            <label>Date</label>
            <input type='date'></input>
          </div>
          <div className='appointmentcheck'>
            <button className='appobtn'>Check</button>
          </div>
        </form>
        {/* <form className='apointmentform'>

          <div>
            <label>Hospital Name</label>
            <input type=''></input>
          </div>
          <div>
            <label>Date</label>
            <input type='date'></input>
          </div>
        </form>
        <form className='apointmentform'>
        
        <div>
          <label>Hospital Name</label>
          <input type=''></input>
        </div>
        <div>
          <label>Date</label>
          <input type='date'></input>
        </div>
      </form> */}

      </div>
    </div>
  )
}
