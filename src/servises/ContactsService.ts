import { AxiosResponse } from "axios";
import $api from "../http";
import { IContacts } from "../models/responce/IContacts";

export default class GetContacts {
    static  fetchUsers():any{
        return $api.get<IContacts[]>("./contacts")
    };
};