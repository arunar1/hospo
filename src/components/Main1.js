import React from 'react'

import './Main1.css';

export default function Main1() {
  return (
    <main>
      <div className='main'>
        <div className='Registration'>
          <div className='reg-info'>
            <h2>Welcome to Hospo</h2>
            <p>Hospital Appointment Scheduler developed by Hospo team</p>
            <a>Registration</a>
          </div>
        </div>
        < div className='loginForm'>
          <form action="" autocomplete="off">
            <caption>Login</caption>
            <div class="input-group">
              <input type="text" id="name" required />
              <label for="name">Username</label>
            </div>
            <div class="input-group">
              <input type="password" id="password" required/>
                <label for="password">Password</label>
            </div>
            <div class="submit-btn">
              <input type="submit" class="submit" />
            </div>
          </form>
      </div>
      </div>


    </main>
  )
}
