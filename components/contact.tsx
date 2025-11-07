"use client";

import { motion } from "framer-motion";
import { FaGithub, FaEnvelope } from "react-icons/fa";

export const Contact = () => {
    return (
        <section
            id="contact"
            className="w-full flex flex-col md:flex-row justify-between items-center md:items-start py-24 px-6 md:px-20 scroll-mt-20"
        >
            {/* Texto da esquerda */}
            <motion.div
                className="flex-1 space-y-4"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl md:text-5xl font-bold text-[#6D28D9]">
                    Entre em contato
                </h2>
                <p className="text-lg text-foreground/80">
                    Fique à vontade para me enviar uma mensagem :)
                </p>

                <div className="flex flex-col gap-3 mt-8">
                    <a
                        href="mailto:bruno.reiis15@gmail.com"
                        className="flex items-center gap-3 text-lg hover:text-[#6D28D9] transition"
                    >
                        <FaEnvelope className="text-[#6D28D9]" /> E-mail
                    </a>
                    <a
                        href="https://github.com/BrunoReiis"
                        target="_blank"
                        className="flex items-center gap-3 text-lg hover:text-[#6D28D9] transition"
                    >
                        <FaGithub className="text-[#6D28D9]" /> GitHub
                    </a>
                </div>
            </motion.div>

            {/* Formulário da direita */}
            <motion.form
                className="flex-1 mt-12 md:mt-0 md:ml-16 flex flex-col gap-5 max-w-md w-full"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="flex flex-col gap-2">
                    <label className="text-lg font-medium text-[#6D28D9]">
                        Nome / E-mail
                    </label>
                    <input
                        type="text"
                        placeholder="Digite seu nome ou e-mail..."
                        className="w-full bg-transparent border border-[#6D28D9]/40 rounded-lg p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-[#6D28D9] transition"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-lg font-medium text-[#6D28D9]">Mensagem</label>
                    <textarea
                        placeholder="Digite sua mensagem..."
                        rows={5}
                        className="w-full bg-transparent border border-[#6D28D9]/40 rounded-lg p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-[#6D28D9] transition resize-none"
                    />

                </div>

                <button
                    type="submit"
                    className="mt-2 px-6 py-3 rounded-lg bg-[#6D28D9] hover:bg-[#5b21b6] text-white font-medium transition"
                >
                    Enviar mensagem
                </button>
            </motion.form>
        </section>
    );
};
