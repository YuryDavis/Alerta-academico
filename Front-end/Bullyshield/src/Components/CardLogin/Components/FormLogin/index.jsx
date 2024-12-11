import React, { useState } from "react";
import Style from "./FormLogin.module.css";
import { useNavigate } from "react-router-dom";
import Authentication from "../../../../hooks/Authentication";
import Cookies from 'js-cookie'
import axios from "axios";

const index = () => {
  const [matricula, setMatricula] = useState(0);
  const [password, setPassword] = useState("");
  const [incorreta, setIncorreta] = useState(false)

  const navigate = useNavigate();
  const handleFunction = async(e) => {
  e.preventDefault();
  if (matricula){
    if (password == "admin10"){
      Cookies.set('user', matricula)
      navigate('/inicio')
      }else{
        setIncorreta(true)
        setTimeout(()=>{
          setIncorreta(false)
        },4000)
      }
    }
  };

  return (
    <>
      <h2 className={Style.loginTitle}>LOGIN</h2>

      <section className={Style.bodyForm}>
        <form  className={Style.containerInput}>
          <input
            onChange={(e) => setMatricula(e.target.value)}
            type="number"
            placeholder="Matrícula"
            className={Style.inputMatricula}
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Senha"
            className={Style.inputPassword}
          />
          <div className={Style.containerButton}>
            <button
              type="submit"
              onClick={handleFunction}
              className={Style.buttonEntrar}
            >
              Entrar
            </button>

          </div>
            {incorreta && <p className={Style.passwordInc}>Matricula ou senha incorreta!</p>}
        </form>
      </section>
    </>
  );
};

export default index;
