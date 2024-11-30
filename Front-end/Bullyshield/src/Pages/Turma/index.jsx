import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar'
import CardProfessor from "../../Components/CardProfessores"

const index = () => {
    const [turma, setTurma] = useState({})
    useEffect(()=>{
        const turmaString = localStorage.getItem('turma');
        const turma = JSON.parse(turmaString);
        setTurma(turma)
    },[])
    
    console.log(turma);
    return (
        <div> 
            <Navbar />
            <CardProfessor turma={turma}/>
        </div>
    )
}

export default index