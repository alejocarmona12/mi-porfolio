import { useState, type FormEvent } from "react";
import "./App.css";

// proyectos
const sampleProjects = [
  {
    id: 1,
    title: "Dashboard de Ventas",
    description: "App de panel con gráficos en tiempo real y autenticación.",
    demo: "#"
  },
  {
    id: 2,
    title: "Tienda Ecommerce",
    description: "Tienda con carrito, filtros y pasarela de pago (simulada).",
    demo: "#"
  },
  // extra test case / example
  {
    id: 3,
    title: "Blog Personal",
    description: "Plataforma de posts con editor en Markdown y paginación.",
    demo: "#"
  }
];
// formulario
const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // For now we just log the values; in a real app we'd send to an API.
    const form = e.currentTarget;
    const formData = new FormData(form);
    // build a simple object to inspect in console (keeps component self-contained)
    const payload: Record<string, string> = {};
    formData.forEach((value, key) => { payload[key] = String(value); });
    // eslint-disable-next-line no-console
    console.log("Contact form submit:", payload);
    alert("Mensaje enviado (simulado). Revisa la consola para ver el payload.");
    form.reset();
  }

  return (
    <div className={darkMode ? "container dark" : "container"}>
      {/* Inject CSS to avoid relying on external files */}
       

      <header>
        <nav>
          <h1>Mi Portfolio</h1>
          <div>
            <button onClick={() => setDarkMode((d) => !d)} aria-label="Alternar modo">
              {darkMode ? "🌞" : "🌙"}
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h2>Hola, me llamo Alejo Carmona  Desarrollador Full Stack JR </h2>
          <p>Construyo aplicaciones web  React y TypeScript</p>
          <a href="/cv.pdf" download className="btn">Descargar CV </a>
        </section>

        <section className="skills">
          <h3>Habilidades</h3>
          <div className="skills-grid">
            <div className="skill-item">⚛️ React</div>
            <div className="skill-item">💙 TypeScript</div>
            <div className="skill-item">🟨 JavaScript</div>
            <div className="proyecosx">🌐 HTML & CSS</div>
            <div className="skill-item">🔥 Firebase</div>
            <div className="skill-item">🐙 Git & GitHub</div>
          </div>
        </section>

        <section className="projects">
          <h3>Proyectos</h3>
          <div className="projects-grid">
            {sampleProjects.map((p) => (
              <article key={p.id} className="project-card">
                <h4>{p.title}</h4>
                <p>{p.description}</p>
                <p style={{ marginTop: 12 }}>
                  <a href={p.demo} target="_blank" rel="noreferrer">Ver demo</a>
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact">
          <h3>Contacto</h3>
          <form onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="Nombre" required />
            <input name="email" type="email" placeholder="Correo" required />
            <textarea name="message" placeholder="Tu mensaje" required rows={5}></textarea>
            <button type="submit">Enviar</button>
          </form>
        </section>
      </main>

      <footer>
        <p>© alejocarmona-2025</p>
      </footer>
    </div>
  );
};

export default App;
