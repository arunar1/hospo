import React from 'react'
import './TakeAppointment.css';
import { Link } from "react-router-dom";
import { useState } from 'react';

export default function TakeAppointment() {
  let [selectType, activeType] = useState("")
  let formPopup = useState("Select")
  let [btnclick, btnsetForm] = formPopup
  //create state
  const createClass = () => {
    btnsetForm((prevState) => {
      if (prevState === 'Select') {
        return "Selected"
      }
      else {
        return "Select"
      }
    })
  }

  return (
    <div className='background'>
      <div className='appointment'>
        <div className='takeappointment'>
          <div className='header'>
            <h1>Take Appointment</h1>
            <ul>
              <li><Link to="/about" className='linker'>back</Link></li>
            </ul>
          </div>
        </div>
        <div className='selectsection'>

          <div className='apointmentform hos'>
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
            <form className='form1'>
              <diV className='hos'>
                <label>District</label>
                <select>
                  <option></option>
                  <option value="kannur">Kannur</option>
                  <option value="kozhikode">Kozhikode</option>
                  <option value="kottayam">kottayam</option>
                </select>
              </diV>
              <div className='hos'>
                <label>Hospital Name</label>
                <select>
                  <option></option>
                  <option value="phc payyoli">Phc payyoli</option>
                  <option value="phc kozhikode">phc Kozhikode</option>
                  <option value="phc kottayam">phckottayam</option>
                </select>
              </div>
              <div className='hos'>
                <label>Date</label>
                <input type='date'></input>
              </div>
              <div className='hos'>
                <input type='submit' className='subbtn'></input>
              </div>

            </form>
          </div>
          <div>
            <form className='form2'>
              <diV className='hos'>
                <label>District</label>
                <select>
                  <option></option>
                  <option value="kannur">Kannur</option>
                  <option value="kozhikode">Kozhikode</option>
                  <option value="kottayam">kottayam</option>
                </select>
              </diV>
              <div className='hos'>
                <label>Hospital Name</label>
                <select>
                  <option></option>
                  <option value="phc payyoli">Phc payyoli</option>
                  <option value="phc kozhikode">phc Kozhikode</option>
                  <option value="phc kottayam">phckottayam</option>
                </select>
              </div>
              <div className='hos'>
                <label>Date</label>
                <input type='date'></input>
              </div>
              <div className='hos'>
                <input type='submit' className='subbtn'></input>
              </div>

            </form>
            <form className='form3'>
              <diV className='hos'>
                <label>District</label>
                <select>
                  <option></option>
                  <option value="kannur">Kannur</option>
                  <option value="kozhikode">Kozhikode</option>
                  <option value="kottayam">kottayam</option>
                </select>
              </diV>
              <div className='hos'>
                <label>Doctor Name</label>
                <select>
                  <option></option>
                  <option value="phc payyoli">Phc payyoli</option>
                  <option value="phc kozhikode">phc Kozhikode</option>
                  <option value="phc kottayam">phckottayam</option>
                </select>
              </div>
              <div className='hos'>
                <label>Date</label>
                <input type='date'></input>
              </div>
              <div className='hos'>
                <input type='submit' className='subbtn'></input>
              </div>

            </form>
          </div>

        </div>
      </div>
    </div>
  )
}
