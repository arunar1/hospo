import React from 'react'
import './Auth.css'
export default function Authentication() {
  let phone="34454664"
  return (
    <div >
      <form className='authcontainer'>
      <div className='authphone'>
        <label>Phone :</label> {phone}
        <otpInput OTPLength={6} otpType='number'/>
        <button className='authbtn'>Verify</button>

      </div>
      </form>
    </div>
  )
}
