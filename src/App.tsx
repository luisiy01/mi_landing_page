import { Code2, Terminal, Database, Cpu, Music } from 'lucide-react';
import { TerminalAnimation } from './TerminalAnimation';
import { ProjectCard } from './ProjectCard';

function App() {

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 font-sans selection:bg-cyan-500/30">

      {/* 1. HERO SECTION */}
      <header className="container mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-mono">
            v2.0.26_stable
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            Luis Fernando <span className="text-cyan-400">Nuñez</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            Senior Software Engineer especializado en arquitecturas escalables y modernización de sistemas críticos para clientes globales[cite: 1, 2, 20].
          </p>
          <div className="flex gap-4">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold py-3 px-8 rounded-lg transition-all">
              Ver Proyectos
            </button>
            <button className="border border-slate-700 hover:bg-slate-800 py-3 px-8 rounded-lg transition-all">
              Descargar CV
            </button>
          </div>
        </div>

        {/* Terminal Visual */}
        <TerminalAnimation />
      </header>

      {/* 2. BENTO GRID - SKILLS & INFO */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
          <Terminal className="text-cyan-400" /> Stack & Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">
          {/* Main Stack */}
          <div className="md:col-span-2 md:row-span-2 bg-slate-800/50 border border-slate-700 p-8 rounded-3xl hover:border-cyan-500/50 transition-colors">
            <Code2 className="text-cyan-400 mb-4" size={32} />
            <h3 className="text-2xl font-bold text-white mb-4">Core Development</h3>
            <div className="flex flex-wrap gap-2 text-sm">
              {['React', 'React Native', '.NET', 'Node.js', 'TypeScript', 'Angular', 'Nestjs'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-slate-900 rounded-full border border-slate-700">{skill}</span>
              ))} [cite: 16]
            </div>
          </div>

          {/* Infrastructure */}
          <div className="md:col-span-2 bg-slate-800/50 border border-slate-700 p-6 rounded-3xl flex flex-col justify-between">
            <div className="flex items-center gap-4">
              <Database className="text-cyan-400" />
              <h3 className="font-bold text-white">Data & Cloud</h3>
            </div>
            <p className="text-sm text-slate-400">PostgreSQL, MongoDB, Docker, SQL Server, AWS[cite: 16].</p>
          </div>

          {/* IA & Automation */}
          <div className="bg-cyan-500/10 border border-cyan-500/20 p-6 rounded-3xl flex flex-col justify-between">
            <Cpu className="text-cyan-400" />
            <h3 className="font-bold text-cyan-400">AI / N8N</h3>
            <p className="text-xs text-slate-300">IA-N8N-RAG & MCP Servers[cite: 16, 26].</p>
          </div>

          {/* Personality / Hobby */}
          <div className="bg-fuchsia-500/10 border border-fuchsia-500/20 p-6 rounded-3xl flex flex-col justify-between">
            <Music className="text-fuchsia-400" />
            <h3 className="font-bold text-fuchsia-400">Off-duty</h3>
            <p className="text-xs text-slate-300">Salsa Estilo New York[cite: 34, 37].</p>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PROJECTS */}
      <section className="container mx-auto px-6 py-20 bg-slate-900/50 rounded-3xl border border-slate-800">
        <h2 className="text-3xl font-bold text-white mb-12">Proyectos de Alto Impacto</h2>
        <div className="grid md:grid-cols-2 gap-8">

          {/* Proyecto 1: OMA v2 */}
          <ProjectCard
            title="OMA v2 Architecture"
            company="Schneider National"
            description="Re-arquitectura cloud-native migrando sistemas legados a un ecosistema moderno de React y microservicios para optimizar decisiones de flete[cite: 33, 39, 41, 42]."
            tags={['Microservices', 'React']}
          />

          {/* Proyecto 2: Tech Central UI */}
          <ProjectCard
            title="Tech Central UI"
            company="Internal IDP"
            description="Plataforma de orquestación de recursos para equipos de ingeniería, diseñada para centralizar la gestión de proyectos desde cero[cite: 27]."
            tags={['Node.js', 'Product Design']}
          />

        </div>
      </section>

      {/* FOOTER */}
      <footer className="container mx-auto px-6 py-12 text-center text-slate-500 text-sm border-t border-slate-800 mt-20">
        <p>© 2026 Luis Fernando Nuñez Delgado | Colima, México[cite: 1, 3].</p>
      </footer>
    </div>
  );
}

export default App
