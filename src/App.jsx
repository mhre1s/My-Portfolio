import { useEffect, useState, useRef } from "react";
import "./App.css";
import { 
  SiTailwindcss, 
  SiCss3, 
  SiPostgresql, 
  SiPostman, 
  SiJest, 
  SiN8N, 
  SiSequelize,
  SiPython,
  SiFastapi,
  SiPandas,
  SiTypescript,
  SiExpress,
  SiNginx,
  SiGithubactions,
  SiPytest
} from "react-icons/si";
import { TfiHtml5 } from "react-icons/tfi";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io5";
import { 
  FaReact, 
  FaBootstrap, 
  FaLinkedin, 
  FaNodeJs, 
  FaCode, 
  FaLink, 
  FaWhatsapp, 
  FaDocker, 
  FaAws,
  FaServer,
  FaDatabase,
  FaShieldAlt,
  FaChartLine,
  FaCar,
  FaUsers,
  FaExpand,
  FaLinux
} from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { BiLogoFirebase, BiLogoPostgresql } from "react-icons/bi";
import { AiOutlineMail, AiOutlineArrowRight } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeBiTab, setActiveBiTab] = useState(0);
  const [selectedImageModal, setSelectedImageModal] = useState(null);
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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedImageModal(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const skillCategories = [
    {
      title: "Backend & Linguagens",
      subtitle: "Ecossistema Principal & APIs",
      icon: FaServer,
      color: "text-emerald-400",
      accent: "from-emerald-500/20 to-teal-500/5",
      border: "border-emerald-500/30 hover:border-emerald-500/60",
      skills: [
        { name: "Node.js", icon: FaNodeJs, color: "text-emerald-500" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
        { name: "Express.js", icon: SiExpress, color: "text-slate-100" },
        { name: "JavaScript", icon: RiJavascriptFill, color: "text-yellow-400" },
        { name: "Python", icon: SiPython, color: "text-yellow-300" },
        { name: "FastAPI", icon: SiFastapi, color: "text-teal-400" },
        { name: "Pandas", icon: SiPandas, color: "text-indigo-400" },
      ],
      tags: ["RESTful APIs", "Microsserviços", "Processamento Assíncrono", "Clean Code", "MVC"]
    },
    {
      title: "DevOps & Cloud",
      subtitle: "Diferencial Prático em Produção",
      isDifferentiator: true,
      icon: FaDocker,
      color: "text-teal-400",
      accent: "from-teal-500/25 to-blue-500/5",
      border: "border-teal-500/40 hover:border-teal-400",
      skills: [
        { name: "Docker", icon: FaDocker, color: "text-blue-400" },
        { name: "Linux / Ubuntu", icon: FaLinux, color: "text-amber-400" },
        { name: "Nginx", icon: SiNginx, color: "text-emerald-400" },
        { name: "CI/CD Actions", icon: SiGithubactions, color: "text-sky-400" },
        { name: "AWS (EC2, S3)", icon: FaAws, color: "text-amber-500" },
        { name: "Git & GitHub", icon: IoLogoGithub, color: "text-slate-200" },
      ],
      tags: ["Docker Swarm", "Nginx Reverse Proxy", "Esteiras CI/CD", "Systemd", "Ambientes de Produção"]
    },
    {
      title: "Bancos de Dados & ORMs",
      subtitle: "Modelagem Relacional & Híbrida",
      icon: FaDatabase,
      color: "text-sky-400",
      accent: "from-sky-500/20 to-blue-500/5",
      border: "border-sky-500/30 hover:border-sky-500/60",
      skills: [
        { name: "PostgreSQL", icon: BiLogoPostgresql, color: "text-sky-500" },
        { name: "MySQL", icon: GrMysql, color: "text-blue-500" },
        { name: "Sequelize ORM", icon: SiSequelize, color: "text-blue-400" },
        { name: "Firebase", icon: BiLogoFirebase, color: "text-yellow-500" },
      ],
      tags: ["Modelagem Relacional", "Query Optimization", "Bases Híbridas (ERP)", "Migrations", "Integridade Referencial"]
    },
    {
      title: "Arquitetura & Segurança",
      subtitle: "Sistemas Resilientes e Blindados",
      icon: FaShieldAlt,
      color: "text-purple-400",
      accent: "from-purple-500/20 to-pink-500/5",
      border: "border-purple-500/30 hover:border-purple-500/60",
      skills: [
        { name: "Jest", icon: SiJest, color: "text-red-400" },
        { name: "Pytest", icon: SiPytest, color: "text-blue-400" },
      ],
      tags: ["Autenticação JWT", "Criptografia bcrypt", "Controle de Acesso RBAC", "Clean Architecture", "Testes Automatizados"]
    },
    {
      title: "Frontend & Dashboards",
      subtitle: "Interfaces Analíticas Reativas",
      icon: FaReact,
      color: "text-cyan-400",
      accent: "from-cyan-500/20 to-teal-500/5",
      border: "border-cyan-500/30 hover:border-cyan-500/60",
      skills: [
        { name: "React 18", icon: FaReact, color: "text-sky-400" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
        { name: "HTML5 / CSS3", icon: TfiHtml5, color: "text-orange-500" },
        { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-500" },
      ],
      tags: ["Vite", "Recharts (BI)", "Dashboards Interativos", "SheetJS (XLSX)", "UI Responsiva"]
    },
    {
      title: "Automação & Integrações",
      subtitle: "Conectividade ERP, IoT e Tarefas",
      icon: SiN8N,
      color: "text-orange-400",
      accent: "from-orange-500/20 to-amber-500/5",
      border: "border-orange-500/30 hover:border-orange-500/60",
      skills: [
        { name: "n8n", icon: SiN8N, color: "text-red-500" },
        { name: "Postman", icon: SiPostman, color: "text-orange-500" },
      ],
      tags: ["APIs Externas (Axios)", "Telemetria Rota Exata (IoT)", "ERP Routerbox", "Cron Jobs / Background Tasks"]
    }
  ];

  const biModules = [
    {
      id: "str",
      title: "BI Operacional Multi-Nível (STR / CRA / STP)",
      shortTitle: "Suporte Técnico (STR)",
      tag: "Volumetria & SLAs em Tempo Real",
      icon: FaChartLine,
      image: "/bi-dashboard-str.jpeg",
      alt: "Dashboard BI Operacional Suporte Técnico STR",
      description:
        "Estruturação de monitoramento analítico de volumetria de suporte técnico em tempo real para Nível 1 (CRA), Nível 2 (Remoto - STR) e Campo (STP). Automatização do cálculo de First Contact Resolution (FCR), reincidências gerais e por mesma causa raiz, motivos de falhas de rede/link e produtividade detalhada por colaborador.",
      metrics: [
        { label: "Performance", value: "Consultas Sub-segundo" },
        { label: "Métricas Chave", value: "FCR, MTTR, Reincidências" },
        { label: "Operação", value: "N1, N2 e Campo Unificados" },
      ],
    },
    {
      id: "onboarding",
      title: "Onboarding & Motor Preditivo de Health Score (CS)",
      shortTitle: "Health Score & Retenção",
      tag: "Prevenção de Churn (D+0 a D+90)",
      icon: FaUsers,
      image: "/bi-onboarding-healthscore.jpeg",
      alt: "Jornada de Clientes e Motor de Health Score",
      description:
        "Criação de motor de acompanhamento da régua de retenção de 90 dias dividida em 8 etapas estratégicas (D+0 a D+90). Incorpora cálculo dinâmico de pontuação preditiva de saúde (Customer Health Score de 0 a 1000) e geração automatizada de alertas de risco de Churn com sincronização periódica em lote (batch processing).",
      metrics: [
        { label: "Régua Crítica", value: "8 Etapas (D+0 a D+90)" },
        { label: "Health Score", value: "0 a 1000 (Preditivo)" },
        { label: "Processamento", value: "Batch Sincronizado" },
      ],
    },
    {
      id: "frota",
      title: "Gestão de Frotas & Auditoria Financeira de Campo",
      shortTitle: "Frotas & Auditoria IoT",
      tag: "Telemetria & Cruzamento ERP",
      icon: FaCar,
      image: "/bi-gestao-frotas.jpeg",
      alt: "Dashboard de Gestão de Frotas e Receita Preservada",
      description:
        "Concepção de algoritmo analítico de correlação temporal cruzando ordens de serviço baixadas no ERP, mapeamento estruturado em PostgreSQL e telemetria veicular da API Rota Exata (sensores RFID/iButton). Permite quantificar receita preservada em reais (R$), total de OS executadas e ticket médio por veículo e técnico de campo.",
      metrics: [
        { label: "Integração IoT", value: "iButton / RFID Rota Exata" },
        { label: "Auditoria", value: "Receita Preservada (R$)" },
        { label: "Rastreabilidade", value: "Veículo x Chamado ERP" },
      ],
    },
    {
      id: "vendas",
      title: "Inteligência Comercial & Performance de Vendas",
      shortTitle: "Comercial & Vendas",
      tag: "Vendas, Bairros e Conversão",
      icon: FaDatabase,
      image: "/bi-dashboard-vendas.jpeg",
      alt: "Dashboard de Inteligência Comercial e Vendas",
      description:
        "Implementação de painel analítico comercial de alta densidade para acompanhamento de vendas, ativações, mudanças de endereço, titularidades e geração de leads. Apresenta indicadores de ticket médio, carteira total, ranking de produtividade por vendedor e distribuição de vendas/ativações por bairro com segmentação FTTH e FTTA.",
      metrics: [
        { label: "Métricas Comerciais", value: "Vendas, Ativações e Leads" },
        { label: "Visão Financeira", value: "Ticket Médio e Carteira Total" },
        { label: "Análise Territorial", value: "Vendas e Ativações por Bairro" },
      ],
    },
  ];

  return (
    <div className="relative selection:bg-brand-teal selection:text-white min-h-screen">
      {/* Background Glow Effects */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] bg-brand-teal/20 rounded-full blur-[100px] sm:blur-[120px] opacity-40 mix-blend-screen animate-pulseGlow"></div>
        <div className="absolute top-[40%] left-[-20%] sm:left-[-10%] w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] bg-brand-blue/20 rounded-full blur-[100px] sm:blur-[120px] opacity-30 mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] right-[-20%] sm:right-[-10%] w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] bg-brand-teal/20 rounded-full blur-[100px] sm:blur-[120px] opacity-30 mix-blend-screen"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-3.5 flex justify-between items-center">
          <a href="#about" className="text-xl font-bold text-white font-outfit tracking-tight hover:text-teal-400 transition-colors">
            Matheus Reis
          </a>
          <nav className="flex gap-5 sm:gap-8 items-center text-xs sm:text-sm font-medium text-slate-300">
            <a className="hover:text-teal-400 transition-colors" href="#about">Sobre</a>
            <a className="hover:text-teal-400 transition-colors" href="#techs">Competências</a>
            <a className="hover:text-teal-400 transition-colors" href="#projects">Projetos</a>
            <a className="hover:text-teal-400 transition-colors" href="#contacts">Contato</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 sm:px-8 pt-24 sm:pt-40 pb-20 flex flex-col gap-32 sm:gap-40">
        
        {/* Section: About (Hero) */}
        <section id="about" className="animate-fadeIn relative">
          <div className="flex flex-col gap-8 lg:gap-12 w-full max-w-4xl mx-auto">
            <div className="flex flex-col items-center sm:items-start gap-3">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium tracking-wide">
                Disponível para novos desafios e oportunidades
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-outfit text-white tracking-tight text-center sm:text-left">
                Matheus Reis
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-teal-400 font-outfit font-semibold text-center sm:text-left tracking-tight">
                Desenvolvedor Backend & Engenheiro de Software
              </p>
            </div>

            <div className="text-lg text-slate-400 leading-relaxed space-y-6">
              <p>
                Sou desenvolvedor de software com sólida atuação em <span className="text-slate-200 font-semibold">Backend, Arquitetura de APIs e Engenharia de Aplicações</span>, tendo como ecossistema central <span className="text-slate-200 font-semibold">Node.js (TypeScript, Express.js, Sequelize ORM e PostgreSQL)</span> na construção de microsserviços, modelagem relacional avançada e APIs REST escaláveis.
              </p>
              <p>
                Possuo também comprovada experiência com <span className="text-slate-200 font-semibold">Python (FastAPI, Pandas)</span> na concepção e sustentação de plataformas analíticas corporativas (BI) em produção, integrando bases de dados híbridas (<span className="text-slate-200 font-medium">PostgreSQL e MySQL / ERPs legados</span>) com processamento vetorial em lote e cache em memória (TTL) para consultas analíticas sub-segundo.
              </p>
              <p>
                Tenho como diferencial prático a <span className="text-teal-400 font-semibold">cultura DevOps</span>: aplico conteinerização e orquestração com <span className="text-slate-200 font-medium">Docker e Docker Swarm</span>, servidores <span className="text-slate-200 font-medium">Linux (Ubuntu/Debian, Systemd)</span> com <span className="text-slate-200 font-medium">Nginx como proxy reverso</span> e esteiras automatizadas de <span className="text-slate-200 font-medium">CI/CD no GitHub Actions</span>, unindo com eficácia o ciclo de desenvolvimento de software à infraestrutura em nuvem (<span className="text-slate-200 font-medium">AWS</span>), com foco em deploy contínuo e segurança (JWT/RBAC).
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6 mt-4">
              <a href="#projects" className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-slate-900 bg-white rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                <span className="relative z-10 flex items-center gap-2">
                  Ver Projetos em Destaque <AiOutlineArrowRight className="group-hover:translate-x-1 duration-200" />
                </span>
              </a>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/matheus-reis3009/" target="_blank" rel="noopener noreferrer" 
                  aria-label="LinkedIn"
                  className="p-3.5 glass-card rounded-full text-slate-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 hover:-translate-y-1 transition-all">
                  <FaLinkedin size={22} className="group-hover:scale-110 duration-300" />
                </a>
                <a href="https://github.com/mhre1s" target="_blank" rel="noopener noreferrer" 
                  aria-label="GitHub"
                  className="p-3.5 glass-card rounded-full text-slate-300 hover:text-white hover:border-white/50 hover:bg-white/10 hover:-translate-y-1 transition-all">
                  <IoLogoGithub size={22} className="group-hover:scale-110 duration-300" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Technologies & Competencies (Categorized) */}
        <section id="techs" className="flex flex-col items-center w-full">
          <div className="text-center mb-16 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold font-outfit text-white tracking-tight mb-3">
              Competências Técnicas
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Stacks e ferramentas aplicadas em produção: do backend e modelagem analítica à infraestrutura e automação DevOps.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {skillCategories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div 
                  key={idx}
                  className={`relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl glass-card border ${cat.border} transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl group overflow-hidden`}
                >
                  <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-br ${cat.accent} rounded-full blur-2xl pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity`}></div>
                  
                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3 mb-5">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-2xl bg-slate-900 border border-slate-700/60 ${cat.color} group-hover:scale-110 transition-transform`}>
                          <Icon size={22} />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold font-outfit text-white group-hover:text-teal-300 transition-colors">
                            {cat.title}
                          </h3>
                          <p className="text-xs text-slate-400">{cat.subtitle}</p>
                        </div>
                      </div>

                      {cat.isDifferentiator && (
                        <span className="px-2.5 py-1 rounded-full bg-teal-500/15 border border-teal-500/40 text-teal-300 text-[10px] font-bold tracking-wider uppercase shrink-0">
                          Destaque
                        </span>
                      )}
                    </div>

                    {/* Main Tech Icons with Badges */}
                    <div className="flex flex-wrap gap-2.5 mb-6">
                      {cat.skills.map((s, i) => {
                        const TechIcon = s.icon;
                        return (
                          <div 
                            key={i} 
                            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-medium text-slate-200 hover:border-slate-600 hover:bg-slate-800 transition-all"
                          >
                            <TechIcon className={`${s.color} text-sm`} />
                            <span>{s.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Skills / Practices Tags */}
                  <div className="pt-4 border-t border-slate-800/80">
                    <div className="flex flex-wrap gap-1.5">
                      {cat.tags.map((tag, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="px-2.5 py-1 rounded-md bg-slate-800/40 text-slate-400 text-[11px] font-mono border border-slate-700/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section: Projects */}
        <section id="projects" className="w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-outfit text-white tracking-tight mb-3">
              Projetos em Destaque
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">Sistemas corporativos em produção e aplicações de alta densidade técnica.</p>
          </div>

          <div
            ref={sectionRef}
            className={`flex flex-col gap-14 opacity-0 ${isVisible ? "animate-slideIn" : ""}`}
          >
            
            {/* ========================================================================= */}
            {/* FLAGSHIP PROJECT: Plataforma Corporativa de BI & Gestão Operacional Modular */}
            {/* ========================================================================= */}
            <div className="group flex flex-col rounded-3xl glass-card border border-teal-500/30 overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_rgba(20,184,166,0.2)] relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-blue-500/5 to-purple-500/10 opacity-70 pointer-events-none"></div>

              {/* Top Banner with Status Badges */}
              <div className="relative z-10 px-6 sm:px-10 pt-8 sm:pt-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 text-xs font-semibold tracking-wider uppercase">
                    Em Produção Corporativa
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full bg-teal-500/15 border border-teal-500/40 text-teal-300 text-xs font-semibold tracking-wide">
                    ⭐ Projeto Principal (Flagship)
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700 text-slate-300 text-xs font-medium">
                    10+ Módulos em Produção (Exibindo 4 Principais)
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-slate-400 text-xs font-medium">
                    Dados mockados e fictícios
                  </span>
                </div>

                <div className="text-xs text-slate-400 font-mono">
                  FastAPI • React • PostgreSQL • MySQL • Docker • IoT
                </div>
              </div>

              {/* Project Intro Header */}
              <div className="relative z-10 px-6 sm:px-10 pt-8 pb-4">
                <h3 className="text-2xl sm:text-4xl font-bold text-white font-outfit mb-3">
                  Plataforma Corporativa de BI & Gestão Operacional Modular
                </h3>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-5xl">
                  Plataforma analítica corporativa projetada e desenvolvida de ponta a ponta. Integra backend assíncrono em <strong className="text-white">Python (FastAPI)</strong> com frontend moderno em <strong className="text-white">React</strong>, orquestrando dados híbridos entre <strong className="text-teal-400">PostgreSQL</strong> e <strong className="text-sky-400">MySQL (ERP RBX)</strong>. Emprega processamento em lote via <strong className="text-white">Pandas</strong> e cache em memória (TTL) para garantir consultas analíticas <span className="text-emerald-400 font-semibold">sub-segundo</span> em bases de alta densidade de dados.
                </p>
              </div>

              {/* Interactive Module Showcase / Screen Selector Tabs */}
              <div className="relative z-10 px-6 sm:px-10 py-6">
                <div className="flex flex-col gap-6">
                  
                  {/* Module Tabs Header */}
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Módulos de destaque selecionados para o portfólio (4 de 10+):
                      </p>
                      <span className="text-xs text-slate-500 font-mono">
                        Demais telas reservadas para apresentação técnica
                      </span>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                      {biModules.map((mod, idx) => {
                        const Icon = mod.icon;
                        const isActive = activeBiTab === idx;
                        return (
                          <button
                            key={mod.id}
                            onClick={() => setActiveBiTab(idx)}
                            className={`flex items-center gap-3 p-3.5 rounded-2xl text-left transition-all duration-300 border ${
                              isActive
                                ? "bg-gradient-to-r from-teal-500/20 to-blue-500/20 border-teal-500/80 text-white shadow-[0_0_20px_rgba(20,184,166,0.25)] scale-[1.02]"
                                : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700 hover:bg-slate-800/50"
                            }`}
                          >
                            <div className={`p-2.5 rounded-xl ${isActive ? "bg-teal-500 text-slate-950" : "bg-slate-800 text-teal-400"}`}>
                              <Icon size={18} />
                            </div>
                            <div className="overflow-hidden">
                              <p className="text-xs font-semibold truncate text-white">{mod.shortTitle}</p>
                              <p className="text-[11px] text-slate-400 truncate">{mod.tag}</p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Active Screen Display with Description and Metrics */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start rounded-2xl bg-slate-900/70 border border-slate-800/80 p-5 sm:p-7">
                    
                    {/* Image Viewer */}
                    <div className="lg:col-span-7 flex flex-col gap-3">
                      <div 
                        onClick={() => setSelectedImageModal(biModules[activeBiTab].image)}
                        className="group/img relative rounded-xl overflow-hidden border border-slate-700/60 hover:border-teal-500/60 transition-all duration-300 cursor-pointer shadow-2xl bg-slate-950"
                      >
                        <img 
                          src={biModules[activeBiTab].image} 
                          alt={biModules[activeBiTab].alt}
                          className="w-full h-auto max-h-[420px] object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                        />
                        <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-medium text-sm">
                          <FaExpand /> Clique para expandir em tela cheia
                        </div>
                        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-900/90 text-teal-400 text-xs font-mono border border-teal-500/30">
                          {activeBiTab + 1} de {biModules.length}
                        </div>
                      </div>

                      {/* Thumbnails row */}
                      <div className="flex gap-2 justify-center sm:justify-start overflow-x-auto py-1">
                        {biModules.map((item, idx) => (
                          <button
                            key={item.id}
                            onClick={() => setActiveBiTab(idx)}
                            className={`relative rounded-lg overflow-hidden w-20 h-12 border-2 transition-all duration-200 shrink-0 ${
                              activeBiTab === idx ? "border-teal-400 scale-105" : "border-slate-800 opacity-60 hover:opacity-100"
                            }`}
                          >
                            <img src={item.image} alt={item.shortTitle} className="w-full h-full object-cover object-top" />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Active Module Details */}
                    <div className="lg:col-span-5 flex flex-col justify-between h-full gap-6">
                      <div className="space-y-4">
                        <div className="inline-block px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-semibold">
                          {biModules[activeBiTab].tag}
                        </div>
                        <h4 className="text-xl sm:text-2xl font-bold text-white font-outfit">
                          {biModules[activeBiTab].title}
                        </h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          {biModules[activeBiTab].description}
                        </p>
                      </div>

                      {/* Quick Metrics pills */}
                      <div className="space-y-2 pt-2 border-t border-slate-800">
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                          Destaques Técnicos do Módulo
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2">
                          {biModules[activeBiTab].metrics.map((metric, i) => (
                            <div key={i} className="flex justify-between items-center p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/40 text-xs">
                              <span className="text-slate-400">{metric.label}:</span>
                              <span className="text-teal-300 font-semibold">{metric.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2">
                        <button
                          onClick={() => setSelectedImageModal(biModules[activeBiTab].image)}
                          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold border border-slate-700 hover:border-teal-500/40 transition-all"
                        >
                          <FaExpand size={13} /> Visualizar Dashboard em Alta Resolução
                        </button>
                      </div>
                    </div>

                  </div>

                </div>
              </div>

              {/* Comprehensive Architecture & Capabilities Breakdown */}
              <div className="relative z-10 px-6 sm:px-10 py-8 border-t border-white/5 bg-slate-900/40">
                <h4 className="text-lg font-bold text-white font-outfit mb-6 flex items-center gap-2">
                  <FaServer className="text-teal-400" />
                  Arquitetura de Engenharia & Diferenciais de Produção
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  <div className="p-5 rounded-2xl bg-slate-800/30 border border-slate-700/40 space-y-2">
                    <div className="flex items-center gap-2 text-teal-400 font-semibold text-sm font-outfit">
                      <FaServer size={16} /> Backend Assíncrono & Cache TTL
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Construído em <strong>Python (FastAPI)</strong> com processamento vetorial em lote com <strong>Pandas</strong> e cache em memória (TTL). Reduziu consultas analíticas complexas para tempos sub-segundo.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-800/30 border border-slate-700/40 space-y-2">
                    <div className="flex items-center gap-2 text-sky-400 font-semibold text-sm font-outfit">
                      <FaDatabase size={16} /> Dados Híbridos (PostgreSQL & MySQL)
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Sincronização analítica contínua integrando o ERP corporativo legado (MySQL) com base analítica relacional dedicada em <strong>PostgreSQL</strong>, garantindo integridade e modelagem OLAP.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-800/30 border border-slate-700/40 space-y-2">
                    <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm font-outfit">
                      <FaCar size={16} /> Telemetria IoT & Auditoria de Frotas
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Algoritmo de correlação temporal integrando a API <strong>Rota Exata (iButton/RFID)</strong> e ordens de serviço do ERP, calculando receita preservada em reais (R$) e produtividade por veículo/técnico.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-800/30 border border-slate-700/40 space-y-2">
                    <div className="flex items-center gap-2 text-yellow-400 font-semibold text-sm font-outfit">
                      <FaUsers size={16} /> Motor Preditivo de Health Score (CS)
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Régua de 90 dias em 8 etapas (D+0 a D+90) calculando pontuação dinâmica de saúde do cliente (0 a 1000) com disparo preditivo de risco de Churn e rastreabilidade total do ciclo de vida.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-800/30 border border-slate-700/40 space-y-2">
                    <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm font-outfit">
                      <FaChartLine size={16} /> Gestão de Incidentes Críticos (NOC)
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Módulo dedicado à equipe de NOC e Engenharia de Infraestrutura para registro, monitoramento de MTTR e visibilidade de falhas de rede em tempo real, unificando a comunicação de incidentes críticos com toda a operação.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-800/30 border border-slate-700/40 space-y-2">
                    <div className="flex items-center gap-2 text-blue-400 font-semibold text-sm font-outfit">
                      <FaShieldAlt size={16} /> Segurança Stateless & RBAC
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Autenticação stateless via JWT, criptografia bcrypt e Role-Based Access Control (RBAC) com restrição granular de rotas e visões analíticas para Diretoria, Gestão, Supervisores e Devs.
                    </p>
                  </div>
                </div>

                {/* Tech Stack Badges for the Flagship */}
                <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {["Python", "FastAPI", "Pandas", "PostgreSQL", "MySQL", "Docker", "Nginx", "React", "Vite", "Recharts", "JWT / RBAC", "API Rota Exata (IoT)", "Cache TTL"].map((tech, i) => (
                      <span key={i} className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="text-xs text-emerald-400 font-medium">
                    Solução ativa em ambiente corporativo
                  </div>
                </div>
              </div>
            </div>

            {/* ========================================================================= */}
            {/* OTHER PROJECTS (TrixStock, Your Finances, Client Manager App) */}
            {/* ========================================================================= */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">

              {/* Project 2: TrixStock */}
              <div className="group flex flex-col rounded-3xl glass-card overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_0_40px_rgba(20,184,166,0.15)] xl:col-span-2 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex flex-col lg:flex-row relative z-10">
                  <div className="lg:w-1/2 p-6 lg:p-10 flex flex-col justify-between">
                    <div>
                      <div className="inline-block px-3 py-1 rounded-full bg-slate-800 text-teal-400 text-xs font-semibold mb-3 border border-slate-700">
                        Gestão de Estoque & Integração
                      </div>
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

              {/* Project 3: Your Finances */}
              <div className="group flex flex-col rounded-3xl glass-card overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_0_30px_rgba(14,165,233,0.15)] relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="p-6 lg:p-10 flex flex-col h-full bg-slate-900/30">
                  <div className="relative w-full rounded-2xl overflow-hidden border border-slate-800/50 group-hover:border-blue-500/30 transition-all duration-500 shadow-2xl mb-8 shrink-0">
                    <img className="w-full aspect-video object-cover transform group-hover:scale-105 duration-700 transition-transform" src="/yourfinances.gif" alt="Your Finances Demo" />
                  </div>
                  <div className="flex flex-col flex-grow justify-between relative z-10">
                    <div>
                      <div className="inline-block px-3 py-1 rounded-full bg-slate-800 text-sky-400 text-xs font-semibold mb-3 border border-slate-700">
                        Inteligência Financeira
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 font-outfit">Your Finances</h3>
                      <p className="text-slate-400 mb-6 leading-relaxed text-sm">
                        Solução web focada em inteligência financeira simplificada. Desenvolvida para organizar o fluxo de caixa, automatiza o cálculo de saldo e oferece uma análise visual intuitiva via cards de resumo e gráficos de performance.
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

              {/* Project 4: Client Manager App */}
              <div className="group flex flex-col rounded-3xl glass-card overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="p-6 lg:p-10 flex flex-col h-full bg-slate-900/30">
                  <div className="relative w-full rounded-2xl overflow-hidden border border-slate-800/50 group-hover:border-purple-500/30 transition-all duration-500 shadow-2xl mb-8 shrink-0">
                    <img className="w-full aspect-video object-cover object-top transform group-hover:scale-105 duration-700 transition-transform" src="/clientmanagerapp.gif" alt="Client Manager App Demo" />
                  </div>
                  <div className="flex flex-col flex-grow justify-between relative z-10">
                    <div>
                      <div className="inline-block px-3 py-1 rounded-full bg-slate-800 text-purple-400 text-xs font-semibold mb-3 border border-slate-700">
                        Atendimento Técnico
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 font-outfit">Client Manager App</h3>
                      <p className="text-slate-400 mb-6 leading-relaxed text-sm">
                        Aplicativo desenvolvido para cadastrar seus clientes e registrar atendimentos técnicos. Contém autenticação, paginação, dark theme, filtro de clientes e agendamentos de serviços.
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

          </div>
        </section>

        {/* Section: Contact */}
        <section id="contacts" className="w-full pb-10">
          <div className="w-full max-w-4xl mx-auto glass-card rounded-3xl p-8 sm:p-12 border border-slate-800/60 relative overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500/10 rounded-full blur-[80px]"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-[80px]"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <h2 className="text-3xl sm:text-4xl font-bold font-outfit text-white tracking-tight mb-3">
                Contato & Conexões
              </h2>
              <p className="text-slate-400 mb-10 max-w-lg text-sm sm:text-base">
                Aberto a discutir oportunidades em Backend, arquitetura de sistemas ou desafios de engenharia de software de alta escala.
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

      {/* Lightbox / Modal for Full Screenshot Examination */}
      {selectedImageModal && (
        <div 
          onClick={() => setSelectedImageModal(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8 animate-fadeIn"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-6xl w-full max-h-[92vh] flex flex-col rounded-2xl overflow-hidden glass-card border border-slate-700 shadow-2xl"
          >
            <div className="flex items-center justify-between px-6 py-3 bg-slate-900 border-b border-slate-800">
              <span className="text-xs text-slate-400 font-mono">
                Visualização do Dashboard
              </span>
              <button 
                onClick={() => setSelectedImageModal(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Fechar"
              >
                <IoClose size={22} />
              </button>
            </div>
            <div className="overflow-auto max-h-[85vh] bg-slate-950 flex items-center justify-center p-2">
              <img 
                src={selectedImageModal} 
                alt="Dashboard em alta resolução" 
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}

      <footer className="w-full py-10 border-t border-slate-800/80 bg-slate-950/80 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Matheus Reis • Desenvolvedor Backend & Engenharia de Software</p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/mhre1s" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/matheus-reis3009/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">LinkedIn</a>
            <a href="mailto:matheus201922@hotmail.com" className="hover:text-slate-300 transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
