import { motion } from "framer-motion";
import Container from "../layout/container";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Financial Dashboard",
    description:
      "Dashboard financiero para registrar ingresos y gastos con métricas y gráficos dinámicos en tiempo real.",

    highlights: [
      "Filtros por tipo y período",
      "Gráficos dinámicos con Recharts",
      "Persistencia de datos",
      "Diseño responsive",
    ],

    tech: ["React", "TypeScript", "Recharts", "CSS"],

    demo: "https://alejo-financial-dashboard.netlify.app/",
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
  },

  {
    title: "Porta de Pelis",
    description:
      "Aplicación para explorar películas consumiendo APIs externas con renderizado dinámico.",

    highlights: ["Consumo de API", "Estados de carga", "Responsive UI"],

    tech: ["HTML", "JavaScript", "CSS"],

    demo: "https://portadepelis.netlify.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="
        relative
        py-32
        overflow-hidden
      "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            w-[700px]
            h-[700px]
            bg-blue-500/10
            blur-3xl
            rounded-full
          "
        />
      </div>

      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              text-white
            "
          >
            Proyectos Destacados
          </h2>

          <p
            className="
              mt-5
              text-lg
              text-gray-400
              leading-relaxed
            "
          >
            Aplicaciones modernas desarrolladas con foco en rendimiento,
            experiencia de usuario y arquitectura escalable.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-20 grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -6,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-2xl
                p-7
                transition-all
                duration-500
                hover:border-blue-500/30
                hover:bg-white/[0.07]
              "
            >
              {/* Glow Hover */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                  bg-gradient-to-br
                  from-blue-500/10
                  to-cyan-400/5
                "
              />

              {/* Fake Preview */}
              <div
                className="
                  relative
                  h-52
                  rounded-2xl
                  border
                  border-white/10
                  bg-gradient-to-br
                  from-[#111827]
                  to-[#1e293b]
                  overflow-hidden
                  flex
                  items-center
                  justify-center
                "
              >
                <div
                  className="
                    absolute
                    inset-0
                    bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]
                    bg-[size:30px_30px]
                  "
                />

                <span
                  className="
                    text-white/80
                    text-lg
                    font-medium
                    z-10
                  "
                >
                  {project.title}
                </span>
              </div>

              {/* Content */}
              <div className="relative mt-7">
                <h3
                  className="
                    text-2xl
                    font-semibold
                    text-white
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    mt-4
                    text-gray-400
                    leading-relaxed
                  "
                >
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="mt-6 space-y-3">
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      className="
                        flex
                        items-start
                        gap-3
                        text-sm
                        text-gray-300
                      "
                    >
                      <span
                        className="
                          mt-1
                          w-2
                          h-2
                          rounded-full
                          bg-blue-500
                        "
                      />

                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tech */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="
                        px-3
                        py-1.5
                        rounded-xl
                        border
                        border-white/10
                        bg-white/5
                        text-xs
                        text-gray-300
                      "
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-8 flex gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      px-5
                      py-3
                      rounded-2xl
                      bg-blue-600
                      text-white
                      font-semibold
                      hover:bg-blue-700
                      transition-all
                      duration-300
                    "
                  >
                    Ver Proyecto
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
