import { motion, type Variants } from "framer-motion";
import { Award, ExternalLink, CheckCircle2, Medal } from 'lucide-react';
import { translations } from './languages';

interface Certification {
    title: string;
    issuer: string;
    date: string;
    link: string;
    icon: React.ReactNode;
}

const CertificationCard = ({ cert }: { cert: Certification }) => {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            className="relative group cursor-default"
        >
            {/* Efecto de Brillo de Fondo (Glow) */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-fuchsia-600 rounded-2xl opacity-0 group-hover:opacity-30 blur transition duration-500"></div>

            {/* Contenido de la Tarjeta */}
            <div className="relative bg-[#111a2e] border border-slate-700/50 p-6 rounded-2xl h-full flex flex-col justify-between">
                <div>
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-slate-900 rounded-lg border border-slate-800">
                            {cert.icon}
                        </div>
                        <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded border border-cyan-500/20">
                            {cert.date}
                        </span>
                    </div>

                    <h3 className="text-white font-bold text-lg mb-2 group-hover:text-cyan-300 transition-colors">
                        {cert.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-6 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                        {cert.issuer}
                    </p>
                </div>

                <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[11px] font-black uppercase tracking-tighter text-slate-400 group-hover:text-cyan-400 transition-colors"
                >
                    Verificar Credencial <ExternalLink size={14} />
                </a>
            </div>
        </motion.div>
    );
};

export const CertificationSection = ({ lang }: { lang: keyof typeof translations }) => {

    const t = translations[lang];

    const certifications = [
        {
            title: "React - The Complete Guide",
            issuer: "Udemy",
            date: "2023",
            link: "#",
            icon: <CheckCircle2 className="text-cyan-400" size={20} />
        },
        {
            title: "Node.js & NestJS Backend Architecture",
            issuer: "Global Knowledge",
            date: "2022",
            link: "#",
            icon: <CheckCircle2 className="text-emerald-400" size={20} />
        },
        {
            title: "Ethics and Professional Integrity",
            issuer: "Aptude Internal Training",
            date: "2021",
            link: "#",
            icon: <Award className="text-fuchsia-400" size={20} />
        }
    ];

    // Variantes para cada tarjeta individual del Bento Grid
    const itemVariants: Variants = {
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
        <section className="container mx-auto px-6 py-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                <div>
                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl font-bold text-white mb-12 flex items-center gap-3 tracking-tight"
                    >
                        <Medal className="text-cyan-400" /> {t.certifications}
                    </motion.h2>
                    <p className="text-slate-500 font-mono">{t.certificationsDesc}</p>
                </div>
                <div className="h-[1px] flex-1 bg-slate-800 mx-8 hidden md:block mb-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certifications.map((cert, index) => (
                    <CertificationCard key={index} cert={cert} />
                ))}
            </div>
        </section>
    );
};