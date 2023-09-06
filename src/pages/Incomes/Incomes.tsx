import { FunctionComponent } from "react";

import styles from "./styles.module.css";
import { useGetLastMonthIncomesQuery } from "@features/incomes/api";
import { DataTable } from "@components/DataTable";

export const Incomes: FunctionComponent = () => {
  const { data: incomesByProducts, isLoading } = useGetLastMonthIncomesQuery();

  const distribution_platforms = incomesByProducts
    ?.map((incomeByProduct) =>
      incomeByProduct.incomes.map((income) => income.distribution_platform)
    )
    .flat()
    .filter(
      (item, idx, array) =>
        idx === array.findIndex((foundItem) => foundItem.name === item.name)
    );

  if (isLoading) {
    return "Loading";
  }

  return (
    <div className={styles.page}>
      <div className={styles.incomeStats}>
        <p>
          Доступно к выводу - <span>{28000}Р</span>
        </p>
      </div>
      <div className={styles.tableName}>
        <p>Текущий квартал</p>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.table}>
          <div className={styles.header}>
            <div className={styles.row}>
              <div className={styles.heading}></div>
              {distribution_platforms?.map((distribution_platform, key) => (
                <div className={styles.heading} key={key}>
                  {distribution_platform.name}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.body}>
            {incomesByProducts?.map((incomeByProduct, incomeByProductKey) => (
              <div className={styles.row} key={incomeByProductKey}>
                <div className={styles.cell}>
                  {incomeByProduct.product.name}
                </div>
                {incomeByProduct.incomes.map((income, incomeKey) => (
                  <div className={styles.cell} key={incomeKey}>
                    {income.total} Р
                  </div>
                ))}
                {Array(
                  (distribution_platforms?.length || 0) -
                    incomeByProduct.incomes.length
                )
                  .fill(null)
                  .map(() => (
                    <div className={styles.cell} />
                  ))}
              </div>
            ))}
          </div>
          <DataTable headings={["aaaaaaaa", "sssssssss"]} />
        </div>
      </div>
    </div>
  );
};
