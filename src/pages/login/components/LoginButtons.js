import React from "react";
import { Link } from "react-router-dom";
function LoginButtons({ loginRequest }) {
  return (
    <div className="login_buttons_container">
      <Link to="/register">
        <button className="login_buttons_container_button">Регистрация</button>
      </Link>
    </div>
  );
}

export default LoginButtons;
