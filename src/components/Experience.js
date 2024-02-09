import { Fragment, useEffect } from "react";
import React, { useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Modal from "./Modal";

const myEvents=[
  {
    TimeLineTitle:"Recreativos Franco",
    Title: "Software Developer",
    Duration:"Oct 2022-Present",
    Descriction: ()=>{
      return (
        <div>
          <p className="pb-2">
          As a Software Developer at Recreativos Franco, my primary focus lies in C++ development, particularly in the creation of games for bingos and casinos, leveraging the company's proprietary engine and adhering to the industry's strict standards.          </p>
          <p className="pb-2">
            My responsibilities encompass the entire development lifecycle, from concept to execution. Working closely with the art and math departments, I ensure that each game not only meets regulatory requirements but also delivers an engaging and visually appealing experience for players.
          </p>
          <h3 className="font-bold text-lg pb-2">Notable Contributions:</h3>
          <ul className="list-disc pl-6">
            <li className="pb-2">
              Developed two bingo games and adapted them to comply with regulatory frameworks, including the specific requirements of the Norwegian market.
            </li>
            <li className="pb-2">
              Developed four unique slot games as part of a slot machine project for the casino sector.
            </li>
            <li>
              Enhanced the gaming architecture to support future casino projects.
            </li>
          </ul>
        </div>
      );
    }
  },
  {
    TimeLineTitle:"Padaone Games",
    Title: "Frontend Developer (internship)",
    Duration:"Jul 2022-Aug 2022",
    Descriction: ()=>{
      return (
        <div>
          <p className="pb-2">
          As a Software Developer at Recreativos Franco, my primary focus lies in C++ development, particularly in the creation of games for bingos and casinos, leveraging the company's proprietary engine and adhering to the industry's strict standards.          </p>
          <p className="pb-2">
            My responsibilities encompass the entire development lifecycle, from concept to execution. Working closely with the art and math departments, I ensure that each game not only meets regulatory requirements but also delivers an engaging and visually appealing experience for players.
          </p>
          <h3 className="font-bold text-lg pb-2">Notable Contributions:</h3>
          <ul className="list-disc pl-6">
            <li className="pb-2">
              Developed two bingo games and adapted them to comply with regulatory frameworks, including the specific requirements of the Norwegian market.
            </li>
            <li className="pb-2">
              Contributed to the creation of a slot machine for the casino sector.
            </li>
            <li>
              Enhanced the gaming architecture to support future casino projects.
            </li>
          </ul>
        </div>
      );
    }
  },
]

export default function Experience() {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div id="experience">
      {/* INTRODUCTION TO THE PROJECTS */}
      <div className="mx-auto max-w-2xl px-6 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 text-center">
        <div className="lg:mx-32">
          <h2 className="text-lg leading-7">Check out my</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
            Working Experience
          </p>
          <WorkingExperienceTimeline />
        </div>
      </div>
    </div>
  );
}

// https://tailgrail.com/tailwind/timeline
const WorkingExperienceTimeline = () =>{
  return (
    <section class="items-center py-16 font-poppins" data-aos="fade-right"> 
            <div class="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                <div class="w-full mx-auto lg:max-w-3xl">

                {myEvents.map((project, index) => (
                  <div class="relative flex justify-between">
                      {/* DATE FOR BIG SCREENS */}
                      <div class="hidden w-24 py-3 md:block ">
                          <h2 class="text-base font-medium ">{myEvents[index].TimeLineTitle}</h2>
                          <h2 class="text-xs font-medium ">{myEvents[index].Duration}</h2>
                      </div>
                      {/* DATE FOR SMALL SCREENS */}
                      <div class="absolute inline-block w-24 py-3 left-16 -top-12 md:hidden flex w-4/5 text-center">
                          <h2 class="text-base font-medium text-gray-700 dark:text-gray-400">{myEvents[index].TimeLineTitle}</h2>
                          <h2 class="text-base font-medium text-gray-700 dark:text-gray-400 ml-2">{myEvents[index].Duration}</h2>
                      </div>
                      {/* VERTICAL LINE SEPARATOR */}
                      <div class="flex flex-col items-center w-10 mr-4 md:w-24">
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
                          {index == myEvents.length- 1 && <div class="w-1 h-full bg-gradient-to-b from-green-300 via-green-300 to-transparent"></div>}
                      </div>
                      {/* CONTENT */}
                      <div class="relative flex-1 mb-16  rounded shadow md:mb-8 bg-base-200 ring-2 ring-base-300">
                          <div class="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-7 -left-4">
                              <div
                                  class="h-10 origin-top-right transform -rotate-45 bg-base-200 drop-shadow-lg ring-2 ring-base-300">
                              </div>
                          </div>
                          <div class="relative z-20 px-6 pb-6 pt-3 text-left ">
                              <p class="mb-2 text-xl font-bold text-gray-600 dark:text-gray-400">{myEvents[index].Title}</p>
                              <p class="text-gray-700 dark:text-gray-500">
                                {myEvents[index].Descriction()}
                              </p>
                          </div>
                      </div>
                  </div>
                ))}
            </div>
        </div>
    </section>
  );
}