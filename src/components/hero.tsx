import { motion } from "framer-motion";
import foto from "../images/foto-alejocarmona.jpg";
import Container from "../layout/container";

export default function Hero() {
  return (
    <section id="inicio" className="py-20">
      <Container>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="text-sm font-semibold text-blue-600"
            >
              Disponible para Jr / Trainee
            </motion.p>

            <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
              Construyo interfaces rápidas y modernas con React.
            </h2>

            <p className="mt-5 text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
              Soy <strong>Alejo Carmona</strong>, Frontend Developer en
              formación. Desarrollo proyectos con React y TypeScript,
              consumiendo APIs y cuidando la experiencia de usuario. Actualmente
              aprendiendo Node.js y MongoDB para crecer hacia Full Stack.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#proyectos"
                className="px-6 py-3 rounded-2xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition text-center"
              >
                Ver proyectos →
              </a>
              <a
                href="#contacto"
                className="px-6 py-3 rounded-2xl border border-gray-300 dark:border-gray-700 font-semibold hover:bg-gray-50 dark:hover:bg-gray-900 transition text-center"
              >
                Contacto
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <motion.img
              src={foto}
              alt="Alejo Carmona"
              className="w-44 h-44 md:w-56 md:h-56 rounded-3xl shadow-lg object-cover"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45 }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
