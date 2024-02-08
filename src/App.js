import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Hero/>
      <Projects />
      <Experience/>
      <Education/>
      <Skills /> 
      <About />
      <Contact />
      <Footer /> 
    </div>
  );
}
