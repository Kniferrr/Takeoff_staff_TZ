import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { onDeleteContacts, onPutNameActionCreater } from '../../store/actionCreaters/putContactActionCreater';
import { AppDispatch } from '../../store/store';
import { ContactsInterface } from '../../types/user';
import PutFild from '../PutFild/PutFild';

function PersonalAreaContacts() {
    const dispatch: AppDispatch = useDispatch();
  const { contacts, search } = useTypedSelector(state => state.reduser);
  const { Numfild,onFild } = useTypedSelector(state => state.PersonalAreaReduser);
  const contactsFiltred = contacts.filter((el)=> el.name.includes(search) === true || el.number.includes(search) === true);
  
  return (
    <div className='personalArea_contacts'>
    {contactsFiltred.map((el:ContactsInterface)=> <div key={el.id} className="personalArea_Contacts_row">
      <div className='personalArea_Contacts_row_name' onClick={()=>dispatch(onPutNameActionCreater(el.id, el.name, el.number, "name", Numfild, onFild))} >
        {Numfild === el.id ? onFild === "name" ? <PutFild/>  : el.name: el.name}</div>
      <div className='personalArea_Contacts_row_number' onClick={()=>dispatch(onPutNameActionCreater(el.id, el.name, el.number, "number", Numfild, onFild))} >
        {Numfild === el.id ? onFild === "number" ? <PutFild/> : el.number : el.number}</div>
      <div><button className='btn btn-dark personalArea_Contacts_row_btn_del_Contact' onClick={async ()=> dispatch(await onDeleteContacts(el.id))}>del</button></div>
      </div>)}
</div>
  )
}

export default PersonalAreaContacts