import{ ChangeEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import FormCreateContact from '../../CreateContact/FormCreateContact';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import GetContacts from '../../servises/ContactsService';
import { setfild, setNumfild, setOnFild } from '../../store/redusers/PersonalAreaReduser';
import { SetAuth, SetContacts } from '../../store/redusers/reduser';
import { AppDispatch } from '../../store/store';
import { ContactsInterface } from '../../types/user';
import SearchPanel from '../SearchPanel/SearchPanel';
import "./PersonalArea.scss"

function PersonalArea() {

  const dispatch: AppDispatch = useDispatch();
  const { user,isAuth,contacts, search } = useTypedSelector(state => state.reduser);
  const { Numfild,fild,onFild } = useTypedSelector(state => state.PersonalAreaReduser);

  let contactsFiltred;

  const putFild =   (<div className='put_panel'>
  <form className='put_panel_form'>
<input placeholder='Search' value={fild} onChange={e=> onchangeSearch(e)}
id="POST-name" type="text" name="name"/>
<button className='btn btn-dark put_panel_form_btn'>OK</button>
      </form>
</div>);

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

  const onPutName = (id: number,name: string) =>{
    dispatch(setOnFild("name"))
    dispatch(setNumfild(id));
    dispatch(setfild(name));
  };

  const onPutNumber = (id:number,name: string) =>{

  };

  const onchangeSearch = (e:ChangeEvent<HTMLInputElement>) =>{
    e.preventDefault();
    dispatch(setfild(e.target.value));
  }



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
          <div className='personalArea_Contacts_row_name' onClick={()=>onPutName(el.id, el.name)} >
            {Numfild === el.id ? onFild === "name" ? putFild  : el.name: el.name}</div>
          <div className='personalArea_Contacts_row_number' onClick={()=>onPutNumber(el.id,el.name)} >
            {Numfild === el.id ? onFild === "number" ? putFild : el.number : el.number}</div>
          <div><button className='btn btn-dark personalArea_Contacts_row_btn_del_Contact' onClick={()=>onDeleteContacts(el.id)}>del</button></div>
          </div>)}
    </div>
    </div>
    </div>
  )
};

export default PersonalArea