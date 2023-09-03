import React, { useState } from "react";
import Modal from "./components/Modal";
import RevDropDown from "./components/RevDropDown";
import Table from "./components/Table";
export const Revenue = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="revenue_wrapper">
      {showModal ? <Modal setShowModal={setShowModal} /> : ""}
      <RevDropDown showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
      <div className="revenue_container">
        <div className="available_funds">Доступно к выводу:</div>
        <Table tableName={"За прошедший месяц"} />
        <Table tableName={"За всё время"} />
      </div>
      <div className="check_out_button_container">
        <button
          className="check_out_button"
          onClick={() => setShowModal((prev) => !prev)}
        >
          Вывести в рублях
        </button>
      </div>
    </div>
  );
};
