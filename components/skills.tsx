"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiDotnet,
  SiSharp,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

export const Skills = () => {
  const skills = [
    { icon: <SiReact size={40} className="text-cyan-400" />, name: "React" },
    { icon: <SiNextdotjs size={40} className="text-white" />, name: "Next.js" },
    { icon: <SiTypescript size={40} className="text-blue-500" />, name: "TypeScript" },
    { icon: <SiNodedotjs size={40} className="text-green-500" />, name: "Node.js" },
    { icon: <SiHtml5 size={40} className="text-orange-500" />, name: "HTML5" },
    { icon: <SiCss3 size={40} className="text-blue-400" />, name: "CSS3" },
    { icon: <SiTailwindcss size={40} className="text-cyan-300" />, name: "TailwindCSS" },
    { icon: <SiDotnet size={40} className="text-purple-500" />, name: ".NET 4.7 MVC" },
    { icon: <SiSharp size={40} className="text-violet-400" />, name: "C#" },
    { icon: <FaDatabase size={40} className="text-red-500" />, name: "SQL Server" },
  ];

  return (
    <section className="w-full py-20 flex flex-col items-center justify-center text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-5xl font-bold mb-12"
      >
        <span className="text-[#6D28D9] font-medium">Habilidades</span>
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center space-y-3 hover:scale-105 transition-transform"
          >
            {skill.icon}
            <span className="text-lg">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
