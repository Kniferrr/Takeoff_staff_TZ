
import { watherSagaFetchContactsFunction } from "./FetchContactsSaga";


export default function* rootSaga(){
   yield  watherSagaFetchContactsFunction();
};