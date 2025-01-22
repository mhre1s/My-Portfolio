import { useEffect, useState, useRef} from 'react'
import './App.css'
import { SiTailwindcss, SiCss3} from "react-icons/si";
import { TfiHtml5 } from "react-icons/tfi";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";


function App() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(()=>{
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry)=>{
          if (entry.isIntersecting){
            setIsVisible(true)
          }
        })
      },
      {threshold: 0.01})

      if(sectionRef.current){
        observer.observe(sectionRef.current)
      }
      
      return () => {
        if(sectionRef.current){
          observer.unobserve(sectionRef.current)
        }
      }
  },[]);
  
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
                <div className='flex justify-center gap-3 transform hover:scale-110 transition duration-300'>
                  <a href="https://www.linkedin.com/in/matheus-reis3009/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className='text-white w-16 h-auto hover:text-sky-200 duration-300'/>
                  </a> 
                  <a href="https://github.com/mhre1s" target="_blank" rel="noopener noreferrer">
                    <IoLogoGithub className='text-white w-16 h-auto hover:text-sky-200 duration-300'/>
                  </a>
                  
                </div>
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
        <section className='mt-14 bg-[#181629] w-full flex justify-center'>
          <div className='max-w-[1280px] w-full px-8 flex justify-center flex-col'>
            <h2 className='text bg-gradient-to-r from-teal-500 to-blue-600 text-transparent bg-clip-text font-bold text-3xl my-10 text-center'>Projetos</h2>
            <div>
              <div ref={sectionRef} className={`custom-scroll group flex flex-col gap-4 items-center max-w-[408px] max-h-[500px] overflow-y-auto rounded-xl hover:bg-slate-100 duration-200 ${isVisible?'animate-slideIn':''}`}>
                <img className='rounded-xl w-[400px]' src="/public/customermanager.png" alt="" />
                <div className='flex justify-center w-full gap-10'>
                  <TfiHtml5 className='text-orange-500 w-10 h-auto'/>
                  <SiCss3 className='text-blue-500 w-10 h-auto'/>
                  <SiTailwindcss className='text-cyan-500 w-10 h-auto'/>
                  <FaReact className='text-sky-600 w-10 h-auto'/>
                </div> 
                <p className='text-center text-[#181629] mx-5 text-xl group-hover:block hidden'>
                  Customer Registration
                </p>
                <p className='text-center text-[#181629]  text-xl group-hover:block hidden'>Objetivo</p>
                <p className='text-[#181629] text-center mx-5 group-hover:block hidden'>Este é um projeto feito para um amigo, frontend realizado todo somente por mim.
                  É um aplicativo que permite ele cadastrar os seus clientes e registrar o que fez em cada atendimento.
                </p>
                <p className='text-center text-[#181629] mx-5 text-xl group-hover:block hidden'>Telas</p>
                <p className='text-[#181629] text-center group-hover:block hidden'>
                  Possui uma tela de login que pede usuário e senha (sem opção de cadastrar novo usuário ainda, pois somente este amigo está usando o app) e
                  tela principal(lista de clientes com botões de editar, cadastrar novo cliente e etc.) Obs: Use o usuário: teste ; e senha: teste
                </p> 
                <p className='text-center text-[#181629] text-xl group-hover:block hidden'>
                  Funcionalidades
                </p>
                <p className='text-[#181629] text-center mx-5 group-hover:block hidden'>
                  Ao logar é redirecionado para aba principal (lista de clientes) onde pode estar adicionando um novo cliente e incluindo excluindo um registro
                  de atendimento no mesmo, contendo descrição e valor da visita técnica e do serviço prestado, ou editando um existente.
                  Contém barra de pesquisa para filtrar o cliente, por nome, endereço, ou telefone. Possui botão de logoff e botões para alterar
                  as páginas dos clientes
                </p>
              </div>
            </div>
          </div>
        </section>  
        
      </div>
    </>
  )
}

export default App
