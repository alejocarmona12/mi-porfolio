import Container from "../layout/container";

export default function About() {
  return (
    <section className="py-16">
      <Container>
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6">Sobre mí</h3>

          <p className="max-w-2xl mx-auto leading-relaxed">
            Soy desarrollador orientado a Full Stack, con base sólida en React,
            JavaScrip y TypeScript. Actualmente estoy ampliando mis
            conocimientos en backend con Node.js, Express y MongoDB.
          </p>
        </div>
      </Container>
    </section>
  );
}
