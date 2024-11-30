import React from "react";
import Navbar from "../../Components/Navbar";
import CardProfessor from "../../Components/CardProfessores"
import Disciplinas from '../../Components/Disciplinas'

const index = () => {
  return (
    <div>
      <Navbar />      
      <CardProfessor />
    </div>
  );
};

export default index;
