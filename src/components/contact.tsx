import { FaPhone, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./contact.css";
import type { JSX } from "react";

type ContactItem = {
  icon: JSX.Element;
  label: string;
  value: string;
  link: string;
  external?: boolean;
  isWhatsapp?: boolean;
  ariaLabel?: string;
};

export default function ContactSection() {
  const contactos: ContactItem[] = [
    {
      icon: <MdEmail />,
      label: "Email",
      value: "alejocarmona224@gmail.com",
      link: "mailto:alejocarmona224@gmail.com",
      ariaLabel: "Enviar email a Alejo Carmona",
    },
    {
      icon: <FaPhone />,
      label: "Teléfono",
      value: "381 529 8430",
      link: "tel:+543815298430",
      ariaLabel: "Llamar a Alejo Carmona",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "LinkedIn Perfil",
      link: "https://www.linkedin.com/in/alejo-carmona-b66952228/",
      external: true,
      ariaLabel: "Abrir LinkedIn de Alejo Carmona",
    },
    {
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      value: "Mensaje directo",
      isWhatsapp: true,
      external: true,
      ariaLabel: "Enviar WhatsApp a Alejo Carmona",
      link:
        "https://wa.me/543815298430?text=" +
        encodeURIComponent(
          "Hola Alejo, vi tu portfolio y me interesa hablar sobre oportunidades como Frontend Developer Jr.",
        ),
    },
  ];

  return (
    <section id="contacto" className="py-16 flex justify-center items-center">
      <div className="contact-card">
        <h2>Contacto</h2>

        <p className="mt-2 text-center">
          Estoy disponible para oportunidades como{" "}
          <strong>Frontend Developer Jr / Trainee</strong>. Si te interesa mi
          perfil, ¡coordinemos una charla!
        </p>

        <div className="contact-list mt-6">
          {contactos.map((item) => {
            const isExternal = item.external ?? item.isWhatsapp ?? false;

            return (
              <a
                key={item.label}
                href={item.link}
                aria-label={item.ariaLabel}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className={`contact-item ${item.isWhatsapp ? "whatsapp" : ""}`}
              >
                <div className="icon">{item.icon}</div>

                <div className="info">
                  <span className="label">{item.label}</span>
                  <span className="value">{item.value}</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
