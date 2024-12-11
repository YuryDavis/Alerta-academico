import React from 'react'
import TabelaAlunos from '../components/Home/TabelaAlunos'
import SlideBar from '../components/Home/SlideBar'
import Style from './styles/Home.module.css'
const Home = () => {
  return (
    <section className={Style.bodyHome}>
    <SlideBar/>
    <TabelaAlunos/>
    </section>
  )
}

export default Home