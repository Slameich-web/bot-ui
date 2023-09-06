import {createSlice} from "@reduxjs/toolkit"

import {accountApi} from "@features/account/api"

import {AuthToken, User} from "@appTypes/account"

type accountReducerState = {
    user?: User | null,
    token?: AuthToken | null
}

const initialState: accountReducerState = {
    user: null,
    token: null,
}

const accountSlice = createSlice({
    name: 'account',
    initialState: initialState,
    reducers: {
        setToken: (state, action) => {
            const {token} = action.payload

            state.token = token
        },
        setUser: (state, action) => {
            const {user} = action.payload

            state.user = user
        },
        logout: (state) => {
            state.token = null
            state.user = null
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(accountApi.endpoints.signIn.matchFulfilled, (state, {payload}) => {
            const {token, ...user} = payload

            state.token = token
            state.user = user as unknown as User
        })
        builder.addMatcher(accountApi.endpoints.signUp.matchFulfilled, (state, {payload}) => {
            const {token, ...user} = payload

            state.token = token
            state.user = user as unknown as User
        })
        builder.addMatcher(accountApi.endpoints.getProfile.matchFulfilled, (state, {payload}) => {
            const {...user} = payload

            state.user = user
        })
    }
})

export const {setToken, setUser, logout} = accountSlice.actions

export const reducer = accountSlice.reducer

export const getMe = (state: {account:  accountReducerState }) => state.account.user
export const getToken = (state: {account: accountReducerState}) => state.account.token
