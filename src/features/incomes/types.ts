import {DistributionPlatform, Product} from "@appTypes/product";

export type lastMonthIncomesQueryResult = {
    distribution_platform: DistributionPlatform,
    product: Product,

    incomes: {
        total: number,
        distribution_platform: DistributionPlatform,
    }[],
}[]

export type lastMonthIncomesQueryArgs = void


export type totalIncomesQueryResult = {
    distribution_platform: DistributionPlatform,
    product: Product,

    incomes: {
        total: number,
        distribution_platform: DistributionPlatform,
    }[],
}[]

export type totalIncomesQueryArgs = void
