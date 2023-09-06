import {BaseQueryFn, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.BACKEND_API_URL,
    prepareHeaders: (headers, {getState}: any) => {
        const token = getState()?.account?.token?.key

        if (token) headers.set('Authorization', `Token ${token}`)

        return headers
    },
})

export const authorizedBaseQuery: BaseQueryFn = async (args, baseQueryApi, extraOptions) => {
    const result = await baseQuery(args, baseQueryApi, extraOptions)

    if(result?.error?.status === 401) {
        baseQueryApi.dispatch({type: "account/logout"})
    }

    return result
}
