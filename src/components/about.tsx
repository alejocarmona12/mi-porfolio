import { motion, useMotionValue, useTransform } from "framer-motion";
import { Terminal, Code, Server, Award } from "lucide-react";
import Container from "../layout/container";

export default function About() {
  // Valores para el efecto de inclinación (Tilt) 3D con el mouse en la tarjeta de stats
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Mapeamos el movimiento a rotación física leve para darle profundidad
  const rotateX = useTransform(y, [-200, 200], [10, -10]);
  const rotateY = useTransform(x, [-200, 200], [-10, 10]);

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

  const focusPoints = [
    {
      icon: <Code className="text-blue-400 w-4 h-4" />,
      text: "Interfaces modernas y responsivas",
    },
    {
      icon: <Terminal className="text-cyan-400 w-4 h-4" />,
      text: "Foco en buenas prácticas y clean code",
    },
    {
      icon: <Server className="text-purple-400 w-4 h-4" />,
      text: "Ampliando conocimientos en el ecosistema Node.js",
    },
  ];

  return (
    <section
      id="sobre-mi"
      className="py-20 md:py-24 bg-black overflow-hidden select-none relative"
    >
      {/* Background Glow sutil para ambientación espacial */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 blur-3xl rounded-full" />
      </div>

      <Container>
        <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-10 lg:gap-14 items-center">
          {/* COLUMNA IZQUIERDA: Texto Narrativo Profesional */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-widest mb-3">
              <span>// Mi Trayectoria</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Diseñando el futuro de la web,{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                un componente a la vez.
              </span>
            </h2>

            <div className="mt-6 space-y-4 text-gray-400 leading-relaxed text-base md:text-lg">
              <p>
                Soy{" "}
                <strong className="text-white font-medium">
                  desarrollador FULL STACK
                </strong>{" "}
                con experiencia práctica construyendo aplicaciones web
                interactivas. Me apasiona transformar ideas complejas en
                interfaces refinadas, priorizando siempre la experiencia del
                usuario.
              </p>
              <p>
                Actualmente estoy profundizando mis conocimientos en la
                arquitectura{" "}
                <strong className="text-white font-medium">Backend</strong>{" "}
                utilizando <strong className="text-purple-400">Node.js</strong>,{" "}
                <strong className="text-purple-400">Express</strong> y{" "}
                <strong className="text-purple-400">MongoDB</strong>. Para crear
                soluciones cada vez más eficientes, escalables y robustas.
              </p>
            </div>

            {/* Listado de focos clave */}
            <ul className="mt-6 space-y-3">
              {focusPoints.map((point, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-sm text-gray-300 font-medium"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/5">
                    {point.icon}
                  </div>
                  {point.text}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* COLUMNA DERECHA */}
          <div
            className="relative flex justify-center lg:justify-end cursor-grab active:cursor-grabbing"
            style={{ perspective: "1000px" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 60, damping: 20 }}
              className="relative w-full max-w-[420px] overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/80 p-8 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,0.8)]"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none" />

              <div
                style={{ transform: "translateZ(30px)" }}
                className="relative"
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20">
                    <Award className="w-8 h-8 text-blue-400" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Alejo Carmona
                    </h3>
                    <p className="text-sm text-zinc-400">
                      Full Stack Developer Jr.
                    </p>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">📍 Ubicación</span>
                    <span className="text-white">Tucumán, Argentina</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">💼 Perfil</span>
                    <span className="text-blue-400">Full Stack Developer Jr.</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">🌎 Modalidad</span>
                    <span className="text-white">Remoto / Presencial</span>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-sm font-semibold text-white mb-4">
                    Tecnologías principales
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs">
                      React
                    </span>

                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs">
                      TypeScript
                    </span>

                    <span className="px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 text-xs">
                      JavaScript
                    </span>

                    <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-xs">
                      Node.js
                    </span>

                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs">
                      MongoDB
                    </span>

                    <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs">
                      Tailwind CSS
                    </span>
                  </div>
                </div>

                <div className="mt-8 rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                  <p className="text-sm leading-relaxed text-zinc-300">
                    Buscando mi primera oportunidad profesional para aportar
                    valor, seguir aprendiendo y participar en el desarrollo de
                    productos modernos utilizando tecnologías web actuales.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
