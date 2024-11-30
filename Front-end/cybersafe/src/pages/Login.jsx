/* eslint-disable no-unused-vars */
import React from "react";
import LoginForm from "../components/FormLogin/index";
import "../styles/login/style.css";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const email = data.get("email");
    const password = data.get("password");
  };

  return (
    <div className="login-container">
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Login;
