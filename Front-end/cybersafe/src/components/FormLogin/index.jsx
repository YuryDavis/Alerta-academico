/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "./style.css";
import logo from '../../assets/logo.png'
const LoginForm = ({ onSubmit }) => {
  return (
    <section className="body-form">
      <form className="login-form" onSubmit={onSubmit}>
        <div className="logo-container">
          <div className="logo"><img src={logo} alt="" /></div>
        </div>
        <div className="form-header">
          <h2 className="form-title">Faça seu login</h2>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-input"
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <div className="password-container">
            <input
              className="form-input"
              type="password"
              id="password"
              name="password"
              required
            />
            <span className="show-password"></span>
          </div>
        </div>
        <button type="submit" className="submit-btn">
          LOGIN
        </button>
        <p className="signup-text">
          Não tem uma conta?{" "}
          <a className="signup-link" href="/cadastro">
            Cadastrar-se
          </a>
        </p>
      </form>
    </section>
  );
};

export default LoginForm;
