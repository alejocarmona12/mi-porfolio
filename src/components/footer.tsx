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
      className="mt-20 border-t border-gray-200 dark:border-gray-700"
    >
      <Container>
        <div className="py-10 text-center">
          <p className="font-semibold text-gray-900 dark:text-white">
            Alejo Carmona
          </p>

          <p className="mt-2 text-gray-500">
            Frontend Developer en formación · React · TypeScript ·JavaScript En
            crecimiento hacia Full Stack
          </p>

          <div className="mt-6 text-xs text-gray-500">
            © {year} Alejo Carmona · Creado con React y Tailwind CSS ·{" "}
          </div>
        </div>
      </Container>
    </motion.footer>
  );
}
