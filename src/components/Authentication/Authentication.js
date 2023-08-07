import React from 'react'
import './Auth.css'
export default function Authentication() {
  let phone=window.localStorage.getItem("phone")
  return (
    <div >
      <form className='authcontainer'>
      <div className='authphone'>
        <label>Phone :</label> {phone}
        <input type='number' otpType='number'/>
        <button className='authbtn'>Verify</button>

      </div>
      </form>
    </div>
  )
}
