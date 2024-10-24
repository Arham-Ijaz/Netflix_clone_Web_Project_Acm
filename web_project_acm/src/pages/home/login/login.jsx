import React from 'react'
import Loginback from '../../../images/login_back.jpeg'
import './Login.css'
const Login = () => {
  return (
    <div className='Login'>
      <div className='login_back'>
        <img src={Loginback} className='position-relative img-fluid w-100 ' alt="" />

        </div>
        <div className='div_login position-absolute'>
      </div>
    </div>
  )
}

export default Login
