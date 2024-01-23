// Modal.js
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'; // Import the CSS file for styling

const Modal = ({ isOpen, onClose, project }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  const closeModal = () => {
    setIsModalOpen(false);
    onClose();
  };

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isModalOpen]);

  return isModalOpen
    ? ReactDOM.createPortal(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
          onClick={handleBackgroundClick}
        >
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="relative w-full max-w-screen-md mx-4 my-6 md:max-w-screen-md lg:max-w-screen-lg">
            {/* Content */}
            <div className="relative bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
              <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-3xl font-semibold text-center w-full">{project.title}</h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={closeModal}
                >
                  <span className="text-black">&times;</span>
                </button>
              </div>
              {/* Body with Project Details */}
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
                <p className="text-gray-700 mb-4">{project.description}</p>
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
                    className="text-white bg-emerald-500 font-bold px-6 py-2 text-sm rounded"
                  >
                    View on GitHub
                  </a>
                  {/* Add more buttons as needed */}
                </div>
              </div>
              {/* Footer */}
            </div>
          </div>
        </div>,
        document.body
      )
    : null;
};

export default Modal;