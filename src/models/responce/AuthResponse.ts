import { IContacts } from "./IContacts";

export interface AuthResponse {
    data: string,
    access_token: string;
    contacts: IContacts;
}