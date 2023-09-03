import React, { memo } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
export const HomeDropDown = memo(({ showNavbar, setShowNavbar }) => {
  return (
    <div className="drop_down">
      <div className="logo">Лого</div>
      <div className="drop_down_button" onClick={setShowNavbar}>
        {showNavbar ? (
          <CloseIcon fontSize="large" />
        ) : (
          <MenuIcon fontSize="large" />
        )}
      </div>
    </div>
  );
});
