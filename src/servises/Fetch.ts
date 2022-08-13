import axios from "axios";


export function getUserContacts() {
    return axios.get('/user/12345');
  };