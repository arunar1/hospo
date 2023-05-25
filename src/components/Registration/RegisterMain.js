import React from 'react'
import './RegisterMain.css'
import Axios from 'axios'
import { useState } from 'react'



export default function RegisterMain() {


  const patient = () => {
    let active1 = document.querySelector('.patient');
    active1.classList.add('active');
    let active2 = document.querySelector('.hospital');
    active2.classList.remove('active');
    let active3 = document.querySelector('.consultant');
    active3.classList.remove('active');

    let menu1 = document.querySelector(".displayForm1");
    menu1.classList.toggle('displayForm11');
    let menu2 = document.querySelector(".displayForm2");
    menu2.classList.remove('displayForm22');
    let menu3 = document.querySelector(".displayForm3");
    menu3.classList.remove('displayForm33');
  }
  const hospital = () => {
    let active1 = document.querySelector('.patient');
    active1.classList.remove('active');
    let active2 = document.querySelector('.hospital');
    active2.classList.add('active');
    let active3 = document.querySelector('.consultant');
    active3.classList.remove('active');

    let menu1 = document.querySelector(".displayForm1");
    menu1.classList.remove('displayForm11');
    let menu2 = document.querySelector(".displayForm2");
    menu2.classList.toggle('displayForm22');
    let menu3 = document.querySelector(".displayForm3");
    menu3.classList.remove('displayForm33');


  }
  const consultant = () => {
    let active1 = document.querySelector('.patient');
    active1.classList.remove('active');
    let active2 = document.querySelector('.hospital');
    active2.classList.remove('active');
    let active3 = document.querySelector('.consultant');
    active3.classList.add('active');



    let menu1 = document.querySelector(".displayForm1");
    menu1.classList.remove('displayForm11');
    let menu2 = document.querySelector(".displayForm2");
    menu2.classList.remove('displayForm22');
    let menu3 = document.querySelector(".displayForm3");
    menu3.classList.toggle('displayForm33');

  }

 let [inputs,setinputs]=useState({})
 let [inputshos,setinputshos]=useState({})
 let [inputspri,setinputspri]=useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputs);
    console.log(inputshos);
    console.log(inputspri)
  }
  const handleClick=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setinputs(values=>({...values,[name]:value}))
  }
  const handleClickhos=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setinputshos(values=>({...values,[name]:value}))
  }
  const handleClickpri=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setinputspri(values=>({...values,[name]:value}))
  }

  const clears=()=>{
    setinputs(inputs={})
    setinputshos(inputshos={})
    setinputspri(inputspri={})
  }
  
  
  





  return (
    <div>

      <main className='main1'>
        {/* <marquee>Registration</marquee> */}
        <div className='reg-button'>
          <button className='patient' onClick={patient} >Patient</button>
          <button className='hospital' onClick={hospital}>Hospital</button>
          <button className='consultant' onClick={consultant}>Private Consultant</button>
        </div>



        <div className='displayForm1 displayForm11'>
          <div className='form1'>
            <form onSubmit={handleSubmit} autocomplete="off">
              <caption>Register as Patient</caption>
              <div className='formReg' ><label>Name</label>
                <input type='text' required  onChange={handleClick} name='name' value={inputs.name||''} />
              </div>
              <div className='formReg'><label>Phone No</label>
                <input type='tel' required onChange={handleClick} name='phone' value={inputs.phone||""} /></div>
              <div className='formReg'><label>Age</label>
                <input type='number' required onChange={handleClick} name='age' value={inputs.age||""}/></div>
              <div className='formReg'><label>Gender</label>
                <select required onChange={handleClick} name='gender' value={inputs.gneder}>
                  <option></option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select></div>
              <div className='formReg'><label>Email Id</label>
                <input type='email' onChange={handleClick} name='email' value={inputs.email} /></div>
              <div className='formReg'><label>Password</label>
                <input type='password' required onChange={handleClick} name='password' value={inputs.password} /></div>
              <div className='formReg'><label>House Name</label>
                <input type='text' required onChange={handleClick} name='housename' value={inputs.housename||""} /></div>
              <div className='formReg'><label>Street Name</label>
                <input type='text' required onChange={handleClick} name='streetname' value={inputs.streetname||""} /></div>
              <div className='formReg'><label>District</label>
                <input type='text' required onChange={handleClick} name='district' value={inputs.district||""} /></div>
              <div className='formReg'><label>Pincode</label>
                <input type='number' required onChange={handleClick} name='pincode' value={inputs.pincode||""} /></div>
              <div className='formReg'>
                <input className='sub1 clear' type='reset' value='Clear' onClick={clears}/>
                <input className='sub1' type='submit' />
              </div>
            </form>
          </div>
        </div>



        <div className='displayForm2'>
          <div className='form1'>
            <form action="" onSubmit={handleSubmit} autocomplete="off">
              <caption>Register as Hospital</caption>
              <div className='formReg'><label>Hospital Name</label>
                <input type='text' required onChange={handleClickhos} name='hospitalname' value={inputshos.hospitalname||''}/>
              </div>
              <div className='formReg'><label>Phone No</label>
                <input type='tel' required onChange={handleClickhos} name='phone' value={inputshos.phone||""}/></div>
              <div className='formReg'><label>Email Id</label>
                <input type='email' required onChange={handleClickhos} name='email' value={inputshos.email} /></div>
              <div className='formReg'><label>Password</label>
                <input type='password' required  onChange={handleClickhos} name='password' value={inputshos.password}/></div>
              <div className='formReg'><label>Hospital Type</label>
                <select required name='hospitaltype' value={inputs.hospitaltype}>
                  <option></option>
                  <option value="Government">Government</option>
                  <option value="private">Private</option>
                </select></div>
              <div className='formReg'><label>Licence Id</label>
                <input type='text' required onChange={handleClickhos} name='license' value={inputshos.licence||""}/>
              </div>
              <div className='formReg'><label>Street Name</label>
                <input type='text' required onChange={handleClickhos} name='streetname' value={inputshos.streetname||""} /></div>
              <div className='formReg'><label>Pincode</label>
                <input type='number' required onChange={handleClickhos} name='pincode' value={inputshos.pincode||""} /></div>
              <div className='formReg'>
                <input className='sub1 clear' type='reset' value='Clear' onClick={clears}/>
                <input className='sub1' type='submit' />
              </div>
            </form>
          </div>
        </div>


        <div className='displayForm3'>
          <div className='form1'>
            <form action="" autocomplete="off" onSubmit={handleSubmit}>
              <caption>Register as Private consultant</caption>
              <div className='formReg'><label>Name</label>
                <input type='text' required onChange={handleClickpri} name='consultantname' value={inputspri.consultantname||''} />
              </div>
              <div className='formReg'><label>Phone No</label>
                <input type='tel' required onChange={handleClickpri} name='phone' value={inputspri.phone||""} /></div>
              <div className='formReg'><label>Experience(Yrs)</label>
                <input type='number' required onChange={handleClickpri} name='experience' value={inputspri.experience||""}/></div>
              <div className='formReg'><label>Licence Id</label>
                <input type='text' required onChange={handleClickpri} name='licence' value={inputspri.licence||""}/>
              </div>
              <div className='formReg'><label>Gender</label>
                <select required onChange={handleClickpri} name='gender' value={inputspri.gneder}>
                  <option></option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select></div>
              <div className='formReg'><label>Email</label>
                <input type='email' required onChange={handleClickpri} name='email' value={inputspri.email} /></div>
              <div className='formReg' ><label>Password</label>
                <input type='password' required onChange={handleClickpri} name='password' value={inputspri.password}/></div>
              <div className='formReg'><label>Street Name</label>
                <input type='text' required  onChange={handleClickpri} name='streetname' value={inputspri.streetname||""}/></div>
              <div className='formReg'><label>District</label>
                <input type='text' required onChange={handleClickpri} name='district' value={inputspri.district||""}/></div>
              <div className='formReg'><label>Pincode</label>
                <input type='number' required onChange={handleClickpri} name='pincode' value={inputspri.pincode||""}/></div>
              <div className='formReg'>
                <input className='sub1 clear' type='reset' value='Clear' onClick={clears}/>
                <input className='sub1' type='submit' />
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

