import React, { useState } from "react";
import ManagerDropDown from "./components/ManagerDropDown";
import ManagerTable from "./components/ManagerTable";
import FilterButtons from "./components/FilterButtons";
import dayjs from "dayjs";
const Manager = () => {
  const data = [
    {
      name: "Denis Gavristov",
      date: new Date("August 14, 2024 14:15:30"),
      amount: "1500 ₽",
      status: "Обработан",
    },
    {
      name: "Alex Gavristov",
      date: new Date("August 14, 2023 14:15:30"),
      amount: "1500 ₽",
      status: "Обработан",
    },
    {
      name: "Marty Gavristov",
      date: new Date("August 14, 2019 14:15:30"),
      amount: "1500 ₽",
      status: "В обработке",
    },
  ];

  const [mockData, setMockData] = useState(data);
  const [showNavbar, setShowNavbar] = useState(false);
  const [statusDropDown, setStatusDropDown] = useState(false);
  const [sortDropDown, setSortDropDown] = useState(false);
  const [pageToShow, setPageToShow] = useState(null);

  const statusFilter = (status) => {
    const filteredArray = data.filter((item) => item.status === status);
    setMockData(filteredArray);
  };

  const dateSort = () => {
    const sortedData = [...mockData].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();

      if (dateA < dateB) {
        return -1;
      }
      if (dateA > dateB) {
        return 1;
      }
      return 0;
    });
    setMockData(sortedData);
  };

  const updateState = () => {
    const newState = data.map((obj) => {
      if (obj.id === data[pageToShow].id) {
        return { ...obj, status: "Обработан" };
      }
      return obj;
    });

    setMockData(newState);
  };

  if (pageToShow == null) {
    return (
      <div
        className="manager_container"
        onClick={() => setSortDropDown(false) & setStatusDropDown(false)}
      >
        <ManagerDropDown
          showNavbar={showNavbar}
          setShowNavbar={() => setShowNavbar((prev) => !prev)}
        />
        <FilterButtons
          setStatusDropDown={setStatusDropDown}
          setMockData={setMockData}
          statusFilter={statusFilter}
          data={data}
          dateSort={dateSort}
          setSortDropDown={setSortDropDown}
          sortDropDown={sortDropDown}
          statusDropDown={statusDropDown}
        />
        <ManagerTable mockData={mockData} setPageToShow={setPageToShow} />
      </div>
    );
  } else {
    return (
      <div className="manager_single_page_container">
        <ManagerDropDown
          showNavbar={showNavbar}
          setShowNavbar={() => setShowNavbar((prev) => !prev)}
          setPageToShow={setPageToShow}
          pageToShow={pageToShow}
        />
        <div className="manager_single_page">
          <div className="manager_single_page_info">
            <span> Пользователь</span> <span>{mockData[pageToShow].name}</span>
          </div>
          <div className="manager_single_page_info">
            <span>Дата создания запроса</span>{" "}
            <span>{dayjs(mockData[pageToShow].date).format("DD/MM/YYYY")}</span>
          </div>
          <div className="manager_single_page_info">
            <span>Сумма</span> <span>{mockData[pageToShow].amount}</span>
          </div>
          <div className="manager_single_page_info">
            <span>Статус</span> <span>{mockData[pageToShow].status}</span>
          </div>
          {mockData[pageToShow].status === "В обработке" ? (
            <button
              className="manager_single_page_button"
              onClick={() => updateState()}
            >
              Обработать
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
};

export default Manager;
