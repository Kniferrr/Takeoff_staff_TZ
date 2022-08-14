import React from 'react';
import { Link } from 'react-router-dom';

function RegisterPage() {
  return (
    <>
    <h2>Register</h2>
    <form>
    <input 
    id="POST-register" 
    type="text" 
    name="login"
    placeholder='Login'
    />
    <input 
    id="POST-register" 
    type="password" 
    name="password"
    placeholder='Password'
    />
    <button className='btn btn-dark'>OK</button>
    </form>
    <Link to="/login">Login</Link>
    </>
  )
}

export default RegisterPage