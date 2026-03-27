import { motion } from "framer-motion";
import { Globe } from 'lucide-react';

export const BotonFlotanteIdioma = ({ toggleLanguage, lang }: { toggleLanguage: () => void, lang: 'es' | 'en' }) => {
    return (
        <nav className="fixed top-6 right-6 z-[100]">
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleLanguage}
                className="flex items-center gap-2 bg-slate-800/80 backdrop-blur-md border border-slate-700 px-4 py-2 rounded-full text-sm font-bold shadow-xl hover:border-cyan-500 transition-colors"
            >
                <Globe size={16} className="text-cyan-400" />
                <span className="uppercase">{lang === 'es' ? 'EN' : 'ES'}</span>
            </motion.button>
        </nav>
    )
}