import GetContacts from "../../servises/ContactsService";
import { SetContacts } from "../redusers/reduser";
import {put, takeEvery } from "redux-saga/effects"

async function fetchContacts() {
    const responce = await GetContacts.fetchUsers();
    return responce;
}

export function* workerSagaFetchContactsFunction():any{
    const responceContacts = yield fetchContacts();
    yield put( SetContacts(responceContacts.data.body.map((el:object)=> el)));
};

export function* watherSagaFetchContactsFunction(){
    yield takeEvery("FetchContactsFunction", workerSagaFetchContactsFunction)
};

export default function* rootSaga(){
   yield watherSagaFetchContactsFunction();
};