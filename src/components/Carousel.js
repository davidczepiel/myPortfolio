import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "react-feather"
import { ProjectsData } from "./ProjectsData"

export default function Carousel({
  autoSlide = false,
  autoSlideInterval = 3000,
  projectIndex
}) {
  const [curr, setCurr] = useState(0)

  const prev = () =>
    setCurr((curr) => (curr === 0 ? ProjectsData[projectIndex].ModalData.ImagesToShow.length - 1 : curr - 1))
  const next = () =>
    setCurr((curr) => (curr === ProjectsData[projectIndex].ModalData.ImagesToShow.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])

  
  return (
    <div className="relative h-72 w-full md:w-1/2 overflow-hidden rounded-lg bg-gray-400">
        <div
        className={`flex transition ease-out duration-40 h-full`}
        style={{
            transform: `translateX(-${curr * 100}%)`,
        }}
        >
            {ProjectsData[projectIndex].ModalData.ImagesToShow.map((s) => {
                return <img src={s} className="w-full h-full object-cover" />; 
            })}
        </div>
        {/* Button left */}
        <div className="absolute inset-0 flex items-center justify-between p-4">
            <button
            onClick={prev}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
            >
            <ChevronLeft size={40} />
            </button>
            {/* Button right */}
            <button
            onClick={next}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
            >
                <ChevronRight size={40} />
            </button>
        </div>
         {/* Lower indicators for which slide is currently being displayed */}
        <div className="absolute bottom-4 right-0 left-0">
            <div className="flex items-center justify-center gap-2">
            {ProjectsData[projectIndex].ModalData.ImagesToShow.map((_, i) => (
                <div
                className={`
                transition-all w-3 h-3 bg-white rounded-full
                ${curr === i ? "p-2" : "bg-opacity-50"}
                `}
                />
            ))}
            </div>
        </div>
    </div>
  )
}