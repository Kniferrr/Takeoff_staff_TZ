import { Dispatch } from "redux";
import {ERROR, SetAuth, SetUser,SetAccessToken} from "../redusers/reduser";
import { AxiosResponse } from "axios";
import { AuthResponse } from "../../models/responce/AuthResponse";
import AuthService from "../../servises/AuthService";

    export const LoginActionCreater = (UserData: string, responce: AxiosResponse<AuthResponse, any>) => {  
        localStorage.setItem("token", responce.data.access_token)
        localStorage.setItem("email", UserData)
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

    export const ValidActionCreater = () => {  
            const email = localStorage.getItem("email");
        return (dispatch: Dispatch<any>) => {
            try{
                dispatch(SetAuth(true))
                dispatch(SetUser(email))
            }catch(e){
                dispatch(ERROR("Произошла ошибка при загрузке пользователей"));
            }
        }
    };

    export const cheackEmailAuth = () => {  
        const user = localStorage.getItem("email");
        return async(dispatch: Dispatch<any>) => {
            try{
                if(user !== null){
                dispatch(ValidActionCreater())
                }
            }catch(e){
                dispatch(ERROR("Произошла ошибка при загрузке пользователей"));
            }
        }
    };

    export const cheackLogin = async () => {  
        
        const cheayth = AuthService.cheackAuth();
    cheayth
  .then(
    result => {
      return true
    },
    error => {
      return false
    }
  );


    };
    
    



