import React from 'react'
import dayjs from 'dayjs'
function ManagerTable({ mockData, setPageToShow }) {
    return (
        <div className="revenue_container">
            <div className="manager_table_wrap">
                <table border="2" className="manager_table">
                    <tbody>
                        <tr>
                            <td>Пользователь</td>
                            <td>Дата создания запроса</td>
                            <td>Сумма вывода</td>
                            <td>Статус запроса</td>
                        </tr>
                        {mockData.map((item, index) => {
                            return (
                                <tr key={index} onClick={() => setPageToShow(index)}>
                                    <td>{item.name}</td>
                                    <td>{dayjs(item.date).format("DD/MM/YYYY")}</td>
                                    <td>{item.amount}</td>
                                    <td>{item.status}</td>
                                </tr>
                            )

                        })}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ManagerTable