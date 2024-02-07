import { Fragment, useEffect } from "react";
import React, { useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Modal from "./Modal";

const myEvents=[
  {
    heading:"Software Developer",
    descriction:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    direction: "right"
  },
  {
    heading:"Event 2",
    descriction:"Subjeading 2",
    direction: "right"
  },
  {
    heading:"Event 2",
    descriction:"Lorem ipsum dolor sit amet, consectetur adipiso consequat. Duculpa qui officia deserunt mollit animtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrulaborum.",
    direction: "right"
  }
]

export default function Education() {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div id="education">
      {/* INTRODUCTION TO THE PROJECTS */}
      <div className="mx-auto max-w-2xl px-6 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 text-center">
        <div className="lg:mx-32">
          <h2 className="text-lg leading-7">Check out my</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
            Education
          </p>
          <EducationTimeLine/>
        </div>
      </div>
    </div>
  );
}

// https://tailgrail.com/tailwind/timeline
const EducationTimeLine = () =>{
  return (
    <section class="items-center py-16 font-poppins" data-aos="fade-left">
            <div class="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                <div class="w-full mx-auto lg:max-w-3xl">

                {myEvents.map((project, index) => (
                  <div class="relative flex justify-between">
                      {/* CONTENT */}
                      <div class="relative flex-1 mb-16  rounded shadow md:mb-8 bg-base-200 ring-2 ring-base-300">
                          <div class="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-7 -right-4">
                              <div
                                  class="h-10 origin-top-left transform rotate-45 bg-base-200 drop-shadow-lg ring-2 ring-base-300">
                              </div>
                          </div>
                          <div class="relative z-20 px-6 pb-6 pt-3 text-left ">
                              <p class="mb-2 text-xl font-bold text-gray-600 dark:text-gray-400">Software Developer</p>
                              <p class="text-gray-700 dark:text-gray-500">
                                {myEvents[index].descriction}
                              </p>
                          </div>
                      </div>
                      {/* VERTICAL LINE SEPARATOR */}
                      <div class="flex flex-col items-center w-10 ml-4 md:w-24">
                          <div>
                              <div
                                  class="flex items-center justify-center w-10 h-10 border rounded-full border-green-400">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                      class="w-4 h-4 dark:text-green-400 bi bi-building" viewBox="0 0 16 16">
                                      <path fill-rule="evenodd"
                                          d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z">
                                      </path>
                                      <path
                                          d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z">
                                      </path>
                                  </svg>
                              </div>
                          </div>
                          {index !== myEvents.length- 1 && <div class="w-1 h-full bg-green-300"></div>}
                          {index == myEvents.length- 1 && <div class="w-1 h-full bg-gradient-to-b from-green-300 via-green-300 to-transparent"></div>}                      </div>
                      {/* DATE FOR BIG SCREENS */}
                      <div class="hidden w-24 py-3 md:block ">
                          <h2 class="text-base font-medium ">Recreativos Franco</h2>
                          <h2 class="text-xs font-medium ">Oct 2022-Present</h2>
                      </div>
                      {/* DATE FOR SMALL SCREENS */}
                      <div class="absolute inline-block w-24 py-3 left-16 -top-12 md:hidden flex w-4/5 text-center">
                          <h2 class="text-xs font-medium text-gray-700 dark:text-gray-400">2002-2005</h2>
                          <h2 class="text-base font-medium text-gray-700 dark:text-gray-400 mr-2">2002-2005</h2>
                      </div>
                  </div>
                ))}
            </div>
        </div>
    </section>
  );
}