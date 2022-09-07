import { Dispatch } from "redux";
import {ERROR, SetAuth, SetUser,SetAccessToken} from "../redusers/reduser";
import { AxiosResponse } from "axios";
import { AuthResponse } from "../../models/responce/AuthResponse";

    export const LoginActionCreater = (UserData: string, responce: AxiosResponse<AuthResponse>) => {  
        localStorage.setItem("token", responce.data.access_token)
        localStorage.setItem("email", UserData);
        return async (dispatch: Dispatch) => {
            try{
                dispatch(SetAccessToken(responce.data.access_token))
                dispatch(SetUser(UserData));
                dispatch(SetAuth(true));
            }catch(e){
                dispatch(ERROR("Произошла ошибка при загрузке пользователей"));
            }
        }
    };

    export const cheackEmailAuth = () => {  
            const user = localStorage.getItem("email");
            const getEmail: string | null = localStorage.getItem("email");
            const email = getEmail === null ? " " : getEmail;
            
        return (dispatch: Dispatch) => {
            try{
                if(user !== null){
                dispatch(SetAuth(true));
                dispatch(SetUser(email));
            }
            }catch(e){
                dispatch(ERROR("Произошла ошибка при загрузке пользователей"));
        }
    }
    };


export const logOut = () => {  
        return (dispatch: Dispatch) => {
            try{
                localStorage.setItem("token", "null");
                localStorage.setItem("email", "null");
                dispatch(SetAuth(false));
            }catch(e){
                dispatch(ERROR("Произошла ошибка при загрузке пользователей"));
        }
    }
    };

    


    

    
    



