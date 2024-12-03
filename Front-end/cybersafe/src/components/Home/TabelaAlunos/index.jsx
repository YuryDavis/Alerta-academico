import React, { useState } from "react";
import Style from "./TabelaAlunos.module.css";
import HeaderTable from '../headerTable'
import Card from '../card'
const index = () => {
  const [alunos, setAlunos] = useState([
    { nome: "Diego", matricula: "123131231" },
    { nome: "Diego", matricula: "123131231" },
    { nome: "Diego", matricula: "123131231" },
    { nome: "Diego", matricula: "123131231" },
    { nome: "Diego", matricula: "123131231" },
    { nome: "Diego", matricula: "123131231" },
    { nome: "Diego", matricula: "123131231" },
    { nome: "Diego", matricula: "123131231" },
    { nome: "Diego", matricula: "123131231" },
    { nome: "Diego", matricula: "123131231" },
    { nome: "Diego", matricula: "123131231" },
    { nome: "Diego", matricula: "123131231" },
    { nome: "Diego", matricula: "123131231" },
    { nome: "Diego", matricula: "123131231" },
  ]);
  return (
    <section className={Style.containerTable}>
        <section className={Style.bodyCard}>
        <Card/>
        <Card/>
        <Card/>
        </section>


      <section className={Style.containerHeaderTable}>
        <HeaderTable alunos={alunos}/>
        <table className={Style.tabelaAlunos}>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Matrícula</th>
              <th>Detalhes</th>
            </tr>
          </thead>
          <tbody>
            {alunos.map((aluno, index) => (
              <tr
                className={index % 2 === 0 ? Style.evenRow : Style.oddRow}
                key={index}
              >
                <td className={Style.linha}>{aluno.nome}</td>
                <td className={Style.linha}>{aluno.matricula}</td>
                <td className={Style.linha}>
                  <button
                    className={Style.saibaMais}
                    onClick={() => alert(`Detalhes do ${aluno.nome}`)}
                  >
                    🔍
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </section>
  );
};

export default index;
