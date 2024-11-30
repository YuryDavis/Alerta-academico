import React from "react";

import Style from "./navbar.module.css";
import logo from "/Logo.svg";
import { Link, useNavigate } from "react-router-dom";

const index = () => {
  const menuNav = ["Inicio", "Alunos", "Sobre"];
  const navigate = useNavigate();
  const logout = ()=>{
    navigate('/')
  }
  // , "Disciplinas"
  return (
    <header className={Style.bodyNavbar}>
      <nav className={Style.navbar}>
        <section className={Style.bodyItens}>
          <section className={Style.containerNavbar}>
            <div className={Style.logo}>
              <img className={Style.image} src={logo}></img>
            </div>
            <ul className={Style.containerItens}>
              {menuNav.map((texto) => (
                <Link className={Style.link} to={`/${texto.toLowerCase()}`}>
                  <li className={Style.li}>
                    <a className={Style.p}>{texto}</a>
                  </li>
                </Link>
              ))}
              <button className={Style.logout} onClick={logout}>Sair</button>
            </ul>
          </section>
        </section>
      </nav>
    </header>
  );
};

export default index;
