import React from 'react';
import { ChangeEvent, FormEvent } from 'react'
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import GetContacts from '../../http/servises/ContactsService';
import { setfildName, setfildNumber, setNumfild } from '../../store/redusers/PersonalAreaReduser';
import { AppDispatch } from '../../store/store';

function PutFild() {
    const dispatch: AppDispatch = useDispatch();
    const { Numfild,fildName,onFild,fildNumber } = useTypedSelector(state => state.PersonalAreaReduser);
    const { user } = useTypedSelector(state => state.reduser);
    
    const ConfirmEdit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
         await GetContacts.putContacts(user, fildName, fildNumber, Numfild);
         dispatch({type: "FetchContactsFunction"});
         dispatch(setNumfild(0.1));
      };

      const onchangeSearch = (e:ChangeEvent<HTMLInputElement>) =>{
        e.preventDefault();
        if(onFild === "name"){
          dispatch(setfildName(e.target.value));
        }else{
          dispatch(setfildNumber(e.target.value));
        }
      };
      
  return (
    <div className='put_panel'>
  <form className='put_panel_form' onSubmit={ e => ConfirmEdit(e)}>
<input className='put_panel_Input' placeholder='Search' value={onFild === "name" ? fildName : fildNumber} onChange={e=> onchangeSearch(e)}
id="POST-name" type="text" name="name"/>
<button className='put_panel_form_button'>OK</button>
      </form>
</div>
  )
}

export default React.memo(PutFild);