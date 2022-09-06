import { Dispatch } from "redux";
import GetContacts from "../../servises/ContactsService";
import { setfildName, setfildNumber, setNumfild, setOnFild } from "../redusers/PersonalAreaReduser";
import {ERROR, SetAuth, SetContacts, } from "../redusers/reduser";



    export const onPutNameActionCreater = (id: number,name: string, number: string, fild: string) => {  
            
        return (dispatch: Dispatch) => {
            try{
                dispatch(setOnFild(fild))
                dispatch(setNumfild(id));
                dispatch(setfildName(name));
                dispatch(setfildNumber(number));
            }catch(e){
                dispatch(ERROR("Произошла ошибка при загрузке пользователей"));
        }
    }
    };

    export const fetchContactsFunction = () => {  
            
        return async (dispatch: Dispatch) => {
            try{
                const responce = await GetContacts.fetchUsers();
                dispatch( SetContacts(responce.data.body.map((el:object)=> el)));
            }catch(e){
                dispatch(SetAuth(false));
        };
    };
    };  

    
    


    

    
    



