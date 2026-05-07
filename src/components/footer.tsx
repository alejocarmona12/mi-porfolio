import { motion } from "framer-motion";
import Container from "../layout/container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mt-24 border-t border-gray-200 dark:border-gray-800"
    >
      <Container>
        <div className="py-12 text-center space-y-4">
          {/* Nombre */}
          <p className="text-lg font-semibold text-gray-900 dark:text-white tracking-tight">
            Alejo Carmona
          </p>

          {/* Descripción */}
          <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-md mx-auto">
            Frontend Developer en crecimiento, enfocado en construir interfaces
            modernas y escalables. En camino a Full Stack.
          </p>

          {/* Tech line */}
          <p className="text-xs text-gray-400">
            React · TypeScript · JavaScript
          </p>

          {/* Copyright */}
          <div className="pt-4 text-[11px] text-gray-400">
            © {year} Alejo Carmona · React, typeScript & Tailwind CSS
          </div>
        </div>
      </Container>
    </motion.footer>
  );
}
