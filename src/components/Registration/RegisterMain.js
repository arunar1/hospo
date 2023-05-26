import React from 'react'
import './RegisterMain.css'
import { useState } from 'react'
import axios from 'axios'



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

  let [inputs, setinputs] = useState({})
  let [inputshos, setinputshos] = useState({})
  let [inputspri, setinputspri] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
  // console.log(JSON.stringify(Object.entries99+(inputs)))
  // try{
  //    axios.post("http://localhost:8000/registration",{
  //     inputs
  //   })
  //   .then(res=>{
  //     if(res.data=='exist'){
  //       alert("already")
  //     }
  //     else{
  //       alert("error")
  //     }

  //   }).catch(e=>{
  //     alert("wrong")
  //   })
  // }
  // catch(e){
  //   console.log(e)

  // }
  console.log(inputs);
  let goli="hello";
  axios.post("http://localhost:8000/registration",{goli})
  .then(res=>{
    console.log("response",res);
  })
  }
  
  const handleSubmithos = (e) => {
    e.preventDefault()
    console.log(inputshos);
    // let {pname,pphone,page,pemail,ppassword,phousename,pstreetname,ppincode}=inputshos;

  }
  const handleSubmitpri = (e) => {
    e.preventDefault()
    console.log(inputspri);
    // let {pname,pphone,page,pemail,ppassword,phousename,pstreetname,ppincode}=inputspri;

  }

  const handleClick = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setinputs(values => ({ ...values, [name]: value }))
  }
  const handleClickhos = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setinputshos(values => ({ ...values, [name]: value }))
  }
  const handleClickpri = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setinputspri(values => ({ ...values, [name]: value }))
  }
  const clears = () => {
    setinputs(inputs = {})
    setinputshos(inputshos = {})
    setinputspri(inputspri = {})
  }

  // fetch("http://localhost:5000/registration",{
  //   method:'POST',
  //   crossDomain:true,
  //   headers:{
  //     'content-type':"application/jason",
  //     Accept:"application/json",
  //     "Access-Control_Allow_Origin":"*"
  //   },
  //   body:JSON.stringify(Object.entries(inputs)),
  // }).then((res)=>res.json())
  // .then((data)=>{
  //   console.log(data,"patient Registered")
  // });







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
            <form onSubmit={handleSubmit} autocomplete="off" action='POST'>
              <caption>Register as Patient</caption>
              <div className='formReg' ><label>Name</label>
                <input type='text' required onChange={handleClick} name='pname' value={inputs.pname || ''} />
              </div>
              <div className='formReg'><label>Phone No</label>
                <input type='tel' required onChange={handleClick} name='pphone' value={inputs.pphone || ""} /></div>
              <div className='formReg'><label>Age</label>
                <input type='number' required onChange={handleClick} name='page' value={inputs.page || ""} /></div>
              <div className='formReg'><label>Gender</label>
                <select required onChange={handleClick} name='pgender' value={inputs.pgneder}>
                  <option></option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select></div>
              <div className='formReg'><label>Email Id</label>
                <input type='email' onChange={handleClick} name='pemail' value={inputs.pemail} /></div>
              <div className='formReg'><label>Password</label>
                <input type='password' required onChange={handleClick} name='ppassword' value={inputs.ppassword} /></div>
              <div className='formReg'><label>House Name</label>
                <input type='text' required onChange={handleClick} name='phousename' value={inputs.phousename || ""} /></div>
              <div className='formReg'><label>Street Name</label>
                <input type='text' required onChange={handleClick} name='pstreetname' value={inputs.pstreetname || ""} /></div>
              <div className='formReg'><label>District</label>
                <input type='text' required onChange={handleClick} name='pdistrict' value={inputs.pdistrict || ""} /></div>
              <div className='formReg'><label>Pincode</label>
                <input type='number' required onChange={handleClick} name='ppincode' value={inputs.ppincode || ""} /></div>
              <div className='formReg'>
                <input className='sub1 clear' type='reset' value='Clear' onClick={clears} />
                <input className='sub1' type='submit' />
              </div>
            </form>
          </div>
        </div>



        <div className='displayForm2'>
          <div className='form1'>
            <form  onSubmit={handleSubmithos} autocomplete="off" action='POST'>
              <caption>Register as Hospital</caption>
              <div className='formReg'><label>Hospital Name</label>
                <input type='text' required onChange={handleClickhos} name='hospitalname' value={inputshos.hospitalname || ''} />
              </div>
              <div className='formReg'><label>Phone No</label>
                <input type='tel' required onChange={handleClickhos} name='phone' value={inputshos.phone || ""} /></div>
              <div className='formReg'><label>Email Id</label>
                <input type='email' required onChange={handleClickhos} name='email' value={inputshos.email} /></div>
              <div className='formReg'><label>Password</label>
                <input type='password' required onChange={handleClickhos} name='password' value={inputshos.password} /></div>
              <div className='formReg'><label>Hospital Type</label>
                <select required name='hospitaltype' value={inputs.hospitaltype}>
                  <option></option>
                  <option value="Government">Government</option>
                  <option value="private">Private</option>
                </select></div>
              <div className='formReg'><label>Licence Id</label>
                <input type='text' required onChange={handleClickhos} name='licence' value={inputshos.licence || ""} />
              </div>
              <div className='formReg'><label>Street Name</label>
                <input type='text' required onChange={handleClickhos} name='streetname' value={inputshos.streetname || ""} /></div>
              <div className='formReg'><label>Pincode</label>
                <input type='number' required onChange={handleClickhos} name='pincode' value={inputshos.pincode || ""} /></div>
              <div className='formReg'>
                <input className='sub1 clear' type='reset' value='Clear' onClick={clears} />
                <input className='sub1' type='submit' />
              </div>
            </form>
          </div>
        </div>


        <div className='displayForm3'>
          <div className='form1'>
            <form action='POST' autocomplete="off" onSubmit={handleSubmitpri}>
              <caption>Register as Private consultant</caption>
              <div className='formReg'><label>Name</label>
                <input type='text' required onChange={handleClickpri} name='consultantname' value={inputspri.consultantname || ''} />
              </div>
              <div className='formReg'><label>Phone No</label>
                <input type='tel' required onChange={handleClickpri} name='phone' value={inputspri.phone || ""} /></div>
              <div className='formReg'><label>Experience(Yrs)</label>
                <input type='number' required onChange={handleClickpri} name='experience' value={inputspri.experience || ""} /></div>
              <div className='formReg'><label>Licence Id</label>
                <input type='text' required onChange={handleClickpri} name='licence' value={inputspri.licence || ""} />
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
                <input type='password' required onChange={handleClickpri} name='password' value={inputspri.password} /></div>
              <div className='formReg'><label>Street Name</label>
                <input type='text' required onChange={handleClickpri} name='streetname' value={inputspri.streetname || ""} /></div>
              <div className='formReg'><label>District</label>
                <input type='text' required onChange={handleClickpri} name='district' value={inputspri.district || ""} /></div>
              <div className='formReg'><label>Pincode</label>
                <input type='number' required onChange={handleClickpri} name='pincode' value={inputspri.pincode || ""} /></div>
              <div className='formReg'>
                <input className='sub1 clear' type='reset' value='Clear' onClick={clears} />
                <input className='sub1' type='submit' />
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

