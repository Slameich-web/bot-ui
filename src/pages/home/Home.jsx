import React from "react";
import { useEffect } from "react";
import { $api } from "../../http/index";
import { animated } from "@react-spring/web";
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
        <animated.div className="buttons">
          <Link
            to={"/revenue"}
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              textDecoration: "none",
              color: "var(--tg-theme-button-text-color)",
            }}
          >
            <animated.button>Доход</animated.button>
          </Link>
          <Link
            to={"/checkouts"}
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              textDecoration: "none",
              color: "var(--tg-theme-button-text-color)",
            }}
          >
            <animated.button>Запросить выплату</animated.button>
          </Link>
        </animated.div>
      </div>
    </div>
  );
};
