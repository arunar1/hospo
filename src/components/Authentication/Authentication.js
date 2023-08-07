import React from 'react'
import './Auth.css'
export default function Authentication() {
  let phone=window.localStorage.getItem("phone")
  let email=window.localStorage.getItem('email')
  const skip=()=>{
    window.location.href='/';
    alert(`User Id : ${phone}`)
  }
  
  return (
    <div >
      <form className='authcontainer'>
      <div className='authphone'>
        <label>Phone :</label> {phone}
        <input type='number' otpType='number'/>
        <button className='authbtn'>Verify</button>

      </div>
      <div className='authphone'>
        <label>Email :</label> {email}
        <input type='number' otpType='number'/>
        <button className='authbtn'>Verify</button>
      </div>
      </form>
      <button className='btnclick' onClick={skip}>skip</button>
    </div>
  )
}
