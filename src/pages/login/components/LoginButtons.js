import React from "react";
import { Link } from "react-router-dom";
function LoginButtons({ loginRequest }) {
  return (
    <div className="login_buttons_container">
      <button>
        <Link to="/register">Регистрация</Link>
      </button>
    </div>
  );
}

export default LoginButtons;
