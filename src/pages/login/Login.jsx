import React, { useState, useEffect } from "react";
import { $api } from "../../http/index";
import "../../App.scss";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";

export const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isRedirect, setIsEedirect] = useState(false);

  const isShowPassword = showPassword ? "text" : "password";
  const navigate = useNavigate();

  const loginRequest = async () => {
    try {
      await $api.post("/api/login", {
        email: email,
        password: password,
      });
      setIsEedirect(true);
    } catch (e) {
      setError(e?.response?.data?.message);
    }
  };
  useEffect(() => {
    if (isRedirect) {
      return navigate("/home");
    }
  }, [isRedirect, navigate]);

  return (
    <div className="auth_wrapper">
      <div className="auth_container">
        <form className="input_container">
          <TextField
            className="input_color"
            label="Email"
            style={{ marginTop: "8px" }}
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <TextField
            className="input_color"
            label="Пароль"
            style={{ marginTop: "8px" }}
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Пароль"
            type={isShowPassword}
          />
        </form>
        <div style={{ marginTop: "16px" }}>
          <span>Показать пароль </span>
          <input
            type="checkbox"
            onChange={() => setShowPassword((prev) => !prev)}
          />
        </div>
        <button onClick={loginRequest} className="login_button">
          Войти
        </button>
        <div>{error}</div>
      </div>
    </div>
  );
};
