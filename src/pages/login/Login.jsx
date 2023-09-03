import React, { useState, useEffect } from "react";
import { $api } from "../../http/index";
import "../../App.scss";
import { useNavigate } from "react-router-dom";
import LoginInputs from "./components/LoginInputs";
import LoginButtons from "./components/LoginButtons";
import { Label } from "../../components/Label.jsx";
import { useTelegram } from "../../useTelegram";

export const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isRedirect, setIsEedirect] = useState(false);

  const isShowPassword = showPassword ? "text" : "password";
  const navigate = useNavigate();
  const { tg } = useTelegram();

  const loginRequest = async () => {
    try {
      await $api.post("/api/login", {
        email: email,
        password: password,
      });
      setIsEedirect(true);
      setError("aaaaaaaaaaaaaaaaaaaaaa");
    } catch (e) {
      setError("aaaaaaaaaaaaaaaaaaaaaa");
      setError(e?.response?.data?.message);
    }
  };
  useEffect(() => {
    tg.MainButton.show();
    tg.MainButton.setParams({
      text: "Войти",
    });
    tg.onEvent("mainButtonClicked", loginRequest);
    return () => {
      tg.offEvent("mainButtonClicked", loginRequest);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (isRedirect) {
      return navigate("/home");
    }
  }, [isRedirect, navigate]);

  return (
    <div className="auth_wrapper">
      <Label text="Авторизация" />
      <div className="auth_container">
        <LoginInputs
          setEmail={setEmail}
          setPassword={setPassword}
          isShowPassword={isShowPassword}
          setShowPassword={() => setShowPassword((prev) => !prev)}
        />
      </div>
      <LoginButtons />
      <div>{error}</div>
    </div>
  );
};
