import { useEffect } from "react";
import {
  MapPinIcon,
  AtSymbolIcon,
  CalendarIcon,
  AcademicCapIcon,
  BriefcaseIcon,
} from "@heroicons/react/20/solid";
import AOS from "aos";
import "aos/dist/aos.css";
const features = [
  {
    name: "Age:",
    description: "23 years old",
    icon: CalendarIcon,
  },
  {
    name: "Email:",
    description: "czepieldavid@gmail.com",
    icon: AtSymbolIcon,
  },
  {
    name: "Location:",
    description: "Madrid, Spain",
    icon: MapPinIcon,
  },
];

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div
      className="relative isolate overflow-hidden  px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
      id="about"
    >
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h2 className="text-lg leading-7">Get to know more</h2>
              <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
                About Me
              </p>
              <p className="mt-6 text-lg leading-8" data-aos="fade-right">
              I'm a software developer specialized in the field of video games. With a degree in video game development under my belt, I've been able to work on multiple projects for platforms such as PC, Android, and even had the opportunity to experience what console development is like by making use of PS4 development kits. Although I have experience with tools like Unity or Godot, I feel the most comfortable working in C++.
             </p>
            </div>
          </div>
        </div>
        <div
          className="-ml-12 -mt-12 p-12 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
          data-aos="fade-left"
        >
          <img
            className="w-[38rem] ring-2 ring-base-300 max-w-none rounded-xl shadow-xl sm:w-[57rem]"
            src="https://fastly.picsum.photos/id/473/5000/3333.jpg?hmac=OrrE0aUqLbLCJ9PAlSn0dIRHjOnuuuev9IjuO3PGZf8"
            alt="Person"
          />
        </div>
      </div>
    </div>
  );
}
