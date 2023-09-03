import React, { memo } from "react";
import { ShowNavbar } from "./ShowNavbar";
import { DropDownButton } from "./DropDownButton";

export const RevDropDown = memo(({ setShowNavbar, showNavbar }) => {
  return (
    <div className="rev_nav_container">
      <div className="rev_drop_down">
        <div className="logo">Лого</div>
        <div className="rev_drop_down_title">
          <span>Доходность</span>
        </div>
        <DropDownButton showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
      </div>
      <ShowNavbar showNavbar={showNavbar} />
    </div>
  );
});
