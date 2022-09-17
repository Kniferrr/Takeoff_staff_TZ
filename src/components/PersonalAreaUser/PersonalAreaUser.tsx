import React from 'react'
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { logOut } from '../../store/actionCreaters/LoginactionCreater';
import { AppDispatch } from '../../store/store';

function PersonalAreaUser() {
    const dispatch: AppDispatch = useDispatch();
    const { user } = useTypedSelector(state => state.reduser);
  return (
    <div className='personalArea_user'>
      <img alt='avatar' src='https://i.pravatar.cc/250' className='personalArea_UserImg'></img>
      <div className='personalArea_user'>{`${user}`}</div>
      <button className='btn btn-dark personalArea_logoutButton' onClick={()=> dispatch(logOut())}>logOut</button>
      </div>
  )
}

export default React.memo(PersonalAreaUser);