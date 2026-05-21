import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Stack from "./components/stack";
import Footer from "./components/footer";
import DeployNetlify from "./components/deployNetlify";
import Contact from "./components/contact";

export default function App() {
  return (
    // 🛠️ CORREGIDO: Fondo negro puro global y remoción de gradientes antiguos para evitar cortes
    <div className="min-h-screen text-white bg-black antialiased">
      <Navbar />

      <main>
        {/* HERO */}
        <Hero />

        {/* Contenedor fluido sin líneas grises artificiales */}
        <div className="space-y-12 md:space-y-20">
          <About />
          <Stack />
          <DeployNetlify />

          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}
