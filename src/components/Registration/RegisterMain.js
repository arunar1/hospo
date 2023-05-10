import React from 'react'
import './RegisterMain.css'

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
  const handleSubmit = (e) => {
    const fname = e.target.pname.value;
    console.log(fname);

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
              <div className='formReg' name='pname'><label>Name</label>
                <input type='text' required />
              </div>
              <div className='formReg'><label>Phone No</label>
                <input type='tel' required /></div>
              <div className='formReg'><label>Age</label>
                <input type='number' required /></div>
              <div className='formReg'><label>Gender</label>
                <select required>
                  <option></option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select></div>
              <div className='formReg'><label>Email Id</label>
                <input type='email' /></div>
              <div className='formReg'><label>Password</label>
                <input type='password' required /></div>
              <div className='formReg'><label>House Name</label>
                <input type='text' required /></div>
              <div className='formReg'><label>Street Name</label>
                <input type='text' required /></div>
              <div className='formReg'><label>District</label>
                <input type='text' required /></div>
              <div className='formReg'><label>Pincode</label>
                <input type='number' required /></div>
              <div className='formReg'>
                <input className='sub1 clear' type='reset' value='Clear' />
                <input className='sub1' type='submit' />
              </div>
            </form>
          </div>
        </div>



        <div className='displayForm2'>
          <div className='form1'>
            <form action="" autocomplete="off">
              <caption>Register as Hospital</caption>
              <div className='formReg'><label>Hospital Name</label>
                <input type='text' required />
              </div>
              <div className='formReg'><label>Phone No</label>
                <input type='tel' required /></div>
              <div className='formReg'><label>Email Id</label>
                <input type='email' required /></div>
              <div className='formReg'><label>Password</label>
                <input type='password' required /></div>
              <div className='formReg'><label>Hospital Type</label>
                <select required>
                  <option></option>
                  <option value="Government">Government</option>
                  <option value="private">Private</option>
                </select></div>
              <div className='formReg'><label>Licence Id</label>
                <input type='text' required />
              </div>
              <div className='formReg'><label>Street Name</label>
                <input type='text' required /></div>
              <div className='formReg'><label>Pincode</label>
                <input type='number' required /></div>
              <div className='formReg'>
                <input className='sub1 clear' type='reset' value='Clear' />
                <input className='sub1' type='submit' />
              </div>
            </form>
          </div>
        </div>


        <div className='displayForm3'>
          <div className='form1'>
            <form action="" autocomplete="off">
              <caption>Register as Private consultant</caption>
              <div className='formReg'><label>Name</label>
                <input type='text' required />
              </div>
              <div className='formReg'><label>Phone No</label>
                <input type='tel' required /></div>
              <div className='formReg'><label>Experience(Yrs)</label>
                <input type='number' required /></div>
              <div className='formReg'><label>Licence Id</label>
                <input type='text' required />
              </div>
              <div className='formReg'><label>Gender</label>
                <select required>
                  <option></option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select></div>
              <div className='formReg'><label>Email</label>
                <input type='email' required /></div>
              <div className='formReg'><label>Password</label>
                <input type='password' required /></div>
              <div className='formReg'><label>Street Name</label>
                <input type='text' required /></div>
              <div className='formReg'><label>District</label>
                <input type='text' required /></div>
              <div className='formReg'><label>Pincode</label>
                <input type='number' required /></div>
              <div className='formReg'>
                <input className='sub1 clear' type='reset' value='Clear' />
                <input className='sub1' type='submit' />
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

