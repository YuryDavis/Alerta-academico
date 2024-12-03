import React from 'react'
import Style from './Card.module.css'
import iconeAluno from './assets/iconeAluno.svg'
const index = ({info}) => {
  return (
   
    <section className={Style.containerCard}>
        <div className={Style.bodyCard}><img src={iconeAluno} alt="" /> <div className={Style.containerText}> <span className={Style.number}>50</span> Alunos</div></div>
    </section>
  )
}

export default index    