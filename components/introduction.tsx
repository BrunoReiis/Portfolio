"use client";

import { motion } from "framer-motion";

export const Introduction = () => {
  return (
    <div className="w-full flex items-center justify-center md:justify-start mt-20 px-4 md:px-16">
      <motion.div
        className="flex flex-col text-center md:text-left space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl">Olá, eu sou o</h2>
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold text-[#6D28D9]">
          BrunoReiis
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl">
          Desenvolvedor Full-Stack
        </h2>

        <p className="text-lg sm:text-xl text-gray-400 max-w-xl mt-4">
          Experiência com <span className="text-[#6D28D9] font-semibold">ASP.NET 4.7 MVC</span>,
          integração de APIs REST, e desenvolvimento de aplicações modernas com
          foco em performance e design limpo.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-5 py-2 rounded-lg bg-[#6D28D9] hover:bg-[#5b21b6] text-white transition"
          >
            Ver Projetos
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-5 py-2 rounded-lg border border-[#6D28D9] hover:bg-[#6D28D9]/20 text-[#6D28D9] transition"
          >
            Entrar em Contato
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};
