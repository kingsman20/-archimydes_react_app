import React from "react";
import "../styles/login.css";
import "../styles/toggle_button.css"
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div className="main_wrapper">
      <div className="auth_container">
        <div className="login_wrapper">
          <div className="login_left">
            <div>
              <h1>Archimydes App</h1>
              <h4>Login to continue!</h4>
            </div>
          </div>
          <div className="login_right">
            <div className="w-100">
              <div className="d_sm_block">
                <h1>Login</h1>
                <h4>Welcome to online help center!</h4>
              </div>

              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
