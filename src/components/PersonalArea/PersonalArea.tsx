import{ useEffect, } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import FormCreateContact from '../CreateContact/FormCreateContact';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { onDeleteContacts, onPutNameActionCreater } from '../../store/actionCreaters/putContactActionCreater';
import { AppDispatch } from '../../store/store';
import { ContactsInterface } from '../../types/user';
import SearchPanel from '../SearchPanel/SearchPanel';
import "./PersonalArea.scss"
import PutFild from '../PutFild/PutFild';
import { logOut } from '../../store/actionCreaters/LoginactionCreater';
import React from 'react';
import PersonalAreaContacts from '../PersonalAreaContacts/PersonalAreaContacts';
import PersonalAreaUser from '../PersonalAreaUser/PersonalAreaUser';

function PersonalArea() {

  const dispatch: AppDispatch = useDispatch();
  const { user,isAuth,contacts, search } = useTypedSelector(state => state.reduser);
  const { Numfild,onFild } = useTypedSelector(state => state.PersonalAreaReduser);


  useEffect(() => {
    dispatch({type: "FetchContactsFunction"});
  }, []);


  
  if(!isAuth){
    return  <Navigate to="/"/>;
  };



  return (
    <div className='personalArea'>
    
      <PersonalAreaUser/>

      <div className='personalArea_Contacts'>

        <div><SearchPanel/></div>
        <div><FormCreateContact/></div>
        <div><PersonalAreaContacts/></div>
    </div>
    </div>
  )
};

export default React.memo(PersonalArea);
