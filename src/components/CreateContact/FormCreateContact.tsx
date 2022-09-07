import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import GetContacts from '../../servises/ContactsService';
import { AppDispatch } from '../../store/store';
import "./FormCreateContact.scss"

function FormCreateContact() {
    const [name="", setName] = useState<string>();
    const [number="", setNumber] = useState<string>();
    const dispatch: AppDispatch = useDispatch();
    const { user} = useTypedSelector(state => state.reduser);

    const OncreateContact = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        if(name !== "" && number !== ""){
          GetContacts.createContacts(user,name,number);
        }
        setName("");
        setNumber("");
        dispatch({type: "FetchContactsFunction"});
      };



  
      
  return (
    <div className='create_contact_form'>
        <form className='create_contact_form'  onSubmit={(e)=> OncreateContact(e)}>
  <input placeholder='Name' value={name} onChange={e=> setName(e.target.value)}
  id="POST-name" type="text" name="name"/>
   <input placeholder='Number' value={number} onChange={e=> setNumber(e.target.value)}
  id="POST-name" type="text" name="name"/>
  <button className='btn btn-dark create_contact_form_btn'>CreateContact</button>
            </form>
    </div>
  )
}

export default FormCreateContact;

