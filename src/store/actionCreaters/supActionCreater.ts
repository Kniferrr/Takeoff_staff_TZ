import { Dispatch } from "redux";
import {  setNumfild } from "../redusers/PersonalAreaReduser";
import {ERROR, } from "../redusers/reduser";


    export const onclickOutside =   (e:React.MouseEvent<HTMLDivElement, MouseEvent>, Numfild:number)=> {  
        const obj = e.target as HTMLTextAreaElement;
        return (dispatch: Dispatch) => {
            try{
                if(Numfild !== 0.1){
                    if(obj.className === 'App' || obj.className === "App_container"){
                        dispatch(setNumfild(0.1));
                      }
                    }
            }catch(e){
                dispatch(ERROR("Произошла ошибка при загрузке пользователей"));
        }
    }
    };
