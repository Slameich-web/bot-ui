import React, { useEffect } from "react";
import { Login } from "./pages/login/Login";
import { Home } from "./pages/home/Home";
import { Routes, Route, Link } from "react-router-dom";
import "./App.scss";
import { Register } from "./pages/register/Register";
import { Revenue } from "./pages/revenue/Revenue";
import { Checkouts } from "./pages/checkouts/Checkouts";
import { useTelegram } from "./useTelegram";

const App = () => {
  const { tg } = useTelegram();

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
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/revenue" element={<Revenue />} />
        <Route path="/checkouts" element={<Checkouts />} />
      </Routes>
    </>
  );
};

export default App;
