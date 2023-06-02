import React from 'react'
import './TakeAppointment.css';
import { Link,Route,Router,Switch } from "react-router-dom";
import { useState } from 'react';
import Slot from './Slot';
export default function TakeAppointment() {
  let [inputs, setinputs] = useState({})

  let [inputs2, setinputs2] = useState({})
  let [inputs3, setinputs3] = useState({})





  let [selectType, activeType] = useState("");
  let [form11,form1]=useState('');
  let [form22,form2]=useState('');
  let [form33,form3]=useState('');
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
  const handleClick = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setinputs(values => ({ ...values, [name]: value }))
  }

const checkslot=()=>{

}
const handleClick2 = (event) => {
  const name = event.target.name;
  const value = event.target.value;
  setinputs2(values => ({ ...values, [name]: value }))
}
const handleClick3= (event) => {
  const name = event.target.name;
  const value = event.target.value;
  setinputs3(values => ({ ...values, [name]: value }))
}

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(inputs)
    inputs.HospitalType=selectType;
     window.localStorage.setItem("appdeatail",JSON.stringify(inputs));

    windowChange()
    
  }
  const handleSubmit2=(e)=>{
    e.preventDefault()
    console.log(inputs2)
    inputs2.HospitalType=selectType;
     window.localStorage.setItem("appdeatail",JSON.stringify(inputs2));

    windowChange()
    
  }
  const handleSubmit3=(e)=>{
    e.preventDefault()
    console.log(inputs3)
    inputs3.HospitalType=selectType;
     window.localStorage.setItem("appdeatail",JSON.stringify(inputs3));
    windowChange()
    
  }
  const windowChange=()=>{
    window.location.href='./takeappointment/slot'
  }



  return (
    <>
    <div className='background'>
      <div className='appointment'>
        <div className='takeappointment'>
          <div className='header'>
            <h1>Take Appointment</h1>
            <ul>
              <li><Link to="/home" className='linker'>back</Link></li>
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
            <form className={`form1 ${form11}`} onSubmit={handleSubmit} required>
              <diV className='hos'>
                <label>District</label>
                <select required  onChange={handleClick} name='DistrictName' value={inputs.DistrictName}>
                  <option></option>
                  <option value="kannur">Kannur</option>
                  <option value="kozhikode">Kozhikode</option>
                  <option value="kottayam">kottayam</option>
                </select>
              </diV>
              <div className='hos'>
                <label>Gov.Hospital Name</label>
                <select onChange={handleClick} name='HospitalName' value={inputs.HospitalName} >
                  <option></option>
                  <option value="phc payyoli">Phc payyoli</option>
                  <option value="phc kozhikode">phc Kozhikode</option>
                  <option value="phc kottayam">phckottayam</option>
                </select>
              </div>
              <div className='hos'>
                <label>Date</label>
                <input type='date' required onChange={handleClick} name='Date' value={inputs.Date}></input>
              </div>
              <div className='hos'>
                <input type='submit' className='subbtn' ></input>
              </div>

            </form>
          </div>
          <div>
            <form className={`form2 ${form22}`} onSubmit={handleSubmit2} required>
              <diV className='hos'>
                <label>District</label>
                <select name='DistrictName' onChange={handleClick2}  value={inputs2.DistrictName} required>
                  <option></option>
                  <option value="kannur">Kannur</option>
                  <option value="kozhikode">Kozhikode</option>
                  <option value="kottayam">kottayam</option>
                </select>
              </diV>
              <div className='hos' name='HospitalName' onChange={handleClick2} value={inputs2.HospitalName}>
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
                <input type='date' required onChange={handleClick2} name='Date' value={inputs2.Date}></input>
              </div>
              <div className='hos'>
                <input type='submit' className='subbtn'></input>
              </div>

            </form>
            <form className={`form3 ${form33}`} onSubmit={handleSubmit3} required>
              <diV className='hos'>
                <label>District</label>
                <select onChange={handleClick3} name='DistrictName' value={inputs3.DistrictName} required>
                  <option></option>
                  <option value="kannur">Kannur</option>
                  <option value="kozhikode">Kozhikode</option>
                  <option value="kottayam">kottayam</option>
                </select>
              </diV>
              <div className='hos'>
                <label>Doctor Name</label>
                <select   required onChange={handleClick3} name='DoctorName' value={inputs3.DoctorName} >
                  <option></option>
                  <option value="phc payyoli">Phc payyoli</option>
                  <option value="phc kozhikode">phc Kozhikode</option>
                  <option value="phc kottayam">phckottayam</option>
                </select>
              </div>
              <div className='hos'>
                <label>Date</label>
                <input type='date' required onChange={handleClick3} name='Date' value={inputs3.Date}></input>
              </div>
              <div className='hos'>
                <input type='submit' className='subbtn'></input>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>

    
    </>
  )
}