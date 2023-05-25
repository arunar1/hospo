import React from 'react'
import './TakeAppointment.css';
import { Link,Route,Router,Switch } from "react-router-dom";
import { useState } from 'react';
import Slot from './Slot';
export default function TakeAppointment() {
  let [selectType, activeType] = useState("");
  let [form11,form1]=useState('');
  let [form22,form2]=useState('');
  let [form33,form3]=useState('');
  
  // let formPopup = useState("Select")
  // let [btnclick, btnsetForm] = formPopup
  // //create state
  // const createClass = () => {
  //   btnsetForm((prevState) => {
  //     if (prevState === 'Select') {
  //       return "Selected"
  //     }
  //     else {
  //       return "Select"
  //     }
  //   })
  // }
  const handleChange=(event)=>{
     activeType(selectType=event.target.value);
    // let comp=event.target.value
    if(selectType==='Government'){
      
      form1(form11='Government')
      form2(form22='');
      form3(form33='');
    }
    else if(selectType==='Private'){
      form1(form11='')
      form2(form22='Private')
      form3(form33='');
    }
    else if(selectType==='Private1'){
      form1(form11='')
      form2(form22='')
      form3(form33='Private1')
    }
    }
  
  
  console.log(form11)
  console.log(form22)
  console.log(form33)
  
  


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
              <select className='SelectType' onChange={handleChange} required>
                <option></option>
                <option value="Government">Government Hospital</option>
                <option value="Private">Private Hospital</option>
                <option value="Private1">Private Consultant</option>
              </select>
            </div>
            {/* <div className='appointmentcheck'>
              <button onClick={createClass} className='appobtn'>{btnclick}</button>
            </div> */}
          </div>
          <div>
            <form className={`form1 ${form11}`} required>
              <diV className='hos'>
                <label>District</label>
                <select required>
                  <option></option>
                  <option value="kannur">Kannur</option>
                  <option value="kozhikode">Kozhikode</option>
                  <option value="kottayam">kottayam</option>
                </select>
              </diV>
              <div className='hos'>
                <label>Gov.Hospital Name</label>
                <select required>
                  <option></option>
                  <option value="phc payyoli">Phc payyoli</option>
                  <option value="phc kozhikode">phc Kozhikode</option>
                  <option value="phc kottayam">phckottayam</option>
                </select>
              </div>
              <div className='hos'>
                <label>Date</label>
                <input type='date' required></input>
              </div>
              <div className='hos'>
                <input type='submit' className='subbtn'></input>
              </div>

            </form>
          </div>
          <div>
            <form className={`form2 ${form22}`} required>
              <diV className='hos'>
                <label>District</label>
                <select required>
                  <option></option>
                  <option value="kannur">Kannur</option>
                  <option value="kozhikode">Kozhikode</option>
                  <option value="kottayam">kottayam</option>
                </select>
              </diV>
              <div className='hos'>
                <label>Pri.Hospital Name</label>
                <select required>
                  <option></option>
                  <option value="phc payyoli">Phc payyoli</option>
                  <option value="phc kozhikode">phc Kozhikode</option>
                  <option value="phc kottayam">phckottayam</option>
                </select>
              </div>
              <div className='hos'>
                <label>Date</label>
                <input type='date' required></input>
              </div>
              <div className='hos'>
                <input type='submit' className='subbtn'></input>
              </div>

            </form>
            <form className={`form3 ${form33}`} required>
              <diV className='hos'>
                <label>District</label>
                <select required>
                  <option></option>
                  <option value="kannur">Kannur</option>
                  <option value="kozhikode">Kozhikode</option>
                  <option value="kottayam">kottayam</option>
                </select>
              </diV>
              <div className='hos'>
                <label>Doctor Name</label>
                <select required>
                  <option></option>
                  <option value="phc payyoli">Phc payyoli</option>
                  <option value="phc kozhikode">phc Kozhikode</option>
                  <option value="phc kottayam">phckottayam</option>
                </select>
              </div>
              <div className='hos'>
                <label>Date</label>
                <input type='date' required></input>
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
