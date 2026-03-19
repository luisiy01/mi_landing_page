import { Award, ExternalLink, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const CertificationSection = () => {
    const certifications = [
        {
            title: "React - The Complete Guide (Hooks, React Router, Redux)",
            issuer: "Udemy",
            date: "2023",
            link: "#", // Aquí pondrías el link a tu certificado
            icon: <CheckCircle2 className="text-cyan-400" size={20} />
        },
        {
            title: "Node.js, Express & MongoDB Dev",
            issuer: "Udemy / Global Knowledge",
            date: "2022",
            link: "#",
            icon: <CheckCircle2 className="text-emerald-400" size={20} />
        },
        {
            title: "Building Scalable APIs con .NET Core",
            issuer: "Microsoft / Internal Training",
            date: "2021",
            link: "#",
            icon: <CheckCircle2 className="text-blue-500" size={20} />
        }
    ];

    return (
        <section className="container mx-auto px-6 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-10"
            >
                <Award className="text-cyan-400" size={32} />
                <h2 className="text-3xl font-bold text-white tracking-tight">Certificaciones</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -5, borderColor: 'rgba(34, 211, 238, 0.3)' }}
                        className="bg-slate-800/30 border border-slate-700/50 p-6 rounded-2xl flex flex-col justify-between group transition-all"
                    >
                        <div>
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-2 bg-slate-900 rounded-lg">
                                    {cert.icon}
                                </div>
                                <span className="text-[10px] font-mono text-slate-500 bg-slate-900 px-2 py-1 rounded border border-slate-800">
                                    {cert.date}
                                </span>
                            </div>
                            <h3 className="text-white font-bold mb-1 group-hover:text-cyan-400 transition-colors">
                                {cert.title}
                            </h3>
                            <p className="text-slate-400 text-sm mb-6">{cert.issuer}</p>
                        </div>

                        <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors mt-auto"
                        >
                            CONSULTAR CREDENCIAL <ExternalLink size={14} />
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};