import React from 'react'
import './Auth.css'
export default function Authentication() {
    let email='arunar123az@gmail.com'
    let phone="34454664"
  return (
    <div >
      <form className='authcontainer'>
      <div className='authemail'>
        <label>Email :</label> {email}
        <input className='inputauth' type='number'/>
        <button className='authbtn'>Verify</button>

      </div>
      <div className='authphone'>
        <label>Phone :</label> {phone}
        <input type='number'/>
        <button className='authbtn'>Verify</button>

      </div>
      </form>
    </div>
  )
}
