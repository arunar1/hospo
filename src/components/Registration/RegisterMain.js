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
    inputs.type='patient';
    console.log(inputs)
  try{
     axios.post("http://localhost:5000/registration",inputs)
     .then((data)=>{
      console.log(data)

     });
    }
  catch(e){
    console.log(e)

  }
  }
  
  const handleSubmithos = (e) => {
    e.preventDefault()

    inputshos.type='hospital';
    console.log(inputshos)
    
  try{
     axios.post("http://localhost:5000/registration",inputshos)
     .then((data)=>{
      console.log(data)

     });
    }
  catch(e){
    console.log(e)

  }
    
  }
  const handleSubmitpri = (e) => {
    e.preventDefault()
    inputspri.type='privateconsultant';
  try{
     axios.post("http://localhost:5000/registration",inputspri)
     .then((data)=>{
      console.log(data)

     });
    }
  catch(e){
    console.log(e)

  }
   
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
                <input type='email' onChange={handleClick} name='pemail' value={inputs.pemail } /></div>
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
                <input type='text' required onChange={handleClickhos} name='hname' value={inputshos.hname || ''} />
              </div>
              <div className='formReg'><label>Phone No</label>
                <input type='tel' required onChange={handleClickhos} name='hphone' value={inputshos.hphone || ""} /></div>
              <div className='formReg'><label>Email Id</label>
                <input type='email' required onChange={handleClickhos} name='hemail' value={inputshos.hemail} /></div>
              <div className='formReg'><label>Password</label>
                <input type='password' required onChange={handleClickhos} name='hpassword' value={inputshos.hpassword} /></div>
              <div className='formReg'><label>Hospital Type</label>
                <select required name='htype'  onChange={handleClickhos} value={inputshos.htype}>
                  <option></option>
                  <option value="Government">Government</option>
                  <option value="private">Private</option>
                </select></div>
              <div className='formReg'><label>Licence Id</label>
                <input type='text' required onChange={handleClickhos} name='hlicence' value={inputshos.hlicence || ""} />
              </div>
              <div className='formReg'><label>Street Name</label>
                <input type='text' required onChange={handleClickhos} name='hstreetname' value={inputshos.hstreetname || ""} /></div>
                <div className='formReg'><label>District</label>
                <input type='text' required onChange={handleClickhos} name='hdistrict' value={inputshos.hdistrict || ""} />
              </div>
              <div className='formReg'><label>Pincode</label>
                <input type='number' required onChange={handleClickhos} name='hpincode' value={inputshos.hpincode || ""} /></div>
                
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
                <input type='text' required onChange={handleClickpri} name='cname' value={inputspri.cname || ''} />
              </div>
              <div className='formReg'><label>Phone No</label>
                <input type='tel' required onChange={handleClickpri} name='cphone' value={inputspri.cphone || ""} /></div>
              <div className='formReg'><label>Experience(Yrs)</label>
                <input type='number' required onChange={handleClickpri} name='cexperience' value={inputspri.cexperience || ""} /></div>
              <div className='formReg'><label>Licence Id</label>
                <input type='text' required onChange={handleClickpri} name='clicence' value={inputspri.clicence || ""} />
              </div>
              <div className='formReg'><label>Gender</label>
                <select required onChange={handleClickpri} name='cgender' value={inputspri.cgneder}>
                  <option></option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select></div>
              <div className='formReg'><label>Email</label>
                <input type='email' required onChange={handleClickpri} name='cemail' value={inputspri.cemail} /></div>
              <div className='formReg' ><label>Password</label>
                <input type='password' required onChange={handleClickpri} name='cpassword' value={inputspri.cpassword} /></div>
              <div className='formReg'><label>Street Name</label>
                <input type='text' required onChange={handleClickpri} name='cstreetname' value={inputspri.cstreetname || ""} /></div>
              <div className='formReg'><label>District</label>
                <input type='text' required onChange={handleClickpri} name='cdistrict' value={inputspri.cdistrict || ""} /></div>
              <div className='formReg'><label>Pincode</label>
                <input type='number' required onChange={handleClickpri} name='cpincode' value={inputspri.cpincode || ""} /></div>
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

