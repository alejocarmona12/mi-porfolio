import { useEffect, useState, type JSX } from "react";
import { motion } from "framer-motion";
// import { GitHub } from "lucide-react";

import Container from "../layout/container";
import Logo from "../images/logo-alejocarmona.png";

export default function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 px-4"
    >
      <motion.div
        animate={{ width: scrolled ? "78%" : "82%" }}
        transition={{ duration: 0.3 }}
        className={`
          mx-auto mt-4 rounded-2xl border transition-all duration-300

          ${
            scrolled
              ? "border-white/10 bg-[#020617]/70 backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
              : "border-white/5 bg-[#020617]/40 backdrop-blur-xl"
          }
        `}
      >
        <Container>
          <nav className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#inicio" className="flex items-center gap-3 group">
              <img
                src={Logo}
                alt="Alejo Carmona"
                className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
              />

              <span className="text-white font-semibold tracking-tight text-lg">
                Alejo Carmona
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
              <a
                href="#proyectos"
                className="hover:text-white transition-colors"
              >
                Proyectos
              </a>

              <a
                href="https://github.com/alejocarmona12"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                {/* <GitHub size={18} /> */}
                GitHub
              </a>

              <a
                href="#sobre-mi"
                className="hover:text-white transition-colors"
              >
                Sobre mí
              </a>

              <a
                href="#contacto"
                className="px-5 py-2.5 rounded-2xl bg-blue-600 text-white font-semibold shadow-lg shadow-blue-500/20 hover:bg-blue-700 hover:scale-[1.03] transition-all"
              >
                Contactar →
              </a>
            </div>

            {/* Mobile Button */}
            <button
              className="md:hidden text-white text-2xl"
              onClick={() => setIsOpen((v) => !v)}
              aria-label="Abrir menú"
            >
              ☰
            </button>
          </nav>

          {/* Mobile Menu */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mb-4 p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl flex flex-col gap-4 text-sm font-medium text-gray-300"
            >
              <a
                href="#proyectos"
                onClick={() => setIsOpen(false)}
                className="hover:text-white transition"
              >
                Proyectos
              </a>

              <a
                href="https://github.com/alejocarmona12"
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 hover:text-white transition"
              >
                {/* <GitHub size={18} /> */}
                GitHub
              </a>

              <a
                href="#sobre-mi"
                onClick={() => setIsOpen(false)}
                className="hover:text-white transition"
              >
                Sobre mí
              </a>

              <a
                href="#contacto"
                onClick={() => setIsOpen(false)}
                className="mt-2 px-4 py-3 rounded-xl bg-blue-600 text-white text-center font-semibold hover:bg-blue-700 transition"
              >
                Contactar →
              </a>
            </motion.div>
          )}
        </Container>
      </motion.div>
    </motion.header>
  );
}
