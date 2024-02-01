import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Projects />
      <About />
      {/* <Skills /> */}
      <Contact />
      <Footer />
    </div>
  );
}
