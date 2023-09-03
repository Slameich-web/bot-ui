import React, { memo } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
export const DropDownButton = memo(({ showNavbar, setShowNavbar }) => {
  <div
    className="drop_down_button"
    onClick={() => setShowNavbar((prev) => !prev)}
  >
    {showNavbar ? (
      <CloseIcon fontSize="large" />
    ) : (
      <MenuIcon fontSize="large" />
    )}
  </div>;
});
