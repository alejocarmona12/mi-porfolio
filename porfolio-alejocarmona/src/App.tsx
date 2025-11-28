import { useState, useEffect } from "react";
import "./App.css";
import foto from "./images/foto-alejocarmona.jpg";
import imagen from "./images/logo de react.png";
import logots from "./images/Typescript_logo_2020.svg.png";
import logojs from "./images/JavaScript-logo.png";
import logohtmlcss from "./images/logo-html-css.jpg";
import logogithub from "./images/logo-git-github.png";

// Tipado del response de la API de GitHub
interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
}

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  // Cargar repos automáticamente
  const loadRepos = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://api.github.com/users/alejocarmona12/repos"
      );

      if (!response.ok) throw new Error("Error al cargar repos de GitHub");

      const data = await response.json();
      setRepos(data);
    } catch (err) {
      setError("No se pudieron cargar los repositorios.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRepos();
  }, []);

  return (
    <div className={darkMode ? "container dark" : "container"}>
      
      {/* HEADER */}
      <header>
        <nav>
          <h1>Mi Portfolio</h1>
          <button onClick={() => setDarkMode((d) => !d)}>
            {darkMode ? "🌞" : "🌙"}
          </button>
        </nav>
      </header>

      {/* MAIN */}
      <main>

        {/* HERO */}
        <section className="hero">
          <img
            src={foto}
            alt="Foto de Alejo Carmona"
            height={50}
            className="profile-photo"
          />

          <h2>Hola, soy Alejo Carmona — Full Stack JR</h2>
          <p>Construyo aplicaciones con React + TypeScript</p>

          <a
            className="btn"
            href="/cv-alejo.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Mi Curriculum Vitae
          </a>
        </section>

        {/* SKILLS */}
        <div className="habilidades">
          <h3>Habilidades</h3>
        </div>

        <section className="skills">
          <div className="react">
            <img src={imagen} alt="logo de react" width={140} />
            <p><b>React</b></p>
          </div>

          <div className="typeScrip">
            <img src={logots} alt="logo de TS" width={100} />
            <p><b>TypeScript</b></p>
          </div>

          <div className="javaScrip">
            <img src={logojs} alt="logo de js" width={100} />
            <p><b>JavaScript</b></p>
          </div>

          <div className="htmlcss">
            <img src={logohtmlcss} alt="logo de html&css" width={150} />
            <p><b>HTML & CSS</b></p>
          </div>

          <div className="gitgithub">
            <img src={logogithub} alt="logo de git-github" width={200} />
            <p><b>Git - GitHub</b></p>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="projects" id="projects">
          <h3>Proyectos</h3>

          {error && <p className="error">{error}</p>}

          <div className="projects-grid">
            {loading ? (
              <p className="loading">Cargando proyectos desde GitHub...</p>
            ) : repos.length > 0 ? (
              repos.slice(0, 6).map((repo) => (
                <article key={repo.id} className="project-card">
                  <h4>{repo.name}</h4>
                  <p>{repo.description || " "}</p>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver en GitHub →
                  </a>
                </article>
              ))
            ) : (
              <p>No se encontraron proyectos.</p>
            )}
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact">
          <h3>Contacto</h3>

          <div className="gmail">
            <p>
              Gmail:{" "}
              <a href="mailto:alejocarmona224@gmail.com">
                alejocarmona224@gmail.com
              </a>
            </p>
          </div>

          <div className="telefono">
            <p>
              Tel: <a href="tel:3815298430">381-529-8430</a>
            </p>
          </div>

          <div className="linkedin">
            <p>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/alejo-carmona-b66952228/"
                target="_blank"
                rel="noreferrer"
              >
                alejocarmona
              </a>
            </p>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer>
        <p>© alejocarmona - 2025</p>
      </footer>

    </div>
  );
};

export default App;
