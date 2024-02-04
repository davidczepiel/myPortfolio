import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "react-feather"
import { ProjectsData } from "./ProjectsData"

export default function Carousel({
  autoSlide = false,
  autoSlideInterval = 3000,
  projectIndex
}) {
  const [curr, setCurr] = useState(0)

  const prev = () => {
    var videosSize = ProjectsData[projectIndex].ModalData.VideosToShow.length
    var imagesSize = ProjectsData[projectIndex].ModalData.ImagesToShow.length
    setCurr((curr) => (
      curr === 0 ? ( videosSize + imagesSize - 1 )  : curr - 1))
    }

  const next = () =>{
    var videosSize = ProjectsData[projectIndex].ModalData.VideosToShow.length
    var imagesSize = ProjectsData[projectIndex].ModalData.ImagesToShow.length
    setCurr((curr) => (curr === ( videosSize + imagesSize - 1 ) ? 0 : curr + 1))
  }
    
  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])

  return (
    <div className="relative h-72 w-full md:w-1/2 overflow-hidden rounded-lg bg-base-300">
        {/* VIDEO/IMAGE BEING DISPLAYED */}
        <div className={`flex h-full place-content-center`}>
          { curr < ProjectsData[projectIndex].ModalData.VideosToShow.length 
            ?
              <iframe class=" w-full h-full " src={ProjectsData[0].ModalData.VideosToShow[0]} allowFullScreen/>
            :
              <img src={ProjectsData[projectIndex].ModalData.ImagesToShow[curr - ProjectsData[projectIndex].ModalData.VideosToShow.length]} className=" object-cover group-hover:opacity-100" />
          }
        </div>

        {/* BUTTON TO NAVIGATE TO THE LEFT */}
          <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
            <button onClick={prev} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
              <ChevronLeft size={40} />
            </button>
          </div>
        {/* BUTTON TO NAVIGATE TO THE RIGHT */}
          <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
            <button onClick={next} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
              <ChevronRight size={40} />
            </button>
          </div>

         {/* LOWER DOTS TO SHOW WHERE IN THE CAROUSEL ARE WE CURRENTLY */}
        <div className="absolute bottom-4 right-0 left-0">
            <div className="flex items-center justify-center gap-2">
              {/* VIDEO DOTS */}
            {ProjectsData[projectIndex].ModalData.VideosToShow.map((_, i) => (
              <div
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
              `}
              />
              ))}
              {/* IMAGE DOTS */}
            {ProjectsData[projectIndex].ModalData.ImagesToShow.map((_, i) => (
                <div
                className={`
                transition-all w-3 h-3 bg-white rounded-full
                ${((curr - ProjectsData[projectIndex].ModalData.VideosToShow.length) === i) 
                  ? "p-2" 
                  : "bg-opacity-50"}
                `}
                />
            ))}
            </div>
        </div>
    </div>
  )
}