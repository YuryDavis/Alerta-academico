import React,{useState} from "react";
import Style from "./ModalAluno.module.css";
const index = ({id, onClose}) => {
  const historico = [
    {
      nome: "Fabio",
      matricula: 123341,
      disciplinas: [
        {
          nomeDisciplina: "Matematica",
          mediaNotaDisciplina: "2.5",
          frequenciaMediaDisciplina: "90",
         
        },
        {
          nomeDisciplina: "Matematica",
          mediaNotaDisciplina: "2.5",
          frequenciaMediaDisciplina: "90",
         
        },
        {
          nomeDisciplina: "Matematica",
          mediaNotaDisciplina: "2.5",
          frequenciaMediaDisciplina: "90",
         
        },

        {
          nomeDisciplina: "Matematica",
          mediaNotaDisciplina: "2.5",
          frequenciaMediaDisciplina: "90",
         
        }, {
          nomeDisciplina: "Matematica",
          mediaNotaDisciplina: "2.5",
          frequenciaMediaDisciplina: "90",
         
        },
        {
          nomeDisciplina: "Matematica",
          mediaNotaDisciplina: "2.5",
          frequenciaMediaDisciplina: "90",
         
        },
        {
          nomeDisciplina: "Matematica",
          mediaNotaDisciplina: "2.5",
          frequenciaMediaDisciplina: "90",
         
        },
        {
          nomeDisciplina: "Matematica",
          mediaNotaDisciplina: "2.5",
          frequenciaMediaDisciplina: "90",
         
        },
        {
          nomeDisciplina: "Matematica",
          mediaNotaDisciplina: "2.5",
          frequenciaMediaDisciplina: "90",
         
        },
        {
          nomeDisciplina: "Matematica",
          mediaNotaDisciplina: "2.5",
          frequenciaMediaDisciplina: "90",
         
        },
        {
          nomeDisciplina: "Matematica",
          mediaNotaDisciplina: "2.5",
          frequenciaMediaDisciplina: "90",
         
        },
        {
          nomeDisciplina: "Matematica",
          mediaNotaDisciplina: "2.5",
          frequenciaMediaDisciplina: "90",
         
        },
        {
          nomeDisciplina: "Matematica",
          mediaNotaDisciplina: "2.5",
          frequenciaMediaDisciplina: "90",
         
        },
        {
          nomeDisciplina: "Matematica",
          mediaNotaDisciplina: "2.5",
          frequenciaMediaDisciplina: "90",
         
        },
        {
          nomeDisciplina: "Matematica",
          mediaNotaDisciplina: "2.5",
          frequenciaMediaDisciplina: "90",
         
        },
        {
          nomeDisciplina: "Matematica",
          mediaNotaDisciplina: "2.5",
          frequenciaMediaDisciplina: "90",
         
        },
        {
          nomeDisciplina: "Matematica",
          mediaNotaDisciplina: "2.5",
          frequenciaMediaDisciplina: "90",
         
        },
        {
          nomeDisciplina: "Matematica",
          mediaNotaDisciplina: "2.5",
          frequenciaMediaDisciplina: "90",
         
        },
        {
          nomeDisciplina: "Matematica",
          mediaNotaDisciplina: "2.5",
          frequenciaMediaDisciplina: "90",
         
        },{
          nomeDisciplina: "Matematica",
          mediaNotaDisciplina: "2.5",
          frequenciaMediaDisciplina: "90",
         
        },{
          nomeDisciplina: "Matematica",
          mediaNotaDisciplina: "2.5",
          frequenciaMediaDisciplina: "90",
         
        },{
          nomeDisciplina: "Matematica",
          mediaNotaDisciplina: "2.5",
          frequenciaMediaDisciplina: "90",
         
        },


      ],
    },
  ];
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSendMessage = () => {
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setTimeout(() => {
        setIsSent(false);
      }, 2000);
    }, 2000);
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
                    <p>{disciplina.nomeDisciplina}</p>
                  </div>
                  <div className={Style.modalmediaNotaDisciplina}>
                    <p>{disciplina.mediaNotaDisciplina}</p>
                  </div>
                  <div className={Style.modalfrequenciaMediaDisciplina}>
                    <p>{disciplina.frequenciaMediaDisciplina}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
        <button onClick={handleSendMessage} className={Style.sendMessageButton}>
          {isSending ? 'Enviando mensagem...' : 'Enviar mensagem'}
        </button>
        {isSent && <div className={Style.popupMessage}>Mensagem enviada!</div>}
    </section>
  );
};

export default index;
