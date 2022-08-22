import React from 'react'
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import GetContacts from '../servises/ContactsService';
import { SetContacts } from '../store/redusers/reduser';

function CreateContact() {
    const dispatch: any = useDispatch();
    const { user, } = useTypedSelector(state => state.reduser);

    const OncreateContact = (user: string) =>{
        GetContacts.createContacts(user);
        fetchContactsFunction();
      };

      const fetchContactsFunction = async () =>{
        const responce = await GetContacts.fetchUsers();    
        dispatch( SetContacts(responce.data.body.map((el:any)=> el)) );
      };
      
  return (
    <div>
        <button className='btn btn-dark' onClick={()=> OncreateContact(user)}>CreateContact</button>
    </div>
  )
}

export default CreateContact


