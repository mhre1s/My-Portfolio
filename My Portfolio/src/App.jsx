import { useState } from 'react'
import './App.css'
import { SiTailwindcss, SiCss3} from "react-icons/si";
import { TfiHtml5 } from "react-icons/tfi";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";


function App() {

  
  return (
    <>
      <div className='min-h-screen bg-customPurple flex flex-col items-center'>
        <header className='flex justify-between py-7 px-8 w-full'>
          <h1 className='text bg-gradient-to-r from-teal-500 to-blue-600 text-transparent bg-clip-text font-bold text-3xl'>
            Matheus
          </h1>
          <div className='flex gap-7 items-center opacity-65 text-white'>
            <p>Sobre</p>
            <p>Tecnologias</p>
            <p>Projetos</p>
            <p>Contato</p>
          </div>
        </header>
        <section>
          <div className='w-full max-w-[1280px] px-8 flex justify-between gap-10 mt-14'>
              <div className='flex flex-col gap-10'>
                <div className='flex flex-col justify-center items-center gap-5'>
                  <p className='text bg-gradient-to-r from-teal-500 to-blue-600 text-transparent bg-clip-text font-bold text-xl'>Bem-vindo ao meu portfólio</p>
                  <p className='text-3xl text-white'>Matheus Reis</p>
                </div>
                <p className='xl:text-2xl lg:text-lg text-white opacity-55'>Sou desenvolvedor frontend com experiência em React, Tailwind, Javascript, Consumo de APIS, MySql, Git, Bootstrap. Crio aplicações web responsivas, sempre priorizando o interesse do usuário.<br/>
                Sou apaixonado por tecnologia e sempre busco me aprimorar, tanto em novas tecnologias quanto nas que já conheço</p>
              </div>
            </div>
        </section>
        <section className='w-full flex justify-center'>
          <div className='max-w-[1280px] w-full px-8 flex justify-center items-center flex-col mt-14'>
            <h2 className='text bg-gradient-to-r from-teal-500 to-blue-600 text-transparent bg-clip-text font-bold text-3xl my-10'>Tecnologias e habilidades</h2>
            <div className='flex justify-between w-full'>
              <div className='text-center flex-col p-5 items-center justify-center rounded-xl text-customPurple hover:bg-slate-300 duration-200'>
                <TfiHtml5 className='text-orange-500 w-20 h-auto'/>
                <p>Html</p>
              </div>
              <div className='text-center flex-col p-5 items-center justify-center rounded-xl text-customPurple hover:bg-slate-300 duration-200'>
                <SiTailwindcss className='text-cyan-500 w-20 h-auto'/>
                <p>Tailwind</p>
              </div>
              <div className='text-center flex-col p-5 items-center justify-center rounded-xl text-customPurple hover:bg-slate-300 duration-200'>
                <SiCss3 className='text-blue-500 w-20 h-auto'/>
                <p>Css</p>
                </div>
              <div className='text-center flex-col p-5 items-center justify-center rounded-xl text-customPurple hover:bg-slate-300 duration-200'>
                <RiJavascriptFill className='text-yellow-500 w-20 h-auto'/>
                <p>Javascript</p>
              </div>
              <div className='text-center flex-col p-5 items-center justify-center rounded-xl text-customPurple hover:bg-slate-300 duration-200'>
                <IoLogoGithub className='text-white w-20 h-auto'/>
                <p>GitHub</p>
              </div>
              <div className='text-center flex-col p-5 items-center justify-center rounded-xl text-customPurple hover:bg-slate-300 duration-200'>
                <FaReact className='text-sky-600 w-20 h-auto'/>
                <p>React</p>
              </div>
              <div className='text-center flex-col p-5 items-center justify-center rounded-xl text-customPurple hover:bg-slate-300 duration-200'>
                <FaBootstrap className='text-purple-500 w-20 h-auto'/>
                <p>Bootstrap</p>
              </div>
              <div className='text-center flex-col p-5 items-center justify-center rounded-xl text-customPurple hover:bg-slate-300 duration-200'>
                <GrMysql className='text-blue-600 w-20 h-auto'/>
                <p>MySql</p>
              </div>
            </div>
          </div>
        </section>
          <div className='mt-14 bg-blue-950 w-full'>
            <h2 className='text-white text-3xl'>TESTANDO E FODASE</h2>
          </div>
        
      </div>
    </>
  )
}

export default App
