import{ useEffect, } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import FormCreateContact from '../CreateContact/FormCreateContact';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import GetContacts from '../../servises/ContactsService';
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

  let contactsFiltred;


  useEffect(() => {
    dispatch({type: "FetchContactsFunction"});
  }, []);

  const onPutContact = (id: number,name: string, number: string, takeFild: string) =>{
    if(Numfild !== id){
      dispatch(onPutNameActionCreater(id, name, number, takeFild));
    }
  };


  
  if(!isAuth){
    return  <Navigate to="/"/>;
  };


  contactsFiltred = contacts.filter((el)=> el.name.includes(search) === true || el.number.includes(search) === true)

  return (
    <div className='personalArea'>
    <div className='personalArea_user'>
      <img src='https://source.unsplash.com/random/250x250?sig=2' className='personalArea_UserImg'></img>
      <div className='personalArea_user'>{`${user}`}</div>
      <button className='btn btn-dark personalArea_logoutButton' onClick={()=> dispatch(logOut())}>logOut</button>
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