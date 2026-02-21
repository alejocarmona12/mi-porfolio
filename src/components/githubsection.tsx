import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Container from "../layout/container";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
}

export default function GithubSection() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/alejocarmona12/repos")
      .then((res) => res.json())
      .then((data) => setRepos(data))
      .catch(() => console.error("Error cargando repos"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="github" className="py-16">
      <section className="py-16">
        <Container>
          <h3 className="text-2xl font-semibold text-center mb-10">
            Código en GitHub
          </h3>

          <p className="text-center text-gray-500 mb-10">
            Algunos de mis repositorios y prácticas de desarrollo.
          </p>

          {loading ? (
            <p className="text-center">Cargando repositorios...</p>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {repos.slice(0, 6).map((repo) => (
                <motion.article
                  key={repo.id}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow p-6"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <h4 className="font-semibold text-lg">{repo.name}</h4>

                  <p className="text-gray-500 mt-2">
                    {repo.description || "Repositorio del proyecto"}
                  </p>

                  {repo.language && (
                    <span className="inline-block mt-3 text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                      {repo.language}
                    </span>
                  )}

                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="block mt-5 text-blue-600 font-semibold"
                  >
                    Ver código →
                  </a>
                </motion.article>
              ))}
            </div>
          )}
        </Container>
      </section>
    </section>
  );
}
