import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import GetContacts from '../../servises/ContactsService';
import { SetContacts } from '../../store/redusers/reduser';

function PersonalArea() {

  const dispatch: any = useDispatch();
  
  const { user,isAuth,contacts } = useTypedSelector(state => state.reduser);
  let responce = {
    data: {
      body: []
    }
};



  useEffect(() => {
    fetchContactsFunction()
  }, []);

  const OncreateContact = (user: string) =>{
    GetContacts.createContacts(user);
    fetchContactsFunction();
  }

  const fetchContactsFunction = async () =>{
    responce = await GetContacts.fetchUsers();
    dispatch( SetContacts(responce.data.body.map((el:any)=> el)) )

  };

  const onDeleteContacts = (id:number) =>{
    GetContacts.deleteContacts(id);
    fetchContactsFunction();
  }

  
  if(!isAuth){
    return  <Navigate to="/login"/>;
  }
  return (
    <>
    <div>{`Hello ${user}`}</div>
    <button onClick={()=> OncreateContact(user)}>CreateContact</button>
    <div>
      {contacts.map((el:any)=> <div>{el.name}<span>{el.number}</span><button onClick={()=>onDeleteContacts(el.id)}>deliteContacts</button></div>)}
    </div>
    </>
  )
}

export default PersonalArea