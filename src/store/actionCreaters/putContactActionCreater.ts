
import { Dispatch } from "redux";
import GetContacts from "../../http/servises/ContactsService";
import { setfildName, setfildNumber, setNumfild, setOnFild } from "../redusers/PersonalAreaReduser";
import {ERROR, } from "../redusers/reduser";



    export const onPutNameActionCreater = (id: number,name: string, number: string, fild: string,Numfild: number, onFild: string) => {  
        return (dispatch: Dispatch) => {
            try{
                if(Numfild !== id || onFild !==  fild ){
                dispatch(setOnFild(fild))
                dispatch(setNumfild(id));
                dispatch(setfildName(name));
                dispatch(setfildNumber(number));
                }
            }catch(e){
                dispatch(ERROR("Произошла ошибка при загрузке пользователей"));
        }
    }
    };

    export const onDeleteContacts =   async (id:number) => {  
        await GetContacts.deleteContacts(id);
        return (dispatch: Dispatch) => {
            try{
                dispatch({type: "FetchContactsFunction"});
            }catch(e){
                dispatch(ERROR("Произошла ошибка при загрузке пользователей"));
        }
    }
    };
  

    
    


    

    
    



