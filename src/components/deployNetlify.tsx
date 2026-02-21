import { motion } from "framer-motion";
import Container from "../layout/container";

const projects = [
  {
    title: "Financial Dashboard",
    description:
      "Panel de control financiero desarrollado en React. Permite visualizar ingresos, gastos y métricas con gráficos dinámicos.",
    tech: ["React", "TypeScript", "Recharts", "CSS"],
    demo: "https://alejo-financial-dashboard.netlify.app/",
  },
  {
    title: "Ecommerce Brigadeiros",
    description:
      "Aplicación E-commerce con carrito de compras, componentes reutilizables y arquitectura lista para backend real.",
    tech: ["React", "JavaScript", "Context API", "CSS"],
    demo: "https://unique-brigadeiros-57d756.netlify.app/",
  },
];

export default function DeployNetlify() {
  return (
    <section id="proyectos" className="py-16">
      <Container>
        <h3 className="text-2xl font-semibold text-center mb-12">
          Proyectos en Producción
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
            >
              <h4 className="text-xl font-semibold">{project.title}</h4>

              <p className="text-gray-500 mt-3 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-center"
              >
                Ver Proyecto Online →
              </a>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
