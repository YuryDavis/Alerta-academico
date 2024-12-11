import React from 'react'
import Style from './Card.module.css'
import iconeAluno from './assets/iconeAluno.svg'
const index = ({info, numero}) => {
  return (
   
    <section className={Style.containerCard}>
        <div className={Style.bodyCard}><img src={iconeAluno} alt="" /> <div className={Style.containerText}> <span className={Style.number}>{numero}</span> {info}</div></div>
    </section>
  )
}

export default index    