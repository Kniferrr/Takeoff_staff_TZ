import { call, put, takeEvery } from "redux-saga/effects";
import GetContacts from "../../http/servises/ContactsService";
import { fetchUsersPromise, responceContactsInteface } from "../../types/user";
import { SetContacts } from "../redusers/reduser";

async function fetchContacts(): Promise<fetchUsersPromise> {
    const responce = await GetContacts.fetchUsers();
    return responce;
}

export function* workerSagaFetchContactsFunction() {
    const responceContacts: responceContactsInteface = yield call(fetchContacts);
    console.log( responceContacts.data.body)
    if(responceContacts.data.body !== undefined){
        yield put( SetContacts(responceContacts.data.body));
    }
};

export function* watherSagaFetchContactsFunction(){
    yield takeEvery("FetchContactsFunction", workerSagaFetchContactsFunction)
};