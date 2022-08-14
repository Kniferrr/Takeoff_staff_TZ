import { IContacts } from "./IContacts";

export interface AuthResponse{
    access_token: string;
    contacts: IContacts;
}