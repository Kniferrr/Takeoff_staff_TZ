import AuthService from "../../servises/AuthService";
import { Action, Dispatch } from "redux";
import {ERROR, SetAuth, SetUser,SetAccessToken} from "../redusers/reduser";

    export const LoginActionCreater = async (email: string, password: string) => {
        const UserData = {email};
        const responce = await AuthService.login(email, password);
        
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
