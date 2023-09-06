import {api} from "@features/redux/api"

import {
    getProfileQueryArgs,
    getProfileQueryResult,
    signInQueryArgs,
    signInQueryResult,
    signUpQueryArgs,
    signUpQueryResult
} from "@features/account/types";

export const accountApi = api.injectEndpoints({
    endpoints: builder => ({
        signIn: builder.mutation<signInQueryResult, signInQueryArgs>({
            query: (credentials) => ({
                url: "account/sign-in",
                method: "POST",
                body: credentials,
            })
        }),
        signUp: builder.mutation<signUpQueryResult, signUpQueryArgs>({
            query: (credentials) => ({
                url: "account/sign-up",
                method: "POST",
                body: credentials,
            })
        }),
        getProfile: builder.query<getProfileQueryResult, getProfileQueryArgs>({
            query: () => ({
                url: "account/profile",
                method: "GET"
            })
        })
    })
})

export const {
    useSignInMutation,
    useSignUpMutation,
    useGetProfileQuery
} = accountApi
