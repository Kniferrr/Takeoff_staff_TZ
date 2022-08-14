import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { LoginActionCreater } from '../../store/actionCreaters/LoginactionCreater';
import { RootState } from '../../store/store';
import {Navigate} from "react-router-dom";
import { useDispatch } from 'react-redux';

function LoginPage() {
  const {error,isAuth} = useSelector((state: RootState) => state.reduser);
    const [email="", setEmail] = useState<string>();
    const [password="", setPassword] = useState<string>();
    const dispatch: any = useDispatch();
    const ConfirmForm = (e:any) =>{
      e.preventDefault();
    dispatch(LoginActionCreater(email, password));
    }

    if(error){
      return <h2>Eroor</h2>
    }else if (isAuth){
      return  <h2>Eroor</h2>
    }

    console.log("render")
    console.log(isAuth)     
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