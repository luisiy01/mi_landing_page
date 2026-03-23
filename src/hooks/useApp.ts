
import { useState } from 'react';
import { translations } from '../utils/languages';
import { type Variants } from "framer-motion";

export const useApp = () => {
    const [lang, setLang] = useState<'es' | 'en'>('es');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const t = translations[lang];

    const toggleLanguage = () => {
        setLang(lang === 'es' ? 'en' : 'es');
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

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

    return {
        lang,
        setLang,
        isModalOpen,
        setIsModalOpen,
        t,
        toggleLanguage,
        containerVariants,
        itemVariants
    }

}