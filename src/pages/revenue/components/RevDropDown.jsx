import React, { memo } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
export const RevDropDown = memo(({ setShowNavbar, showNavbar }) => {
  return (
    <div className="rev_nav_container">
      <div className="rev_drop_down">
        <div className="logo">Лого</div>
        <div className="rev_drop_down_title">
          <span>Доходность</span>
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
        <div className="rev_buttons">
          <Link
            to={"/checkouts"}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              textDecoration: "none",
              color: "var(--tg-theme-button-text-color)",
              position: "sticky",
              left: "0",
            }}
          >
            <button>Запросить выплату</button>
          </Link>
        </div>
      ) : undefined}
    </div>
  );
});
