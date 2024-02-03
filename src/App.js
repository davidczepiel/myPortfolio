import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
export default function App() {
const Slides = [
  "https://i.ibb.co/ncrXc2V/1.png",
  "https://i.ibb.co/B3s7v4h/2.png",
  "https://i.ibb.co/XXR8kzF/3.png",
  "https://i.ibb.co/yg7BSdM/4.png"
]


  return (
    <div className="overflow-x-hidden">
      
      {/* <Hero /> */}

      {/* <div className="max-w-lg">
        <Carousel>
          {[
            ...Slides.map((s)=><img src={s}/>)
          ]}
        </Carousel>
      </div> */}
      <Projects />
      <About />
      {/* <Skills /> */}
      {/* <Contact /> */}
      {/* <Footer />  */}
    </div>
  );
}
