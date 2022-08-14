import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { LoginActionCreater } from '../../store/actionCreaters/LoginactionCreater';

function LoginPage() {
    const [email="", setEmail] = useState<string>();
    const [password="", setPassword] = useState<string>();

    const ConfirmForm = (e:any) =>{
      e.preventDefault();
      LoginActionCreater(email, password)
    }
    
  return (
    <>
    <h2>Login</h2>
    
    <form >
    <input 
    value={email}
    id="POST-login" 
    type="text" 
    name="email"
    placeholder='email'
    onChange={e=> setEmail(e.target.value)}
    />
    <input 
    value={password}
    id="POST-password" 
    type="password" 
    name="password"
    placeholder='Password'
    onChange={e=> setPassword(e.target.value)}
    />
    <button onClick={ e => ConfirmForm(e)} className='btn btn-dark'>OK</button>
    </form>
    <Link to="/register">Register</Link>
    </>
  )
}

export default LoginPage;