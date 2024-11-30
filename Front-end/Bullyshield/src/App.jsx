import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Disciplinas from "./Pages/Disciplinas";
import Sobre from './Pages/Sobre'
import Turma from './Pages/Turma'
import Alunos from './Pages/Alunos'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/disciplinas" element={<Disciplinas />} /> */}
        <Route path="/inicio" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/turma" element={<Turma />} />
        <Route path="/alunos" element={<Alunos/>} />
        <Route path="/sair" element={<Login />} />        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
