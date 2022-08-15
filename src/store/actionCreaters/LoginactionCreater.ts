import { Dispatch } from "redux";
import {ERROR, SetAuth, SetUser,SetAccessToken} from "../redusers/reduser";
import { AxiosResponse } from "axios";
import { AuthResponse } from "../../models/responce/AuthResponse";

    export const LoginActionCreater = (UserData: object,responce: AxiosResponse<AuthResponse, any>) => {  
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
