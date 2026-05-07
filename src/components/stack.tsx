import { motion } from "framer-motion";
import Container from "../layout/container";
import { MonitorSmartphone } from "lucide-react";

const stack = [
  {
    name: "React",
    icon: "devicon-react-original colored",
  },
  {
    name: "TypeScript",
    icon: "devicon-typescript-plain colored",
  },
  {
    name: "JavaScript",
    icon: "devicon-javascript-plain colored",
  },
  {
    name: "HTML",
    icon: "devicon-html5-plain colored",
  },
  {
    name: "CSS",
    icon: "devicon-css3-plain colored",
  },
  {
    name: "GitHub",
    icon: "devicon-github-original",
  },
  {
    name: "Node.js",
    icon: "devicon-nodejs-plain colored",
  },
  {
    name: "MongoDB",
    icon: "devicon-mongodb-plain colored",
  },
];

export default function Stack() {
  return (
    <section className="relative py-32 overflow-hidden">
      <Container>
        {/* Title */}
        <div className="text-center mb-24">
          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              text-white
            "
          >
            Stack Tecnológico
          </h2>

          <p className="mt-4 text-gray-400">
            Tecnologías que utilizo para construir experiencias modernas.
          </p>
        </div>

        {/* Orbit Container */}
        <div className="relative flex items-center justify-center h-[650px]">
          {/* Glow */}
          <div
            className="
              absolute
              w-[420px]
              h-[420px]
              rounded-full
              bg-blue-500/10
              blur-3xl
            "
          />

          {/* Center Circle */}
          <div
            className="
              absolute
              z-20
              w-40
              h-40
              rounded-full
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              flex
              items-center
              justify-center
              shadow-[0_0_60px_rgba(59,130,246,0.15)]
            "
          >
            <div className="text-center">
              <MonitorSmartphone
                size={58}
                className="
                  text-blue-400
                  drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]
                   "
              />

              <p
                className="
                  mt-3
                  text-white
                  font-semibold
                  tracking-wide
                "
              >
                Full Stack
              </p>
            </div>
          </div>

          {/* Orbit Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              relative
              w-[520px]
              h-[520px]
              rounded-full
              border
              border-white/5
            "
          >
            {stack.map((tech, index) => {
              const angle = (360 / stack.length) * index;

              return (
                <div
                  key={tech.name}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: `
                      rotate(${angle}deg)
                      translateY(-260px)
                      rotate(-${angle}deg)
                    `,
                  }}
                >
                  <div
                    className="
                      flex
                      flex-col
                      items-center
                      justify-center
                      w-24
                      h-24
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/5
                      backdrop-blur-xl
                      shadow-lg
                      hover:scale-110
                      hover:bg-white/10
                      transition-all
                      duration-300
                    "
                  >
                    <i
                      className={`
                        ${tech.icon}
                        text-4xl
                      `}
                    ></i>

                    <span
                      className="
                        mt-2
                        text-xs
                        text-gray-300
                        font-medium
                      "
                    >
                      {tech.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
