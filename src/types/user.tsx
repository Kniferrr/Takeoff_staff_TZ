export interface UserState {
    error: null | string,
    user: string,
    isAuth: boolean,
    access_token: string,
    contacts: Array<ContactsInterface>,
    search: string
}

export interface PersonalAreaReduserInterface {
    Numfild: number,
    fild: string,
    onFild: string,
}


export interface ContactsInterface {
    includes(search: string): unknown
    id: number,
    master: string,
    name: string,
    number: string
}







