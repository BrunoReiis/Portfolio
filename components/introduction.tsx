"use client";

export const Introduction = () => {
  return (
    <div className="w-full flex items-center justify-start mt-30">
      <div className="flex flex-col text-left space-y-4">
        <h2 className="text-5xl text-gray-300">Olá, eu sou o</h2>
        <h1 className="text-8xl font-bold text-[#6D28D9]">BrunoReiis</h1>
        <h2 className="text-5xl text-gray-300">Desenvolvedor Full-Stack</h2>

        <div className="mt-6 flex gap-4 justify-start">
          <button className="px-5 py-2 rounded-lg bg-[#6D28D9] hover:bg-[#5b21b6] transition">
            Ver Projetos
          </button>
          <button className="px-5 py-2 rounded-lg border border-[#6D28D9] hover:bg-[#6D28D9]/20 transition">
            Entrar em Contato
          </button>
        </div>
      </div>
    </div>
  );
};
