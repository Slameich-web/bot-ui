import {api} from "@features/redux/api"

import {
    lastMonthIncomesQueryResult,
    lastMonthIncomesQueryArgs,
    totalIncomesQueryResult,
    totalIncomesQueryArgs
} from "@features/incomes/types";

export const incomesApi = api.injectEndpoints({
    endpoints: builder => ({
        getLastMonthIncomes: builder.query<lastMonthIncomesQueryResult, lastMonthIncomesQueryArgs>({
            query: () => ({
                url: "incomes/last_month",
                method: "GET",
            })
        }),
        getTotalIncomes: builder.query<totalIncomesQueryResult, totalIncomesQueryArgs>({
            query: () => ({
                url: "incomes/total",
                method: "GET",
            })
        }),
    })
})

export const {
    useGetLastMonthIncomesQuery,
    useGetTotalIncomesQuery,
} = incomesApi
