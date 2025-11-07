"use client";

import { motion } from "framer-motion";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const Projects = () => {
  const projects = [
    {
      title: "Portfolio Pessoal",
      description:
        "Meu site pessoal desenvolvido com Next.js, TailwindCSS e Framer Motion. Projeto focado em performance e design responsivo.",
      tech: ["Next.js", "Tailwind", "Framer Motion"],
      github: "https://github.com/BrunoReiis/portfolio",
      demo: "#",
    },
    // {
    //   title: "Sistema de Gestão ASP.NET MVC",
    //   description:
    //     "Aplicação corporativa desenvolvida em ASP.NET 4.7 MVC para controle de usuários, permissões e relatórios internos.",
    //   tech: ["ASP.NET MVC", "C#", "SQL Server"],
    //   github: "https://github.com/BrunoReiis",
    //   demo: "#",
    // },
    // {
    //   title: "API REST Node.js",
    //   description:
    //     "API RESTful construída com Node.js e Express, integrada a banco de dados PostgreSQL, com autenticação JWT e boas práticas de arquitetura.",
    //   tech: ["Node.js", "Express", "PostgreSQL"],
    //   github: "https://github.com/BrunoReiis",
    //   demo: "#",
    // },
  ];

  return (
    <section
      id="projects"
      className="w-full py-24 px-6 md:px-20 flex flex-col items-center justify-center scroll-mt-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-10 text-[#6D28D9]"
      >
        Projetos
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border border-[#6D28D9]/20 bg-transparent shadow-md hover:shadow-[#6D28D9]/30 transition">
              <CardBody className="space-y-4 text-center md:text-left">
                <h3 className="text-2xl font-semibold text-[#6D28D9]">{project.title}</h3>
                <p className="text-foreground/80 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-sm bg-[#6D28D9]/10 text-[#6D28D9] px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardBody>
              <CardFooter className="flex justify-center md:justify-between gap-4">
                <Button
                  as="a"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="bordered"
                  className="border-[#6D28D9] text-[#6D28D9] hover:bg-[#6D28D9]/10"
                  startContent={<FaGithub />}
                >
                  Código
                </Button>
                <Button
                  as="a"
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#6D28D9] text-white hover:bg-[#5B21B6]"
                  startContent={<FaExternalLinkAlt />}
                >
                  Demo
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
