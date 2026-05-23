import { motion } from "framer-motion";
import Container from "../layout/container";

export default function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Sobre mí", href: "#sobre-mi" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative mt-40 border-t border-white/5 bg-[#030303] overflow-hidden select-none"
    >
      {/* Brillo de fondo sutil descentrado */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-blue-500/[0.03] blur-[120px] rounded-full pointer-events-none" />

      {/* Patrón de grilla tecnológica */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <Container>
        <div className="py-20 flex flex-col items-center text-center space-y-8 relative z-10">
          {/* Badge de Disponibilidad */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/10 bg-emerald-500/[0.02] text-[10px] font-mono text-emerald-400 tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,1)]" />
            All systems operational
          </div>

          {/* Bloque de Identidad */}
          <div className="space-y-1">
            <p className="text-2xl font-extrabold text-white tracking-tight bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
              Alejo Carmona
            </p>
            <p className="text-[10px] font-mono text-blue-400 tracking-[0.25em] uppercase pl-[0.25em]">
              Full Stack Developer
            </p>
          </div>

          {/* Menú de Navegación Refinado */}
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-zinc-400 font-medium">
            {quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="transition-colors duration-300 hover:text-white relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Línea divisoria elegante a lo ancho */}
          <div className="w-full max-w-xs border-t border-white/5 pt-4" />

          {/* Créditos Finales */}
          <div className="text-[10px] font-mono text-zinc-600 tracking-wider">
            © {year} // Diseñado y desarrollado por Alejo Carmona
          </div>
        </div>
      </Container>
    </motion.footer>
  );
}
