import { useState } from "react";
import { motion } from "framer-motion";
import Container from "../layout/container";
import Logo from "../images/logo-alejocarmona.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-gray-950/60 border-b border-gray-200/70 dark:border-gray-800/60"
    >
      <Container>
        <nav className="flex items-center justify-between py-4">
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src={Logo}
              alt="Alejo Carmona"
              className="w-9 h-9 object-contain"
            />
            <span className="font-semibold tracking-tight text-gray-900 dark:text-white">
              Alejo Carmona
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700 dark:text-gray-200">
            <a href="#proyectos" className="hover:text-blue-600 transition">
              Proyectos
            </a>
            <a href="#github" className="hover:text-blue-600 transition">
              GitHub
            </a>
            <a href="#sobre-mi" className="hover:text-blue-600 transition">
              Sobre mí
            </a>
            <a
              href="#contacto"
              className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition font-semibold"
            >
              Contactar →
            </a>
          </div>

          <button
            className="md:hidden text-gray-900 dark:text-white text-2xl"
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Abrir menú"
          >
            ☰
          </button>
        </nav>

        {isOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-3 text-sm font-medium text-gray-700 dark:text-gray-200">
            <a href="#proyectos" onClick={() => setIsOpen(false)}>
              Proyectos
            </a>
            <a href="#github" onClick={() => setIsOpen(false)}>
              GitHub
            </a>
            <a href="#sobre-mi" onClick={() => setIsOpen(false)}>
              Sobre mí
            </a>
            <a
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="mt-2 px-4 py-2 rounded-xl bg-blue-600 text-white text-center font-semibold"
            >
              Contactar →
            </a>
          </div>
        )}
      </Container>
    </motion.header>
  );
}
