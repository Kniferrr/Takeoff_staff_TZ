import { Dispatch } from "redux";
import { setfildName, setfildNumber, setNumfild, setOnFild } from "../redusers/PersonalAreaReduser";
import {ERROR, } from "../redusers/reduser";



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

    


    

    
    



