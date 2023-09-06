import React, { memo } from "react";

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
