import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import GetContacts from '../../servises/ContactsService';

function PersonalArea() {
  const { user,isAuth } = useTypedSelector(state => state.reduser);
  let responce = {
    data: {
      body: []
    }
};

  useEffect(() => {
    fetchContactsFunction()
  }, []);

  const fetchContactsFunction = async () =>{
    responce = await GetContacts.fetchUsers();
    console.log(responce.data.body)
  };

  if(!isAuth){
    return  <Navigate to="/login"/>;
  }
  return (
    <>
    <div>{`Hello ${user}`}</div>
    <div>
      {responce.data.body.map((el)=> el)}
    </div>
    </>
  )
}

export default PersonalArea