import React, { useState, useEffect } from "react";
// import { useEffect } from "react";
import HomeDropDown from "./components/HomeDropDown";
import HomeButtons from "./components/HomeButtons";
import { useTelegram } from "../../useTelegram";

// import { $api } from "../../http/index";

export const Home = () => {
  // const getUser = async () => {
  //   try {
  //     await $api.get("/api/user");
  //   } catch (e) {
  //     console.log(e.response.data.message);
  //   }
  // };
  // useEffect(() => {
  //   getUser();
  // });
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
        {showNavbar ? <HomeButtons /> : ""}
      </div>
    </div>
  );
};
