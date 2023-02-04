import * as React from "react";
import LoginForm from "../../component/LoginForm";
import "./LoginPage.scss";

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-box">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
