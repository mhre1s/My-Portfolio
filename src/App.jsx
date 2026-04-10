import { useEffect, useState, useRef } from "react";
import "./App.css"; // Ensure this still works if any global css is there
import { SiTailwindcss, SiCss3, SiPostgresql, SiPostman, SiJest, SiN8N, SiSequelize } from "react-icons/si";
import { TfiHtml5 } from "react-icons/tfi";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io5";
import { FaReact, FaBootstrap, FaLinkedin, FaNodeJs, FaCode, FaLink, FaWhatsapp, FaDocker, FaAws } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { BiLogoFirebase, BiLogoPostgresql } from "react-icons/bi";
import { AiOutlineMail, AiOutlineArrowRight } from "react-icons/ai";

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
      { threshold: 0.05 }
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
    <div className="relative selection:bg-brand-teal selection:text-white min-h-screen">
      {/* Background Glow Effects */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] bg-brand-teal/20 rounded-full blur-[100px] sm:blur-[120px] opacity-40 mix-blend-screen animate-pulseGlow"></div>
        <div className="absolute top-[40%] left-[-20%] sm:left-[-10%] w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] bg-brand-blue/20 rounded-full blur-[100px] sm:blur-[120px] opacity-30 mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] right-[-20%] sm:right-[-10%] w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] bg-brand-teal/20 rounded-full blur-[100px] sm:blur-[120px] opacity-30 mix-blend-screen"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass border-b border-white/5 transition-all duration-300 hidden sm:block">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text font-outfit tracking-tight">
            Matheus Reis
          </h1>
          <nav className="flex gap-8 items-center text-sm font-medium text-slate-300">
            <a className="hover:text-teal-400 hover:-translate-y-0.5 duration-200 transition-all" href="#about">Sobre</a>
            <a className="hover:text-teal-400 hover:-translate-y-0.5 duration-200 transition-all" href="#techs">Tecnologias</a>
            <a className="hover:text-teal-400 hover:-translate-y-0.5 duration-200 transition-all" href="#projects">Projetos</a>
            <a className="hover:text-teal-400 hover:-translate-y-0.5 duration-200 transition-all" href="#contacts">Contatos</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 sm:px-8 pt-24 sm:pt-40 pb-20 flex flex-col gap-32 sm:gap-40">
        
        {/* Section: About (Hero) */}
        <section id="about" className="animate-fadeIn relative">
          <div className="flex flex-col gap-8 lg:gap-12 w-full max-w-4xl mx-auto">
            <div className="flex flex-col items-center sm:items-start gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-teal-500/30 text-teal-400 text-sm font-medium mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                </span>
                Disponível para novas oportunidades
              </div>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-outfit text-white leading-tight text-center sm:text-left">
                Transformando desafios complexos em <span className="bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text text-glow">soluções eficientes.</span>
              </h2>
              <p className="text-xl sm:text-2xl text-slate-300 font-medium mt-2 text-center sm:text-left">
                Olá, eu sou Matheus Reis.
              </p>
            </div>

            <div className="text-lg text-slate-400 leading-relaxed space-y-6">
              <p>
                Sou desenvolvedor focado em Backend, especializado no ecossistema Node.js e na criação de APIs REST robustas e escaláveis. Minha experiência central envolve a integração de sistemas complexos (como ERPs), onde atuo garantindo a integridade de dados entre bases locais e externas, utilizando PostgreSQL e Sequelize.
              </p>
              <p>
                Além do domínio em arquitetura MVC e segurança (JWT/bcrypt), utilizo Docker para containerização e metodologias de AI-Assisted Development para acelerar a entrega com alta qualidade de código. Tenho experiência prática na implementação e gerenciamento de bancos de dados na nuvem, garantindo alta disponibilidade e performance. 
              </p>
              <p>
                Para assegurar a confiabilidade e a manutenibilidade das aplicações, aplico testes automatizados utilizando Jest. Tenho também uma sólida base Fullstack com React e Tailwind CSS, o que me permite transitar por toda a stack para entregar soluções eficientes, desde o banco de dados até a interface final.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6 mt-4">
              <a href="#projects" className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-slate-900 bg-white rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                <span className="relative z-10 flex items-center gap-2">
                  Ver Projetos <AiOutlineArrowRight className="group-hover:translate-x-1 duration-200" />
                </span>
              </a>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/matheus-reis3009/" target="_blank" rel="noopener noreferrer" 
                  className="p-3.5 glass-card rounded-full text-slate-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 hover:-translate-y-1 transition-all">
                  <FaLinkedin size={22} className="group-hover:scale-110 duration-300" />
                </a>
                <a href="https://github.com/mhre1s" target="_blank" rel="noopener noreferrer" 
                  className="p-3.5 glass-card rounded-full text-slate-300 hover:text-white hover:border-white/50 hover:bg-white/10 hover:-translate-y-1 transition-all">
                  <IoLogoGithub size={22} className="group-hover:scale-110 duration-300" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Technologies */}
        <section id="techs" className="flex flex-col items-center">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-outfit text-white mb-4">
              Tecnologias e <span className="bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">Habilidades</span>
            </h2>
            <p className="text-slate-400">Ferramentas que utilizo no meu dia a dia.</p>
          </div>
          
          <div className="flex justify-center gap-4 w-full flex-wrap max-w-5xl">
            {[
              { icon: FaNodeJs, name: "Node.js", color: "text-emerald-500", shadow: "hover:shadow-emerald-500/20" },
              { icon: BiLogoPostgresql, name: "PostgreSQL", color: "text-sky-500", shadow: "hover:shadow-sky-500/20" },
              { icon: SiSequelize, name: "Sequelize", color: "text-blue-500", shadow: "hover:shadow-blue-500/20" },
              { icon: FaAws, name: "AWS", color: "text-amber-500", shadow: "hover:shadow-amber-500/20" },
              { icon: FaDocker, name: "Docker", color: "text-blue-400", shadow: "hover:shadow-blue-400/20" },
              { icon: SiJest, name: "Jest", color: "text-red-400", shadow: "hover:shadow-red-400/20" },
              { icon: SiN8N, name: "n8n", color: "text-red-500", shadow: "hover:shadow-red-500/20" },
              { icon: SiPostman, name: "Postman", color: "text-orange-500", shadow: "hover:shadow-orange-500/20" },
              { icon: SiTailwindcss, name: "Tailwind", color: "text-cyan-400", shadow: "hover:shadow-cyan-400/20" },
              { icon: RiJavascriptFill, name: "Javascript", color: "text-yellow-400", shadow: "hover:shadow-yellow-400/20" },
              { icon: IoLogoGithub, name: "GitHub", color: "text-white", shadow: "hover:shadow-white/20" },
              { icon: FaReact, name: "React", color: "text-sky-400", shadow: "hover:shadow-sky-400/20" },
              { icon: FaBootstrap, name: "Bootstrap", color: "text-purple-500", shadow: "hover:shadow-purple-500/20" },
              { icon: GrMysql, name: "MySQL", color: "text-blue-600", shadow: "hover:shadow-blue-600/20" },
              { icon: BiLogoFirebase, name: "Firebase", color: "text-yellow-500", shadow: "hover:shadow-yellow-500/20" },
            ].map((tech, i) => (
              <div key={i} className={`flex flex-col items-center justify-center p-6 rounded-2xl glass-card w-32 h-36 gap-3 group hover:-translate-y-2 transition-all duration-300 hover:bg-slate-800/60 shadow-lg ${tech.shadow}`}>
                <tech.icon className={`w-12 h-12 ${tech.color} group-hover:scale-110 transition-transform duration-300`} />
                <p className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{tech.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Projects */}
        <section id="projects" className="w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-outfit text-white mb-4">
              Meus <span className="bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">Projetos</span>
            </h2>
            <p className="text-slate-400">Alguns dos meus trabalhos recentes e aplicações em destaque.</p>
          </div>

          <div
            ref={sectionRef}
            className={`grid grid-cols-1 xl:grid-cols-2 gap-10 opacity-0 ${isVisible ? "animate-slideIn" : ""}`}
          >
            {/* Project 1 */}
            <div className="group flex flex-col rounded-3xl glass-card overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_0_40px_rgba(20,184,166,0.15)] xl:col-span-2 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex flex-col lg:flex-row relative z-10">
                <div className="lg:w-1/2 p-6 lg:p-10 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4 font-outfit">TrixStock</h3>
                    <p className="text-slate-400 mb-6 leading-relaxed">
                      Sistema de controle de estoque e gerenciamento de equipamentos desenvolvido para otimizar o fluxo de entrada e saída de materiais. A arquitetura gerencia IDs externos, permitindo sincronia com plataformas de gestão externas.
                      <br /><br />
                      Conta com um sistema de requisições, onde usuários podem solicitar itens e administradores podem aprovar ou rejeitar fluxos em tempo real. Interface construída focando usabilidade técnica.
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-4 mb-8">
                      <FaNodeJs className="text-emerald-500 w-7 h-7" title="Node.js" />
                      <SiSequelize className="text-blue-500 w-7 h-7" title="Sequelize" />
                      <SiPostgresql className="text-sky-500 w-7 h-7" title="PostgreSQL" />
                      <SiJest className="text-red-400 w-7 h-7" title="Jest" />
                      <SiPostman className="text-orange-500 w-7 h-7" title="Postman" />
                      <SiTailwindcss className="text-cyan-400 w-7 h-7" title="Tailwindcss" />
                      <FaReact className="text-sky-400 w-7 h-7" title="React" />
                    </div>
                    <div className="flex gap-4">
                      <a href="https://github.com/mhre1s/trixStock" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-xl border border-slate-700 hover:border-slate-500 transition-all">
                        <FaCode /> Código
                      </a>
                      <a href="https://trix-stock.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white text-sm font-medium rounded-xl transition-all shadow-[0_0_15px_rgba(20,184,166,0.3)]">
                        <FaLink /> Demo
                      </a>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 p-6 lg:p-10 flex items-center justify-center bg-slate-900/50">
                  <div className="relative w-full rounded-2xl overflow-hidden border border-slate-800/50 group-hover:border-teal-500/30 transition-all duration-500 shadow-2xl">
                    <img className="w-full h-auto object-cover transform group-hover:scale-105 duration-700 transition-transform" src="/trixstockgif.gif" alt="TrixStock Demo" />
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group flex flex-col rounded-3xl glass-card overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_0_30px_rgba(14,165,233,0.15)] relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="p-6 lg:p-10 flex flex-col h-full bg-slate-900/30">
                <div className="relative w-full rounded-2xl overflow-hidden border border-slate-800/50 group-hover:border-blue-500/30 transition-all duration-500 shadow-2xl mb-8 shrink-0">
                  <img className="w-full aspect-video object-cover transform group-hover:scale-105 duration-700 transition-transform" src="/yourfinances.gif" alt="Your Finances Demo" />
                </div>
                <div className="flex flex-col flex-grow justify-between relative z-10">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4 font-outfit">Your Finances</h3>
                    <p className="text-slate-400 mb-6 leading-relaxed text-sm">
                      Solução web focada em inteligência financeira simplificada. Automatiza o cálculo de saldo e oferece uma análise visual via cards de resumo e gráficos de performance.
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-4 mb-8">
                      <TfiHtml5 className="text-orange-500 w-6 h-6" />
                      <SiCss3 className="text-blue-500 w-6 h-6" />
                      <SiTailwindcss className="text-cyan-400 w-6 h-6" />
                      <FaReact className="text-sky-400 w-6 h-6" />
                      <BiLogoFirebase className="text-yellow-500 w-6 h-6" />
                    </div>
                    <div className="flex gap-3">
                      <a href="https://github.com/mhre1s/Your-Finance-" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-xl border border-slate-700 transition-all">
                        <FaCode /> Código
                      </a>
                      <a href="https://yourfinancess.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white text-sm font-medium rounded-xl transition-all">
                        <FaLink /> Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group flex flex-col rounded-3xl glass-card overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="p-6 lg:p-10 flex flex-col h-full bg-slate-900/30">
                <div className="relative w-full rounded-2xl overflow-hidden border border-slate-800/50 group-hover:border-purple-500/30 transition-all duration-500 shadow-2xl mb-8 shrink-0">
                  <img className="w-full aspect-video object-cover object-top transform group-hover:scale-105 duration-700 transition-transform" src="/clientmanagerapp.gif" alt="Client Manager App Demo" />
                </div>
                <div className="flex flex-col flex-grow justify-between relative z-10">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4 font-outfit">Client Manager App</h3>
                    <p className="text-slate-400 mb-6 leading-relaxed text-sm">
                      Aplicativo desenvolvido para cadastrar seus clientes e registrar atendimentos técnicos. Contém autenticação, paginação, dark theme, filtro de clientes e agendamentos.
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-4 mb-8">
                      <TfiHtml5 className="text-orange-500 w-6 h-6" />
                      <SiCss3 className="text-blue-500 w-6 h-6" />
                      <SiTailwindcss className="text-cyan-400 w-6 h-6" />
                      <FaReact className="text-sky-400 w-6 h-6" />
                      <BiLogoFirebase className="text-yellow-500 w-6 h-6" />
                    </div>
                    <div className="flex gap-3">
                      <a href="https://github.com/mhre1s/Client-Manager-App" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-xl border border-slate-700 transition-all">
                        <FaCode /> Código
                      </a>
                      <a href="https://clientmanagerapp.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white text-sm font-medium rounded-xl transition-all">
                        <FaLink /> Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Section: Contact */}
        <section id="contacts" className="w-full pb-10">
          <div className="w-full max-w-4xl mx-auto glass-card rounded-3xl p-8 sm:p-12 border border-slate-800/60 relative overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500/10 rounded-full blur-[80px]"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-[80px]"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <h2 className="text-3xl sm:text-4xl font-bold font-outfit text-white mb-4">
                Vamos conversar?
              </h2>
              <p className="text-slate-400 mb-10 max-w-lg">
                Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades de parcerias para transformar suas visões em realidade.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
                <a href="mailto:matheus201922@hotmail.com" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center justify-center sm:justify-start gap-4 p-5 rounded-2xl bg-slate-800/40 border border-slate-700 hover:border-teal-500/50 hover:bg-slate-800/80 transition-all group">
                  <div className="p-3 bg-teal-500/10 text-teal-400 rounded-xl group-hover:scale-110 transition-transform">
                    <AiOutlineMail size={24} />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Email</p>
                    <p className="text-slate-200 font-medium group-hover:text-teal-400 transition-colors break-all">matheus201922@hotmail.com</p>
                  </div>
                </a>

                <a href="https://wa.me/5519982069472" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center justify-center sm:justify-start gap-4 p-5 rounded-2xl bg-slate-800/40 border border-slate-700 hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all group">
                  <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl group-hover:scale-110 transition-transform">
                    <FaWhatsapp size={24} />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Whatsapp</p>
                    <p className="text-slate-200 font-medium group-hover:text-emerald-400 transition-colors">+55 19 98206-9472</p>
                  </div>
                </a>

                <a href="https://linkedin.com/in/matheus-reis3009" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center justify-center sm:justify-start gap-4 p-5 rounded-2xl bg-slate-800/40 border border-slate-700 hover:border-blue-500/50 hover:bg-slate-800/80 transition-all group">
                  <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl group-hover:scale-110 transition-transform">
                    <FaLinkedin size={24} />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">LinkedIn</p>
                    <p className="text-slate-200 font-medium group-hover:text-blue-400 transition-colors">/in/matheus-reis3009</p>
                  </div>
                </a>

                <a href="https://github.com/mhre1s" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center justify-center sm:justify-start gap-4 p-5 rounded-2xl bg-slate-800/40 border border-slate-700 hover:border-slate-400/50 hover:bg-slate-800/80 transition-all group">
                  <div className="p-3 bg-slate-600/20 text-slate-300 rounded-xl group-hover:scale-110 transition-transform">
                    <IoLogoGithub size={24} />
                  </div>
                  <div className="text-left w-40">
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">GitHub</p>
                    <p className="text-slate-200 font-medium group-hover:text-white transition-colors">/mhre1s</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="w-full py-8 text-center text-slate-500 border-t border-white/5 relative z-10 glass">
        <p className="text-sm">
          Desenvolvido com <span className="text-teal-500">♥</span> por Matheus Reis © {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

export default App;
