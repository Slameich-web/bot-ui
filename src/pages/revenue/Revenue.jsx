import React, { useState, useEffect, useCallback, memo } from "react";
import { Modal } from "./components/Modal";
import { RevDropDown } from "./components/RevDropDown";
import { Table } from "./components/Table";
import { useTelegram } from "../../utils/useTelegram";
import { DataTable } from "./components/Table";

export const Revenue = memo(() => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { tg } = useTelegram();

  const showModalClick = useCallback(() => {
    setShowModal(true);
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
      <RevDropDown showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
      <div className="revenue_container">
        <div className="available_funds">
          Доступно к выводу - <span className="available_funds_num">15000</span>
        </div>
        <Table tableName={"За прошедший месяц"} />
        <Table tableName={"За всё время"} />
        <DataTable headings={["aaaa", "aaaaasss"]} />
      </div>
      {showModal ? <Modal setShowModal={setShowModal} /> : ""}
    </div>
  );
});
