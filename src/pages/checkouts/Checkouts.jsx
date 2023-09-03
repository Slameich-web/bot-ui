import React, { useState, useEffect } from "react";
import CheckoutsDropDown from "./components/CheckoutsDropDown";
import CheckoutsTable from "./components/CheckoutsTable";
import { useTelegram } from "../../utils/useTelegram";

export const Checkouts = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const { tg } = useTelegram();
  useEffect(() => {
    tg.MainButton.hide();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="checkouts_wrapper">
      <CheckoutsDropDown
        setShowNavbar={setShowNavbar}
        showNavbar={showNavbar}
      />
      <CheckoutsTable />
    </div>
  );
};
