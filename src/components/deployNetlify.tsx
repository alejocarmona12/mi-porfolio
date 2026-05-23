import { motion, useMotionValue } from "framer-motion";
import Container from "../layout/container";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Sistema de Contabilidad Fullstack",
    description:
      "Dashboard financiero para registrar ingresos y gastos con métricas y gráficos dinámicos en tiempo real.",
    highlights: [
      "Filtros por tipo y período",
      "Gráficos dinámicos con Recharts",
      "Persistencia de datos",
      "Diseño responsive",
    ],
    tech: ["React • TypeScript • Node.js • MongoDB • JWT"],
    demo: "https://alejo-financial-dashboard.netlify.app/",
    image: "contabilidad.png",
  },
  {
    title: "Ecommerce Brigadeiros",
    description:
      "E-commerce moderno con carrito de compras y arquitectura escalable lista para backend.",
    highlights: [
      "Context API",
      "Gestión de carrito",
      "Componentes reutilizables",
      "Mobile First",
    ],
    tech: ["React", "JavaScript", "Context API", "CSS"],
    demo: "https://unique-brigadeiros-57d756.netlify.app/",
    image: "ecommerce.png",
  },
  {
    title: "Porta de Pelis",
    description:
      "Aplicación para explorar películas consumiendo APIs externas con renderizado dinámico.",
    highlights: ["Consumo de API", "Estados de carga", "Responsive UI"],
    tech: ["HTML", "JavaScript", "CSS"],
    demo: "https://portadepelis.netlify.app/",
    image: "mundo-cine.png",
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dragX = useMotionValue(0);

  const totalItems = projects.length;
  const angleUnit = 360 / totalItems;
  const radius = 300;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const handleDragEnd = () => {
    const distanceMoved = dragX.get();
    const swipeThreshold = 50;

    if (distanceMoved < -swipeThreshold) {
      handleNext();
    } else if (distanceMoved > swipeThreshold) {
      handlePrev();
    }

    dragX.set(0);
  };

  return (
    <section
      id="proyectos"
      className="relative py-32 overflow-hidden bg-black select-none"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 blur-3xl rounded-full pointer-events-none" />
      </div>

      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Proyectos Destacados
          </h2>
          <p className="mt-5 text-lg text-gray-400 leading-relaxed">
            Explorá mis aplicaciones arrastrando el carrusel o usando las
            flechas de navegación.
          </p>
        </div>

        {/* 3D CAROUSEL ZONE */}
        <div className="relative flex flex-col items-center justify-center h-[550px] w-full">
          <div
            className="relative w-[320px] h-[420px] cursor-grab active:cursor-grabbing"
            style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
          >
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              style={{ transformStyle: "preserve-3d", x: dragX }}
              onDragEnd={handleDragEnd}
              animate={{ rotateY: -currentIndex * angleUnit }}
              transition={{ type: "spring", stiffness: 45, damping: 15 }}
              className="w-full h-full relative"
            >
              {projects.map((project, index) => {
                const itemRotationY = index * angleUnit;

                return (
                  <motion.article
                    key={project.title}
                    style={{
                      transformStyle: "preserve-3d",
                      transform: `rotateY(${itemRotationY}deg) translateZ(${radius}px)`,
                    }}
                    className={`absolute inset-0 rounded-3xl border border-white/10 bg-zinc-950/80 backdrop-blur-2xl p-6 transition-opacity duration-500 flex flex-col justify-between shadow-[0_0_50px_rgba(0,0,0,0.5)] ${
                      currentIndex === index
                        ? "opacity-100 border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.15)]"
                        : "opacity-30 pointer-events-none"
                    }`}
                  >
                    {/* 2. MODIFICADO: Contenedor con la imagen de portada de fondo */}
                    <div
                      className="relative h-32 rounded-2xl border border-white/10 overflow-hidden bg-cover bg-center"
                      style={{ backgroundImage: `url(${project.image})` }} // Inserta la foto dinámicamente
                    >
                      {/* Capa oscura superpuesta para que el texto de tecnología siga siendo legible */}
                    </div>

                    {/* Content */}
                    <div className="mt-4 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white tracking-tight">
                          {project.title}
                        </h3>
                        <p className="mt-2 text-xs text-gray-400 line-clamp-3 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Tech Tags */}
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="px-2 py-0.5 rounded-lg border border-white/5 bg-white/5 text-[10px] text-gray-400 font-medium"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Button */}
                      <div className="mt-5">
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md shadow-blue-600/10"
                        >
                          Ver Proyecto
                          <ArrowUpRight size={14} />
                        </a>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>

          {/* Controles de Navegación */}
          <div className="flex gap-4 mt-12 z-30">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-blue-500/40 transition-all active:scale-95"
              aria-label="Proyecto anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-blue-500/40 transition-all active:scale-95"
              aria-label="Siguiente proyecto"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
