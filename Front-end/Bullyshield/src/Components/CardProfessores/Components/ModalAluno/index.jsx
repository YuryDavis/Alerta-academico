import React,{useState} from "react";
import Style from "./ModalAluno.module.css";
import { enviarNai } from "../../../../hooks/enviarNai";

const index = ({id, onClose}) => {
  const gerarMatricula = () => {
    return Array.from({ length: 8 }, () => Math.floor(Math.random() * 10)).join('');
  };
  const historico = [
    {
     name: id.nome,
    matricula:gerarMatricula(),
    media: (Math.random() * 10).toFixed(2),
    frequencia: `${(Math.random() * 100).toFixed(0)}%`,
    disciplinas: [
      {
        nome: "Algoritmos e Estruturas de Dados",
        media: (Math.random() * 10).toFixed(2),
        frequencia: `${(Math.random() * 100).toFixed(0)}%`,
      },
      {
        nome: "Sistemas Operacionais",
        media: (Math.random() * 10).toFixed(2),
        frequencia: `${(Math.random() * 100).toFixed(0)}%`,
      },
      {
        nome: "Banco de Dados",
        media: (Math.random() * 10).toFixed(2),
        frequencia: `${(Math.random() * 100).toFixed(0)}%`,
      },
      {
        nome: "Redes de Computadores",
        media: (Math.random() * 10).toFixed(2),
        frequencia: `${(Math.random() * 100).toFixed(0)}%`,
      },
      {
        nome: "Inteligência Artificial",
        media: (Math.random() * 10).toFixed(2),
        frequencia: `${(Math.random() * 100).toFixed(0)}%`,
      },
      {
        nome: "Programação Orientada a Objetos",
        media: (Math.random() * 10).toFixed(2),
        frequencia: `${(Math.random() * 100).toFixed(0)}%`,
      },
      {
        nome: "Engenharia de Software",
        media: (Math.random() * 10).toFixed(2),
        frequencia: `${(Math.random() * 100).toFixed(0)}%`,
      },
      {
        nome: "Cálculo I",
        media: (Math.random() * 10).toFixed(2),
        frequencia: `${(Math.random() * 100).toFixed(0)}%`,
      },
      {
        nome: "Estruturas Discretas",
        media: (Math.random() * 10).toFixed(2),
        frequencia:`${(Math.random() * 100).toFixed(0)}%`,
      },
      {
        nome: "Programação de Computadores",
        media: (Math.random() * 10).toFixed(2),
        frequencia: `${(Math.random() * 100).toFixed(0)}%`,
      },
    ]
    
    },
  ];
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  
  const handleSendMessage = async() => {
    setIsSending(true);
    const response = await enviarNai(historico[0])
    console.log('msg nai:',response);
    
    setIsSending(false);
  
  };

  return (
    <section className={Style.bodyPage}>
      <button className={Style.fecharModal} onClick={onClose}>x</button>
      <section className={Style.bodyHistorico}>
        {historico.map((card, key) => (
          <div className={Style.modal} key={key}>
            <div className={Style.modalHistorico}>
              <h2 className={Style.historico}>Historico do Aluno</h2>
            </div>
            <div className={Style.infoAluno}>
              <div className={Style.modalNome}>
                <div className={Style.nome}>
                  <p>{id.nome}</p>
                </div>
                <div className={Style.matricula}>
                  <p>Matricula : {card.matricula}</p>
                </div>
              </div>
            </div>
            <div className={Style.info}>
              <div className={Style.modalInfo}>
                <div className={Style.matricula}>
                  <p>Disciplina</p>
                </div>
                <div className={Style.media}>
                  <p>Nota Media</p>
                </div>
                <div className={Style.frequencia}>
                  <p>Frequencia</p>
                </div>
              </div>
            </div>
            <div className={Style.modalDisciplina}>
              {card.disciplinas.map((disciplina, key) => (
                <div className={Style.modalAluno} key={key}>
                  <div className={Style.modalNomeDisciplina}>
                    <p>{disciplina.nome}</p>
                  </div>
                  <div className={Style.modalmediaNotaDisciplina}>
                    <p>{disciplina.media}</p>
                  </div>
                  <div className={Style.modalfrequenciaMediaDisciplina}>
                    <p>{disciplina.frequencia}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
        <button onClick={handleSendMessage} className={Style.sendMessageButton}>
          {isSending ? 'Enviando...' : 'Enviar ao NAI'}
        </button>
        {isSent && <div className={Style.popupMessage}>Mensagem enviada!</div>}
    </section>
  );
};

export default index;
