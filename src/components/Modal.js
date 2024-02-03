// Modal.js
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import AOS from "aos";
import Carousel from './Carousel';
import { ProjectsData } from './ProjectsData';


const Modal = ({ isOpen, onClose, projectINDEX }) => {

  const closeModal = () => {
    onClose();
  };

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    AOS.init({ duration: 500 });
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const getBadgeTheme = () => {
    if(localStorage.getItem("theme") === 'dark')
      return 'text-xl md:text-2xl w-32 md:w-44 font-bold me-2 px-2.5 py-0.5 mb-1.5 rounded-full bg-gray-400 text-gray-800';
    else 
      return 'text-xl md:text-2xl w-32 md:w-44 font-bold me-2 px-2.5 py-0.5 mb-1.5 rounded-full bg-gray-800 text-white';
  };

  return isOpen
    ? ReactDOM.createPortal(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto"
        >
          <div className="fixed inset-0 bg-black opacity-50" onClick={handleBackgroundClick}></div>
          <div className="relative w-full h-3/4 max-w-screen-md mx-4 my-6 md:max-w-screen-md lg:max-w-screen-lg"
              data-aos="fade-up"
              data-aos-duration="500"
          >
            <div className="relative ring-2 ring-base-300 bg-base-200 rounded-2xl ">
              <div className="flex items-start justify-between p-5 rounded-t">
                <h3 className="text-center w-full mt-2 text-4xl font-bold tracking-tight sm:text-5xl ">{ProjectsData[projectINDEX].ModalData.title}</h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0  float-right text-4xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={closeModal}
                >
                  <span>&times;</span>
                </button>
              </div>

              <div className="flex items-start justify-between mx-5 border-y border-solid  rounded-t"></div>
              <div className="relative p-6 flex-auto">
                <div className="mb-4 ">
                  {/* Upper middle */}
                  <div className="mb-4 md:flex md:items-center">
                    {/* CAROUSEL */}
                    <Carousel projectIndex={projectINDEX}/>
                  {/* BADGES */}
                  <div class=" flex-grow grid grid-cols-2 gap-4 h-64 h-72">
                      {/* GENRE */}
                      <div className="flex pt-10  justify-center">
                        <div className="text-center">
                          <div className={getBadgeTheme()}>
                            GENRE
                          </div>
                          <p className="mb-2 font-bold">{ProjectsData[projectINDEX].ModalData.badges[0]}</p>
                        </div>
                      </div>
                      {/* PLATFORMS */}
                      <div className="flex pt-10 justify-center ">
                        <div className="text-center">
                          <div className={getBadgeTheme()}>
                            PLATFORMS
                          </div>
                          <p className="mb-2 font-bold">{ProjectsData[projectINDEX].ModalData.badges[1]}</p>
                        </div>
                      </div>
                      {/* TOOLS */}
                      <div className="flex pt-10  justify-center">
                        <div className="text-center">
                          <div className={getBadgeTheme()}>
                            TOOLS
                          </div>
                          <p className="mb-2 font-bold text-lg">{ProjectsData[projectINDEX].ModalData.badges[2]}</p>
                        </div>
                      </div>
                      {/* DEVELOPED */}
                      <div className="flex pt-10  justify-center">
                        <div className="text-center">
                          <div className={getBadgeTheme()}>
                          DEVELOPED
                          </div>
                          <p className="mb-2 font-bold">{ProjectsData[projectINDEX].ModalData.badges[3]}</p>
                        </div>
                      </div>
                  </div>
                  </div>
                  <p>
                    {ProjectsData[projectINDEX].ModalData.ModalContent()}
                  </p>
                </div>
                <div className="flex items-start justify-between border-y border-solid  rounded-t"></div>
                <div className="flex justify-center items-center pt-6">
                  <a
                    href={ProjectsData[projectINDEX].ModalData.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline mx-5"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )
    : null;
};

export default Modal;