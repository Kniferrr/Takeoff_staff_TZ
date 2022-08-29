import{ useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import FormCreateContact from '../../CreateContact/FormCreateContact';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import GetContacts from '../../servises/ContactsService';
import { SetAuth, SetContacts } from '../../store/redusers/reduser';
import { AppDispatch } from '../../store/store';
import { ContactsInterface } from '../../types/user';
import SearchPanel from '../SearchPanel/SearchPanel';
import "./PersonalArea.scss"

function PersonalArea() {

  const dispatch: AppDispatch = useDispatch();
  
  const { user,isAuth,contacts, search } = useTypedSelector(state => state.reduser);

  let contactsFiltred = contacts;

  useEffect(() => {
    fetchContactsFunction();
  }, []);


  const onDeleteContacts = async (id:number) =>{
   await GetContacts.deleteContacts(id);
    fetchContactsFunction();
  };

  const fetchContactsFunction = async () =>{
    try {
      const responce = await GetContacts.fetchUsers();
    dispatch( SetContacts(responce.data.body.map((el:object)=> el)));
    } catch {
     dispatch(SetAuth(false));
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
          <div>{el.name}</div>
          <div>{el.number}</div>
          <div><button className='btn btn-dark btn_del_Contact' onClick={()=>onDeleteContacts(el.id)}>del</button></div>
          </div>)}
    </div>
    </div>
    </div>
  )
};

export default PersonalArea