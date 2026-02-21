import Container from "../layout/container";
import { FaReact, FaHtml5, FaCss3Alt, FaGithub, FaJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

const stack = [
  {
    name: "React",
    icon: <FaReact />,
    color: "text-cyan-400",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    color: "text-blue-600",
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    color: "text-yellow-400",
  },
  {
    name: "HTML",
    icon: <FaHtml5 />,
    color: "text-orange-600",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
    color: "text-blue-500",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    color: "text-gray-800 dark:text-white",
  },
];

export default function Stack() {
  return (
    <section className="py-16">
      <Container>
        <h3 className="text-2xl font-semibold text-center mb-10">
          Stack Tecnológico
        </h3>

        <div className="flex flex-wrap justify-center gap-12">
          {stack.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center group transition"
            >
              {/* {/color propio /}  */}
              <div
                className={`text-5xl ${tech.color} transition duration-300 group-hover:scale-110`}
              >
                {tech.icon}
              </div>

              <span className="text-sm mt-3 text-gray-600 dark:text-gray-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
