import { useState } from "react";
import { motion } from "framer-motion";
import Container from "../layout/container";
import Logo from "../images/logo-alejocarmona.png";

export default function Navbar() {
  const [] = useState(false);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 backdrop-blur bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700"
    >
      <Container>
        <nav className="flex justify-between items-center py-4">
          {/* Logo / Nombre */}
          <div className="flex items-center gap-3">
            <img
              src={Logo}
              alt="Logo Alejo Carmona"
              className="w-12 h-12 object-contain"
            />

            <h1 className="font-semibold text-lg tracking-wide">
              Alejo Carmona
            </h1>
          </div>

          {/* Menú */}
          <div className="flex items-center gap-8 text-sm font-medium">
            <a href="#inicio" className="hover:text-blue-600 transition">
              Inicio
            </a>

            <a href="#proyectos" className="hover:text-blue-600 transition">
              Proyectos
            </a>

            <a href="#github" className="hover:text-blue-600 transition">
              GitHub
            </a>

            <a href="#contacto" className="hover:text-blue-600 transition">
              Contacto
            </a>

            {/* Botón GitHub  */}
            <a
              href="https://github.com/alejocarmona12"
              target="_blank"
              rel="noreferrer"
              className="bg-gray-900 hover:bg-black text-white px-4 py-2 rounded-lg text-sm transition"
            >
              Mi GitHub
            </a>
          </div>
        </nav>
      </Container>
    </motion.header>
  );
}
