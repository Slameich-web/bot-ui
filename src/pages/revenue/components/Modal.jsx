import React from "react";

export const Modal = ({ setShowModal }) => {
  return (
    <div className="modal" onClick={() => setShowModal((prev) => !prev)}>
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        <div className="modal_close">
          <div onClick={() => setShowModal((prev) => !prev)}></div>
        </div>
        <span>Введите сумму вывода</span>
        <input className="modal_input" />
        <span>Сумма вывода не может превышать возможную сумму вывода</span>
        <button className="modal_button_inactive">Доступно к выводу</button>
        <button className="modal_button_active">Запросить выплату</button>
      </div>
    </div>
  );
};
