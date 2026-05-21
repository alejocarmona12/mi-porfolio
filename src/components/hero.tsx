import { motion, useMotionValue, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import foto from "../images/foto-alejocarmona.jpg";
import Container from "../layout/container";

export default function Hero() {
  // Valores para el efecto de inclinación (Tilt) 3D en la foto
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Mapeamos el movimiento a rotación física leve
  const rotateX = useTransform(y, [-300, 300], [15, -15]);
  const rotateY = useTransform(x, [-300, 300], [-15, 15]);

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
      className="relative min-h-screen flex items-center bg-black select-none"
      // 🛠️ SE ELIMINÓ 'overflow-hidden' PARA EVITAR QUE SE CORTEN LOS COMPONENTES ORBITALES INFERIORES
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Main Glow */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-500/10 blur-3xl rounded-full"
        />

        {/* Secondary Glow */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-20 w-[350px] h-[350px] bg-cyan-400/10 blur-3xl rounded-full"
        />

        {/* Grid Espacial */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:30px_30px]" />
      </div>

      <Container>
        <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-12 lg:gap-20 items-center pt-32 pb-20">
          {/* LEFT SIDE: Texts & Actions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge Animado */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-blue-400 text-xs font-mono font-medium shadow-[0_0_20px_rgba(59,130,246,0.05)]">
              <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,1)] animate-pulse" />
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "React & JavaScript Typescript Developer",
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
            <h1 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] text-white">
              Creo experiencias web modernas, enfocadas en rendimiento y{" "}
              <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                escalabilidad.
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-lg text-base md:text-lg leading-relaxed text-gray-400">
              Soy{" "}
              <strong className="text-white font-semibold">
                Alejo Carmona
              </strong>
              , Full Stack Developer enfocado en crear soluciones digitales
              completas, escalables y centradas en el usuario, con visión de
              producto.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#proyectos"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-2xl bg-blue-600 text-white font-semibold shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Ver proyectos →
              </a>

              <a
                href="#contacto"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white font-semibold hover:bg-white/10 hover:border-white/20 active:scale-[0.98] transition-all duration-300"
              >
                Contacto
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE: 3D Parallax Photo */}
          <div
            className="relative flex justify-center lg:justify-end cursor-grab active:cursor-grabbing"
            style={{ perspective: "1000px" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Glow Behind */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[450px] h-[450px] rounded-full bg-blue-500/10 blur-3xl" />
            </div>

            {/* Decorative Orbit Ring */}
            <div className="absolute w-[420px] h-[420px] rounded-full border border-white/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            {/* Monolito de Foto 3D */}
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-72 h-72 md:w-[420px] md:h-[420px] rounded-[48px] border border-white/10 bg-zinc-950 p-3 shadow-[0_30px_80px_rgba(0,0,0,0.8)] border-t-white/20"
            >
              {/* Contenedor de la Imagen con translateZ para flotar */}
              <div
                className="relative w-full h-full rounded-[38px] overflow-hidden group"
                style={{
                  transform: "translateZ(30px)",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Gradiente Protector */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent z-10 pointer-events-none" />

                {/* Cuadrícula interna tecnológica */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:15px_15px] z-10 pointer-events-none" />

                <img
                  src={foto}
                  alt="Alejo Carmona"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
