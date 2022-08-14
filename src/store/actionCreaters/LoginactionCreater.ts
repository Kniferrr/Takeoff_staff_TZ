import AuthService from "../../servises/AuthService";
import {ERROR, SetAuth, SetUser} from "../redusers/reduser";

export const LoginActionCreater = async (email: string, password: string) => {
        const UserData = {email};
        const responce = await AuthService.login(email, password);
        console.log(responce)
        localStorage.setItem("token", responce.data.access_token)
        try{
            dispatch(SetUser(UserData))
            dispatch(SetAuth(true))
        }catch(e){
            dispatch(ERROR("Произошла ошибка при старте игры"));
        }
    };

    export const RegisterActionCreater = async (email: string, password: string) => {
        const UserData = {email};
        const responce = await AuthService.registration(email, password);
        localStorage.setItem("token", responce.data.access_token)
        try{
            dispatch(SetUser(UserData))
            dispatch(SetAuth(true))
        }catch(e){
            dispatch(ERROR("Произошла ошибка при старте игры"));
        }
    };

    export const LogOutActionCreater = async (email: string, password: string) => {
        const UserData = {email};
        const responce = await AuthService.logout();
        localStorage.removeItem("token")
        try{
            dispatch(SetUser({}))
            dispatch(SetAuth(false))
        }catch(e){
            dispatch(ERROR("Произошла ошибка при старте игры"));
        }
    };

function dispatch(arg0: { payload: any; type: string; }) {
    throw new Error("Function not implemented.");
}
