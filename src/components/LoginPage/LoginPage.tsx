import React from 'react'
import { Link } from 'react-router-dom';

function LoginPage() {
  

  return (
    <>
    <h2>Login</h2>
    <form >
    <input 
    id="POST-login" 
    type="text" 
    name="email"
    placeholder='email'
    
    />
    <input 
    id="POST-password" 
    type="password" 
    name="password"
    placeholder='Password'
    />
    <button className='btn btn-dark'>OK</button>
    </form>
    <Link to="/register">Register</Link>
    </>
  )
}

export default LoginPage;