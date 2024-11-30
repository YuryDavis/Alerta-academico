/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "./style.css";

const LoginForm = ({ onSubmit }) => {
    return (
        <form className="login-form" onSubmit={onSubmit}>
            <div className="logo-container">
                <div className="logo">DJMMY</div>
            </div>
            <h2>Faça seu login</h2>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="password-container">
                    <input type="password" id="password" name="password" required />
                    <span className="show-password"></span>
                </div>
            </div>
            <button type="submit" className="submit-btn">LOGIN</button>
            <p className="signup-text">
                Não tem uma conta? <a href="/cadastro">Cadastrar-se</a>
            </p>
        </form>
    );
};

export default LoginForm;
