import Container from "../layout/container";

export default function About() {
  return (
    <section id="sobre-mi" className="py-16">
      <Container>
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6">Sobre mí</h3>

          <p className="max-w-2xl mx-auto leading-relaxed text-gray-600 dark:text-gray-300">
            Soy <strong>desarrollador Frontend</strong> en formación, con
            experiencia práctica construyendo aplicaciones web con{" "}
            <strong>React</strong> y <strong>TypeScript</strong>. Me enfoco en
            crear interfaces modernas, responsivas y mantenibles, priorizando la
            experiencia del usuario y las buenas prácticas.
          </p>

          <p className="max-w-2xl mx-auto leading-relaxed mt-4 text-gray-600 dark:text-gray-300">
            Actualmente estoy ampliando mis conocimientos hacia el{" "}
            <strong>Backend</strong> con <strong>Node.js</strong>,{" "}
            <strong>Express</strong> y <strong>MongoDB</strong>, con el objetivo
            de crecer como <strong>Full Stack</strong> y participar en proyectos
            de punta a punta.
          </p>
        </div>
      </Container>
    </section>
  );
}
