import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Tag } from 'lucide-react';

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    projects: any[];
}

export const ProjectModal = ({ isOpen, onClose, projects }: ProjectModalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop / Fondo oscuro */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[60] cursor-pointer"
                    />

                    {/* Contenedor del Pop-up */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed inset-4 md:inset-10 lg:inset-20 bg-[#1e293b] border border-slate-700 rounded-3xl z-[70] shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header del Modal */}
                        <div className="p-6 border-b border-slate-700 flex justify-between items-center bg-[#1e293b]">
                            <div>
                                <h2 className="text-2xl font-bold text-white">Historial de Proyectos</h2>
                                <p className="text-slate-400 text-sm">Trayectoria completa y contribuciones técnicas</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Lista de Proyectos con Scroll */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
                            {projects.map((project, index) => (
                                <div key={index} className="group relative pl-8 border-l-2 border-slate-700 hover:border-cyan-500 transition-colors">
                                    {/* Punto decorativo en el timeline */}
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-800 border-2 border-slate-700 group-hover:bg-cyan-500 group-hover:border-cyan-400 transition-all" />

                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <span className="flex items-center gap-2 text-xs font-mono text-slate-500 bg-slate-900/50 px-3 py-1 rounded-full border border-slate-800">
                                            <Calendar size={12} /> {project.date}
                                        </span>
                                    </div>

                                    <p className="text-slate-400 text-sm mb-4 leading-relaxed max-w-3xl">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech: string, i: number) => (
                                            <span key={i} className="text-[10px] px-2 py-1 bg-slate-800 text-slate-300 rounded-md border border-slate-700 flex items-center gap-1">
                                                <Tag size={10} className="text-cyan-500" /> {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
