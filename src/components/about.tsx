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
      className="py-32 bg-black overflow-hidden select-none relative"
    >
      {/* Background Glow sutil para ambientación espacial */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 blur-3xl rounded-full" />
      </div>

      <Container>
        <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-12 lg:gap-20 items-center">
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
                  desarrollador Frontend
                </strong>{" "}
                en formación, con experiencia práctica construyendo aplicaciones
                web interactivas. Me apasiona transformar ideas complejas en
                interfaces refinadas, priorizando siempre la experiencia del
                usuario.
              </p>
              <p>
                Actualmente estoy expandiendo mis horizontes técnicos hacia la
                arquitectura del{" "}
                <strong className="text-white font-medium">Backend</strong>{" "}
                utilizando <strong className="text-purple-400">Node.js</strong>,{" "}
                <strong className="text-purple-400">Express</strong> y{" "}
                <strong className="text-purple-400">MongoDB</strong>. Mi meta
                definitiva es consolidarme como desarrollador Full Stack de
                punta a punta.
              </p>
            </div>

            {/* Listado de focos clave */}
            <ul className="mt-8 space-y-3.5">
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

          {/* COLUMNA DERECHA: Tarjeta Holográfica 3D (GitHub Stats Reales) */}
          <div
            className="relative flex justify-center lg:justify-end cursor-grab active:cursor-grabbing"
            style={{ perspective: "1000px" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Tarjeta Monolítica */}
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 60, damping: 20 }}
              className="relative w-full max-w-[380px] rounded-3xl border border-white/10 bg-zinc-950 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.8)] border-t-white/20 overflow-hidden"
            >
              {/* Reflejo Holográfico Interno */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/5 pointer-events-none" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:15px_15px] pointer-events-none" />

              {/* Cabecera de la Tarjeta estilo Editor */}
              <div
                style={{ transform: "translateZ(35px)" }}
                className="flex items-center justify-between border-b border-white/5 pb-4 transition-transform duration-200"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                  <span className="text-xs font-mono text-gray-500 ml-1">
                    stats.json
                  </span>
                </div>
                <Award className="w-4 h-4 text-purple-400 animate-pulse" />
              </div>

              {/* Estadísticas Reales en Bloques Flotantes */}
              <div
                style={{ transform: "translateZ(25px)" }}
                className="mt-6 space-y-3 transition-transform duration-200"
              >
                {/* Repositorios */}
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors flex justify-between items-center group">
                  <span className="text-xs text-gray-400 font-mono">
                    "repositorios_publicos"
                  </span>
                  <span className="text-sm font-bold text-white font-mono bg-white/5 px-2 py-0.5 rounded-md border border-white/5 group-hover:text-purple-400 transition-colors">
                    7
                  </span>
                </div>

                {/* Logros */}
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors flex flex-col gap-2">
                  <span className="text-xs text-gray-400 font-mono">
                    "logros_github"
                  </span>
                  <div className="flex flex-wrap gap-1.5 mt-0.5">
                    <span className="text-[10px] px-2 py-0.5 rounded-md border border-purple-500/20 bg-purple-500/5 text-purple-300 font-medium">
                      ⚓ Pull Shark
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-md border-blue-500/20 bg-blue-500/5 text-blue-300 font-medium">
                      🚀 YOLO Achievement
                    </span>
                  </div>
                </div>

                {/* Rol de Contribución */}
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors flex justify-between items-center group">
                  <span className="text-xs text-gray-400 font-mono">
                    "contribuciones_2026"
                  </span>
                  <span className="text-xs font-semibold text-emerald-400 font-mono">
                    ACTIVE_DEV
                  </span>
                </div>
              </div>

              {/* Pie de Tarjeta decorativo */}
              <div
                style={{ transform: "translateZ(15px)" }}
                className="mt-6 text-right text-[10px] font-mono text-gray-600 transition-transform duration-200"
              >
                // Actualizado via GitHub API
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
