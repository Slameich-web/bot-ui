import React, { memo } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
export const LoginInputs = memo(
  ({ setEmail, setPassword, isShowPassword, setShowPassword }) => {
    return (
      <div className="login_input_container">
        <input
          className="auth_input"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <div class="text-field text-field_floating-2">
          <input
            class="text-field__input"
            type="email"
            id="email"
            name="email"
            placeholder="alexander@itchief.ru"
          />
          <label class="text-field__label" for="email">
            Email
          </label>
        </div>
        <div className="input_with_button">
          <input
            label="Пароль"
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
