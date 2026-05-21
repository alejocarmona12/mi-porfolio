import { motion } from "framer-motion";
import Container from "../layout/container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative mt-32 border-t border-white/5 bg-black overflow-hidden select-none"
    >
      {/* Patrón de fondo tecnológico sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <Container>
        <div className="py-12 flex flex-col items-center text-center space-y-5 relative z-10">
          {/* Indicador de Estado / Disponibilidad */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/10 bg-emerald-500/[0.02] text-[10px] font-mono text-emerald-400 tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,1)]" />
            All systems operational
          </div>

          {/* Nombre con gradiente sutil */}
          <p className="text-xl font-bold text-white tracking-tight bg-gradient-to-r from-white via-white to-zinc-400 bg-clip-text text-transparent">
            Alejo Carmona
          </p>

          {/* Descripción minimalista */}
          <p className="text-xs md:text-sm text-zinc-400 leading-relaxed max-w-sm mx-auto">
            Frontend Developer enfocado en construir interfaces modernas y
            escalables. En camino a Full Stack.
          </p>

          {/* Línea de Stack en tipografía Mono */}
          <p className="text-[10px] font-mono text-blue-400 tracking-widest uppercase">
            React · TypeScript · Tailwind CSS · Node.js
          </p>

          {/* Separador e información de Copyright */}
          <div className="w-12 border-t border-white/5 pt-2" />

          <div className="text-[10px] font-mono text-zinc-600 tracking-wide">
            © {year} // Diseñado y desarrollado por Alejo Carmona
          </div>
        </div>
      </Container>
    </motion.footer>
  );
}
