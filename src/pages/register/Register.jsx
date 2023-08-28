import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../App.scss";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
export const Register = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isRedirect, setIsEedirect] = useState(false);
  const isShowPassword = showPassword ? "text" : "password";
  const navigate = useNavigate();

  const registerRequest = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/api/register", {
        email: email,
        password: password,
        first_name: firstName,
        last_name: lastName,
        middle_name: middleName,
        telegram_id: 542,
      });
      setIsEedirect(true);
    } catch (e) {
      setError(e.response.data.message);
    }
  };
  useEffect(() => {
    if (isRedirect) {
      return navigate("/login");
    }
  }, [isRedirect, navigate]);

  return (
    <div className="auth_wrapper">
      <div className="auth_container">
        <form
          className="input_container"
          method="POST"
          autoComplete="off"
          action="users/id"
        >
          <TextField
            className="input_color"
            label="Email"
            style={{ marginTop: "8px" }}
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
          />

          <TextField
            className="input_color"
            label="Имя"
            style={{ marginTop: "8px" }}
            variant="outlined"
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Имя"
          />
          <TextField
            className="input_color"
            style={{ marginTop: "8px" }}
            label="Фамилия"
            variant="outlined"
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Фамилия"
          />
          <TextField
            className="input_color"
            label="Отчество"
            style={{ marginTop: "8px" }}
            variant="outlined"
            onChange={(e) => setMiddleName(e.target.value)}
            placeholder="Отчество"
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
        <div>
          <span>Показать пароль </span>
          <input
            type="checkbox"
            onChange={() => setShowPassword((prev) => !prev)}
          />
        </div>
        <a href="https://ya.ru/">Забыли пароль?</a>
        <button onClick={registerRequest} className="login_button">
          Регистрация
        </button>
        <div>{error}</div>
      </div>
    </div>
  );
};
