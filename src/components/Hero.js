import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import pfp from "../avatar.png";
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";

const navigation = [
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Education", id: "education" },
  { name: "Skills", id: "skills" },
  { name: "About Me", id: "about" },
  { name: "Contact Me", id: "contact" },
];

export default function Hero() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    console.log(localTheme);
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  useEffect(() => {
    document.title = 'David Czepiel - Game Developer';
    AOS.init({ duration: 2000 });
  }, []);

  const handleToggle = (e) => {
    e.target.checked ? setTheme("dark") : setTheme("light");
  };

  return (
    <div>
      <header className="fixed bg-base-300 shadow-2xl shadow-neutral inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <p className="-m-1.5 p-1.5 font-semibold">David Czepiel Babiarz</p>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                to={item.id}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="text-sm font-semibold leading-6 cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-current after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                className="hidden"
                onChange={handleToggle}
                checked={theme === "light" ? false : true}
              />

              <SunIcon className="swap-off fill-current w-6 h-6" />
              <MoonIcon className="swap-on fill-current w-6 h-6" />
            </label>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-2/3 overflow-y-auto backdrop-brightness-90 backdrop-blur-2xl bg-transparent px-6 py-6 sm:max-w-sm">
            <div className="flex items-center justify-between">
              <div className="-m-1.5 p-1.5">
                <label className="swap swap-rotate">
                  <input
                    type="checkbox"
                    className="hidden"
                    onChange={handleToggle}
                    checked={theme === "light" ? false : true}
                  />
                  <SunIcon className="swap-off fill-current w-6 h-6" />
                  <MoonIcon className="swap-on fill-current w-6 h-6" />
                </label>
              </div>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      to={item.id}
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="-mx-3 block rounded-lg px-3 py-2 font-semibold leading-7 btn btn-ghost"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 py-32"
            data-aos="zoom-in"
          >
            <div className="grid justify-center items-center">
              <img
                src={pfp}
                alt="Sohom Mondal"
                className="w-72 rounded-full drop-shadow-2xl"
              />
            </div>
            <div className="grid justify-center items-center mt-3">
              <div className="text-center">
                <div className="text-2xl tracking-tight sm:text-3xl">
                  Hello, I'm
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                  David Czepiel Babiarz
                </h1>
                <p className="mt-6 text-2xl leading-8">
                  <TypeAnimation
                    sequence={[
                      "I'm a Game Developer",
                      2000,
                      "I'm a C++ Developer",
                      2000,
                      "I'm a Software Developer",
                      2000,
                    ]}
                    speed={50}
                    repeat={Infinity}
                  />
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <p>
                  I am a passionate Game Developer, mostly focused on Programming. I have a Degree in Videogame Development as well as professional experience, and several Indie projects finished, using different tools, engines and programming languages.
                  </p>
                </div>
                <div className="mt-10 flex items-center justify-center gap-x-4">
                  <button className="btn btn-outline btn-square">
                    <a href="https://www.linkedin.com/in/david-czepiel-babiarz-2870b5235/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="h-8 w-8"
                        viewBox="0 0 16 16"
                        >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                      </svg>
                    </a>
                  </button>
                  <button className="btn btn-outline btn-square">
                    <a href="https://github.com/davidczepiel">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                    </a>
                  </button>
                  <button className="btn btn-outline btn-square">
                    <a href="https://dczepiel.itch.io/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        >
                        <path d="M4.172 1.787c-1.396 0.828-4.145 3.984-4.172 4.812v1.375c0 1.735 1.625 3.267 3.099 3.267 1.771 0 3.251-1.469 3.251-3.213 0 1.744 1.421 3.213 3.197 3.213 1.771 0 3.151-1.469 3.151-3.213 0 1.744 1.516 3.213 3.287 3.213h0.032c1.776 0 3.291-1.469 3.291-3.213 0 1.744 1.381 3.213 3.152 3.213s3.197-1.469 3.197-3.213c0 1.744 1.475 3.213 3.245 3.213 1.479 0 3.104-1.532 3.104-3.267v-1.375c-0.032-0.828-2.776-3.984-4.177-4.812-4.339-0.156-7.344-0.183-11.823-0.183-4.484 0.005-10.593 0.073-11.828 0.183zM12.677 10.421c-0.183 0.308-0.385 0.568-0.625 0.797v0.005c-0.672 0.651-1.588 1.057-2.599 1.057-1.016 0-1.932-0.407-2.599-1.063-0.245-0.235-0.428-0.489-0.6-0.787-0.167 0.297-0.4 0.552-0.645 0.787-0.672 0.656-1.588 1.063-2.599 1.063 0 0 0 0-0.005 0-0.12 0-0.245-0.036-0.349-0.073-0.14 1.485-0.203 2.901-0.224 3.937v0.005c-0.005 0.527-0.005 0.953-0.011 1.552 0.032 3.115-0.307 10.089 1.376 11.803 2.604 0.604 7.396 0.88 12.197 0.885h0.005c4.807-0.005 9.593-0.281 12.197-0.885 1.683-1.713 1.344-8.688 1.376-11.803-0.005-0.599-0.005-1.025-0.011-1.552v-0.005c-0.021-1.036-0.079-2.452-0.224-3.937-0.099 0.037-0.229 0.073-0.349 0.073 0 0-0.005 0-0.005 0-1.011 0-1.927-0.407-2.599-1.063h0.005c-0.245-0.235-0.479-0.489-0.645-0.787h-0.005c-0.167 0.297-0.355 0.552-0.595 0.787-0.667 0.656-1.583 1.063-2.599 1.063-1.011 0-1.927-0.407-2.599-1.063-0.24-0.229-0.443-0.495-0.615-0.787l-0.011-0.016c-0.172 0.308-0.38 0.573-0.615 0.803-0.672 0.656-1.588 1.063-2.599 1.063 0 0-0.005 0-0.005 0-0.031 0-0.068 0-0.104-0.005-0.036 0.005-0.073 0.005-0.109 0.005 0 0 0 0-0.005 0-1.011 0-1.927-0.407-2.593-1.063-0.24-0.229-0.443-0.495-0.609-0.787l-0.011-0.016zM10.005 13.875c1.057 0.005 1.995 0 3.161 1.271 0.916-0.093 1.875-0.14 2.833-0.14s1.917 0.047 2.833 0.14c1.167-1.271 2.104-1.271 3.161-1.271h0.005c0.5 0 2.5 0 3.891 3.912l1.495 5.369c1.109 3.995-0.355 4.095-2.177 4.095-2.708-0.1-4.208-2.068-4.208-4.037-1.5 0.251-3.251 0.371-5 0.371s-3.5-0.12-4.995-0.371c0 1.969-1.5 3.937-4.208 4.037-1.828-0.005-3.292-0.1-2.183-4.095l1.495-5.369c1.396-3.912 3.396-3.912 3.896-3.912zM16 16.953c-0.005 0-2.849 2.62-3.364 3.547l1.864-0.073v1.625c0 0.079 0.751 0.047 1.5 0.011 0.749 0.036 1.495 0.068 1.495-0.011v-1.625l1.869 0.073c-0.515-0.927-3.364-3.547-3.364-3.547z"/>                    
                      </svg>
                    </a>
                  </button>
                  <button className="btn btn-outline btn-square">
                    <a href="mailto:czepieldavid@gmail.com">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        >
                        <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z" />
                        <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z" />
                      </svg>
                    </a>
                  </button>
                  {/* <button>
  <a href="/path/to/your/cv.pdf" download="YourCV.pdf">Download CV</a>
</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
