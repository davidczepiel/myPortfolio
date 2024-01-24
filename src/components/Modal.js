// Modal.js
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import AOS from "aos";

const Modal = ({ isOpen, onClose, project }) => {
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

  return isOpen
    ? ReactDOM.createPortal(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto"
        >
          <div className="fixed inset-0 bg-black opacity-50" onClick={handleBackgroundClick}></div>
          <div className="relative w-full max-w-screen-md mx-4 my-6 md:max-w-screen-md lg:max-w-screen-lg"
              data-aos="fade-up"
              data-aos-duration="500"
          >
            <div className="relative ring-2 ring-base-300 bg-base-200 rounded-2xl ">
              <div className="flex items-start justify-between p-5 border-b border-solid  rounded-t">
                <h3 className="text-center w-full mt-2 text-4xl font-bold tracking-tight sm:text-5xl ">{project.title}</h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0  float-right text-4xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={closeModal}
                >
                  <span>&times;</span>
                </button>
              </div>
              <div className="relative p-6 flex-auto">
                <div className="mb-4">
                  <iframe
                    title={project.title}
                    width="100%"
                    height="315"
                    src={project.trailerUrl}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="mt-1 mb-5 text-sm">{project.description}</p>
                <div className="mb-4 flex justify-center">
                  {project.tags.map((tag, index) => (
                    <div
                      key={index}
                      className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
                <div className="flex justify-center">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-blue-500 font-bold px-6 py-2 text-sm rounded"
                  >
                    View on GitHub
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