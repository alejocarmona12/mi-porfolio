import { motion } from "framer-motion";
import Container from "../layout/container";
import { MonitorSmartphone, Code2, PenTool, Sparkles, Bot } from "lucide-react";
import type { Variants } from "framer-motion";

const stack = [
  { name: "React", icon: "devicon-react-original colored" },
  { name: "TypeScript", icon: "devicon-typescript-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "HTML", icon: "devicon-html5-plain colored" },
  { name: "CSS", icon: "devicon-css3-plain colored" },
  { name: "GitHub", icon: "devicon-github-original" },
  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
  { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
];

const aiTools = [
  {
    name: "Claude AI",
    role: "Lógica Avanzada",
    icon: <Code2 className="text-orange-400 w-7 h-7" />,
  },
  {
    name: "GitHub Copilot",
    role: "Auto-completado VS",
    icon: <Bot className="text-sky-400 w-7 h-7" />,
  },
  {
    name: "ChatGPT",
    role: "Escritura y Docs",
    icon: <PenTool className="text-emerald-400 w-7 h-7" />,
  },
  {
    name: "AI Prompting",
    role: "Productividad",
    icon: <Sparkles className="text-purple-400 w-7 h-7" />,
  },
];

// Animaciones base para los contenedores (Padres)
const orbitAnimation: Variants = {
  animate: {
    rotate: 360,
    transition: { duration: 28, repeat: Infinity, ease: "linear" },
  },
};

const reverseOrbitAnimation: Variants = {
  animate: {
    rotate: -360,
    transition: { duration: 40, repeat: Infinity, ease: "linear" },
  },
};

// Contra-rotaciones exactas para que los iconos siempre miren hacia arriba (Hijos)
const counterOrbitAnimation: Variants = {
  animate: {
    rotate: -360,
    transition: { duration: 28, repeat: Infinity, ease: "linear" },
  },
};

const reverseCounterOrbitAnimation: Variants = {
  animate: {
    rotate: 360,
    transition: { duration: 40, repeat: Infinity, ease: "linear" },
  },
};

export default function Stack() {
  return (
    <section className="relative py-40 bg-black select-none">
      {/* 🛠️ SE ELIMINÓ EL OVERFLOW-HIDDEN Y SE SUBIÓ EL RELLENO PARA INTEGRARSE CON EL HERO */}
      <Container>
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Stack Tecnológico & IA
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            Tecnologías modernas potenciadas con herramientas de Inteligencia
            Artificial para maximizar la eficiencia del desarrollo.
          </p>
        </div>

        {/* Orbit Container */}
        {/* 🛠️ SE AJUSTÓ LA ALTURA A 820PX PARA QUE ENTRE EL ANILLO DE IA JUNTO A SUS TARJETAS FLOTANTES */}
        <div className="relative flex items-center justify-center h-[820px] w-full scale-90 md:scale-100">
          {/* Glow central */}
          <div className="absolute w-[450px] h-[450px] rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

          {/* Center Circle */}
          <div className="absolute z-20 w-40 h-40 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center shadow-[0_0_60px_rgba(59,130,246,0.15)]">
            <div className="text-center">
              <MonitorSmartphone
                size={58}
                className="text-blue-400 drop-shadow-[0_0_20px_rgba(59,130,246,0.8)] mx-auto"
              />
              <p className="mt-3 text-white font-semibold tracking-wide">
                Full Stack
              </p>
            </div>
          </div>

          {/* ANILLO 1 (INTERIOR): Stack Principal */}
          <motion.div
            variants={orbitAnimation}
            animate="animate"
            className="absolute w-[480px] h-[480px] rounded-full border border-white/5"
          >
            {stack.map((tech, index) => {
              const angle = (360 / stack.length) * index;
              return (
                <div
                  key={tech.name}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    transform: `rotate(${angle}deg) translateY(-240px) rotate(-${angle}deg)`,
                  }}
                >
                  <motion.div
                    variants={counterOrbitAnimation}
                    animate="animate"
                    className="flex flex-col items-center justify-center w-20 h-20 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg hover:scale-110 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
                  >
                    <i
                      className={`${tech.icon} text-3xl`}
                      aria-label={tech.name}
                    ></i>
                    <span className="mt-1.5 text-[11px] text-gray-300 font-medium">
                      {tech.name}
                    </span>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>

          {/* ANILLO 2 (EXTERIOR): Herramientas de IA */}
          <motion.div
            variants={reverseOrbitAnimation}
            animate="animate"
            className="absolute w-[680px] h-[680px] rounded-full border border-white/[0.03] border-dashed"
          >
            {aiTools.map((tool, index) => {
              const angle = (360 / aiTools.length) * index;
              return (
                <div
                  key={tool.name}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    transform: `rotate(${angle}deg) translateY(-340px) rotate(-${angle}deg)`,
                  }}
                >
                  <motion.div
                    variants={reverseCounterOrbitAnimation}
                    animate="animate"
                    className="flex flex-col items-center justify-center w-28 h-24 rounded-2xl border border-blue-500/20 bg-blue-950/10 backdrop-blur-xl shadow-lg hover:scale-110 hover:border-blue-400/40 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="p-1 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                      {tool.icon}
                    </div>
                    <span className="mt-1 text-xs text-white font-semibold">
                      {tool.name}
                    </span>
                    <span className="text-[9px] text-gray-400 text-center px-1 font-medium">
                      {tool.role}
                    </span>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
