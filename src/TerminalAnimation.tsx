import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const TerminalAnimation = () => {
    const [text, setText] = useState("");
    const fullText = "npm install --expertise Luis_Nunez";

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) clearInterval(interval);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-lg bg-[#1e293b] rounded-xl border border-slate-700 shadow-2xl overflow-hidden font-mono text-sm"
        >
            <div className="bg-[#334155] px-4 py-2 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="p-6 space-y-2">
                <p className="text-emerald-400">
                    $ {text}
                    <span className="animate-pulse">_</span>
                </p>
                {text.length === fullText.length && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="space-y-1"
                    >
                        <p className="text-slate-300 mt-2">› Carga exitosa: Senior Software Engineer [cite: 2]</p>
                        <p className="text-slate-300">› Ubicación: Colima, MX [cite: 3]</p>
                        <p className="text-slate-300">› Enfoque: Scalable Digital Projects [cite: 20]</p>
                        <p className="text-cyan-400 font-bold mt-4"># Status: Ready to innovate</p>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
};