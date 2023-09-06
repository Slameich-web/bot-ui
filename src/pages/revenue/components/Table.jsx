import React, { memo } from "react";
import styles from "./styles.module.css";

export const Table = memo(({ tableName }) => {
  return (
    <div className="table_wrap">
      <div className="table_title">
        <span>{tableName}</span>
      </div>
      <table border="2" className="table">
        <tbody>
          <tr>
            <td></td>
            <td>Площадка 1</td>
            <td>Площадка 2</td>
            <td>Площадка 3</td>
          </tr>
          <tr>
            <td>Продукт 2</td>
            <td>1800 ₽</td>
            <td>1800 ₽</td>
            <td>1800 ₽</td>
          </tr>
          <tr>
            <td>Продукт 3</td>
            <td>1800 ₽</td>
            <td>1800 ₽</td>
            <td>1800 ₽</td>
          </tr>
          <tr>
            <td>Продукт 4</td>
            <td>1800 ₽</td>
            <td>1800 ₽</td>
            <td>1800 ₽</td>
          </tr>
          <tr>
            <td>Продукт 5</td>
            <td>1800 ₽</td>
            <td>1800 ₽</td>
            <td>1800 ₽</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
});
export const DataTable = ({
  headings,
  data,
  onRowClick,
  classNames,
  showRowNumber = false,
}) => {
  const columnsNumber =
    data && data.length
      ? Object.keys(data[0]).length
      : headings
      ? headings.length
      : 1;
  const rowStyle = {
    gridAutoColumns: `minmax(20ch, calc(100% / ${columnsNumber}))`,
    cursor: onRowClick && "pointer",
  };

  return (
    <div
      className={`${classNames?.tableWrapperClassName || ""} ${styles.wrapper}`}
    >
      <div className={`${classNames?.tableClassName || ""} ${styles.table}`}>
        <div
          className={`${classNames?.tableHeaderClassName || ""} ${
            styles.header
          }`}
        >
          <div
            className={`${classNames?.rowClassName || ""} ${styles.row}`}
            style={rowStyle}
          >
            {showRowNumber && (
              <div
                className={`${classNames?.headingClassName || ""} ${
                  styles.heading
                }`}
              >
                №
              </div>
            )}
            {headings.map((heading, colNumber) => (
              <div
                className={`${classNames?.headingClassName || ""} ${
                  styles.heading
                }`}
                key={colNumber}
              >
                {heading}
              </div>
            ))}
          </div>
        </div>
        <div className={`${classNames?.bodyClassName || ""} ${styles.body}`}>
          {data &&
            data.map((dataObject, rowNumber) => (
              <div
                className={`${classNames?.rowClassName || ""} ${styles.row}`}
                key={rowNumber}
                style={rowStyle}
                onClick={(event) => onRowClick && onRowClick(event, dataObject)}
              >
                {showRowNumber && (
                  <div
                    className={`${classNames?.cellClassName || ""} ${
                      styles.cell
                    }`}
                  >
                    {rowNumber + 1}
                  </div>
                )}
                {Object.values(dataObject).map((dataValue, colNumber) => (
                  <div
                    className={`${classNames?.cellClassName || ""} ${
                      styles.cell
                    }`}
                    key={colNumber}
                  >
                    {typeof dataValue === "object" ? (
                      dataValue ? (
                        dataValue
                      ) : (
                        JSON.stringify(dataValue)
                      )
                    ) : (
                      <span>{String(dataValue)?.toString()}</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
