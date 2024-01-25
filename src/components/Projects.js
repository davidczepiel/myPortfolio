import { useEffect } from "react";
import React, { useState } from 'react';

import AOS from "aos";
import "aos/dist/aos.css";
import LumenFallPreview from "../Resources/Projects/LumenFall/LumenFallPreview.png";
import AnimalCookingPreview from "../Resources/Projects/AnimalCooking/AnimalCookingPreview.png";
import UnitarioEnginePreview from "../Resources/Projects/UnitarioEngine/4AnotherDayPreview.png";
import OhnOPreview from "../Resources/Projects/OhnO/OhnOPreview.png";
import ApruebameEstaPreview from "../Resources/Projects/ApruebameEsta/ApruebameEstaPreview.png";
import TheCatThatWatchedTheStarsPreview from "../Resources/Projects/TheCatThatWatchedTheStars/TheCatThatWatchedTheStarsPreview.png";
import FlowFreePreview from "../Resources/Projects/FlowFree/FlowFreePreview.png";
import Wolfestein3DPreview from "../Resources/Projects/Wolfestein3D/Wolfestein3DPreview.png";

import Modal from "./Modal";

const projects = [
  {
    id: 1,
    name: "LumenFall",
    href: "#",
    imageSrc: LumenFallPreview,
    used: "C#, Unity",
    description: "A more challenging puzzle game",
  },
  {
    id: 2,
    name: "Animal Cooking",
    href: "#",
    imageSrc: AnimalCookingPreview,
    used: "C++, SDL2",
    description: "Team up with a friend in this hectic culinary competition",
  },
  {
    id: 3,
    name: "Unitario Engine",
    href: "#",
    imageSrc: UnitarioEnginePreview,
    used: "C++, LUA, Physx, Ogre3D, FMOD",
    description: "Custom C++ game engine made from scratch",
  },
  {
    id: 4,
    name: "OhnO! clone",
    href: "#",
    imageSrc: OhnOPreview,
    used: "Java, AndroidStudio",
    description: "A clone of the popular game OhnO!",
  },
  {
    id: 5,
    name: "Apruébame Esta",
    href: "#",
    imageSrc: ApruebameEstaPreview,
    used: "GDScript, Godot",
    description: "A game made for the GiftJam 2023",
  },
  {
    id: 6,
    name: "The cat that watched the stars",
    href: "#",
    imageSrc: TheCatThatWatchedTheStarsPreview,
    used: "GDScript, Godot",
    description: "A game made for the Mermelada Jam",
  },
  {
    id: 7,
    name: "Flow Free clone",
    href: "#",
    imageSrc: FlowFreePreview,
    used: "C#, Unity",
    description: "A clone of the popular game FlowFree",
  },
  {
    id: 8,
    name: "Wolfestein3D on PS4",
    href: "#",
    imageSrc: Wolfestein3DPreview,
    used: "C++, PS4 Development Kit",
    description: "A walker of the original Wolfestein3D for the PS4",
  },
];

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
    console.log("ADIOS");
  }, [selectedProject]);

  // Function to open the modal for a specific project
  const openModal = (projectId) => {
    setSelectedProject(projectId);
    console.log("HOlA");
  };

  // Function to open the modal for a specific project
  const closeModal = () => {
    setSelectedProject(null);
    setModalIsOpen(false);
  };

  return (
    <div id="projects">
      <Modal isOpen={modalIsOpen} onClose={()=>closeModal()} project={
  {title: 'LUMENFALL ',
  description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, lacinia neque justo mollis sagittis nisi phasellus taciti, urna faucibus montes in dictumst ridiculus. Primis tellus rutrum auctor venenatis tristique ridiculus netus pulvinar nostra pretium malesuada arcu, facilisis enim risus magnis felis morbi congue laoreet cursus metus ad proin dapibus, tempus luctus vivamus montes nisl dui donec condimentum nibh nisi aliquam. Tortor venenatis curabitur id taciti lacinia posuere bibendum aliquam lectus, faucibus sapien iaculis donec sociosqu urna conubia metus, commodo consequat accumsan mi purus varius interdum maecenas.'
+
  'Habitasse sodales sed aliquet rhoncus blandit volutpat mus urna molestie litora a habitant, vehicula senectus aenean viverra pellentesque dis tristique est feugiat aliquam. Venenatis quis nibh quisque ultricies eu erat condimentum, viverra pharetra orci sollicitudin potenti odio. Aenean mus diam sem ad interdum sapien ante consequat, ac proin vitae lacus quis tellus dignissim, sagittis velit dui donec euismod ornare praesent.',
  trailerUrl: 'https://www.youtube.com/embed/LMda9kzKTJc',
  tags: ['C#', 'Unity'],
  githubUrl: 'https://github.com/yourusername/project1',
      }
      }>
      </Modal>
      <div className="mx-auto max-w-2xl px-6 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <h2 className="text-lg leading-7">Browse my recent</h2>
        <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
          Projects
        </p>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative ring-2 ring-base-300 bg-base-200 rounded-2xl shadow-xl"
              onClick={() => openModal(project.id)}
              
              data-aos="flip-left"
              >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:brightness-75 duration-300 delay-100 lg:h-80 rounded-t-2xl ">
                <img
                  src={project.imageSrc}
                  alt={project.name}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>

              <div className="flex justify-between mt-4 px-4 ">
                <div className="px-4 h-24" >
                  <h3 className="text-lg font-bold">
                    {/* <a href={project.href}> */}
                    <a>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {project.name}
                    </a>
                  </h3>
                  <p className="mt-1 mb-5 text-sm">{project.description}</p>
                </div>
              </div>
                  <div className="flex justify-center pb-4 pt-2">
                    <button onClick={() => openModal(project.id)} 
                    className="z-10 btn btn-outline">
                      View More
                    </button>
                  </div>

            </div>
          ))}
        </div>
        {/* <div className="mt-16 flex justify-center">
          <button className="btn btn-outline">View More</button>
        </div> */}
      </div>
    </div>
  );
}
