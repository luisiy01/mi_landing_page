import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Filter, Search } from 'lucide-react';
import { translations } from '../utils/languages';

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    projects: any[];
    lang: keyof typeof translations;
}

export const ProjectModal = ({ isOpen, onClose, projects, lang }: ProjectModalProps) => {
    const t = translations[lang];
    const [filter, setFilter] = useState('All');

    // Filtramos la lista según la selección
    const filteredProjects = projects.filter(p =>
        filter === 'All' || p.technologies.includes(filter)
    );

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-[60]"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 30 }}
                        className="fixed inset-2 md:inset-10 lg:inset-20 bg-[#0f172a] border border-slate-700 rounded-[2.5rem] z-[70] shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header con Buscador/Filtro */}
                        <div className="p-8 border-b border-slate-800 bg-[#1e293b]/50">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h2 className="text-3xl font-bold text-white tracking-tight">{t.projectHistory}</h2>
                                    <p className="text-slate-400 mt-1">{t.projectHistoryDesc}</p>
                                </div>
                                <button onClick={onClose} className="p-2 hover:bg-slate-800 rounded-full text-slate-400 transition-colors">
                                    <X size={28} />
                                </button>
                            </div>

                            {/* Selector de Filtros (Scroll horizontal en móvil) */}
                            <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar">
                                <Filter size={18} className="text-cyan-400 shrink-0" />
                                {['All', 'React', '.NET', 'Node.js', 'SQL Server', 'Angular', 'React Native', 'TypeScript', 'MongoDB', 'Docker', 'Postgresql'].map((tech) => (
                                    <button
                                        key={tech}
                                        onClick={() => setFilter(tech)}
                                        className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap border ${filter === tech
                                            ? 'bg-cyan-500 text-slate-900 border-cyan-400'
                                            : 'bg-slate-800 text-slate-400 border-slate-700 hover:border-slate-500'
                                            }`}
                                    >
                                        {tech}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Lista Filtrada */}
                        <div className="flex-1 overflow-y-auto p-8 space-y-10 custom-scrollbar bg-[#0f172a]">
                            {filteredProjects.length > 0 ? (
                                filteredProjects.map((project) => (
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        key={project.title}
                                        className="relative pl-10 border-l-2 border-slate-800 group"
                                    >
                                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-700 group-hover:border-cyan-500 transition-colors" />

                                        <div className="mb-2">
                                            <span className="text-cyan-500 font-mono text-xs font-bold uppercase tracking-widest leading-none">
                                                {project.company}
                                            </span>
                                            <h3 className="text-xl font-bold text-white mt-1">{project.title}</h3>
                                        </div>

                                        <div className="flex items-center gap-4 text-slate-500 text-xs mb-4">
                                            <span className="flex items-center gap-1"><Calendar size={14} /> {project.date}</span>
                                        </div>

                                        <p className="text-slate-400 text-sm leading-relaxed mb-5 max-w-4xl">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((t: string) => (
                                                <span key={t} className="px-2 py-1 bg-slate-800/50 text-slate-300 text-[10px] rounded border border-slate-700/50">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))
                            ) : (
                                <div className="text-center py-20">
                                    <Search size={48} className="mx-auto text-slate-700 mb-4" />
                                    <p className="text-slate-500 text-lg">No se encontraron proyectos con ese stack.</p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};