import React, { ChangeEvent } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { AppDispatch } from '../../store/store';
import { useDispatch } from 'react-redux';
import { SetSearch } from '../../store/redusers/reduser';

function SearchPanel() {
    const { search } = useTypedSelector(state => state.reduser);
    const dispatch: AppDispatch = useDispatch();
    
    const onchangeSearch = (e:ChangeEvent<HTMLInputElement>) =>{
        e.preventDefault();
        dispatch(SetSearch(e.target.value));
    }
  return (
    <div className='create_contact_form'>
        <form className='create_contact_form'>
  <input placeholder='Name' value={search} onChange={e=> onchangeSearch(e)}
  id="POST-name" type="text" name="name"/>
            </form>
    </div>
  )
}

export default SearchPanel