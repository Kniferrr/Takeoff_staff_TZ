import { AxiosResponse } from "axios";
import $api from "../http";
import { IContacts } from "../models/responce/IContacts";

export default class GetContacts {
    
    static  async fetchUsers():Promise<any>{
        return  await $api.get<IContacts[]>("./contacts")
    };

    static async createContacts (user:string, name: string, number: string): Promise<AxiosResponse>{
        return await $api.post("/contacts", {
            "master": user,
            "name": name,
            "number": number
        })
    };

    static async deleteContacts (id:number): Promise<AxiosResponse>{
        return await $api.delete(`/contacts/${id}`, {
        })
    };

    static async putContacts (user:string, name: string, number: string, id: string): Promise<AxiosResponse>{
        return await $api.put(`/contacts/${id}`, {
            "master": user,
            "name": name,
            "number": number
        })
    };
};