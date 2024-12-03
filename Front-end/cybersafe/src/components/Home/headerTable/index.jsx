import React from 'react'
import Style from './HeaderTable.module.css'
const index = ({alunos}) => {
  return (
    <fieldset className={Style.fieldset}>
        <legend className={Style.legend}>Tabela de Alunos</legend>
        <div className={Style.containerInput}>
          <input className={Style.inputFiltro} type="text" placeholder="Digite Nome ou Matrícula"/> <button className={Style.buttonFiltro}>Pesquisar</button>
        </div>
      </fieldset>
  )
}

export default index