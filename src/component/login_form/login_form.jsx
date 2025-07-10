import React from 'react';
import './login_form.css';
import { FaUser } from "react-icons/fa";//user icon
import { FaLock } from "react-icons/fa";//lock icon

const login_form = () => {
  return (
    <div className='wrapper'>
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
         <input type ="text" placeholder='username' required/>
         <FaUser  className='icon'/>
         </div>

         <div className="input-box">
         <input type ="password" placeholder='password' required/>
         <FaLock  className='icon'/>
         </div>

<div className=' remember-forgot '>
<label><input type='checkbox'/>Remember me</label>
<a href='#'> Forgot Password</a>
</div>


<button type='Submit'> Login</button>
<div className="register-link">
    <p>Don't have an account?<a href='#'>Register</a></p>
</div>
      </form>
    </div>
  )
}

export default login_form
