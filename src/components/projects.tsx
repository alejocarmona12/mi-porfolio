import { motion } from "framer-motion";
import { useGithubRepos } from "../hooks/usegithubRepos";
import Container from "../layout/container";

export default function Projects() {
  const { repos, loading, error } = useGithubRepos("alejocarmona12");

  return (
    <section id="proyectos" className="py-16">
      <Container>
        <div className="text-center mb-12">
          <h3 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Proyectos
          </h3>
          <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Proyectos en producción y repositorios seleccionados. Foco en UI,
            performance y código mantenible.
          </p>
        </div>

        {error && <p className="text-center text-red-500 mb-6">{error}</p>}

        <div className="grid md:grid-cols-3 gap-6">
          {loading &&
            Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/40 p-6 animate-pulse"
              >
                <div className="h-5 w-2/3 bg-gray-200 dark:bg-gray-700 rounded" />
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mt-4" />
                <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded mt-2" />
                <div className="h-10 w-28 bg-gray-200 dark:bg-gray-700 rounded mt-6" />
              </div>
            ))}

          {!loading &&
            repos.slice(0, 6).map((repo) => (
              <motion.article
                key={repo.id}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/40 p-6 hover:shadow-lg transition flex flex-col"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold text-lg text-gray-900 dark:text-white">
                  {repo.name}
                </h4>

                <p className="mt-2 text-gray-600 dark:text-gray-300 flex-grow">
                  {repo.description?.trim() ||
                    "Proyecto desarrollado con foco en buenas prácticas y escalabilidad."}
                </p>

                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                >
                  Ver código →
                </a>
              </motion.article>
            ))}
        </div>
      </Container>
    </section>
  );
}
