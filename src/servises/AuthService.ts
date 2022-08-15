import { AxiosResponse } from "axios";
import $api from "../http";
import { AuthResponse } from "../models/responce/AuthResponse";

export default class AuthService {
    static async login (email: string, password: string): Promise<AxiosResponse<AuthResponse>>{
        return await $api.post<AuthResponse>("/auth/login", {email, password})
    }

    static async register (email: string, password: string): Promise<AxiosResponse<AuthResponse>>{
        return await $api.post<AuthResponse>("/auth/register", {email, password})
    }


};