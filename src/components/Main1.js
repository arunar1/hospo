import React from 'react'
import { Link } from 'react-router-dom';

import './Main1.css';

export default function Main1() {
  return (
    <main>
      <div className='main'>
        <div className='Registration'>
          <div className='reg-info'>
            <h2>Welcome to Hospo</h2>
            <p>Hospital Appointment Scheduler developed by Hospo team</p>
            <Link class='a' to='/registration'>Registration</Link>
          </div>
        </div>
        < div className='loginForm'>
          <form action="" autocomplete="off">
            <caption>Login</caption>
            <div class="input-group">
              <select required className='loginselction'>
                <option>Account Type</option>
                <option value='patient'>Patient</option>
                <option value='hospital'>Hospital</option>
                <option value='privateconsultant'>Private Consultant</option>
              </select>
            </div>
            <div class="input-group">
              <input type="tel" id="name" required />
              <label for="name">User ID</label>
            </div>
            <div class="input-group">
              <input type="password" id="password" required/>
                <label for="password">Password</label>
            </div>
            <div class="submit-btn">
              <button  class="submit">Log in</button>
            </div>
          </form>
      </div>
      </div>


    </main>
  )
}
