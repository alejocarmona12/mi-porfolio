import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Stack from "./components/stack";
import Footer from "./components/footer";
import DeployNetlify from "./components/deployNetlify";
import GithubSection from "./components/githubsection";
import Contact from "./components/contact";

export default function App() {
  return (
    <div className="min-h-screen text-gray-900 dark:text-gray-100 bg-gradient-to-b from-white to-slate-50 dark:from-gray-950 dark:to-gray-900">
      <Navbar />

      <main>
        {/* HERO */}
        <Hero />

        {/* Secciones con “aire” startup */}
        <div className="space-y-6 md:space-y-10">
          <About />
          <Stack />

          {/* Separador sutil */}
          <div className="mx-auto max-w-6xl px-4">
            <div className="h-px bg-gray-200/70 dark:bg-gray-800/60" />
          </div>

          <DeployNetlify />
          <GithubSection />

          {/* Separador sutil */}
          <div className="mx-auto max-w-6xl px-4">
            <div className="h-px bg-gray-200/70 dark:bg-gray-800/60" />
          </div>

          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}
