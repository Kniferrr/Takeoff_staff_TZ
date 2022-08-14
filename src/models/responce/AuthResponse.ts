import { IContacts } from "./IContacts";

export interface AuthResponse{
    data: any,
    access_token: string;
    contacts: IContacts;
}