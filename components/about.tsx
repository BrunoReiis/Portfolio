"use client";

import { Card, CardBody } from "@heroui/card";
import { Avatar } from "@heroui/avatar";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section
      id="about"
      className="w-full flex flex-col items-center justify-center py-24 px-6 md:px-20 scroll-mt-20"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-12 text-[#6D28D9]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Sobre Mim
      </motion.h2>

      <motion.div
        className="max-w-5xl flex flex-col md:flex-row items-center gap-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          <Avatar
            src="/profile.jpg"
            className="w-48 h-48 rounded-full shadow-lg border-4 border-[#6D28D9]/30"
            alt="Foto de perfil"
          />
        </motion.div>

        <Card className="flex-1 bg-transparent border border-[#6D28D9]/20 shadow-sm backdrop-blur-sm">
          <CardBody className="space-y-5 text-center md:text-left">
            <p className="text-lg leading-relaxed text-foreground/80 text-justify">
              Sou <strong>Bruno Reis</strong>, um desenvolvedor{" "}
              <span className="text-[#6D28D9] font-semibold">Full-Stack</span>{" "}
              apaixonado por tecnologia e design limpo.  
              Gosto de transformar ideias em soluções digitais práticas e elegantes,
              sempre com foco em desempenho e experiência do usuário.
            </p>

            <p className="text-lg leading-relaxed text-foreground/80 text-justify">
              Tenho experiência com{" "}
              <span className="text-[#6D28D9] font-medium">
                React, Next.js, Node.js, TypeScript
              </span>{" "}
              e também com{" "}
              <span className="text-[#6D28D9] font-medium">ASP.NET 4.7 MVC</span>{" "}
              para o desenvolvimento de aplicações na empresa{" "}
              <span className="text-[#6D28D9] font-medium">Função Sistemas</span>.  
              Busco constantemente evoluir e aprender novas tecnologias para entregar
              resultados cada vez melhores.
            </p>
          </CardBody>
        </Card>
      </motion.div>
    </section>
  );
};
