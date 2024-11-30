import React from 'react'
import Style from './CardLogin.module.css'
import FormLogin from './Components/FormLogin'
import logo from "/Logo.svg"

const index = () => {
  return (
    <section className={Style.containerForm}>
      <body className={Style.bodyCard}>
        <section className={Style.containerLogo}>
          <img src={logo} alt="Logo" />
        </section>
        <FormLogin />
      </body>
    </section>
  )
}

export default index