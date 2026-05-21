import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import Container from "../layout/container";

const steps = [
  {
    type: "education",
    date: "2025 - Presente",
    title: "Desarrollador Full Stack (Ecosistema Node.js)",
    place: "Especialización Autónoma",
    desc: "Profundizando en la arquitectura de servidores, bases de datos no relacionales con MongoDB, APIs RESTful y optimización de flujos de datos asincrónicos en backend.",
    icon: <Briefcase className="w-4 h-4 text-blue-400" />,
  },
  {
    type: "education",
    date: "2024",
    title: "Especialización Frontend Jr / Trainee",
    place: "Proyectos y Formación Práctica",
    desc: "Construcción de múltiples aplicaciones web modernas e interactivas utilizando React, TypeScript, Tailwind CSS y Framer Motion. Enfoque en layouts dinámicos y animaciones premium.",
    icon: <GraduationCap className="w-4 h-4 text-purple-400" />,
  },
];

export default function Timeline() {
  return (
    <section id="trayectoria" className="py-24 bg-black select-none relative">
      <Container>
        {/* Encabezado minimalista */}
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-xs font-mono text-blue-500 uppercase tracking-widest">
            // Mi Camino
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mt-2">
            Trayectoria & Foco
          </h2>
        </div>

        {/* Línea Eje de Fondo */}
        <div className="relative max-w-3xl mx-auto before:absolute before:inset-0 before:left-5 md:before:left-1/2 before:w-px before:bg-white/5">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.15,
              }}
              className={`relative flex flex-col md:flex-row items-start mb-16 md:mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Nodo Central Interactivo */}
              <div className="absolute left-5 md:left-1/2 w-10 h-10 rounded-xl border border-white/10 bg-zinc-950 flex items-center justify-center -translate-x-1/2 z-10 shadow-[0_0_30px_rgba(0,0,0,1)]">
                {step.icon}
              </div>

              {/* Tarjeta de Contenido Bento */}
              <div className="w-full md:w-[44%] pl-14 md:pl-0">
                <div className="relative p-6 rounded-2xl border border-white/5 bg-zinc-950/40 backdrop-blur-3xl hover:border-blue-500/20 transition-all duration-300 group shadow-xl">
                  {/* Destello de fondo al pasar el mouse */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/[0.02] to-transparent rounded-2xl pointer-events-none" />

                  <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500 mb-3 relative z-10">
                    <Calendar size={11} className="text-zinc-600" />
                    <span>{step.date}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors relative z-10 leading-snug">
                    {step.title}
                  </h3>

                  <h4 className="text-xs font-semibold text-zinc-400 mt-1 relative z-10">
                    {step.place}
                  </h4>

                  <p className="text-xs text-zinc-500 leading-relaxed mt-4 relative z-10">
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
