import { AxiosResponse } from "axios";
import $api from "..";
import { IContacts } from "../models/responce/IContacts";
import { fetchUsersPromise } from "../../types/user";

export default class GetContacts {
    
    static  async fetchUsers():Promise<fetchUsersPromise>{
        const responce = await $api.get<IContacts[]>("./contacts");
        console.log(responce);
        return  responce;
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

    static async putContacts (user:string, name: string, number: string, id: number): Promise<AxiosResponse>{
        return await $api.put(`/contacts/${id}`, {
            "master": user,
            "name": name,
            "number": number,
            "id": id
        })
    };
};