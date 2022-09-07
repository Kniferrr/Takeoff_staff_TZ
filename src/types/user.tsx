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
    fildName: string,
    onFild: string,
    fildNumber:string,
}


export interface ContactsInterface {
    includes(search: string): unknown
    id: number,
    master: string,
    name: string,
    number: string
}

export interface fetchUsersPromise {
    config: object,
    data: object,
    headers: object,
    request?: object,
    status: number,
    statusText: string
}

export interface responceContactsInteface {
    config: object,
    data: {
        body?: any
    },
    headers: object,
    request?: object,
    status: number,
    statusText: string
}







