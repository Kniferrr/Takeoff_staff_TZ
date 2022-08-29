import { ChangeEvent } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { AppDispatch } from '../../store/store';
import { useDispatch } from 'react-redux';
import { SetSearch } from '../../store/redusers/reduser';
import "./SearchPanel.scss"

function SearchPanel() {
    const { search } = useTypedSelector(state => state.reduser);
    const dispatch: AppDispatch = useDispatch();
    
    const onchangeSearch = (e:ChangeEvent<HTMLInputElement>) =>{
        e.preventDefault();
        dispatch(SetSearch(e.target.value));
    }
  return (
    <div className='search_panel'>
        <form className='search_panel_form'>
  <input placeholder='Search' value={search} onChange={e=> onchangeSearch(e)}
  id="POST-name" type="text" name="name"/>
   <button className='btn btn-dark search_panel_form_btn'>OK</button>
            </form>
    </div>
  )
}

export default SearchPanel;