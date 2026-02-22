import { motion } from "framer-motion";
import Container from "../layout/container";

const projects = [
  {
    title: "Financial Dashboard",
    description:
      "Dashboard financiero para registrar y visualizar ingresos y gastos con métricas y gráficos en tiempo real.",
    highlights: [
      "Filtros por tipo y período",
      "Gráficos dinámicos con Recharts",
      "Persistencia de datos (LocalStorage)",
      "UI responsive enfocada en UX",
    ],
    tech: ["React", "TypeScript", "Recharts", "CSS"],
    demo: "https://alejo-financial-dashboard.netlify.app/",
  },
  {
    title: "Ecommerce Brigadeiros",
    description:
      "E-commerce con catálogo y carrito de compras, diseñado con componentes reutilizables y base lista para integrar backend.",
    highlights: [
      "Carrito con suma de totales y gestión de cantidades",
      "Estado global con Context API",
      "Componentes reutilizables y estructura escalable",
      "Experiencia mobile-first",
    ],
    tech: ["React", "JavaScript", "Context API", "CSS"],
    demo: "https://unique-brigadeiros-57d756.netlify.app/",
  },
  {
    title: "Porta de Pelis",
    description:
      "Aplicación web para explorar y buscar películas consumiendo una API externa, con renderizado dinámico y manejo de estados.",
    highlights: [
      "Manejo de estados de carga y error",
      "Interfaz responsive para mobile y desktop",
    ],
    tech: ["HTML", "JavaScript", "CSS"],
    demo: "https://portadepelis.netlify.app/",
  },
];

export default function DeployNetlify() {
  return (
    <section id="proyectos" className="py-16">
      <Container>
        <h3 className="text-2xl font-semibold text-center mb-3">
          Proyectos en Producción
        </h3>

        <p className="text-center text-gray-500 max-w-2xl mx-auto mb-12">
          Proyectos reales desarrollados con foco en buenas prácticas,
          rendimiento y experiencia de usuario.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold">{project.title}</h4>

              <p className="text-gray-500 mt-3">{project.description}</p>

              <ul className="mt-4 text-sm text-gray-600 dark:text-gray-300 space-y-2">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="mt-1">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-center font-semibold"
                >
                  Ver demo →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
