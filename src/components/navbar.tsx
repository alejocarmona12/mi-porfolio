import { useEffect, useState, type JSX } from "react";
import { motion, AnimatePresence, type Spring } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

import Container from "../layout/container";
import Logo from "../images/logo-alejocarmona.png";

// Componente SVG nativo del logo de GitHub
const GithubIcon = ({ size = 15 }: { size?: number }) => (
  <svg
    xmlns="http://w3.org"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Proyectos", href: "#proyectos", external: false },
    {
      name: "GitHub",
      href: "https://github.com",
      external: true,
      icon: <GithubIcon size={15} />,
    },
    { name: "Sobre mí", href: "#sobre-mi", external: false },
  ];

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 w-full z-50 px-4"
    >
      <motion.div
        animate={{
          width: "85%", // Ancho fijo para una alineación simétrica perfecta
          y: 12, // Flotante continuo desde el inicio
        }}
        transition={{ type: "spring", stiffness: 80, damping: 15 } as Spring}
        className={`
          mx-auto rounded-2xl border transition-all duration-300

          ${
            scrolled
              ? "border-white/10 bg-zinc-950/70 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.5)] border-t-white/20"
              : "border-white/5 bg-zinc-950/20 backdrop-blur-md"
          }
        `}
      >
        <Container>
          <nav className="flex items-center justify-between h-16 px-2">
            {/* Logo */}
            <a href="#inicio" className="flex items-center gap-3 group">
              <div className="relative w-9 h-9 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105 group-hover:border-blue-500/30">
                <img
                  src={Logo}
                  alt="Alejo Carmona"
                  className="w-7 h-7 object-contain transition-transform duration-500 group-hover:rotate-12"
                />
              </div>
              <span className="text-white font-bold tracking-tight text-sm md:text-base hidden sm:block">
                Alejo Carmona
              </span>
            </a>

            {/* Desktop Menu - Contraste y fuente  */}
            <div
              className="hidden md:flex items-center gap-1 text-sm font-semibold text-zinc-300"
              onMouseLeave={() => setHoveredTab(null)}
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  onMouseEnter={() => setHoveredTab(link.name)}
                  className="relative px-4 py-2 rounded-xl transition-colors duration-200 hover:text-white flex items-center gap-1.5"
                >
                  {/* Pestaña inteligente flotante detrás de las letras */}
                  {hoveredTab === link.name && (
                    <motion.span
                      layoutId="navHoverId"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                      className="absolute inset-0 rounded-xl bg-white/5 border border-white/5 -z-10"
                    />
                  )}
                  {link.icon && (
                    <span className="opacity-80 group-hover:opacity-100">
                      {link.icon}
                    </span>
                  )}
                  {link.name}
                </a>
              ))}

              {/* Botón de Acción Principal */}
              <a
                href="#contacto"
                className="ml-3 px-5 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 hover:scale-[1.03] active:scale-[0.97] transition-all shadow-lg shadow-blue-600/10 flex items-center gap-1 border border-blue-500/40"
              >
                Contactar
                <ArrowUpRight size={13} />
              </a>
            </div>

            {/* Mobile Burger Button */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl border border-white/5 bg-white/5 text-white transition-colors hover:bg-white/10"
              onClick={() => setIsOpen((v) => !v)}
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -10 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -10 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="md:hidden overflow-hidden border-t border-white/5 flex flex-col gap-1 pb-4 pt-2 text-sm font-medium text-gray-400"
              >
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noreferrer" : undefined}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-white/5 hover:text-white transition-colors"
                  >
                    {link.icon}
                    {link.name}
                  </a>
                ))}

                <a
                  href="#contacto"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 mx-2 px-4 py-3 rounded-xl bg-blue-600 text-white text-center font-semibold hover:bg-blue-700 active:scale-[0.98] transition shadow-md shadow-blue-600/10 flex items-center justify-center gap-1"
                >
                  Contactar →
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </motion.div>
    </motion.header>
  );
}
