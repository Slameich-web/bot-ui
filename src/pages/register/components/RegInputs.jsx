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
      <div className="reg_input_container">
        <div className="text-field text-field_floating input_with_button">
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
        <div className="text-field text-field_floating input_with_button">
          <input
            class="text-field__input"
            type="text"
            id="firstname"
            name="firstname"
            placeholder=""
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label class="text-field__label" for="firstname">
            Имя
          </label>
        </div>
        <div className="text-field text-field_floating input_with_button">
          <input
            class="text-field__input"
            type="text"
            id="lastname"
            name="lastname"
            placeholder=""
            onChange={(e) => setLastName(e.target.value)}
          />
          <label class="text-field__label" for="lastname">
            Фамилия
          </label>
        </div>
        <div className="text-field text-field_floating input_with_button">
          <input
            class="text-field__input"
            type="text"
            id="middlename"
            name="middlename"
            placeholder=""
            onChange={(e) => setMiddleName(e.target.value)}
          />
          <label class="text-field__label" for="middlename">
            Отчество
          </label>
        </div>
        <div className="text-field text-field_floating input_with_button">
          <input
            class="text-field__input"
            label="Пароль"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder=""
            type={isShowPassword}
          />
          <label class="text-field__label" for="password">
            Пароль
          </label>
          <VisibilityIcon className="show_button" onClick={setShowPassword} />
        </div>
      </div>
    );
  }
);
