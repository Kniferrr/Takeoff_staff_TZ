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

function PersonalArea() {

  const dispatch: AppDispatch = useDispatch();
  const { user,isAuth,contacts, search } = useTypedSelector(state => state.reduser);
  const { Numfild,onFild } = useTypedSelector(state => state.PersonalAreaReduser);


  useEffect(() => {
    console.log(contacts)
    dispatch({type: "FetchContactsFunction"});
  }, []);


  
  if(!isAuth){
    return  <Navigate to="/"/>;
  };


  const contactsFiltred = contacts.filter((el)=> el.name.includes(search) === true || el.number.includes(search) === true);

  console.log(contacts)
  return (
    <div className='personalArea'>
    <div className='personalArea_user'>
      <img alt='avatar' src='https://source.unsplash.com/random/250x250?sig=2' className='personalArea_UserImg'></img>
      <div className='personalArea_user'>{`${user}`}</div>
      <button className='btn btn-dark personalArea_logoutButton' onClick={()=> dispatch(logOut())}>logOut</button>
      </div>

      <div className='personalArea_Contacts'>

        <div><SearchPanel/></div>
        <div><FormCreateContact/></div>

    <div className='personalArea_contacts'>
        {contactsFiltred.map((el:ContactsInterface)=> <div key={el.id} className="personalArea_Contacts_row">
          <div className='personalArea_Contacts_row_name' onClick={()=>dispatch(onPutNameActionCreater(el.id, el.name, el.number, "name", Numfild, onFild))} >
            {Numfild === el.id ? onFild === "name" ? <PutFild/>  : el.name: el.name}</div>
          <div className='personalArea_Contacts_row_number' onClick={()=>dispatch(onPutNameActionCreater(el.id, el.name, el.number, "number", Numfild, onFild))} >
            {Numfild === el.id ? onFild === "number" ? <PutFild/> : el.number : el.number}</div>
          <div><button className='btn btn-dark personalArea_Contacts_row_btn_del_Contact' onClick={async ()=> dispatch(await onDeleteContacts(el.id))}>del</button></div>
          </div>)}
    </div>
    </div>
    </div>
  )
};

export default PersonalArea