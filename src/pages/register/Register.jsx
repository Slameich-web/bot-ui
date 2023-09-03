import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../App.scss";
import { useNavigate } from "react-router-dom";
import RegInputs from "./components/RegInputs";
import { Label } from "../../components/Label.jsx";
import { useTelegram } from "../../useTelegram";

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
  const { tg } = useTelegram();

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
  useEffect(() => {
    tg.MainButton.show();
    tg.MainButton.setParams({
      text: "Регистрация",
    });
    tg.onEvent("mainButtonClicked", registerRequest);
    return () => {
      tg.MainButton.hide();
      tg.offEvent("mainButtonClicked", registerRequest);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="auth_wrapper">
      <Label text="Регистрация" />
      <div className="reg_container">
        <RegInputs
          setEmail={setEmail}
          setFirstName={setFirstName}
          setLastName={setLastName}
          setMiddleName={setMiddleName}
          setPassword={setPassword}
          isShowPassword={isShowPassword}
          setShowPassword={() => setShowPassword((prev) => !prev)}
        />

        <div>{error}</div>
      </div>
    </div>
  );
};
