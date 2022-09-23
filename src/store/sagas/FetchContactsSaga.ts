import { call, put, takeEvery } from "redux-saga/effects";
import GetContacts from "../../http/servises/ContactsService";
import { fetchUsersPromise, responceContactsInteface } from "../../types/user";
import { SetAuth, SetContacts } from "../redusers/reduser";

async function fetchContacts(): Promise<fetchUsersPromise> {
    const responce = await GetContacts.fetchUsers();
    return responce;
}

export function* workerSagaFetchContactsFunction() {
    const responceContacts: responceContactsInteface = yield call(fetchContacts);
    
    if(responceContacts.data.body !== undefined && responceContacts.statusText === "OK"){
        yield put( SetContacts(responceContacts.data.body));
    }else{
        yield put( SetAuth(false));
    }
};

export function* watherSagaFetchContactsFunction(){
    yield takeEvery("FetchContactsFunction", workerSagaFetchContactsFunction)
};