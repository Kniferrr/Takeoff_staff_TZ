import { AxiosResponse } from "axios";
import $api from "../http";
import { IContacts } from "../models/responce/IContacts";

export default class GetContacts {
    static  fetchUsers():any{
        return $api.get<IContacts[]>("./contacts")
    };

    static async createContacts (user:string): Promise<AxiosResponse>{
        return await $api.post("/contacts", {
            "master": user,
            "name": "Product091",
            "number": "880055535"
        })
    };

    static async deleteContacts (id:number): Promise<AxiosResponse>{
        return await $api.delete(`/contacts/${id}`, {

        })
    };

};