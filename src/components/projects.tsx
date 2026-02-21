import { useGithubRepos } from "../hooks/usegithubRepos";
import Container from "../layout/container";

export default function Projects() {
  const { repos, loading, error } = useGithubRepos("alejocarmona12");

  return (
    <section className="py-12">
      <Container>
        <h3 className="text-2xl font-semibold text-center mb-8">Proyectos</h3>

        {error && <p className="text-center text-red-500">{error}</p>}

        <div className="grid md:grid-cols-3 gap-6">
          {loading
            ? "Cargando..."
            : repos.slice(0, 6).map((repo) => (
                <article
                  key={repo.id}
                  className="bg-white rounded-xl shadow p-6"
                >
                  <h4 className="font-semibold text-lg">{repo.name}</h4>
                  <p className="text-gray-500 mt-2">
                    {repo.description || "Repositorio del proyecto"}
                  </p>

                  <a
                    href={repo.html_url}
                    target="_blank"
                    className="text-blue-600 font-semibold mt-4 inline-block"
                  >
                    Ver en GitHub →
                  </a>
                </article>
              ))}
        </div>
      </Container>
    </section>
  );
}
