import { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {LoginActionCreater } from '../../store/actionCreaters/LoginactionCreater';
import { AppDispatch, RootState } from '../../store/store';
import {Navigate} from "react-router-dom";
import { useDispatch } from 'react-redux';
import AuthService from '../../servises/AuthService';
import "./LoginPage.scss"

function LoginPage() {
    const {error,isAuth,} = useSelector((state: RootState) => state.reduser);
    const [email="", setEmail] = useState<string>();
    const [password="", setPassword] = useState<string>();
    const [AuthError="", setAuthError] = useState<string>();
    const dispatch: AppDispatch = useDispatch();

    
    
    const ConfirmForm = async (e: React.FormEvent<HTMLFormElement>) =>{
      e.preventDefault();
      const UserData = email;
      try{
        const responce = await AuthService.login(email, password);
        dispatch(LoginActionCreater(UserData,responce));
      }catch{
        setAuthError("Error login or Email")
      }
    }


    if(error){
      return <h2>Eroor</h2>
    }else if (isAuth){
      return  <Navigate to="/personalarea"/>
    }
    
  return (
    <>
    <h2>Login</h2>
    
    <form className='loginForm' onSubmit={ e => ConfirmForm(e)}>
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
    <button className='btn btn-dark'>OK</button>
    </form>
    <div>{AuthError}</div>
    <Link to="/register">Register</Link>
    </>
  )
}

export default LoginPage;