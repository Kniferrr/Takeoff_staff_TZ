import { call, put, takeEvery } from "redux-saga/effects";
import GetContacts from "../../servises/ContactsService";
import { fetchUsersPromise, responceContactsInteface } from "../../types/user";
import { SetContacts } from "../redusers/reduser";

async function fetchContacts(): Promise<fetchUsersPromise> {
    const responce = await GetContacts.fetchUsers();
    return responce;
}

export function* workerSagaFetchContactsFunction() {
    const responceContacts: responceContactsInteface = yield call(fetchContacts);
    yield put( SetContacts(responceContacts.data.body.map((el:object)=> el)));
};

export function* watherSagaFetchContactsFunction(){
    yield takeEvery("FetchContactsFunction", workerSagaFetchContactsFunction)
};