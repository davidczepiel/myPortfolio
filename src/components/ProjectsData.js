import LumenFallPreview from "../Resources/Projects/LumenFall/LumenFallPreview.png";
import LumenFallModalPreview0 from "../Resources/Projects/LumenFall/LumenFallModalPreview0.jpg";
import LumenFallModalPreview1 from "../Resources/Projects/LumenFall/LumenFallModalPreview1.png";

import UnitarioEnginePreview from "../Resources/Projects/UnitarioEngine/4AnotherDayPreview.png";
import OhnOPreview from "../Resources/Projects/OhnO/OhnOPreview.png";
import FlowFreePreview from "../Resources/Projects/FlowFree/FlowFreePreview.png";

import Wolfestein3DPreview from "../Resources/Projects/Wolfestein3D/Wolfestein3DPreview.png";
import Wolfestein3DModalPreview0 from "../Resources/Projects/Wolfestein3D/WolfesteinModalPreview0.png";

import AnimalCookingPreview from "../Resources/Projects/AnimalCooking/AnimalCookingPreview.png";
import AnimalCookingModalPreview0 from "../Resources/Projects/AnimalCooking/AnimalCookingModalPreview0.png";
import AnimalCookingModalPreview1 from "../Resources/Projects/AnimalCooking/AnimalCookingModalPreview1.png";

import TheCatThatWatchedTheStarsPreview from "../Resources/Projects/TheCatThatWatchedTheStars/TheCatThatWatchedTheStarsPreview.png";
import TheCatThatWatchedTheStarsModalPreview0 from "../Resources/Projects/TheCatThatWatchedTheStars/TCTWTSAVModalPreview0.jpg";
import TheCatThatWatchedTheStarsModalPreview1 from "../Resources/Projects/TheCatThatWatchedTheStars/TCTWTSAVModalPreview1.jpg";
import TheCatThatWatchedTheStarsModalPreview2 from "../Resources/Projects/TheCatThatWatchedTheStars/TCTWTSAVModalPreview2.jpg";

import ApruebameEstaPreview from "../Resources/Projects/ApruebameEsta/ApruebameEstaPreview.png";
import ApruebameEstaModalPreview0 from "../Resources/Projects/ApruebameEsta/ApruebameEstaModalPreview0.png";
import ApruebameEstaModalPreview1 from "../Resources/Projects/ApruebameEsta/ApruebameEstaModalPreview1.png";
import ApruebameEstaModalPreview2 from "../Resources/Projects/ApruebameEsta/ApruebameEstaModalPreview2.png";

import DGTPreview from "../Resources/Projects/DGT/DGTPreview.png"
import DGTModalPreview0 from "../Resources/Projects/DGT/DGTModalPreview0.png"
import DGTModalPreview1 from "../Resources/Projects/DGT/DGTModalPreview1.png"
import DGTModalPreview2 from "../Resources/Projects/DGT/DGTModalPreview2.png"

import COCGWPreview from "../Resources/Projects/CallOfCookingGardenWarfare/COCGWPreview.png"
import TheDarkMazePreview from "../Resources/Projects/TheDarkMaze/TheDarkMazePreview.png"

export const ProjectsData = [
    ////////////////////LUMENFALL/////////////////
    {
        CardData:{
            name: "LumenFall",
            description: "A fresh twist on the block puzzle genre",
            imageSrc: LumenFallPreview,
            used: "C#, Unity",
        },
        ModalData:{
            title:'LumenFall',
            badges:["Arcade", "Android", "C# Unity", "2023"],
            ImagesToShow:[
               LumenFallModalPreview1,
            ],
            VideosToShow:[
                "https://www.youtube.com/embed/eL1H20nfTYs",
            ],
            ModalContent: ()=>{
                return <div>
                    <p className="pb-3">    
                        LumenFall is an arcade game for Android devices that introduces a fresh twist to the "falling blocks" genre. 
                        In it, the player is given a board on which pieces of different colors fall and his objective is to match them to prevent the board form filling up.
                         The entire game was developed solely by me over the course of one year. 
                    </p>
                
                    <ul role="list" class="marker:text-base-400 list-disc pl-10 space-y-3">
                        <li><strong>EASY TO LEARN:</strong> LumenFall's gameplay is easy to pick up, making it accessible to players of all skill levels, while still offerring a rewarding challenge for puzzle enthusiasts.</li>
                        <li><strong>MULTIPLE PLAYSTYLES:</strong> With 5 game modes and 5 board sizes, players have a range of options to tailor their gaming experience.</li>
                        <li><strong>CUSTOMIZATION:</strong> Change the game's appearance by choosing from a variety of skins and use the skin editor to create your unique designs.</li>
                    </ul>
                </div>
            }
        }
    },
    ////////////////////APRUEBAME ESTA/////////////////
    {
        CardData:{
            name: "Apruébame Esta",
            imageSrc: ApruebameEstaPreview,
            used: "GDScript, Godot",
            description: "A game made for the GiftJam 2023",
        },
        ModalData:{
            title:'Apruébame Esta',
            badges:["Rythm", "WEB", "GDScript Godot", "Dec 2023"],
            ImagesToShow:[
                ApruebameEstaModalPreview0,
                ApruebameEstaModalPreview1,
                ApruebameEstaModalPreview2,
            ],
            VideosToShow:[
                "https://www.youtube.com/embed/c1AQ84mtQfM",
            ],
            ModalContent: ()=>{
                return  <div>
                            <p className="pb-2">
                            Apruebame Esta is a rythm game developed for the Gift Jam 2023, in it, you play as Ragnahilda, a determined student who, after facing academic setbacks, has decided to obtain her exam pass in an unconventional way, by engaging in boxing matches against her teachers.                
                            </p>
                            <ul className="list-disc pl-6">
                            <li className="pb-2">
                                Made in a span fo 14 days.
                            </li>
                            <li className="pb-2">
                                All of the art and music was made during the jam.
                            </li>
                            <li className="pb-2">
                                Developed as gift for the teachers of the Degree in Videogame Development at the Complutense University of Madrid.
                            </li>
                            </ul>
                        </div>
            }
        }
    },
    ////////////////////DGT/////////////////
    {
        CardData:{
            name: "Drifting Gibbon Time",
            imageSrc: DGTPreview,
            used: "GDScript, Godot",
            description: "A game made for the Global Jam 2024",
        },
        ModalData:{
            title:'Drifting Gibbon Time',
            badges:["Arcade", "WEB", "GDScript Godot", "Jan 2024"],
            ImagesToShow:[
                DGTModalPreview0,
                DGTModalPreview1,
                DGTModalPreview2,
            ],
            VideosToShow:[
                "https://www.youtube.com/embed/uJnBRfu4508",
            ],
            ModalContent: ()=>{
                return  <div>
                            <p className="pb-2">
                            Drifting Gibbon Time is a arcade-driving game created for the Global Game Jam 2024, with "make me laugh" as theme. 
                            In it, you play as a gibbon riding a motorized tricycle, aiming to collide with civilians and rank up as many points as possible, 
                            while avoiding the city's obstacles.                    
                            </p>
                            <ul className="list-disc pl-6">
                            <li className="pb-2">
                                Developed in a span of 48 hours.
                            </li>
                            <li className="pb-2">
                                Awarded as best art by the jury and best game by the public at voxel school/UCM site for Global Game Jam 2024.
                            </li>
                            </ul>
                        </div>
            }
        }
    },
    ////////////////////THE CAT THAT WATCHED THE STARS/////////////////
    {
        CardData:{
            name: "The cat that watched the stars(and viceversa)",
            imageSrc: TheCatThatWatchedTheStarsPreview,
            used: "GDScript, Godot",
            description: "A game made for the Mermelada Jam 2023",
        },
        ModalData:{
            title:'The cat that watched the stars (and viceversa)',
            badges:["Arcade", "WEB", "GDScript C# Godot", "2023"],
            ImagesToShow:[
                TheCatThatWatchedTheStarsModalPreview0,
                TheCatThatWatchedTheStarsModalPreview1,
                TheCatThatWatchedTheStarsModalPreview2,
            ],
            VideosToShow:[
                "https://www.youtube.com/embed/kdeup3j2obk",
            ],
            ModalContent: ()=>{
                return <div>
                    <p className="pb-2">
                    The Cat that Watched the Stars(and viceversa) is a game developed for the Mermelada Jam 2023, featuring the theme "If you blink you miss it." 
                    In this game, players gaze at the night sky, where stars sporadically appear, transitioning from white to yellow. 
                    The objective is to press the space button as soon as the star's color changes to 'capture' it. 
                    However, pressing too soon results in the star evading capture, causing it to turn red. 
                    The game rewards players with more points for quicker captures, offering a reflexes challenge.            
                    </p>
                    <ul className="list-disc pl-6">
                    <li>
                        Made in a span of 48 hours
                    </li>
                    <li className="pb-2">
                        Built with Godot combining the use of C# and GDScript                          
                    </li>
                    </ul>
                </div>
            }
        }
    },
    ////////////////////ANIMAL COOKING/////////////////
    {
        CardData:{
            name: "Animal Cooking",
            imageSrc: AnimalCookingPreview,
            used: "C++, SDL2",
            description: "Team up with a friend in this hectic culinary competition",
        },
        ModalData:{
            title:'Animal Cooking',
            badges:["Arcade", "PC", "C++ SDL2", "Feb 2020 - May 2020"],
            ImagesToShow:[
                AnimalCookingModalPreview0,
                AnimalCookingModalPreview1,
            ],
            VideosToShow:[
                "https://www.youtube.com/embed/e4pwn-ap8Fg",
            ],
            ModalContent: ()=>{
                return  <div>
                            <p className="pb-2">
                            Animal Cooking is a fast-paced cooking game designed for two players, which draws inspiration from the chaotic gameplay of Overcooked. 
                            Players must work together in a divided kitchen environment to assemble and cook dishes while hunting down elusive living ingredients.
                            </p>
                            <ul className="list-disc pl-6">
                            <li className="pb-2">
                                Developed entirely in C++ using SDL2.
                            </li>
                            <li className="pb-2">
                                It has 31 levels across 5 different biomes, each presenting different dishes and challenges to overcome.                         
                            </li>
                            <li className="pb-2">
                                    Developed as part of the Projects 2 subject of the Degree in Videogame Development at Universidad Complutense de Madrid.                             
                            </li>
                            </ul>
                        </div>
            }
        }
    },
    ////////////////////UNITARIO ENGINE/////////////////
    {
        CardData:
        {
            name: "Unitario Engine",
            imageSrc: UnitarioEnginePreview,
            used: "C++, LUA, Physx, Ogre3D, FMOD",
            description: "Custom C++ game engine made from scratch",
        },
        ModalData:{
            title:'Unitario Engine',
            badges:["Game Engine", "PC", "SDL2 Ogre3D Physx FMOD", "Feb 2021 - May 2021"],
            ImagesToShow:[
                "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
                "https://wallpapercave.com/wp/wp3386769.jpg",
                "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
            ],
            VideosToShow:[
            ],
            ModalContent: ()=>{
                return  <div>
                            <p className="pb-2">
                                Unitario Engine is a 3D Game Engine built with C++ in a 4-month span. Thanks to its component-based architecture and data-driven structure, once a basic project core is established, it is easy to add more content to the project.                            
                            </p>
                            <h3 className="font-bold text-lg pb-2">Highlights:</h3>
                            <ul className="list-disc pl-6">
                            <li className="pb-2">
                                Ogre 3D was used to control all the rendering
                            </li>
                            <li className="pb-2">
                                Physx was the engine used to control all the Physics related side, allowing the use of different shapes with a great performance.                            
                            </li>
                            <li>
                                FMOD is used to handle the whole sound system, allowing the use of dynamic and adaptative music, as well as different channels for SFX and music.
                            </li>
                            <li className="pb-2">
                                    Developed as part of the Projects 3 subject of the Degree in Videogame Development at Universidad Complutense de Madrid.                             
                            </li>
                            </ul>
                        </div>
            }
        }
    },
    ////////////////////THE DARK MAZE/////////////////
    {
        CardData:
        {
            name: "The Dark Maze",
            imageSrc: TheDarkMazePreview,
            used: "C++, LUA, Physx, Ogre3D, FMOD",
            description: "A game about escaping from a maze",
        },
        ModalData:{
            title:'The Dark Maze',
            badges:["Labyrinth", "PC", "SDL2 Ogre3D Physx FMOD", "Feb 2021 - May 2021"],
            ImagesToShow:[
            ],
            VideosToShow:[
                "https://www.youtube.com/embed/dlo_V2mefLQ",
            ],
            ModalContent: ()=>{
                return  <div>
                            <p className="pb-2">
                                The Dark Maze is a stealth game in which the player finds themselves inside a dark maze, and their objective is to find the key that allows them to escape. However, the maze is filled with enemies and traps, so the player will have to make use of the medkits and switches he will find along the way to navigate through it safely.                            
                            </p>
                            <ul className="list-disc pl-6">
                                <li className="pb-2">
                                    Built using the Unitario Engine (a custom C++ engine made from scratch)
                                </li>
                                <li className="pb-2">
                                    Developed as part of the Projects 3 subject of the Degree in Videogame Development at Universidad Complutense de Madrid.                             
                                </li>
                            </ul>
                        </div>
            }
        }
    },
    ////////////////////CALL OF COOKING GARDEN WARFARE/////////////////
    {
        CardData:
        {
            name: "Call of Cooking Garden Warfare",
            imageSrc: COCGWPreview,
            used: "C++, LUA, Physx, Ogre3D, FMOD",
            description: "A top-down game with ordes of enemies",
        },
        ModalData:{
            title:'Call of Cooking Garden Warfare',
            badges:["Top down shooter", "PC", "SDL2 Ogre3D Physx FMOD", "Feb 2021 - May 2021"],
            ImagesToShow:[
            ],
            VideosToShow:[
                "https://www.youtube.com/embed/_F6UqZ6lsIo",
            ],
            ModalContent: ()=>{
                return  <div>
                            <p className="pb-2">
                                Call of Cooking Garden Warfare is a top down shooter where the player faces endless waves of enemies, and the goal is to survive as many rounds as possible. After each wave, the player is offered a series of upgrades for his character to help him during his run.                            
                            </p>
                            <ul className="list-disc pl-6">
                                <li className="pb-2">
                                    Built using the Unitario Engine (a custom C++ engine made from scratch)
                                </li>
                                <li className="pb-2">
                                    Developed as part of the Projects 3 subject of the Degree in Videogame Development at Universidad Complutense de Madrid.                             
                                </li>
                            </ul>
                        </div>
            }
        }
    },
    ////////////////////OH NO CLONE/////////////////
    {
        CardData:{
            name: "OhnO! clone",
            imageSrc: OhnOPreview,
            used: "Java, AndroidStudio",
            description: "A clone of the popular game OhnO!",
        },
        ModalData:{
            title:'OhnO! clone',
            badges:["Puzzle", "Android & PC", "Java & Android Studio", "Feb 2022 - Mar 2022"],
            ImagesToShow:[
            ],
            VideosToShow:[
                "https://www.youtube.com/embed/tNf_QVNo5os",
            ],
            ModalContent: ()=>{
                return <div>
                            <p className="pb-2">
                                Clone of the "Oh nO!" game written from scratch in Java using Android Studio. 
                                The project's architecture was built with the advantages of the language
                                in mind, creating a multiplatform game playable on both PC and Android devices. 
                            </p>
                            <p>
                                Developed as part of the Videogames in Mobile subject of the Degree in Videogame Development at Universidad Complutense de Madrid. 
                            </p>
                        </div>
            }
        }
    },
    ////////////////////FLOW FREE/////////////////
    {
        CardData:{
            name: "Flow Free clone",
            imageSrc: FlowFreePreview,
            used: "C#, Unity",
            description: "A clone of the popular game FlowFree",
        },
        ModalData:{
            title:'Flow Free clone',
            badges:["Puzzle", "Android", "C# Unity", "Apr 2023 - May 2023"],
            ImagesToShow:[
            ],
            VideosToShow:[
                "https://www.youtube.com/embed/Q8PUYb0ya7s",
            ],
            ModalContent: ()=>{
                return <div>
                            <p className="pb-2">
                                Clone of the popular game "Flow Free," recreated using the Unity engine and incorporating the original game's assets. 
                                It includes all of the original game's levels and features integrated advertisements. 
                            </p>
                            <p>
                                Developed as part of the Videogames in Mobile subject of the Degree in Videogame Development at Universidad Complutense de Madrid. 
                            </p>
                        </div>
            }
        }
    },
    ////////////////////WOLFESTEIN 3D/////////////////
    {
        CardData:{
            name: "Wolfestein 3D on PS4",
            imageSrc: Wolfestein3DPreview,
            used: "C++, PS4 Development Kit",
            description: "A walker of the original Wolfestein3D for the PS4",
        },
        ModalData:{
            title:'Wolfestein 3D on PS4',
            badges:["Walker", "PC & PS4", "C++ PS4-Devkit", "Mar 2022 - May 2022"],
            ImagesToShow:[
            ],
            VideosToShow:[
                "https://www.youtube.com/embed/lHOYLbZ7_oA",
            ],
            ModalContent: ()=>{
                return <div>
                            <p className="pb-2">
                                Walker of the classic Wolfenstein 3D game, developed from scratch in a multiplatform project, both for PC and PlayStation 4, including the use of the official SDK and Tools provided by Sony.
                            </p>
                            <p>
                                Developed as part of the Videogames in Console subject of the Degree in Videovame Development at Universidad Complutense de Madrid.
                            </p>
                        </div>
            }
        }
    },
  ];