import { FaPhone, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion, useMotionValue, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import type { JSX } from "react";

type ContactItem = {
  icon: JSX.Element;
  label: string;
  value: string;
  href: string;
  external?: boolean;
  ariaLabel: string;
  glowColor: string;
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const iconMotion: Variants = {
  rest: { rotate: 0, scale: 1 },
  hover: {
    rotate: 12,
    scale: 1.15,
    transition: { type: "spring", stiffness: 300, damping: 10 },
  },
};

export default function ContactSection() {
  // Valores para el efecto de inclinación (Tilt) 3D con el mouse
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Mapeamos el movimiento del mouse a grados de rotación física 3D
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
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

  const contactos: ContactItem[] = [
    {
      icon: <MdEmail className="w-5 h-5 text-red-400" />,
      label: "Email",
      value: "alejocarmona224@gmail.com",
      href: "https://google.com",
      external: true,
      ariaLabel: "Enviar email a Alejo Carmona",
      glowColor: "group-hover:border-red-500/30 group-hover:bg-red-500/[0.02]",
    },
    {
      icon: <FaPhone className="w-5 h-5 text-green-400" />,
      label: "Teléfono",
      value: "381 529 8430",
      href: "tel:+543815298430",
      ariaLabel: "Llamar a Alejo Carmona",
      glowColor:
        "group-hover:border-green-500/30 group-hover:bg-green-500/[0.02]",
    },
    {
      icon: <FaLinkedin className="w-5 h-5 text-blue-400" />,
      label: "LinkedIn",
      value: "Ver perfil",
      href: "https://www.linkedin.com/in/alejo-carmona-b66952228/",
      external: true,
      ariaLabel: "Abrir LinkedIn de Alejo Carmona",
      glowColor:
        "group-hover:border-blue-500/30 group-hover:bg-blue-500/[0.02]",
    },
    {
      icon: <FaWhatsapp className="w-5 h-5 text-emerald-400" />,
      label: "WhatsApp",
      value: "Mensaje directo",
      href: "https://wa.me/543815298430",
      external: true,
      ariaLabel: "Enviar WhatsApp a Alejo Carmona",
      glowColor:
        "group-hover:border-emerald-500/30 group-hover:bg-emerald-500/[0.02]",
    },
  ];

  return (
    <section
      id="contacto"
      className="py-32 flex justify-center items-center bg-black overflow-hidden select-none"
    >
      {/* Contenedor de Perspectiva Espacial */}
      <div style={{ perspective: "1000px" }} className="w-full max-w-xl px-4">
        {/* Tarjeta Principal 3D */}
        <motion.div
          onMouseMove={handleMouse}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 60, damping: 20 }}
          className="relative w-full rounded-3xl border border-white/10 bg-zinc-950/70 backdrop-blur-2xl p-8 md:p-10 shadow-[0_0_50px_rgba(0,0,0,0.8)] border-t-white/20"
        >
          {/* Brillo de Fondo Holográfico */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/5 rounded-3xl pointer-events-none" />

          {/* Contenido Superior */}
          <div
            style={{ transform: "translateZ(40px)" }}
            className="text-center transition-transform duration-200"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
              Contacto
            </h2>
            <p className="mt-3 text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
              Disponible para oportunidades como{" "}
              <span className="text-blue-400 font-semibold">
                Full Stack jr / Trainee
              </span>
              .
            </p>
          </div>

          {/* Listado de Enlaces */}
          <motion.div
            className="mt-10 grid gap-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{ transform: "translateZ(30px)" }}
          >
            {contactos.map(
              ({
                icon,
                label,
                value,
                href,
                external,
                ariaLabel,
                glowColor,
              }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={ariaLabel}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.99 }}
                  className={`group flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-white/[0.02] transition-all duration-300 ${glowColor}`}
                >
                  {/* Contenedor del Icono con Animación */}
                  <motion.div
                    className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/5 group-hover:bg-white/10 group-hover:border-white/10 transition-colors"
                    variants={iconMotion}
                    initial="rest"
                    whileHover="hover"
                  >
                    {icon}
                  </motion.div>

                  {/* Textos Informativos */}
                  <div className="flex flex-col flex-1 minimal-text">
                    <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider">
                      {label}
                    </span>
                    <span className="text-sm font-semibold text-gray-200 tracking-wide mt-0.5 group-hover:text-white transition-colors">
                      {value}
                    </span>
                  </div>

                  {/* Flecha Indicadora de Acción */}
                  <div className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-gray-400 text-xs font-mono font-bold pr-1">
                    // ir
                  </div>
                </motion.a>
              ),
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
