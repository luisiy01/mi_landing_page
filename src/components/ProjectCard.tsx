import { motion } from "framer-motion";

interface ProjectCardProps {
    title: string;
    company: string;
    description: string;
    tags: string[];
}

export const ProjectCard = ({ title, company, description, tags }: ProjectCardProps) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="group bg-[#1e293b] p-1 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all cursor-pointer shadow-lg"
        >
            <div className="p-8">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">{company}</span>
                <h3 className="text-2xl font-bold text-white mt-2 mb-4 group-hover:text-cyan-400 transition-colors">
                    {title}
                </h3>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span key={tag} className="text-[10px] px-2 py-1 bg-slate-900 border border-slate-800 rounded text-slate-300">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};