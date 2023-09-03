import React, { useState } from "react";
import CheckoutsDropDown from "./components/CheckoutsDropDown";
import CheckoutsTable from "./components/CheckoutsTable";
export const Checkouts = () => {
  const [showNavbar, setShowNavbar] = useState(false);

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
