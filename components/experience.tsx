"use client";

import { motion } from "framer-motion";
import { Card, CardBody } from "@heroui/card";
import { FaBuilding, FaCalendarAlt } from "react-icons/fa";

export const Experience = () => {
  const experiences = [
    {
      company: "Função Sistemas",
      roles: [
        {
          title: "Desenvolvedor Full-Stack",
          period: "05/01/2026 - Atualmente",
          description: `
            Desenvolvimento e manutenção de sistemas corporativos utilizando ASP.NET 4.7 MVC, C#,
            SQL Server e JavaScript.  
            Implementação de novas funcionalidades, integração de APIs e modernização de sistemas legados,
            sempre buscando alta performance e uma experiência de usuário aprimorada.
          `,
        },
        {
          title: "QA Tester",
          period: "17/06/2024 - 02/12/2025",
          description: `
            Atuação na área de qualidade de software, realizando testes funcionais e de regressão
            em aplicações ASP.NET MVC.  
            Responsável por identificar, documentar e acompanhar correções de bugs, além de criar
            cenários de teste automatizados e contribuir para a melhoria contínua dos processos de QA.
          `,
        },
      ],
    },
    {
      company: "Freelancer",
      roles: [
        {
          title: "Desenvolvedor",
          period: "03/02/2024 - 14/06/2024",
          description: `
            Criação de sites e landing pages responsivas utilizando React, Next.js e TailwindCSS.  
            Foco em SEO, performance e design limpo, com colaboração direta com clientes para
            transformar ideias em soluções digitais.
          `,
        },
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="w-full flex flex-col items-center justify-center py-24 px-6 md:px-20 scroll-mt-20"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-10 text-[#6D28D9]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Experiência Profissional
      </motion.h2>

      <div className="flex flex-col gap-8 max-w-4xl w-full">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-transparent border border-[#6D28D9]/20 shadow-sm hover:shadow-[#6D28D9]/30 transition">
              <CardBody className="space-y-5">
                <h3 className="text-2xl font-semibold text-[#6D28D9] flex items-center gap-2">
                  <FaBuilding /> {exp.company}
                </h3>

                {exp.roles.map((role, i) => (
                  <div key={i} className="border-l-2 border-[#6D28D9]/40 pl-4 space-y-2">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <span className="text-lg font-medium">{role.title}</span>
                      <span className="text-sm text-foreground/70 flex items-center gap-2 mt-1 md:mt-0">
                        <FaCalendarAlt /> {role.period}
                      </span>
                    </div>
                    <p className="text-foreground/80 leading-relaxed text-justify whitespace-pre-line">
                      {role.description}
                    </p>
                  </div>
                ))}
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
