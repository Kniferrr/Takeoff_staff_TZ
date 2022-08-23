import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import GetContacts from '../servises/ContactsService';
import { LoginActionCreater } from '../store/actionCreaters/LoginactionCreater';
import { ERROR, SetContacts } from '../store/redusers/reduser';
import { AppDispatch } from '../store/store';

function CreateContact() {
    const [name="", setName] = useState<string>();
    const [number="", setNumber] = useState<string>();
    const dispatch: AppDispatch = useDispatch();
    const { user, } = useTypedSelector(state => state.reduser);

    const OncreateContact = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        GetContacts.createContacts(user,name,number);
        fetchContactsFunction();
      };

      const fetchContactsFunction = async () =>{
        const responce = await GetContacts.fetchUsers();    
        dispatch( SetContacts(responce.data.body.map((el:object)=> el)) );
      };


  
      
  return (
    <div>
        <form className='loginForm'  onSubmit={(e)=> OncreateContact(e)}>
  <input placeholder='Name' value={name} onChange={e=> setName(e.target.value)}
  id="POST-name" type="text" name="name"/>
   <input placeholder='Number' value={number} onChange={e=> setNumber(e.target.value)}
  id="POST-name" type="text" name="name"/>
  <button className='btn btn-dark'>CreateContact</button>
            </form>
    </div>
  )
}

export default CreateContact

