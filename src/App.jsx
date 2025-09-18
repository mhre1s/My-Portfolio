import { useEffect, useState, useRef } from "react";
import "./App.css";
import { SiTailwindcss, SiCss3 } from "react-icons/si";
import { TfiHtml5 } from "react-icons/tfi";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoFirebase } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.01 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="min-h-screen bg-customPurple flex flex-col items-center">
        <header className="flex justify-between py-7 px-8 w-full bg-customPurple z-50 fixed">
          <h1 className="text bg-gradient-to-r from-teal-500 to-blue-600 text-transparent bg-clip-text font-bold text-3xl">
            Matheus
          </h1>
          <div className="flex gap-7 items-center opacity-65 text-white">
            <a className="hover:scale-105 duration-150" href="#about">
              <p>Sobre</p>
            </a>
            <a className="hover:scale-105 duration-150" href="#techs">
              <p>Tecnologias</p>
            </a>
            <a className="hover:scale-105 duration-150" href="#projects">
              <p>Projetos</p>
            </a>
            <a className="hover:scale-105 duration-150" href="#contacts">
              <p>Contatos</p>
            </a>
          </div>
        </header>
        <section>
          <div className="w-full max-w-[1280px] px-8 flex justify-between gap-10 mt-14">
            <div className="flex flex-col gap-10 w-full">
              <div
                className="flex flex-col justify-center items-center gap-5"
                id="about"
              >
                <p className="text bg-gradient-to-r from-teal-500 to-blue-600 text-transparent bg-clip-text font-bold text-xl">
                  Bem-vindo ao meu portfólio
                </p>
                <p className="text-3xl text-white">Matheus Reis</p>
              </div>
              <p className="xl:text-2xl lg:text-lg text-white opacity-55">
                Sou desenvolvedor frontend com experiência em React, Tailwind,
                Javascript, Consumo de APIS, MySql, Git, Bootstrap. Crio
                aplicações web responsivas, sempre priorizando o interesse do
                usuário. Estudando desenvolvimento backend com NodeJs
                <br />
                Sou apaixonado por tecnologia e sempre busco me aprimorar, tanto
                em novas tecnologias quanto nas que já conheço
              </p>
              <div className="flex justify-center gap-3 transform hover:scale-110 transition duration-300">
                <a
                  href="https://www.linkedin.com/in/matheus-reis3009/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-white w-16 h-auto hover:text-sky-200 duration-300" />
                </a>
                <a
                  href="https://github.com/mhre1s"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoGithub className="text-white w-16 h-auto hover:text-sky-200 duration-300" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full flex justify-center">
          <div className="max-w-[1280px] w-full px-8 flex justify-center items-center flex-col mt-14">
            <h2
              className="text bg-gradient-to-r from-teal-500 to-blue-600 text-transparent bg-clip-text font-bold text-3xl my-10"
              id="techs"
            >
              Tecnologias e habilidades
            </h2>
            <div className="flex justify-between w-full flex-wrap">
              <div className="text-center flex-col p-5 items-center justify-center rounded-xl text-customPurple hover:bg-slate-300 duration-200">
                <TfiHtml5 className="text-orange-500 w-20 h-auto" />
                <p>Html</p>
              </div>
              <div className="text-center flex-col p-5 items-center justify-center rounded-xl text-customPurple hover:bg-slate-300 duration-200">
                <SiTailwindcss className="text-cyan-500 w-20 h-auto" />
                <p>Tailwind</p>
              </div>
              <div className="text-center flex-col p-5 items-center justify-center rounded-xl text-customPurple hover:bg-slate-300 duration-200">
                <SiCss3 className="text-blue-500 w-20 h-auto" />
                <p>Css</p>
              </div>
              <div className="text-center flex-col p-5 items-center justify-center rounded-xl text-customPurple hover:bg-slate-300 duration-200">
                <RiJavascriptFill className="text-yellow-500 w-20 h-auto" />
                <p>Javascript</p>
              </div>
              <div className="text-center flex-col p-5 items-center justify-center rounded-xl text-customPurple hover:bg-slate-300 duration-200">
                <IoLogoGithub className="text-white w-20 h-auto" />
                <p>GitHub</p>
              </div>
              <div className="text-center flex-col p-5 items-center justify-center rounded-xl text-customPurple hover:bg-slate-300 duration-200">
                <FaReact className="text-sky-600 w-20 h-auto" />
                <p>React</p>
              </div>
              <div className="text-center flex-col p-5 items-center justify-center rounded-xl text-customPurple hover:bg-slate-300 duration-200">
                <FaBootstrap className="text-purple-500 w-20 h-auto" />
                <p>Bootstrap</p>
              </div>
              <div className="text-center flex-col p-5 items-center justify-center rounded-xl text-customPurple hover:bg-slate-300 duration-200">
                <GrMysql className="text-blue-600 w-20 h-auto" />
                <p>MySql</p>
              </div>
              <div className="text-center flex-col p-5 items-center justify-center rounded-xl text-customPurple hover:bg-slate-300 duration-200">
                <BiLogoFirebase className="text-yellow-500 w-20 h-auto" />
                <p>Firebase</p>
              </div>
              <div className="text-center flex-col p-5 items-center justify-center rounded-xl text-customPurple hover:bg-slate-300 duration-200">
                <FaNodeJs className="text-emerald-500 w-20 h-auto" />
                <p>NodeJs</p>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-14 bg-[#181629] w-full flex justify-center pb-14">
          <div className="max-w-[1280px] w-full px-8 flex justify-center flex-col">
            <h2
              className="text bg-gradient-to-r from-teal-500 to-blue-600 text-transparent bg-clip-text font-bold text-3xl my-10 text-center"
              id="projects"
            >
              Projetos
            </h2>
            <div
              ref={sectionRef}
              className={`flex flex-col gap-5 transform transition duration-500 ${
                isVisible ? "animate-slideIn" : ""
              }`}
            >
              <div
                className={`custom-scroll group flex flex-col gap-8 items-center w-full px-4 py-4 rounded-xl transform transition 
                  duration-300 hover:bg-[#1e1e2e] hover:scale-105 hover:shadow-xl`}
              >
                <h3 className=" text-xl text-white">Client Manager App</h3>
                <img className="rounded-xl" src="/clients.png" alt="" />
                <p className="text-white opacity-55">
                  Aplicativo desenvolvido para poder cadastrar seus clientes e
                  registrar atendimentos técnicos. Contém: Autenticação,
                  paginação, dark theme, filtro de clientes e agendamentos de
                  serviços.
                  <br />
                  <br />
                  Instruções de acesso estão no readme do github
                </p>
                <div className="flex justify-center w-full gap-10">
                  <TfiHtml5 className="text-orange-500 w-10 h-auto" />
                  <SiCss3 className="text-blue-500 w-10 h-auto" />
                  <SiTailwindcss className="text-cyan-500 w-10 h-auto" />
                  <FaReact className="text-sky-600 w-10 h-auto" />
                  <BiLogoFirebase className="text-yellow-500 w-10 h-auto" />
                </div>
                <div className="flex gap-20">
                  <a
                    href="https://github.com/mhre1s/Client-Manager-App"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="px-2 py-2 flex items-center gap-2 bg-slate-300 rounded-xl duration-500 hover:brightness-125">
                      <FaCode />
                      Ver código
                    </button>
                  </a>
                  <a
                    href="https://clientmanagerapp.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="px-2 py-2 flex items-center gap-2 bg-slate-300 rounded-xl duration-500 hover:brightness-125">
                      <FaLink />
                      Ver demo
                    </button>
                  </a>
                </div>
              </div>
              <div
                ref={sectionRef}
                className={`custom-scroll group flex flex-col gap-8 items-center w-full px-4 py-4 rounded-xl transform transition 
                  duration-300 hover:bg-[#1e1e2e] hover:scale-105 hover:shadow-xl ${
                    isVisible ? "animate-slideIn" : ""
                  }`}
              >
                <h3 className=" text-xl text-white">Your Finances</h3>
                <img className="rounded-xl" src="/chart.png" alt="" />
                <p className="text-white opacity-55">
                  Sistema web desenvolvido para que o usuário possa salvar suas
                  transações seja recebimentos ou despesas. O sistema exibe se o
                  usuário gastou mais do que recebeu e vice-versa, exibe
                  gráficos e cards para auxiliar na leitura dos gastos ou
                  lucros.
                  <br />
                  <br />
                  Instruções de acesso estão no readme do github
                </p>
                <div className="flex justify-center w-full gap-10">
                  <TfiHtml5 className="text-orange-500 w-10 h-auto" />
                  <SiCss3 className="text-blue-500 w-10 h-auto" />
                  <SiTailwindcss className="text-cyan-500 w-10 h-auto" />
                  <FaReact className="text-sky-600 w-10 h-auto" />
                  <BiLogoFirebase className="text-yellow-500 w-10 h-auto" />
                </div>
                <div className="flex gap-20">
                  <a
                    href="https://github.com/mhre1s/Your-Finance-"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="px-2 py-2 flex items-center gap-2 bg-slate-300 rounded-xl duration-500 hover:brightness-125">
                      <FaCode />
                      Ver código
                    </button>
                  </a>
                  <a
                    href="https://yourfinancess.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="px-2 py-2 flex items-center gap-2 bg-slate-300 rounded-xl duration-500 hover:brightness-125">
                      <FaLink />
                      Ver demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="my-14">
            <h3
              className="text bg-gradient-to-r from-teal-500 to-blue-600 text-transparent bg-clip-text font-bold text-3xl text-center"
              id="contacts"
            >
              Contatos
            </h3>
            <div className="flex flex-col gap-8 text-white mt-10 justify-start">
              <p className="flex items-center gap-1">
                <AiOutlineMail /> Email:{" "}
                <a
                  href="mailto:matheus201922@hotmail.com"
                  className="text-cyan-400 hover:underline"
                  target="_blank"
                >
                  matheus201922@hotmail.com
                </a>
              </p>
              <p className="flex items-center gap-1">
                <FaLinkedin /> LinkedIn:{" "}
                <a
                  href="https://linkedin.com/in/matheus-reis3009"
                  className="text-cyan-400 hover:underline"
                  target="_blank"
                >
                  linkedin.com/in/matheus-reis3009
                </a>
              </p>
              <p className="flex items-center gap-1">
                <IoLogoGithub />
                GitHub:{" "}
                <a
                  href="https://github.com/mhre1s"
                  className="text-cyan-400 hover:underline"
                  target="_blank"
                >
                  github.com/mhre1s
                </a>
              </p>
              <p className="flex items-center gap-1">
                <FaWhatsapp /> Whatsapp:{" "}
                <a
                  href="https://wa.me/5519982069472"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  +55 (19) 98206-9472
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
