import { motion } from "framer-motion";
import foto from "../images/foto-alejocarmona.jpg";
import Container from "../layout/container";

export default function Hero() {
  return (
    <section id="inicio" className="text-center py-16">
      <section className="min-h-[calc(100vh-80px)] flex items-center">
        <Container>
          <div className="text-center">
            <motion.img
              src={foto}
              alt="Alejo Carmona"
              className="w-36 h-36 mx-auto rounded-full shadow-lg object-cover"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            />

            <h2 className="text-4xl font-bold mt-6">
              Hola, soy <span className="text-blue-600">Alejo Carmona</span>
            </h2>

            <h3 className="text-lg mt-4 text-gray-500">
              Desarrollador Full Stack en formación | React · Node.js · MongoDB
            </h3>

            <p className="max-w-xl mx-auto mt-6 leading-relaxed">
              Construyo aplicaciones web modernas enfocadas en rendimiento y
              experiencia de usuario. Actualmente desarrollo proyectos Full
              Stack integrando React, APIs con Node.js y MongoDB.
            </p>
          </div>
        </Container>
      </section>
    </section>
  );
}
