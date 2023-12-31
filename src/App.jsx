import React, { useEffect } from "react";
import { Login } from "./pages/login/Login";
import { Home } from "./pages/home/Home";
import { Routes, Route, Link } from "react-router-dom";
import "./App.scss";
import { Register } from "./pages/register/Register";
import { Revenue } from "./pages/revenue/Revenue";
import { Checkouts } from "./pages/checkouts/Checkouts";
import { useTelegram } from "./utils/useTelegram";
import {
  ProtectedRoutes,
  ProtectedManagerRoutes,
} from "./utils/ProtectedRoutes";
const App = () => {
  const { tg } = useTelegram();
  // const getUser = async () => {
  //   try {
  //     await $api.get("/api/user");
  //   } catch (e) {
  //     console.log(e.response.data.message);
  //   }
  // };
  // useEffect(() => {
  //   getUser();
  // }, []);
  useEffect(() => {
    tg.ready();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Link to="/home">Home</Link>
      <Link to="/">login</Link>
      <Link to="/register">register</Link>
      <Link to="/revenue">revenue</Link>
      <Link to="/checkouts">checkouts</Link>
      <Link to="/aaa">prot</Link>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoutes loggedIn={true} />}>
          <Route path="/home" element={<Home />} />
          <Route path="/revenue" element={<Revenue />} />
          <Route path="/checkouts" element={<Checkouts />} />
          <Route element={<ProtectedManagerRoutes role="superuser" />}>
            <Route path="/aaa" element={<div>prot</div>} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
