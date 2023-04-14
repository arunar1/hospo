import React, { Component } from 'react'
import './Login.css'
import LoginRegistration from './logincomponent/LoginRegistration'

class Login extends Component {
  render() {
    return (
      <div className='loginpage'>
        <LoginRegistration/>
      </div>
    )
  }
}

export default Login
