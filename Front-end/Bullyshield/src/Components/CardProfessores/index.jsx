import React from "react";
import Style from "./CardProfessores.module.css";
import RelatorioAluno from './Components/RelatorioAluno'
import Disciplinas from '../Disciplinas'

const index = ({turma}) => {
  console.log(turma);
  return (
    <>
      <h1 className={Style.titleTurma}>{turma.nome}</h1>
      <section className={Style.bodyGeral}>
        <section className={Style.sectionCard}>
          <Disciplinas  turma={turma}/>
          <RelatorioAluno />
        </section>
      </section>
    </>
  );
};

export default index;
