import {City} from "@appTypes/location";

export interface Group {
    id: number,

    name: "payments_manager" | "user",

    permissions: string[],
}

export interface AuthToken {
    key: string,
}

export interface User {
    id: number,

    email: string,

    first_name: string,
    middle_name: string,
    last_name: string,

    city: City,

    role: Group,

    is_active: boolean,
}
