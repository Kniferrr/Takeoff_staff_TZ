import {ERROR} from "../redusers/reduser";

export const actionCreater = () => {
        try{
            
        }catch(e){
            dispatch(ERROR("Произошла ошибка при старте игры"));
        }
    };

function dispatch(arg0: { payload: any; type: string; }) {
    throw new Error("Function not implemented.");
}
