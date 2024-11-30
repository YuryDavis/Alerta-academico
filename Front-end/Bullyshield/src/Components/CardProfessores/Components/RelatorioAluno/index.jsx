import React, { useState } from "react";
import Style from "./RelatorioAluno.module.css";
import ModalAluno from '../ModalAluno'

const index = () => {
  const [alunos, setAlunos] = useState([
    {
      nome: "Diego",
      matricula: 12313222,
      media: 7.5,
      frequencia: "50",
      disciplinas: [
        { nome: "Matemática", media: 8.0, frequencia: "70%" },
        { nome: "Português", media: 7.5, frequencia: "60%" },
        { nome: "História", media: 6.0, frequencia: "80%" },
        { nome: "Geografia", media: 8.5, frequencia: "75%" },
        { nome: "Física", media: 7.0, frequencia: "65%" },
        { nome: "Química", media: 9.0, frequencia: "85%" },
        { nome: "Biologia", media: 8.0, frequencia: "70%" }
      ]
    },
    {
      nome: "Mateus Candido",
      matricula: 12313222,
      media: 2.0,
      frequencia: "10",
      disciplinas: [
        { nome: "Matemática", media: 3.5, frequencia: "20%" },
        { nome: "Português", media: 2.0, frequencia: "10%" },
        { nome: "História", media: 1.5, frequencia: "15%" },
        { nome: "Geografia", media: 2.0, frequencia: "10%" },
        { nome: "Física", media: 2.0, frequencia: "10%" },
        { nome: "Química", media: 2.5, frequencia: "30%" },
        { nome: "Biologia", media: 3.0, frequencia: "25%" }
      ]
    },
    // Adicione mais alunos abaixo...
    {
      nome: "Vanildo",
      matricula: 42356622,
      media: 9.0,
      frequencia: "90",
      disciplinas: [
        { nome: "Matemática", media: 8.5, frequencia: "85%" },
        { nome: "Português", media: 9.0, frequencia: "95%" },
        { nome: "História", media: 8.0, frequencia: "80%" },
        { nome: "Geografia", media: 9.5, frequencia: "92%" },
        { nome: "Física", media: 9.0, frequencia: "88%" },
        { nome: "Química", media: 9.5, frequencia: "96%" },
        { nome: "Biologia", media: 9.0, frequencia: "90%" }
      ]
    },
    {
      nome: "João",
      matricula: 54321678,
      media: 6.8,
      frequencia: "65",
      disciplinas: [
        { nome: "Matemática", media: 7.0, frequencia: "70%" },
        { nome: "Português", media: 6.5, frequencia: "60%" },
        { nome: "História", media: 6.0, frequencia: "70%" },
        { nome: "Geografia", media: 7.5, frequencia: "75%" },
        { nome: "Física", media: 6.5, frequencia: "60%" },
        { nome: "Química", media: 7.0, frequencia: "65%" },
        { nome: "Biologia", media: 7.0, frequencia: "70%" }
      ]
    },
    {
      nome: "Ana",
      matricula: 98765432,
      media: 8.2,
      frequencia: "80",
      disciplinas: [
        { nome: "Matemática", media: 8.0, frequencia: "85%" },
        { nome: "Português", media: 8.5, frequencia: "80%" },
        { nome: "História", media: 7.5, frequencia: "90%" },
        { nome: "Geografia", media: 8.5, frequencia: "85%" },
        { nome: "Física", media: 8.0, frequencia: "80%" },
        { nome: "Química", media: 8.5, frequencia: "90%" },
        { nome: "Biologia", media: 8.5, frequencia: "85%" }
      ]
    },
    // Adicione mais 9 alunos abaixo...
    {
      nome: "Carla",
      matricula: 13579246,
      media: 7.0,
      frequencia: "75",
      disciplinas: [
        { nome: "Matemática", media: 7.5, frequencia: "80%" },
        { nome: "Português", media: 7.0, frequencia: "70%" },
        { nome: "História", media: 6.5, frequencia: "75%" },
        { nome: "Geografia", media: 7.0, frequencia: "80%" },
        { nome: "Física", media: 6.0, frequencia: "65%" },
        { nome: "Química", media: 7.0, frequencia: "70%" },
        { nome: "Biologia", media: 7.5, frequencia: "75%" }
      ]
    },
    {
      nome: "Pedro",
      matricula: 24681357,
      media: 6.5,
      frequencia: "60",
      disciplinas: [
        { nome: "Matemática", media: 6.0, frequencia: "55%" },
        { nome: "Português", media: 7.0, frequencia: "65%" },
        { nome: "História", media: 6.5, frequencia: "60%" },
        { nome: "Geografia", media: 6.0, frequencia: "55%" },
        { nome: "Física", media: 7.0, frequencia: "65%" },
        { nome: "Química", media: 6.5, frequencia: "60%" },
        { nome: "Biologia", media: 6.0, frequencia: "55%" }
      ]
    }, {
      nome: "Carla",
      matricula: 13579246,
      media: 7.0,
      frequencia: "75",
      disciplinas: [
        { nome: "Matemática", media: 7.5, frequencia: "80%" },
        { nome: "Português", media: 7.0, frequencia: "70%" },
        { nome: "História", media: 6.5, frequencia: "75%" },
        { nome: "Geografia", media: 7.0, frequencia: "80%" },
        { nome: "Física", media: 6.0, frequencia: "65%" },
        { nome: "Química", media: 7.0, frequencia: "70%" },
        { nome: "Biologia", media: 7.5, frequencia: "75%" }
      ]
    },
    {
      nome: "Pedro",
      matricula: 24681357,
      media: 6.5,
      frequencia: "60",
      disciplinas: [
        { nome: "Matemática", media: 6.0, frequencia: "55%" },
        { nome: "Português", media: 7.0, frequencia: "65%" },
        { nome: "História", media: 6.5, frequencia: "60%" },
        { nome: "Geografia", media: 6.0, frequencia: "55%" },
        { nome: "Física", media: 7.0, frequencia: "65%" },
        { nome: "Química", media: 6.5, frequencia: "60%" },
        { nome: "Biologia", media: 6.0, frequencia: "55%" }
      ]
    },
    {
      nome: "Luana",
      matricula: 97531864,
      media: 8.8,
      frequencia: "85",
      disciplinas: [
        { nome: "Matemática", media: 9.0, frequencia: "90%" },
        { nome: "Português", media: 8.5, frequencia: "80%" },
        { nome: "História", media: 9.0, frequencia: "85%" },
        { nome: "Geografia", media: 8.0, frequencia: "75%" },
        { nome: "Física", media: 9.5, frequencia: "90%" },
        { nome: "Química", media: 9.0, frequencia: "85%" },
        { nome: "Biologia", media: 8.5, frequencia: "80%" }
      ]
    },
    {
      nome: "Rafael",
      matricula: 36985214,
      media: 7.2,
      frequencia: "70",
      disciplinas: [
        { nome: "Matemática", media: 7.0, frequencia: "65%" },
        { nome: "Português", media: 7.5, frequencia: "70%" },
        { nome: "História", media: 7.0, frequencia: "65%" },
        { nome: "Geografia", media: 7.5, frequencia: "70%" },
        { nome: "Física", media: 7.5, frequencia: "70%" },
        { nome: "Química", media: 7.0, frequencia: "65%" },
        { nome: "Biologia", media: 7.5, frequencia: "70%" }
      ]
    },
    {
      nome: "Mariana",
      matricula: 74125896,
      media: 8.5,
      frequencia: "80",
      disciplinas: [
        { nome: "Matemática", media: 9.0, frequencia: "85%" },
        { nome: "Português", media: 8.0, frequencia: "75%" },
        { nome: "História", media: 8.5, frequencia: "80%" },
        { nome: "Geografia", media: 9.0, frequencia: "85%" },
        { nome: "Física", media: 8.5, frequencia: "80%" },
        { nome: "Química", media: 8.0, frequencia: "75%" },
        { nome: "Biologia", media: 8.5, frequencia: "80%" }
      ]
    }, {
      nome: "Luisa",
      matricula: 95175328,
      media: 9.2,
      frequencia: "90",
      disciplinas: [
        { nome: "Matemática", media: 9.5, frequencia: "95%" },
        { nome: "Português", media: 9.0, frequencia: "90%" },
        { nome: "História", media: 9.5, frequencia: "95%" },
        { nome: "Geografia", media: 9.0, frequencia: "90%" },
        { nome: "Física", media: 9.0, frequencia: "90%" },
        { nome: "Química", media: 9.5, frequencia: "95%" },
        { nome: "Biologia", media: 9.0, frequencia: "90%" }
      ]
    },
    {
      nome: "Bruno",
      matricula: 35795128,
      media: 7.8,
      frequencia: "80",
      disciplinas: [
        { nome: "Matemática", media: 7.5, frequencia: "80%" },
        { nome: "Português", media: 8.0, frequencia: "85%" },
        { nome: "História", media: 8.0, frequencia: "85%" },
        { nome: "Geografia", media: 7.5, frequencia: "80%" },
        { nome: "Física", media: 8.0, frequencia: "85%" },
        { nome: "Química", media: 7.5, frequencia: "80%" },
        { nome: "Biologia", media: 8.0, frequencia: "85%" }
      ]
    },
    {
      nome: "Camila",
      matricula: 25896347,
      media: 6.2,
      frequencia: "65",
      disciplinas: [
        { nome: "Matemática", media: 6.0, frequencia: "60%" },
        { nome: "Português", media: 6.5, frequencia: "70%" },
        { nome: "História", media: 6.0, frequencia: "60%" },
        { nome: "Geografia", media: 6.5, frequencia: "70%" },
        { nome: "Física", media: 5.5, frequencia: "55%" },
        { nome: "Química", media: 6.5, frequencia: "70%" },
        { nome: "Biologia", media: 6.0, frequencia: "60%" }
      ]
    }
  ]);
  const [modal, setModal] = useState(false)
  const [alunoEscolhido, setAlunoEscolhido] = useState('')


  const onClose = () => {
    setModal(false)
  }
  const openModal = (id) => {
    setModal(true)
    setAlunoEscolhido(id)
  }
  const [filtroNome, setFiltroNome] = useState('');
  const [ordemMedia, setOrdemMedia] = useState('');

  const filtrarAlunos = () => {
    return alunos.filter(aluno => {
      return aluno.nome.toLowerCase().includes(filtroNome.toLowerCase());
    }).sort((a, b) => {
      if (ordemMedia === 'maiorMedia') {
        return b.media - a.media;
      } else if (ordemMedia === 'menorMedia') {
        return a.media - b.media;
      } else {
        return 0;
      }
    });
  };

  const handleFiltroNomeChange = (e) => {
    setFiltroNome(e.target.value);
  };

  const handleOrdemMediaChange = (e) => {
    setOrdemMedia(e.target.value);
  };

  return (
    <section className={Style.containerBody}>

      <section className={Style.bodyCard}>
        <div className={Style.containerSearch}>
          <div className={Style.input}>
            <input
              className={Style.inputFindTurma}
              type="text"
              placeholder="Buscar Aluno"
              value={filtroNome}
              onChange={handleFiltroNomeChange}
            />
          </div>
          <div className={Style.teste}>
            <select className={Style.selectMedia} value={ordemMedia} onChange={handleOrdemMediaChange}>
              <option value="">Ordenar por Média</option>
              <option value="maiorMedia">Maior Média</option>
              <option value="menorMedia">Menor Média</option>
            </select>
          </div>
        </div>
        <section className={Style.containerAluno}>
          <section className={Style.cardInformativo}>
            <div className={Style.alunoNome} >
              <p className={Style.info}>Nome</p>
            </div>
            <div className={Style.alunoMatricula}>
              <p className={Style.info}>Matricula</p>
            </div>
            <div className={Style.alunoNota}>
              <p className={Style.info}>Nota</p>
            </div>
            <div className={Style.alunoFreq}>
              <p >Frequencia</p>
            </div>
          </section>

          {filtrarAlunos().map((aluno, index) => {
            return (
              <section className={Style.cardAluno} onClick={() => { openModal(aluno) }} key={index}>
                <div className={Style.alunoNome}>
                  <p>{aluno.nome}</p>
                </div>
                <div className={Style.alunoMatricula}>
                  <p className={Style.info}>{aluno.matricula}</p>
                </div>
                <div className={Style.alunoNota}>
                  <p className={Style.info}>
                    <span
                      className={
                        aluno.media >= 7 ? Style.aprovado : aluno.media < 4 ? Style.reprovado : Style.analise
                      }
                    >
                      {aluno.media}
                    </span>
                  </p>
                </div>
                <div className={Style.alunoFrequencia}>
                  <p className={Style.info}>
                    <span
                      className={
                        parseInt(aluno.frequencia) >= 70
                          ? Style.aprovado
                          :
                          parseInt(aluno.frequencia) < 40
                          ? Style.reprovado
                          : Style.analise
                      }
                    >
                      {aluno.frequencia} %
                    </span>
                  </p>
                </div>
              </section>
            );
          })}
        </section>
      </section>
      {modal && <ModalAluno id={alunoEscolhido} onClose={onClose} />}
    </section >
  );
};

export default index;
