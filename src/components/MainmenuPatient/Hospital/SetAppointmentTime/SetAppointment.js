import React from 'react'
import { Link } from 'react-router-dom'
import './SetAppointment.css'
export default function SetAppointment() {
  return (
    <div>
      <div className='setappointment'>
        <div className='setappointmentHeader'>
            <h1>Set Appointment Time</h1>
            <ul>
              <li><Link to="/hospitalhome" className='linker'>back</Link></li>
            </ul>
        </div>
        <div className='settime'>
            <form>
                <div className='timer'>
                    <label>Working Time :-</label>
                    <input type='time' ></input>
                </div>
                <div className='timer'>
                   
                    <input type='time' ></input>
                </div>  
                <div className='subtn'>
                    <input type='submit'></input>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}
