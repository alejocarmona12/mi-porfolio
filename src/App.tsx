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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* barra de navegacion */}
      <Navbar />
      {/* contenido principal */}
      <main className=" center-content">
        <Hero />
        <About />
        <Stack />
        <DeployNetlify />
        <GithubSection />
        <Contact />
      </main>

      {/* pie de pagina  */}
      <Footer />
    </div>
  );
}
