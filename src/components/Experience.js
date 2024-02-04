import { Fragment, useEffect } from "react";
import React, { useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Modal from "./Modal";

const myEvents=[
  {
    heading:"Event 1",
    subHeading:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    direction: "right"
  },
  {
    heading:"Event 2",
    subHeading:"Subjeading 2",
    direction: "right"
  },
  {
    heading:"Event 2",
    subHeading:"Subjeading 2",
    direction: "right"
  }
]



export default function Experience() {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div id="projects">
      {/* INTRODUCTION TO THE PROJECTS */}
      <div className="mx-auto max-w-2xl px-6 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <h2 className="text-lg leading-7">Check out my</h2>
        <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
          Working Experience
        </p>
        <Timeline events={myEvents}></Timeline>
      </div>
    </div>
  );
}

const Timeline = ({events}) =>{
  return (
    <div className="flex flex-col gap-y-3 w-full my-4">
        <Circle/>
          {events.map((event,key) =>{
            return (
            <Fragment key={key}>
              <div className="grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto">
                {event.direction === "left" ?
                (<EventCard heading = {event.heading} subHeading= {event.subHeading}/>)
                  :
                  (<div className="bg-red-400 w-32 h-32"></div>)
                }

                <Pillar/>

                {event.direction === "right" ?
                (<EventCard heading = {event.heading} subHeading= {event.subHeading}/>)
                  :
                  (<div className="bg-red-400 w-32 h-32"></div>)
                }
              </div>
              {key < (events.length -1) && <Circle/>}
            </Fragment>
            )
          })}
        <Circle/>
    </div>
  )
}


const Circle = () => {
  return (<div className="rounded-full w-4 h-4 bg-blue-500 mx-auto my-2"/>)
}
const Pillar = () =>{
  return (<div className="rounded-t-full rounded-b-full w-2 h-full bg-blue-500 mx-auto"/>)
}
const EventCard = ({heading, subHeading}) => {
  return (
    <div className="flex flex-col gap-y-2 border shadow-md rounded-xl p-4">
      <div className="text-blue-800 font-bold text-lg border-b" >{heading}</div>
      <div className="text-sm text-gray-700">{subHeading}</div>
    </div>
  )
}
