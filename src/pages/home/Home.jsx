import React from "react";
import { useEffect } from "react";
import { $api } from "../../http/index";
import { Link } from "react-router-dom";

export const Home = () => {
  const getUser = async () => {
    try {
      await $api.get("/api/user");
    } catch (e) {
      console.log(e.response.data.message);
    }
  };
  useEffect(() => {
    getUser();
  });

  return (
    <div className="auth_wrapper">
      <div className="nav_container">
        <Link to={"/revenue"}>
          <button>Доход</button>
        </Link>
        <Link to={"/checkouts"}>
          <button>Запросить выплату</button>
        </Link>
      </div>
    </div>
  );
};
