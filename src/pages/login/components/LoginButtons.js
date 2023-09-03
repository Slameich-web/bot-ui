import React from "react";
import { Link } from "react-router-dom";
function LoginButtons({ loginRequest }) {
  return (
    <div className="login_buttons_container">
      <Link to="/register">
        <button>Регистрация</button>
      </Link>
    </div>
  );
}

export default LoginButtons;
