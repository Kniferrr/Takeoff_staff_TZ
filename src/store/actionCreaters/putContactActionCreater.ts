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

    export const onDeleteContacts = async (id:number) => {  
        await GetContacts.deleteContacts(id);
        return (dispatch: Dispatch) => {
            try{
                dispatch({type: "FetchContactsFunction"});
            }catch(e){
                dispatch(ERROR("Произошла ошибка при загрузке пользователей"));
        }
    }
    };

    

  

    
    


    

    
    



