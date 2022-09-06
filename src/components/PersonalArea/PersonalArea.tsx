import{ ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import FormCreateContact from '../CreateContact/FormCreateContact';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import GetContacts from '../../servises/ContactsService';
import { fetchContactsFunction, onPutNameActionCreater } from '../../store/actionCreaters/putContactActionCreater';
import { setfildName, setfildNumber, setNumfild, setOnFild } from '../../store/redusers/PersonalAreaReduser';
import { SetAuth, SetContacts } from '../../store/redusers/reduser';
import { AppDispatch } from '../../store/store';
import { ContactsInterface } from '../../types/user';
import SearchPanel from '../SearchPanel/SearchPanel';
import "./PersonalArea.scss"
import PutFild from '../PutFild/PutFild';

function PersonalArea() {

  const dispatch: AppDispatch = useDispatch();
  const { user,isAuth,contacts, search } = useTypedSelector(state => state.reduser);
  const { Numfild,onFild } = useTypedSelector(state => state.PersonalAreaReduser);

  let contactsFiltred;



  useEffect(() => {
    dispatch(fetchContactsFunction());
  }, []);


  const onDeleteContacts = async (id:number) =>{
   await GetContacts.deleteContacts(id);
   dispatch(fetchContactsFunction());
  };

  

  const onPutContact = (id: number,name: string, number: string, takeFild: string) =>{
    if(Numfild !== id){
      dispatch(onPutNameActionCreater(id, name, number, takeFild));
    }
  };




  const logOut = () =>{
    localStorage.setItem("token", "null");
    localStorage.setItem("email", "null");
    dispatch(SetAuth(false));
  };

  
  if(!isAuth){
    return  <Navigate to="/"/>;
  };


  contactsFiltred = contacts.filter((el)=> el.name.includes(search) === true || el.number.includes(search) === true)

  return (
    <div className='personalArea'>
    <div className='personalArea_user'>
      <img src='https://picsum.photos/250' className='personalArea_UserImg'></img>
      <div className='personalArea_user'>{`${user}`}</div>
      <button className='btn btn-dark personalArea_logoutButton' onClick={logOut}>logOut</button>
      </div>

      <div className='personalArea_Contacts'>

        <div><SearchPanel/></div>
        <div><FormCreateContact/></div>

    <div className='personalArea_contacts'>
        {contactsFiltred.map((el:ContactsInterface)=> <div key={el.id} className="personalArea_Contacts_row">
          <div className='personalArea_Contacts_row_name' onClick={()=>onPutContact(el.id, el.name,el.number, "name")} >
            {Numfild === el.id ? onFild === "name" ? <PutFild/>  : el.name: el.name}</div>
          <div className='personalArea_Contacts_row_number' onClick={()=>onPutContact(el.id,el.name,el.number, "number")} >
            {Numfild === el.id ? onFild === "number" ? <PutFild/> : el.number : el.number}</div>
          <div><button className='btn btn-dark personalArea_Contacts_row_btn_del_Contact' onClick={()=>onDeleteContacts(el.id)}>del</button></div>
          </div>)}
    </div>
    </div>
    </div>
  )
};

export default PersonalArea