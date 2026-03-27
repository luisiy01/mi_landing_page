import { motion } from "framer-motion";
import { TerminalAnimation } from "./TerminalAnimation";

export const Header = ({ t, lang }: { t: any, lang: 'es' | 'en' }) => {
    return (
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
                            &lt;{t.heroRole} /&gt;
                        </h2>
                        <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-6 tracking-tighter">
                            {t.heroTitle}<br />
                            <span className="text-slate-500">Nuñez Delgado</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-2xl border-l-4 border-cyan-500 pl-6">
                            {t.heroDesc}
                        </p>
                    </motion.div>

                    {/* Badges de Disponibilidad */}
                    <div className="flex gap-4 mt-8">
                        <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-4 py-1 rounded-full text-sm font-medium">
                            {t.availableForRemoteProjects}
                        </span>
                        <span className="bg-slate-800 text-slate-300 px-4 py-1 rounded-full text-sm">
                            México & EE.UU.
                        </span>
                    </div>
                </div>
            </section>
            {/* Terminal Visual */}
            <TerminalAnimation lang={lang} />
        </header>
    )
}