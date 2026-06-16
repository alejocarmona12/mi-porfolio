import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import foto from "../images/fotoalejo.png";
import Container from "../layout/container";

export default function Hero() {
  // Valores base para el efecto de inclinación 3D
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  //  spring para suavizar el movimiento de la foto
  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(
    useTransform(y, [-300, 300], [15, -15]),
    springConfig,
  );
  const rotateY = useSpring(
    useTransform(x, [-300, 300], [-15, 15]),
    springConfig,
  );

  function handleMouseMove(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-[#030303] select-none text-white overflow-x-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Main Glow Aurora */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-blue-600/20 to-cyan-500/0 blur-[140px] rounded-full"
        />

        {/* Secondary Ambient Light */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-10 right-[-5%] w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full"
        />

        {/* Grid Espacial Minimalista */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="z-10"
          >
            {/* Badge Animado */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/5 bg-white/[0.03] backdrop-blur-xl text-blue-400 text-xs font-mono font-medium shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,1)] animate-pulse" />
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "React JavaScript TypeScript Developer",
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
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
              Construyo interfaces web rápidas, escalables y mantenibles con{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
                React y TypeScript.
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-zinc-300 font-normal">
              Soy{" "}
              <strong className="text-zinc-100 font-semibold bg-white/5 px-1.5 py-0.5 rounded border border-white/5">
                Alejo Carmona
              </strong>
              desarrollador full-stack enfocado en construir productos modernos,
              optimizados y fáciles de mantener. Me especializo en React,
              TypeScript y Node.js. arquitectura de interfaces escalables.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-wrap gap-6 items-center">
              <a
                href="#proyectos"
                className="group relative inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white text-black font-semibold tracking-wide overflow-hidden shadow-lg hover:shadow-blue-500/10 transition-all duration-300 active:scale-95"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                <span className="group-hover:text-white transition-colors duration-300">
                  Ver proyectos
                </span>
              </a>

              <a
                href="#contacto"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-md text-zinc-300 font-medium hover:text-white hover:bg-white/5 hover:border-white/20 transition-all duration-300 active:scale-95"
              >
                Contactar
              </a>

              <a
                href="/CV.AlejoCarmona.pdf"
                download="CV.AlejoCarmona.pdf"
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl border border-blue-500/20 bg-blue-500/[0.03] text-blue-400 font-medium hover:bg-blue-500/10 hover:border-blue-500/40 transition-all duration-300 active:scale-95"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform duration-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                <span>Descargar CV</span>
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE: 3D Parallax Photo */}
          <div
            className="relative flex justify-center lg:justify-end cursor-grab active:cursor-grabbing z-10 w-full"
            style={{ perspective: "1200px" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Glow Behind Photo */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[90px]" />
            </div>

            <div className="absolute w-[540px] h-[540px] rounded-full border border-white/[0.02] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden md:block" />

            {/* Monolito de Foto 3D */}
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="
                        relative
                        w-72 h-72
                        sm:w-96 sm:h-96
                        lg:w-[480px] lg:h-[480px]
                        overflow-hidden
                        rounded-3xl
                        border border-blue-500/20
                        bg-zinc-900
                        shadow-[0_0_60px_rgba(59,130,246,0.25)]
                      "
            >
              {/* Glow interno */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-cyan-400/10 pointer-events-none z-10" />

              {/* Borde luminoso */}
              <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none z-10" />

              {/* Reflejo superior */}
              <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white/10 to-transparent pointer-events-none z-10" />

              <img
                src={foto}
                alt="Alejo Carmona"
                className="w-full h-full object-cover select-none transition-transform duration-700 hover:scale-105"
                draggable="false"
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
