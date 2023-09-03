import React, { useState, useEffect, useCallback } from "react";
import Modal from "./components/Modal";
import RevDropDown from "./components/RevDropDown";
import Table from "./components/Table";
import { useTelegram } from "../../useTelegram";

export const Revenue = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { tg } = useTelegram();

  const showModalClick = useCallback(() => {
    return () => setShowModal(true);
  }, []);
  useEffect(() => {
    tg.MainButton.show();
    tg.MainButton.setParams({
      text: "Вывести в рублях",
    });
    tg.onEvent("mainButtonClicked", showModalClick);
    return () => {
      tg.offEvent("mainButtonClicked", showModalClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="revenue_wrapper">
      {showModal ? <Modal setShowModal={setShowModal} /> : ""}
      <RevDropDown showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
      <div className="revenue_container">
        <div className="available_funds">Доступно к выводу:</div>
        <Table tableName={"За прошедший месяц"} />
        <Table tableName={"За всё время"} />
      </div>
    </div>
  );
};
