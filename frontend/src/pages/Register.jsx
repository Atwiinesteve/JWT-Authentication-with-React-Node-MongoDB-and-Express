import React from 'react'
import {Link} from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify';

export default function Register() {
  return (
    <>
      <div className="container">
        <h2>Register Account</h2>
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name='' />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name='' />
          </div>
          <button type='submit'>Register</button>
          <span>
            <p>Already have an account? <Link to={'/login'}>Login</Link></p>
          </span>
        </form>
        <ToastContainer />
      </div>
    </>
  )
};