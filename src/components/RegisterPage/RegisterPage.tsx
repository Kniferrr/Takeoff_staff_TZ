import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import AuthService from '../../servises/AuthService';
import { LoginActionCreater } from '../../store/actionCreaters/LoginactionCreater';
import { RootState } from '../../store/store';

function RegisterPage() {
  const {error,isAuth} = useSelector((state: RootState) => state.reduser);
  const [email="", setEmail] = useState<string>();
  const [password="", setPassword] = useState<string>();
  const [AuthError="", setAuthError] = useState<string>();
  const dispatch: any = useDispatch();

  const ConfirmForm = async (e:any) =>{
    e.preventDefault();
    const UserData = email;
   try{
    const responce = await AuthService.register(email, password);
    dispatch(LoginActionCreater(UserData,responce));
   }catch{
    setAuthError("Error login or Email");
   }
  };

  if(error){
    return <h2>Eroor</h2>
  }else if (isAuth){
    return  <Navigate to="/personalarea"/>
  };

  console.log("render")
  console.log(isAuth)     
return (
  <>
  <h2>Reg</h2>
  
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
  <div>{AuthError}</div>
  <Link to="/login">login</Link>
  </>
)
}

export default RegisterPage