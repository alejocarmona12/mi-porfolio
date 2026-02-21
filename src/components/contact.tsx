import { FaPhone, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
// import Container from "../layout/container";
import "./contact.css";

export default function ContactSection() {
  const contactos = [
    {
      icon: <MdEmail />,
      label: "Email",
      value: "alejocarmona224@gmail.com",
      link: "mailto:alejocarmona224@gmail.com",
    },
    {
      icon: <FaPhone />,
      label: "Teléfono",
      value: "381 529 8430",
      link: "tel:+543815298430",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "Ver perfil profesional",
      link: "https://www.linkedin.com/",
    },
    {
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      value: "Enviar mensaje directo",
      link: "https://wa.me/543815298430?text=Hola%20Alejo",
      isWhatsapp: true,
    },
  ];

  return (
    <section id="contacto" className="py-16 flex justify-center items-center">
      {/* <Container> */}
      <div className="contact-card">
        <h2>Contacto</h2>
        <p>Estoy disponible para oportunidades, proyectos o colaboraciones.</p>

        <div className="contact-list">
          {contactos.map((item) => (
            <a
              key={item.label}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`contact-item ${item.isWhatsapp ? "whatsapp" : ""}`}
            >
              <div className="icon">{item.icon}</div>

              <div className="info">
                <span className="label">{item.label}</span>
                <span className="value">{item.value}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
      {/* </Container> */}
    </section>
  );
}
