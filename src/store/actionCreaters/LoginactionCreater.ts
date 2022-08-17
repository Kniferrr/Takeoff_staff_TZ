import { Dispatch } from "redux";
import {ERROR, SetAuth, SetUser,SetAccessToken} from "../redusers/reduser";
import { AxiosResponse } from "axios";
import { AuthResponse } from "../../models/responce/AuthResponse";

    export const LoginActionCreater = (UserData: string, responce: AxiosResponse<AuthResponse, any>) => {  
        localStorage.setItem("token", responce.data.access_token)
        return async(dispatch: Dispatch<any>) => {
            try{
                dispatch(SetAccessToken(responce.data.access_token))
                dispatch(SetUser(UserData))
                dispatch(SetAuth(true))
            }catch(e){
                dispatch(ERROR("Произошла ошибка при загрузке пользователей"));
            }
        }
    };
