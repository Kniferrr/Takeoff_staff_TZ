import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import AuthService from '../../http/servises/AuthService';
import { LoginActionCreater } from '../../store/actionCreaters/LoginactionCreater';
import { AppDispatch, RootState } from '../../store/store';
import "./RegisterPage.scss"

function RegisterPage() {
  const {error,isAuth} = useSelector((state: RootState) => state.reduser);
  const [email="", setEmail] = useState<string>();
  const [password="", setPassword] = useState<string>();
  const [AuthError="", setAuthError] = useState<string>();
  const dispatch: AppDispatch = useDispatch();

  const ConfirmForm = async (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    const UserData = email;
   try{
    const responce = await AuthService.register(email, password);
    dispatch(LoginActionCreater(UserData,responce));
   }catch{
    setAuthError("Error or Email already in use");
   }
  };

  if(error){
    return <h2>Eroor</h2>
  }else if (isAuth){
    return  <Navigate to="/personalarea"/>
  };
    
return (
  <>
  <h2>Reg</h2>
  
  <form className='RegForm' onSubmit={ e => ConfirmForm(e)}>
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
  <Link to="/login">login</Link>
  </>
)
}

export default RegisterPage