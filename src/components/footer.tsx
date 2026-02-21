import { motion } from "framer-motion";
import Container from "../layout/container";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="mt-20 border-t border-gray-200 dark:border-gray-700"
    >
      <Container>
        <div className="py-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Alejo Carmona</p>

          <p className="mt-2">
            Desarrollador Full Stack en formación · React · Node.js · MongoDB
          </p>
        </div>
      </Container>
    </motion.footer>
  );
}
