import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
function CheckoutsDropDown({ setShowNavbar, showNavbar }) {
  return (
    <div className="checkouts_nav_container">
      <div className="drop_down">
        <div className="logo">Лого</div>
        <div className="drop_down_title_wrapper">
          <span>Запросы на выплату</span>
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
      {showNavbar ? (
        <div className="checkouts_buttons">
          <Link
            to={"/revenue"}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              textDecoration: "none",
              color: "var(--tg-theme-button-text-color)",
            }}
          >
            <button>Доходность</button>
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default CheckoutsDropDown;
