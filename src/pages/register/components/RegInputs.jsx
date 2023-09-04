import React, { memo } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";

export const RegInputs = memo(
  ({
    setEmail,
    setFirstName,
    setLastName,
    setMiddleName,
    setPassword,
    isShowPassword,
    setShowPassword,
  }) => {
    return (
      <div className="login_input_container">
        <div className="text-field text-field_floating-2 input_with_button">
          <input
            class="text-field__input"
            type="email"
            id="email"
            name="email"
            placeholder=""
            onChange={(e) => setEmail(e.target.value)}
          />
          <label class="text-field__label" for="email">
            Email
          </label>
        </div>

        <input
          className="auth_input"
          label="Имя"
          variant="outlined"
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Имя"
        />
        <input
          className="input_color"
          label="Фамилия"
          variant="outlined"
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Фамилия"
        />
        <input
          className="input_color"
          label="Отчество"
          variant="outlined"
          onChange={(e) => setMiddleName(e.target.value)}
          placeholder="Отчество"
        />
        <div className="reg_input_with_button">
          <input
            label="Пароль"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Пароль"
            type={isShowPassword}
          />
          <VisibilityIcon className="show_button" onClick={setShowPassword} />
        </div>
      </div>
    );
  }
);
