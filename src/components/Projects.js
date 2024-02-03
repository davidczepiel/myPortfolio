import { useEffect } from "react";
import React, { useState } from 'react';

import AOS from "aos";
import "aos/dist/aos.css";
import { ProjectsData } from "./ProjectsData"; 

import Modal from "./Modal";

export default function Projects() {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // Check if a specific project is selected (for example, project with id 1)
    if (selectedProject !== null) {
      setModalIsOpen(true);
    }
    // console.log("ADIOS");
  }, [selectedProject]);

  // Function to open the modal for a specific project
  const openModal = (index) => {
    setSelectedProject(index);
    const localTheme = localStorage.getItem("theme");
    // console.log(localTheme);
  };

  // Function to open the modal for a specific project
  const closeModal = () => {
    setSelectedProject(null);
    setModalIsOpen(false);
  };

  return (
    <div id="projects">
      <Modal isOpen={modalIsOpen} onClose={()=>closeModal()} projectINDEX={selectedProject}/>
      <div className="mx-auto max-w-2xl px-6 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <h2 className="text-lg leading-7">Browse my recent</h2>
        <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
          Projects
        </p>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {ProjectsData.map((project, index) => (
            <div
              key={project.id}
              className="group relative ring-2 ring-base-300 bg-base-200 rounded-2xl shadow-xl"
              onClick={() => openModal(index)}
              
              data-aos="flip-left"
              >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:brightness-75 duration-300 delay-100 lg:h-80 rounded-t-2xl ">
                <img
                  src={project.CardData.imageSrc}
                  alt={project.CardData.name}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>

              <div className="flex justify-between mt-4 px-4 ">
                <div className="px-4 h-24" >
                  <h3 className="text-lg font-bold">
                    <a>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {project.CardData.name}
                    </a>
                  </h3>
                  <p className="mt-1 mb-5 text-sm">{project.CardData.description}</p>
                </div>
              </div>
                  <div className="flex justify-center pb-4 pt-2">
                    <button onClick={() => openModal(project.id)} 
                    className="z-10 btn btn-outline transition-transform transform-gpu hover:scale-105">
                      View More
                    </button>
                  </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
