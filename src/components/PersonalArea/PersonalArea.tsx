import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import GetContacts from '../../servises/ContactsService';
import { SetAuth, SetContacts } from '../../store/redusers/reduser';
import "./PersonalArea.scss"

function PersonalArea() {

  const dispatch: any = useDispatch();
  
  const { user,isAuth,contacts } = useTypedSelector(state => state.reduser);



  useEffect(() => {
    fetchContactsFunction();
  }, []);

  const OncreateContact = (user: string) =>{
    GetContacts.createContacts(user);
    fetchContactsFunction();
  };

  const onDeleteContacts = async (id:number) =>{
    await GetContacts.deleteContacts(id);
    fetchContactsFunction();
  };

  const fetchContactsFunction = async () =>{
    const responce = await GetContacts.fetchUsers();
    dispatch( SetContacts(responce.data.body.map((el:any)=> el)) );
  };

  const logOut = () =>{
    localStorage.setItem("token", "null");
    localStorage.setItem("email", "null");
    dispatch(SetAuth(false));
  };

  
  if(!isAuth){
    return  <Navigate to="/"/>;
  };

  return (
    <div className='personalArea'>
    <div className='personalArea_user'>
      <img src='https://picsum.photos/250' className='personalArea_UserImg'></img>
      <div className='personalArea_user'>{`${user}`}</div>
      <button className='btn btn-dark personalArea_logoutButton' onClick={logOut}>logOut</button>
      </div>

      <div className='personalArea_Contacts'>
    <button className='btn btn-dark' onClick={()=> OncreateContact(user)}>CreateContact</button>
    <div className='personalArea_contacts'>
      <table className='personalArea_Contacts_table'>
      <thead>
      <tr className='table_row'>
        <th>Name</th>
       <th>Number</th>
        <th>Button</th>
     </tr>
     </thead>
     <tbody>
      <tr className='table_row'>
        <td>
        {contacts.map((el:any)=> <div key={el.id}>{el.name}</div>)}
        </td>
        <td>
        {contacts.map((el:any)=> <div key={el.id}>{el.number}</div>)}
        </td>
        <td>
        {contacts.map((el:any)=> <div key={el.id}>{<button className='btn btn-dark btn_del_Contact' 
        onClick={()=>onDeleteContacts(el.id)}>deliteContacts</button>}</div>)}
        </td>
        </tr>
        </tbody>
        </table>
    </div>
    </div>
    </div>
  )
};

export default PersonalArea