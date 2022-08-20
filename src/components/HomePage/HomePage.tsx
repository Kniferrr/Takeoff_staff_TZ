import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Navigate} from "react-router-dom";
import AuthService from '../../servises/AuthService';
import { cheackEmailAuth } from '../../store/actionCreaters/LoginactionCreater';
import { RootState } from '../../store/store';

function HomePage() {
  const {error,isAuth,} = useSelector((state: RootState) => state.reduser);
  const dispatch: any = useDispatch();
  
  const cheayth = AuthService.cheackAuth();
    cheayth
  .then(
    result => {
      dispatch(cheackEmailAuth());
    },
    error => {
      
    }
  );


  if(error){
    return <h2>Eroor</h2>
  }else if (isAuth){
    return  <Navigate to="/personalarea"/>
  }

  return (
    <Navigate to="/login"/>
  )
}

export default HomePage