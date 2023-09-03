import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
function LoginInputs({
  setEmail,
  setPassword,
  isShowPassword,
  setShowPassword,
}) {
  return (
    <div className="login_input_container">
      <input
        className="auth_input"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
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

export default LoginInputs;
