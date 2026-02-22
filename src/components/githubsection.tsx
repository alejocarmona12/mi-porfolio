import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Container from "../layout/container";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork: boolean;
  archived: boolean;
  homepage: string | null;
}

export default function GithubSection() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadRepos() {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(
          "https://api.github.com/users/alejocarmona12/repos?per_page=100&sort=updated",
          { signal: controller.signal },
        );

        if (!res.ok) throw new Error("No se pudieron cargar los repositorios.");

        const data = (await res.json()) as Repo[];
        setRepos(Array.isArray(data) ? data : []);
      } catch (e: any) {
        if (e?.name === "AbortError") return;
        setError("Error cargando repositorios. Probá de nuevo más tarde.");
      } finally {
        setLoading(false);
      }
    }

    loadRepos();
    return () => controller.abort();
  }, []);

  const topRepos = useMemo(() => {
    // Filtra repos que suelen “ensuciar” el portfolio
    const cleaned = repos
      .filter((r) => !r.fork && !r.archived)
      .filter((r) => r.name.toLowerCase() !== "alejocarmona12") // por si existe repo perfil
      .sort((a, b) => {
        // prioriza actividad + señales de interés
        const scoreA =
          new Date(a.updated_at).getTime() + a.stargazers_count * 1_000_000;
        const scoreB =
          new Date(b.updated_at).getTime() + b.stargazers_count * 1_000_000;
        return scoreB - scoreA;
      });

    return cleaned.slice(0, 6);
  }, [repos]);

  const formatDate = (iso: string) => {
    try {
      return new Date(iso).toLocaleDateString("es-AR", {
        year: "numeric",
        month: "short",
        day: "2-digit",
      });
    } catch {
      return "";
    }
  };

  return (
    <section id="github" className="py-16">
      <Container>
        <h3 className="text-2xl font-semibold text-center mb-3">
          Código en GitHub
        </h3>

        <p className="text-center text-gray-500 max-w-2xl mx-auto mb-10">
          Repositorios seleccionados con proyectos y prácticas. Priorizo código
          ordenado, componentes reutilizables y buenas prácticas.
        </p>

        {loading ? (
          <div className="grid md:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 animate-pulse"
              >
                <div className="h-5 w-2/3 bg-gray-200 dark:bg-gray-700 rounded" />
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mt-4" />
                <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded mt-2" />
                <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded mt-4" />
                <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded mt-5" />
              </div>
            ))}
          </div>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <>
            <div className="grid md:grid-cols-3 gap-6">
              {topRepos.map((repo) => (
                <motion.article
                  key={repo.id}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.03 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="font-semibold text-lg leading-tight">
                      {repo.name}
                    </h4>

                    {(repo.stargazers_count > 0 || repo.forks_count > 0) && (
                      <div className="text-xs text-gray-500 whitespace-nowrap">
                        {repo.stargazers_count > 0 && (
                          <span>★ {repo.stargazers_count}</span>
                        )}
                        {repo.forks_count > 0 && (
                          <span className="ml-2">⑂ {repo.forks_count}</span>
                        )}
                      </div>
                    )}
                  </div>

                  <p className="text-gray-500 mt-2 flex-grow">
                    {repo.description?.trim() ||
                      "Proyecto disponible en GitHub."}
                  </p>

                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                      {repo.language || "Sin lenguaje"}
                    </span>

                    <span className="text-xs text-gray-400">
                      Actualizado: {formatDate(repo.updated_at)}
                    </span>
                  </div>

                  <div className="mt-5 flex gap-3">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold"
                    >
                      Ver código →
                    </a>

                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 text-center border border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 px-4 py-2 rounded-lg font-semibold"
                      >
                        Demo
                      </a>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="mt-10 text-center">
              <a
                href="https://github.com/alejocarmona12"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-gray-300 font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition"
              >
                Ver todos mis repositorios →
              </a>
            </div>
          </>
        )}
      </Container>
    </section>
  );
}
