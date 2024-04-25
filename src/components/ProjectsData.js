import LumenFallPreview from "../Resources/Projects/LumenFall/LumenFallPreview.png";
import LumenFallModalPreview0 from "../Resources/Projects/LumenFall/LumenFallModalPreview0.jpg";
import LumenFallModalPreview1 from "../Resources/Projects/LumenFall/LumenFallModalPreview1.png";

import HexMatchPreview from "../Resources/Projects/HexMatch/HexMatch_Preview.png";

import UnitarioEnginePreview from "../Resources/Projects/UnitarioEngine/4AnotherDayPreview.jpeg";
import UnitarioEngineTechnologies from "../Resources/Projects/UnitarioEngine/EngineTechnologies.png";
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

import HematorrosaPreview from "../Resources/Projects/Hematorrossa/Hematorrossa_Preview.png";
// import ApruebameEstaModalPreview0 from "../Resources/Projects/ApruebameEsta/ApruebameEstaModalPreview0.png";

import DGTPreview from "../Resources/Projects/DGT/DGTPreview.png"
import DGTModalPreview0 from "../Resources/Projects/DGT/DGTModalPreview0.png"
import DGTModalPreview1 from "../Resources/Projects/DGT/DGTModalPreview1.png"
import DGTModalPreview2 from "../Resources/Projects/DGT/DGTModalPreview2.png"

import COCGWPreview from "../Resources/Projects/CallOfCookingGardenWarfare/COCGWPreview.png"
import TheDarkMazePreview from "../Resources/Projects/TheDarkMaze/TheDarkMazePreview.png"

const getBtnTheme = () => {
    if(localStorage.getItem("theme") === 'dark')
      return ' text-center text-l md:text-xl  font-semibold me-2 px-4 py-2 mb-1.5 mx-2 rounded-md bg-gray-400 text-gray-800'+
      ' hover:scale-110 transition-transform duration-300 ease-in-out';
    else 
    return ' text-center text-l md:text-xl  font-semibold me-2 px-4 py-2 mb-1.5 mx-2 rounded-md bg-gray-800 text-white'+
    ' hover:scale-110 transition-transform duration-300 ease-in-out';
    //   return 'text-center text-l md:text-xl w-32 md:w-44 font-bold me-2 px-2.5 py-0.5 mb-1.5 rounded-md bg-gray-800 text-white';
  };


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
                    <p className="pb-4">    
                        LumenFall is an arcade game for Android devices that introduces a fresh twist to the "falling blocks" genre. 
                        In it, the player is given a board on which pieces of different colors fall and his objective is to match them to prevent the board form filling up.
                         The entire game was developed solely by me over the course of one year. 
                    </p>
                
                    <ul role="list" class="marker:text-base-400 list-disc pl-6 space-y-2">
                        <li><strong>EASY TO LEARN:</strong> LumenFall's gameplay is easy to pick up, making it accessible to players of all skill levels, while still offerring a rewarding challenge for puzzle enthusiasts.</li>
                        <li><strong>MULTIPLE PLAYSTYLES:</strong> With 5 game modes and 5 board sizes, players have a range of options to tailor their gaming experience.</li>
                        <li><strong>CUSTOMIZATION:</strong> Change the game's appearance by choosing from a variety of skins and use the skin editor to create your unique designs.</li>
                    </ul>
                </div>
            },
            Buttons: ()=>{
                return  <div className="flex justify-center items-center pt-6 ">
                            <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className={getBtnTheme()}
                            >
                            Game not published yet
                            </a>
                        </div>
            }
        }
    },
    ////////////////////HEMATORROSSA/////////////////
    {
        CardData:{
            name: "Hematorrossa",
            imageSrc: HematorrosaPreview,
            used: "GDScript, Godot",
            description: "A game made for the Sant Jordi Jam 2024",
        },
        ModalData:{
            title:'Hematorrossa',
            badges:["2D Platformer", "WEB", "GDScript Godot", "Apr 2024"],
            ImagesToShow:[
            ],
            VideosToShow:[
                "https://www.youtube.com/embed/57OJgwo0zYo",
            ],
            ModalContent: ()=>{
                return  <div>
                            <p className="pb-2">
                                Hematorrossa is a game inspired by the legend of Sant Jordi. In this 2D platformer, players take the role of Witiza, 
                                a knight tasked with killing the dragon that is haunting the village of Montblanc. To achieve this, 
                                players  will have to navigate through a set number of ramdomized rooms filled with enemies, 
                                having to eliminate them as quickly as possible in order to advance. 
                                The game culminates with a bossfight against said dragon.
                            </p>
                            <p className="pb-4">
                            </p>
                            <ul className="list-disc pl-6">
                                <li className="pb-2">
                                    Developed in a span fo 21 days for the Sant Jordi Jam 2024, featuring the theme "Legend".
                                </li>
                                <li className="pb-2">
                                    All of the art and music was made during the jam.
                                </li>
                            </ul>
                        </div>
                },
                Buttons: ()=>{
                    return  <div className="flex justify-center items-center pt-6 ">
                                <a
                                href="https://github.com/freesstylers/SantJordiJam"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={getBtnTheme()}
                                >
                                GitHub
                                </a>
                                <a
                                href="https://freestylers-studio.itch.io/hematorosa"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={getBtnTheme()}
                                >
                                Itch.io
                                </a>
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
                                Apruébame Esta is a rythm game in which you play as Ragnahilda, a determined student who, after facing academic setbacks, 
                                has decided to obtain her exam pass in an unconventional way, by engaging in boxing matches against her teachers.
                            </p>
                            <p className="pb-4">
                                The player is presented with a timeline featuring arrows that must be pressed in sync with the beat. Matches unfold in two phases: 
                                an attack phase, where the player needs to press those directions to throw punches, and a defense phase, 
                                where the timeline displays the opponent's incoming attacks, 
                                making the player have to press the opposite direction to evade them.
                            </p>
                            <ul className="list-disc pl-6">
                                <li className="pb-2">
                                    Developed in a span fo 14 days for the Gift Jam 2023.
                                </li>
                                <li className="pb-2">
                                    All of the art and music was made during the jam.
                                </li>
                                <li className="pb-2">
                                    Developed as gift for the teachers of the Degree in Videogame Development at the Universidad Complutense de Madrid.
                                </li>
                            </ul>
                        </div>
                },
                Buttons: ()=>{
                    return  <div className="flex justify-center items-center pt-6 ">
                                <a
                                href="https://github.com/freesstylers/GiftJam2324"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={getBtnTheme()}
                                >
                                GitHub
                                </a>
                                <a
                                href="https://freestylers-studio.itch.io/apruebame-esta"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={getBtnTheme()}
                                >
                                Itch.io
                                </a>
                            </div>
                }
        }
    },
    ////////////////////DGT/////////////////
    {
        CardData:{
            name: "Driftin' Gibbon Time",
            imageSrc: DGTPreview,
            used: "GDScript, Godot",
            description: "A game made for the Global Jam 2024",
        },
        ModalData:{
            title:"Driftin' Gibbon Time",
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
                            <p className="pb-4">
                                Driftin' Gibbon Time is an arcade-driving game where you play as a gibbon riding a motorized tricycle, 
                                and your objective is to collide with as many civilians as possible while avoiding the city's obstacles.  
                                After colliding with a bunch of civilians, you level up, giving you the choice to replenish some 
                                of your health or improve your driving stats to further cause caos on the road.
                            </p>
                            <ul className="list-disc pl-6">
                                <li className="pb-2">
                                    Developed in a span of 48 hours for the Global Game Jam 2024, featuring the theme "make me laugh".
                                </li>
                                <li className="pb-2">
                                    Awarded as best art by the jury and best game by the public at voxel school/UCM site for Global Game Jam 2024.
                                </li>
                            </ul>
                        </div>
            },
            Buttons: ()=>{
                return  <div className="flex justify-center items-center pt-6 ">
                                <a
                                href="https://github.com/freesstylers/GoofyAhhCar"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={getBtnTheme()}
                                >
                                GitHub
                                </a>
                                <a
                                href="https://freestylers-studio.itch.io/driftin-gibbon-time"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={getBtnTheme()}
                                >
                                Itch.io
                                </a>
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
                    <p className="pb-4">
                    The Cat that Watched the Stars(and viceversa) is a game where you play as a cat gazing at the night sky, 
                    where stars sporadically appear. 
                    Each star transitions from white to yellow after a brief delay, and the objective is to press the space button as soon as the color changes to 'capture' it. 
                    However, pressing too soon results in the star evading capture, causing it to turn red. 
                    The game rewards players with more points for quicker captures, offering a reflexes challenge.            
                    </p>
                    <ul className="list-disc pl-6">
                        <li className="pb-2">
                            Made in a span of 48 hours for the Mermelada Jam 2023 featuring the theme "If you blink you miss it"
                        </li>
                        <li className="pb-2">
                            Built with Godot combining the use of C# and GDScript                          
                        </li>
                    </ul>
                </div>
            },
            Buttons: ()=>{
                return  <div className="flex justify-center items-center pt-6 ">
                               <a
                                href="https://github.com/freesstylers/MermeladaJam2023"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={getBtnTheme()}
                                >
                                GitHub
                                </a>
                                <a
                                href="https://freestylers-studio.itch.io/cat-watched-stars-viceversa"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={getBtnTheme()}
                                >
                                Itch.io
                                </a>
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
                            <p className="pb-4">
                            Animal Cooking is a fast-paced cooking game designed for two players, which draws inspiration from the chaotic gameplay of Overcooked. 
                            Players must work together in a divided kitchen environment to assemble and cook dishes while hunting down elusive living ingredients.
                            The game features 31 levels across 5 different biomes, each presenting different dishes and challenges to overcome.
                            </p>
                            <ul className="list-disc pl-6">
                                <li className="pb-2">
                                    Developed entirely in C++ using SDL2.
                                </li>
                                <li className="pb-2">
                                        Developed as part of the Projects 2 subject of the Degree in Videogame Development at Universidad Complutense de Madrid.                             
                                </li>
                            </ul>
                        </div>
            },
            Buttons: ()=>{
                return  <div className="flex justify-center items-center pt-6 ">
                                <a
                                href="https://github.com/davidczepiel/AnimalCooking"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={getBtnTheme()}
                                >
                                GitHub
                                </a>
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
                UnitarioEngineTechnologies
            ],
            VideosToShow:[
            ],
            ModalContent: ()=>{
                return  <div>
                            <p className="pb-4">
                                Unitario Engine is a custom 3D Game Engine developed from scratch using C++. 
                                The objective of this project was to delve into the intricacies of game engine development, 
                                exploring and implementing each of it's core element.                          
                            </p>
                            <p className="pb-4">
                                It uses Ogre 3D for rendering, Physx for physics simulations, and fmod for audio processing. 
                                Its core is built upon a component-based architecture, allowing for modular development and easy integration of new features.     
                                Additionally, the engine incorporates a data-driven approach by implementing a scene loader using the LUA language.              
                            </p>
                            <ul className="list-disc pl-6">
                                <li className="pb-2">
                                    In order to prove that the engine can indeed be used to create video games, 
                                    two simple projects were developed to demonstrate its capabilities: "The Dark Maze" and "Call of Cooking Garden Warfare"                           
                                </li>
                                <li className="pb-2">
                                        Developed as part of the Projects 3 subject of the Degree in Videogame Development at Universidad Complutense de Madrid.                             
                                </li>
                            </ul>
                        </div>
            },
            Buttons: ()=>{
                return  <div className="flex justify-center items-center pt-6 ">
                            <a
                            href="https://github.com/davidczepiel/Unitario-Engine"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={getBtnTheme()}
                            >
                            GitHub
                            </a>
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
            badges:["Maze", "PC", "C++ Unitario Engine", "Feb 2021 - May 2021"],
            ImagesToShow:[
            ],
            VideosToShow:[
                "https://www.youtube.com/embed/dlo_V2mefLQ",
            ],
            ModalContent: ()=>{
                return  <div>
                            <p className="pb-4">
                                The Dark Maze is a game in which the player finds themselves inside a maze, and their objective is to find the key that allows them to escape. 
                                However, the maze is filled with enemies and traps, so the player will have to make use of the medkits and switches he will find along the way to navigate through it safely.                            
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
            },
            Buttons: ()=>{
                return  <div className="flex justify-center items-center pt-6 ">
                            <a
                            href="https://github.com/davidczepiel/Unitario-Engine"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={getBtnTheme()}
                            >
                            Unitario Engine
                            </a>
                            <a
                            href="https://github.com/4anotherday/DarkMaze"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={getBtnTheme()}
                            >
                            GitHub
                            </a>
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
            badges:["Top down shooter", "PC", "C++ Unitario Engine", "Feb 2021 - May 2021"],
            ImagesToShow:[
            ],
            VideosToShow:[
                "https://www.youtube.com/embed/_F6UqZ6lsIo",
            ],
            ModalContent: ()=>{
                return  <div>
                            <p className="pb-4">
                                Call of Cooking Garden Warfare is a top down shooter where the player faces endless waves of enemies, and the goal is to survive as many rounds as possible. 
                                After each round, the player is offered a series of upgrades for his character to help him during his run.                            
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
            },
            Buttons: ()=>{
                return  <div className="flex justify-center items-center pt-6 ">
                            <a
                            href="https://github.com/davidczepiel/Unitario-Engine"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={getBtnTheme()}
                            >
                            Unitario Engine
                            </a>
                            <a
                            href="https://github.com/4anotherday/CallOfCooking"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={getBtnTheme()}
                            >
                            GitHub
                            </a>
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
                            <p className="pb-4">
                            Walker of the classic Wolfentsetin 3D  game,  it features the original game's assets and all of its 60 levels. 
                            This game was developed in a multiplatform project that can run on both PC and PS4 platforms, making use of the official SDK and Tools provided by Sony. 
                            </p>
                            <ul className="list-disc pl-6">
                                <li className="pb-2">
                                    Built from scratch using C++, and SDL2 for the PC version.
                                </li>
                                <li className="pb-2">
                                    Developed as part of the Videogames in Console subject of the Degree in Videovame Development at Universidad Complutense de Madrid.
                                </li>
                            </ul>
                        </div>
            },
            Buttons: ()=>{
                return  <div className="flex justify-center items-center pt-6 ">
                            <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className={getBtnTheme()}
                            >
                            Code not available due to NDA
                            </a>
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
                            <p className="pb-4">
                                Clone of "Oh nO!", developed in a multiplatform project that can be played on both PC and Android devices.  
                            </p>
                            <ul className="list-disc pl-6">
                                <li className="pb-2">
                                    Built from scratch using Java, and Android Studio.
                                </li>
                                <li className="pb-2">
                                    Developed as part of the Videogames in Mobile subject of the Degree in Videogame Development at Universidad Complutense de Madrid. 
                                </li>
                            </ul>
                        </div>
            },
            Buttons: ()=>{
                return  <div className="flex justify-center items-center pt-6 ">
                            <a
                            href="https://github.com/davidczepiel/Mobile-Game-Clones"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={getBtnTheme()}
                            >
                            GitHub
                            </a>
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
                            <p className="pb-4">
                                Clone of "Flow Free," recreated using the Unity engine and incorporating the original game's assets. 
                            </p>
                            <ul className="list-disc pl-6">
                                <li className="pb-2">
                                    It includes all of the original game's level packs and features integrated advertisements. 
                                </li>
                                <li className="pb-2">
                                    Developed as part of the Videogames in Mobile subject of the Degree in Videogame Development at Universidad Complutense de Madrid.
                                </li>
                            </ul>
                        </div>
            },
            Buttons: ()=>{
                return  <div className="flex justify-center items-center pt-6 ">
                            <a
                            href="https://github.com/davidczepiel/Mobile-Game-Clones"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={getBtnTheme()}
                            >
                            GitHub
                            </a>
                        </div>
            }
        }
    },
    ////////////////////HEXMATCH/////////////////
    {
        CardData:{
            name: "HexMatch",
            description: "A different take on the match-three genre",
            imageSrc: HexMatchPreview,
            used: "C#, Unity",
        },
        ModalData:{
            title:'HexMatch',
            badges:["Arcade", "Android", "C# Unity", "2023"],
            ImagesToShow:[
                HexMatchPreview,
            ],
            VideosToShow:[
            ],
            ModalContent: ()=>{
                return <div>
                    <p className="pb-4">    
                    HexMatch is an arcade puzzle game for Android devices with a different take on the "match three" genre. 
                    In it, the player is given a board on which pieces of different colors appear, and their objective is to 
                    match them to prevent the board from filling up. 
                    The entire game was developed solely by me over the course of 5 months.
                    </p>
                
                    <ul role="list" class="marker:text-base-400 list-disc pl-6 space-y-2">
                        <li><strong>MULTIPLE BOARDS:</strong> With 5 board sizes, players have a range of options to tailor their gaming experience.</li>
                        <li><strong>CUSTOMIZATION:</strong> Change the game's appearance by choosing from a variety of skins.</li>
                    </ul>
                </div>
            },
            Buttons: ()=>{
                return  <div className="flex justify-center items-center pt-6 ">
                            <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className={getBtnTheme()}
                            >
                            Game still in development
                            </a>
                        </div>
            }
        }
    },
  ];