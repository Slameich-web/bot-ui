import {AuthToken, User} from "@appTypes/account";

export type signUpQueryResult = {
    user: User,
    token: AuthToken,
}

export type signUpQueryArgs = {
    password: string,
    password_confirmation: string,
} | Pick<User, "first_name" | "middle_name" | "last_name" | "city">


export type signInQueryResult = {
    user: User,
    token: AuthToken,
}

export type signInQueryArgs = {
    password: string,
} | Pick<User, "email">

export type getProfileQueryResult = User

export type getProfileQueryArgs = void
