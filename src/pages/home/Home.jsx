import React, { useState, useEffect } from "react";
// import { useEffect } from "react";
import { HomeDropDown } from "./components/HomeDropDown";
import { HomeButtons } from "./components/HomeButtons";
import { useTelegram } from "../../utils/useTelegram";

// import { $api } from "../../http/index";

export const Home = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const { tg } = useTelegram();

  useEffect(() => {
    tg.MainButton.hide();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="auth_wrapper">
      <div className="nav_container">
        <HomeDropDown
          showNavbar={showNavbar}
          setShowNavbar={() => setShowNavbar((prev) => !prev)}
        />
        {showNavbar ? <HomeButtons /> : undefined}
      </div>
    </div>
  );
};
