import { Code2, Terminal, Database, Cpu, Music } from 'lucide-react';
import { TerminalAnimation } from './TerminalAnimation';
import { ProjectCard } from './ProjectCard';
import { motion } from "framer-motion";

function App() {

  // Variantes para el contenedor principal (activa el efecto stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay entre la aparición de cada hijo
      },
    },
  };

  // Variantes para cada tarjeta individual del Bento Grid
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 font-sans selection:bg-cyan-500/30">
      <header className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* SECCIÓN DE IDENTIDAD PROFESIONAL */}
        <section className="container mx-auto px-6 pt-12 pb-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-cyan-400 font-mono mb-4 text-lg">
                {/*  */}
                &lt;SoftwareEngineer /&gt;
              </h2>
              <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-6 tracking-tighter">
                {/*  */}
                Luis Fernando <br />
                <span className="text-slate-500">Nuñez Delgado</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-2xl border-l-4 border-cyan-500 pl-6">
                {/*  */}
                Especialista en el desarrollo de proyectos digitales escalables y soluciones web innovadoras para el mercado global.
              </p>
            </motion.div>

            {/* Badges de Disponibilidad */}
            <div className="flex gap-4 mt-8">
              <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-4 py-1 rounded-full text-sm font-medium">
                Disponible para Proyectos Remotos
              </span>
              <span className="bg-slate-800 text-slate-300 px-4 py-1 rounded-full text-sm">
                México & EE.UU.
              </span>
            </div>
          </div>
        </section>
        {/* Terminal Visual */}
        <TerminalAnimation />
      </header>

      {/* SOCIAL & CONTACT ACTIONS */}
      <section className="container mx-auto px-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap items-center gap-6 mt-10"
        >
          {/* Botón Principal de LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/luis-fernando-nuñez-delgado-9b42134b"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-[#0077b5] hover:bg-[#005a87] text-white px-5 py-2.5 rounded-lg font-semibold transition-all shadow-md text-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            LinkedIn
          </motion.a>



          <motion.a
            href="https://github.com/luisiy01"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-5 py-2.5 rounded-lg font-semibold transition-all border border-slate-700 shadow-md text-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </motion.a>

          {/* BOTÓN DE DESCARGA DE CV */}
          <motion.a
            href="/CV_Luis_Fernando_Nunez.pdf" // Asegúrate de que el PDF esté en la carpeta 'public'
            download="CV_Luis_Fernando_Nunez_Delgado.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-slate-900 px-6 py-2.5 rounded-lg font-bold transition-all shadow-lg shadow-cyan-500/20 text-sm"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="font-7 12h10m0 0l-3-3m3 3l-3 3M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 17V7m-4 4l4 4 4-4" />
            </svg>
            Descargar CV
          </motion.a>

          {/* Contacto Directo */}
          <div className="flex flex-col text-sm border-l border-slate-700 pl-6">
            <span className="text-slate-500 uppercase tracking-widest text-[10px] font-bold">Direct Line</span>
            <a href="mailto:luisnunez91@gmail.com" className="text-slate-300 hover:text-cyan-400 transition-colors">
              luisnunez91@gmail.com
            </a>
            <a
              href="https://wa.me/523121016033"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-300 hover:text-green-400 transition-colors group"
            >
              {/* Icono de WhatsApp (SVG) */}
              <svg
                className="w-4 h-4 text-slate-400 group-hover:text-green-500 transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.48s3.481 5.229 3.481 8.406c0 6.555-5.332 11.887-11.887 11.887-2.018 0-4.003-.513-5.753-1.485l-6.232 1.635zm6.345-3.645c1.554.921 3.204 1.408 4.903 1.408 5.41 0 9.814-4.404 9.814-9.814 0-5.409-4.404-9.814-9.814-9.814-2.624 0-5.092 1.022-6.948 2.879s-2.879 4.324-2.879 6.948c0 1.767.485 3.491 1.403 5.013l-.988 3.606 3.692-.967z" />
                <path d="M17.472 14.382c-.301-.15-1.781-.879-2.056-.979-.275-.1-.475-.15-.675.15-.2.3-.775 1.012-.95 1.213-.175.2-.35.225-.65.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.777-1.66-2.074-.175-.3-.018-.463.13-.611.133-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.588-.491-.508-.675-.518-.175-.01-.375-.01-.575-.01-.2 0-.525.075-.8 0-.375-.275-.1.85-.375 1.75-.925 1.875-.725 3.975 1.45 5.8 2.175 1.825 3.325 3.125 4.5 5.525 1.075 2.175 2.1 3.3 3.3 3.3 3.525 0 4.175-.35 4.175-.925 0-.175-.025-.325-.1-.45s-.3-.225-.6-.375z" />
              </svg>
              +52 312 101 6033
            </a>
          </div>
        </motion.div>
      </section>



      {/* 2. BENTO GRID - SKILLS & INFO */}
      {/* SECCIÓN ANIMADA DE STACK & EXPERTISE */}
      <motion.section
        className="container mx-auto px-6 py-20"
        initial="hidden"
        whileInView="visible" // La animación se dispara al hacer scroll
        viewport={{ once: true, amount: 0.2 }} // amount: 0.2 significa que se dispara cuando el 20% es visible
        variants={containerVariants}
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-bold text-white mb-12 flex items-center gap-3 tracking-tight"
        >
          <Terminal className="text-cyan-400" /> Stack & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">

          {/* 1. Core Development (Grande) */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02, borderColor: "rgba(34, 211, 238, 0.5)" }} // Efecto hover sutil
            className="md:col-span-2 md:row-span-2 bg-slate-800/50 border border-slate-700/50 p-8 rounded-3xl transition-colors cursor-default"
          >
            <Code2 className="text-cyan-400 mb-4" size={32} />
            <h3 className="text-2xl font-bold text-white mb-4">Core Development</h3>
            <p className="text-slate-400 mb-5 text-sm leading-relaxed">Sólida experiencia en ciclo completo de desarrollo.</p>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {['React', 'React Native', '.NET', 'Node.js', 'TypeScript', 'Angular', 'Nestjs', 'PHP'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-slate-900 rounded-full border border-slate-700 text-slate-300">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* 2. Data & Cloud */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.03, y: -5 }}
            className="md:col-span-2 bg-slate-800/50 border border-slate-700/50 p-6 rounded-3xl flex flex-col justify-between cursor-default"
          >
            <div className="flex items-center gap-4">
              <Database className="text-cyan-400" />
              <h3 className="font-bold text-white text-lg">Data & Cloud</h3>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">PostgreSQL, MongoDB, SQL Server, Docker, AWS, GCP, Jenkins.</p>
          </motion.div>

          {/* 3. IA & Automatización */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05, rotate: -1 }}
            className="bg-cyan-500/10 border border-cyan-500/20 p-6 rounded-3xl flex flex-col justify-between cursor-default"
          >
            <Cpu className="text-cyan-400" />
            <h3 className="font-bold text-cyan-400">IA / N8N</h3>
            <p className="text-xs text-slate-300 leading-tight">Implementación de IA-N8N-RAG y MCP Servers.</p>
          </motion.div>

          {/* 4. Personality / Hobby */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="bg-fuchsia-500/10 border border-fuchsia-500/20 p-6 rounded-3xl flex flex-col justify-between cursor-default"
          >
            <Music className="text-fuchsia-400" />
            <h3 className="font-bold text-fuchsia-400">Off-duty</h3>
            <p className="text-xs text-slate-300 leading-tight">Disciplina y ritmo con Salsa Estilo New York.</p>
          </motion.div>

        </div>
      </motion.section>

      {/* 3. FEATURED PROJECTS */}
      <section className="container mx-auto px-6 py-20 bg-slate-900/50 rounded-3xl border border-slate-800">
        <h2 className="text-3xl font-bold text-white mb-12">Proyectos de Alto Impacto</h2>
        <div className="grid md:grid-cols-2 gap-8">

          {/* Proyecto 1: OMA v2 */}
          <ProjectCard
            title="OMA v2 Architecture"
            company="Schneider National"
            description="Re-arquitectura cloud-native migrando sistemas legados a un ecosistema moderno de React y microservicios para optimizar decisiones de flete."
            tags={['Microservices', 'React']}
          />

          {/* Proyecto 2: Tech Central UI */}
          <ProjectCard
            title="Tech Central UI"
            company="Internal IDP"
            description="Plataforma de orquestación de recursos para equipos de ingeniería, diseñada para centralizar la gestión de proyectos desde cero."
            tags={['Node.js', 'Product Design']}
          />

        </div>
      </section>

      {/* FOOTER */}
      <footer className="container mx-auto px-6 py-12 text-center text-slate-500 text-sm border-t border-slate-800 mt-20">
        <p>© 2026 Luis Fernando Nuñez Delgado | Colima, México.</p>
      </footer>
    </div>
  );
}

export default App
