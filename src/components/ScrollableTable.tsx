import { Card, Table } from "react-bootstrap";
import React from "react";

const ScrollableTable = ({ rows, cols }) => {
  return (
    <Card body className="main-card shadow-sm">
      <Table striped bordered hover responsive className="mb-0">
        <thead className="table-dark">
          <tr>
            {[...new Array(cols)].map((_, i) => {
              const name = `col_${i}`;
              return (
                <th key={name} className="text-uppercase">
                  {name}
                </th>
              );
            })}
          </tr>
        </thead>
        {[...new Array(rows)].map(() => {
          return (
            <tbody>
              <tr>
                {[...new Array(cols)].map((_, i) => {
                  const value = "111111111111 111111111111 111111111111";
                  return <td key={`${value}_${i}`}>{value}</td>;
                })}
              </tr>
            </tbody>
          );
        })}
      </Table>
    </Card>
  );
};

export default ScrollableTable;
