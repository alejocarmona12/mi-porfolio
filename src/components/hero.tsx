import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import foto from "../images/foto-alejocarmona.jpg";

import Container from "../layout/container";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="
      relative
  overflow-hidden
  min-h-screen
  flex
  items-center
  bg-gradient-to-b
  from-[#020617]
  via-[#071127]
  to-[#020617]
      "
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Main Glow */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            w-[900px]
            h-[900px]
            bg-blue-500/10
            blur-3xl
            rounded-full
          "
        />

        {/* Secondary Glow */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            top-40
            right-20
            w-[350px]
            h-[350px]
            bg-cyan-400/10
            blur-3xl
            rounded-full
          "
        />

        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(to_right,#94a3b810_1px,transparent_1px),linear-gradient(to_bottom,#94a3b810_1px,transparent_1px)]
            bg-[size:40px_40px]
            opacity-20
          "
        />
      </div>

      <Container>
        <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-20 items-center">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                border
                border-blue-500/20
                bg-white/5
                backdrop-blur-xl
                text-blue-400
                text-sm
                font-medium
              "
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>

              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  2000,
                  "React & TypeScript Developer",
                  2000,
                  "Disponible para proyectos",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor={true}
              />
            </div>

            {/* TITLE */}
            <h1
              className="
                  mt-8
                  font-sans
                  text-3xl md:text-5xl lg:text-6xl
                  font-medium
                  tracking-tight
                  leading-snug
                  text-white
                "
            >
              Creo experiencias web modernas, enfocadas en rendimiento y
              escalabilidad.{" "}
              <span
                className="
                      bg-gradient-to-r
                      from-blue-500
                      to-cyan-400
                      bg-clip-text
                      text-transparent
                      font-medium
                    "
              >
                Full Stack Developer
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mt-8
                max-w-lg
                text-lg
                leading-relaxed
                text-gray-300
              "
            >
              Soy <strong className="text-white">Alejo Carmona</strong>, Full
              Stack Developer enfocado en crear soluciones digitales completas,
              escalables y centradas en el usuario, con una visión de producto y
              enfoque en resultados reales.
            </p>

            {/* TECH STACK
            <div className="mt-8 flex flex-wrap gap-3">
              {["React", "TypeScript", "Tailwind", "Node.js", "MongoDB"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="
                    px-4
                    py-2
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    text-sm
                    text-gray-300
                  "
                  >
                    {tech}
                  </span>
                ),
              )}
            </div> */}

            {/* BUTTONS */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#proyectos"
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-7
                  py-3.5
                  rounded-2xl
                  bg-blue-600
                  text-white
                  font-semibold
                  shadow-lg
                  shadow-blue-500/20
                  hover:bg-blue-700
                  hover:scale-[1.02]
                  transition-all
                  duration-300
                "
              >
                Ver proyectos →
              </a>

              <a
                href="#contacto"
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-7
                  py-3.5
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  text-white
                  font-semibold
                  hover:bg-white/10
                  transition-all
                  duration-300
                "
              >
                Contacto
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Glow Behind */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[550px] h-[550px] rounded-full bg-blue-500/10 blur-3xl"></div>
            </div>

            {/* Decorative Ring */}
            <div className="absolute w-[500px] h-[500px] rounded-full border border-white/10"></div>

            {/* Floating Image */}
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, 1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              {/* Overlay */}
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-t from-black/30 to-transparent z-10"></div>

              <img
                src={foto}
                alt="Alejo Carmona"
                className="
                  relative
                  w-80
                  h-80
                  md:w-[480px]
                  md:h-[480px]
                  object-cover
                  rounded-[40px]
                  border
                  border-white/10
                  shadow-[0_25px_100px_rgba(59,130,246,0.35)]
                  transition-all
                  duration-500
                  hover:scale-[1.02]
                "
              />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="
            absolute
            bottom-10
            left-1/2
            -translate-x-1/2
          "
        >
          <div
            className="
              w-6
              h-10
              rounded-full
              border
              border-white/20
              flex
              justify-center
              p-1
            "
          >
            <div className="w-1 h-2 bg-white/50 rounded-full"></div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
