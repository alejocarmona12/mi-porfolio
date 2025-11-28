import { useState, useEffect } from "react";
import "./App.css";
// logos fotos
import foto from "./images/foto-alejocarmona.jpg";
import reactLogo from "./images/logo de react.png";
import tsLogo from "./images/Typescript_logo_2020.svg.png";
import jsLogo from "./images/JavaScript-logo.png";
import htmlCssLogo from "./images/logo-html-css.jpg";
import gitLogo from "./images/logo-git-github.png";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/alejocarmona12/repos")
      .then((res) => res.json())
      .then((data) =>
        Array.isArray(data)
          ? setRepos(data)
          : setError("No se pudieron cargar los repositorios.")
      )
      .catch(() => setError("No se pudieron cargar los repositorios."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className={darkMode ? "container dark" : "container"}>
      {/* NAVBAR */}
      <header className="header fade-in">
        <nav className="navbar">
          <h1 className="logo">Portfolio - Alejo Carmona</h1>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="dark-toggle"
            aria-label="Cambiar modo oscuro"
          >
            {darkMode ? "🌞" : "🌙"}
          </button>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="hero fade-in">
          <img
            src={foto}
            alt="Foto de Alejo Carmona"
            className="profile-photo"
          />

          <h2>
            Hola, soy <span className="highlight">Alejo Carmona</span>
          </h2>

          <h3 className="subtitle">
            Desarrollador Frontend | React + TypeScript
          </h3>

          <p className="description">
            Construyo interfaces modernas, rápidas y enfocadas en experiencias
            reales para usuarios.
          </p>

          <a
            href="/cv-alejo.pdf"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            📄 Ver Curriculum
          </a>
        </section>

        {/* SOBRE MI */}
        <section className="about-section fade-in">
          <h3 className="section-title">Sobre mí</h3>
          <p>
            Soy un desarrollador Frontend con enfoque en la construcción de
            interfaces modernas y funcionales utilizando React, TypeScript y
            JavaScript. He desarrollado proyectos como un ecommerce completo, un
            carrito de compras y un portal de películas, incorporando diseño,
            responsivo y buenas prácticas de desarrollo. Aunque aún no cuento
            con experiencia laboral formal, mantengo un compromiso constante con
            mi formación y me encuentro preparado para integrarme a un equipo
            donde pueda aportar valor y continuar desarrollándome
            profesionalmente.
          </p>
        </section>

        {/* PROYECTO DESTACADO */}
        <section className="featured-section fade-in">
          <h3 className="section-title">Proyecto Destacado</h3>

          <div className="featured-card">
            {/* <img src={destacado} alt="Proyecto destacado" className="featured-img" /> */}

            <div className="featured-info">
              <h4>Ecommerce Completo</h4>
              <p>
                Proyecto construido con React + JavaScrip, manejo de carrito,
                Optimizado para usabilidad y rendimiento.
              </p>

              <div className="featured-buttons">
                <a
                  className="btn"
                  href="https://unique-brigadeiros-57d756.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver Demo
                </a>

                <a
                  className="btn secondary"
                  href="https://github.com/alejocarmona12"
                  target="_blank"
                  rel="noreferrer"
                >
                  Código
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="skills-section fade-in">
          <h3 className="section-title">Habilidades</h3>

          <div className="skills-grid">
            <div className="skill-card">
              <img src={reactLogo} alt="React" />
              <p>React</p>
            </div>
            <div className="skill-card">
              <img src={tsLogo} alt="TypeScript" />
              <p>TypeScript</p>
            </div>
            <div className="skill-card">
              <img src={jsLogo} alt="JavaScript" />
              <p>JavaScript</p>
            </div>
            <div className="skill-card">
              <img src={htmlCssLogo} alt="HTML CSS" />
              <p>HTML & CSS</p>
            </div>
            <div className="skill-card">
              <img src={gitLogo} alt="GitHub" />
              <p>Git & GitHub</p>
            </div>
          </div>
        </section>

        {/* PROYECTOS githubç */}
        <section className="projects-section fade-in">
          <h3 className="section-title">Proyectos</h3>

          {error && <p className="error">{error}</p>}

          <div className="projects-grid">
            {loading ? (
              <p className="loading">Cargando proyectos...</p>
            ) : repos.length ? (
              repos.slice(0, 6).map((repo) => (
                <article className="project-card" key={repo.id}>
                  <h4>{repo.name}</h4>
                  <p>{repo.description || "Proyectos "}</p>

                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    Ver en GitHub →
                  </a>
                </article>
              ))
            ) : (
              <p>No hay proyectos disponibles.</p>
            )}
          </div>
        </section>

        {/* CONTACTO */}
        <section className="contact-section fade-in">
          <h3 className="section-title">Contacto</h3>

          <div className="contact-card">
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:alejocarmona224@gmail.com">
                alejocarmona224@gmail.com
              </a>
            </p>
            <p>
              <strong>Teléfono:</strong>{" "}
              <a href="tel:3815298430">381-529-8430</a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/alejo-carmona-b66952228/"
                target="_blank"
              >
                alejocarmona
              </a>
            </p>
            <p>
              <strong>GitHub</strong>{" "}
              <a href="" target="_blank">
                alejocarmona
              </a>
            </p>
          </div>
        </section>
      </main>

      <footer className="footer fade-in">
        <p>© 2025 - Alejo Carmona</p>
      </footer>
    </div>
  );
}
