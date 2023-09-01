import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTransition } from "@react-spring/web";
import { animated } from "@react-spring/web";
import { Link } from "react-router-dom";

export const Revenue = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const transition = useTransition(showNavbar, {
    from: { x: -100, y: 100, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 100, y: 100, opacity: 0 },
  });
  const modalTransition = useTransition(showModal, {
    from: { x: -100, y: 0, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 100, y: 100, opacity: 0 },
  });
  return (
    <div className="revenue_wrapper">
      {modalTransition((style, item) =>
        item ? (
          <div className="modal" onClick={() => setShowModal((prev) => !prev)}>
            <animated.div
              style={style}
              className="modal_content"
              onClick={(e) => e.stopPropagation()}
            >
              <animated.div style={style} className="modal_close">
                <animated.div onClick={() => setShowModal((prev) => !prev)}>
                  <CloseIcon />
                </animated.div>
              </animated.div>
              <animated.span style={style}>Введите сумму вывода:</animated.span>
              <input className="modal_input" placeholder="Введите сумму" />
              <span style={style}>Доступно к выводу: 321</span>
              <button className="modal_button_active" style={style}>
                Запросить выплату
              </button>
            </animated.div>
          </div>
        ) : (
          ""
        )
      )}
      <div className="rev_nav_container">
        <div className="rev_drop_down">
          <div
            className="logo"
            style={{ display: "flex", alignItems: "center" }}
          >
            Shriftovik
          </div>
          <div className="rev_drop_down_title">
            <span
              style={{
                marginTop: "1%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Доходность
            </span>
          </div>
          <div
            className="drop_down_button"
            onClick={() => setShowNavbar((prev) => !prev)}
          >
            {showNavbar ? (
              <CloseIcon fontSize="large" />
            ) : (
              <MenuIcon fontSize="large" />
            )}
          </div>
        </div>
        {transition((style, item) =>
          item ? (
            <animated.div style={style} className="rev_buttons">
              <Link
                to={"/checkouts"}
                style={{
                  width: "100%",
                  display: "flex",
                  marginTop: "8px",
                  justifyContent: "center",
                  textDecoration: "none",
                  color: "var(--tg-theme-button-text-color)",
                }}
              >
                <animated.button style={style}>
                  Запросить выплату
                </animated.button>
              </Link>
            </animated.div>
          ) : (
            ""
          )
        )}
      </div>
      <div className="revenue_container">
        <div style={{ width: "100%", height: "100%" }}>
          <div className="table_title">
            <span>За текущий период</span>
          </div>

          <table border="2" className="table">
            <tbody>
              <tr>
                <td></td>
                <td>Площадка 1</td>
                <td>Площадка 2</td>
                <td>Площадка 3</td>
                <td>Площадка 3</td>
                <td>Площадка 3</td>
                <td>Площадка 3</td>
                <td>Площадка 3</td>
                <td>Площадка 3</td>
                <td>Площадка 3</td>
              </tr>
              <tr>
                <td>Продукт 2</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
              </tr>
              <tr>
                <td>Продукт 3</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
              </tr>
              <tr>
                <td>Продукт 3</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
              </tr>
              <tr>
                <td>Продукт 3</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={{ width: "100%", height: "100%" }}>
          <div className="table_title">
            <span>За весь период</span>
          </div>
          <table border="2" className="table">
            <tbody>
              <tr>
                <td></td>
                <td>Площадка 1</td>
                <td>Площадка 2</td>
                <td>Площадка 3</td>
                <td>Площадка 3</td>
                <td>Площадка 3</td>
                <td>Площадка 3</td>
                <td>Площадка 3</td>
                <td>Площадка 3</td>
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
                <td>Продукт 3</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
              </tr>

              <tr>
                <td>Продукт 3</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
              </tr>

              <tr>
                <td>Продукт 3</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
              </tr>

              <tr>
                <td>Продукт 3</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
              </tr>

              <tr>
                <td>Продукт 3</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
              </tr>

              <tr>
                <td>Продукт 3</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
              </tr>

              <tr>
                <td>Продукт 3</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
                <td>1800 ₽</td>
              </tr>
            </tbody>
          </table>
        </div>
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
