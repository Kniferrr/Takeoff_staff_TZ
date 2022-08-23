export interface UserState {
    error: null | string,
    user: string,
    isAuth: boolean,
    access_token: string,
    contacts: Array<ContactsInterface>
}


export interface ContactsInterface {
    id: number,
    master: string,
    name: string,
    number: string
}







