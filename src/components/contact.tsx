import { FaPhone, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import "./contact.css";
import type { JSX } from "react";

type ContactItem = {
  icon: JSX.Element;
  label: string;
  value: string;
  href: string;
  external?: boolean;
  className?: string;
  ariaLabel: string;
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const iconMotion = {
  rest: {
    rotate: 0,
    scale: 1,
    y: 0,
  },
  hover: {
    rotate: 8,
    scale: 1.2,
    y: -2,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 12,
    },
  },
};

export default function ContactSection() {
  const contactos: ContactItem[] = [
    {
      icon: <MdEmail color="#ff4d4d" />,
      label: "Email",
      value: "alejocarmona224@gmail.com",
      href: "mailto:alejocarmona224@gmail.com",
      ariaLabel: "Enviar email a Alejo Carmona",
    },
    {
      icon: <FaPhone color="#22c55e" />,
      label: "Teléfono",
      value: "381 529 8430",
      href: "tel:+543815298430",
      ariaLabel: "Llamar a Alejo Carmona",
    },
    {
      icon: <FaLinkedin color="#0a66c2" />,
      label: "LinkedIn",
      value: "Ver perfil",
      href: "...",
      external: true,
      ariaLabel: "Abrir LinkedIn de Alejo Carmona",
    },
    {
      icon: <FaWhatsapp color="#25D366" />,
      label: "WhatsApp",
      value: "Mensaje directo",
      href: "...",
      external: true,
      className: "whatsapp",
      ariaLabel: "Enviar WhatsApp a Alejo Carmona",
    },
  ];

  return (
    <section id="contacto" className="py-20 flex justify-center items-center">
      <motion.div
        className="contact-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2>Contacto</h2>

        <p className="mt-2 text-center">
          Disponible para oportunidades como{" "}
          <strong>Frontend Developer Jr / Trainee</strong>.
        </p>

        <motion.div
          className="contact-list mt-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {contactos.map(
            ({ icon, label, value, href, external, className, ariaLabel }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={ariaLabel}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className={`contact-item ${className ?? ""}`}
                variants={item}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* ICONO PREMIUM */}
                <motion.div
                  className="icon"
                  variants={iconMotion}
                  initial="rest"
                  whileHover="hover"
                >
                  {icon}
                </motion.div>

                <div className="info">
                  <span className="label">{label}</span>
                  <span className="value">{value}</span>
                </div>
              </motion.a>
            ),
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
