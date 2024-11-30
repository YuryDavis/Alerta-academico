import React, { useEffect, useState } from 'react';
import Style from './Disciplinas.module.css';

const Disciplinas = () => {
    const [turma, setTurma] = useState({
        disciplinas: [
            {
                Disciplina: "Matemática",
                Media: 7.5,
                Frequencia: "85%",
                Acima: 10,
                Abaixo: 5,
                QtdAlunos: 30
            },
            {
                Disciplina: "Português",
                Media: 6.8,
                Frequencia: "90%",
                Acima: 12,
                Abaixo: 8,
                QtdAlunos: 35
            },
            {
                Disciplina: "História",
                Media: 8.0,
                Frequencia: "95%",
                Acima: 15,
                Abaixo: 3,
                QtdAlunos: 20
            }
        ]

    });

    useEffect(() => {
        const turmaString = localStorage.getItem('turma');
        const turma = JSON.parse(turmaString);
     //   setTurma(turma);
    }, []);

    return (
        <section className={Style.container_disciplina}>
            <section className={Style.body_disciplinas}>
                <section className={Style.container_card}>
                    {turma.disciplinas && turma.disciplinas.map((disciplina, key) => (
                        <section className={Style.card_disciplina} key={key}>
                            <div className={Style.container_title}><p>{disciplina.Disciplina}</p></div>
                            <div className={Style.container_body}>
                                <div className={Style.body}>
                                    <p>Média: {disciplina.Media}</p>
                                    <p>Frequência: {disciplina.Frequencia}</p>
                                </div>
                                <div className={Style.body}>
                                    <p>Acima da média: {disciplina.Acima}</p>
                                    <p>Abaixo da média: {disciplina.Abaixo}</p>
                                    <p>Qtd. Alunos: {disciplina.QtdAlunos}</p>
                                </div>
                            </div>
                        </section>
                    ))}
                </section>
            </section>
        </section>
    );
}

export default Disciplinas;
