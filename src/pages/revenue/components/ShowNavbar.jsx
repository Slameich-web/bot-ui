import React, { memo } from "react";
import { Link } from "react-router-dom";

export const ShowNavbar = memo(({ showNavbar }) => {
  if (!showNavbar) {
    return undefined;
  }
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
  </div>;
});
