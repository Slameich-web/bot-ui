import React, { memo } from "react";
import { Link } from "react-router-dom";
export const LoginButtons = memo(() => {
  return (
    <div className="login_buttons_container">
      <Link to="/register">
        <button className="login_buttons_container_button">Регистрация</button>
      </Link>
    </div>
  );
});
