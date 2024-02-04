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


export const ProjectsData = [
    ////////////////////LUMENFALL/////////////////
    {
        CardData:{
            name: "LumenFall",
            description: "A more challenging puzzle game",
            imageSrc: LumenFallPreview,
            used: "C#, Unity",
        },
        ModalData:{
            title:'LumenFall',
            badges:["Block Puzzler", "Android", "C# Unity", "2023"],
            ImagesToShow:[
                LumenFallPreview,
               LumenFallModalPreview0,
               LumenFallModalPreview1,
            ],
            VideosToShow:[
                "https://www.youtube.com/embed/eL1H20nfTYs",
            ],
            ModalContent: ()=>{
                return <div>
                LumenFall offers an enthralling arcade puzzler experience where blocks of various colors fall, and your objective is to match 
                them in an ever-escalating challenge. With its minimalistic style and a unique twist on the puzzlers genre, LumenFall presents a 
                captivating gaming experience that keeps your mind engaged.
                
                    <ul role="list" class="marker:text-base-400 list-disc pl-10 space-y-3">
                        <li>CHALLENGING GAMEPLAY: Dive into the exhilarating gameplay of block-matching as you aim for the highest scores. LumenFall provides an ever-escalating challenge to test your skills.</li>
                        <li>EASY TO LEARN: LumenFall's gameplay is easy to pick up, making it accessible to players of all ages and skill levels. But don't be fooled – it still offers a rewarding challenge for puzzle enthusiasts.</li>
                        <li>MULTIPLE PLAYSTYLES: Tailor your experience by choosing from multiple game modes and board sizes.</li>
                        <li>SKIN CUSTOMIZATION: Personalize your experience by choosing from a variety of skins and use the skin editor to create your unique designs.</li>
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
            badges:["Block Puzzler", "Android", "C# Unity", "2023"],
            ImagesToShow:[
                AnimalCookingModalPreview0,
                AnimalCookingModalPreview1,
            ],
            VideosToShow:[],
            ModalContent: ()=>{
                return <div>
                    Animal Cooking is a frantic game in which two players will have to test their cooking skills in the annual culinary competition. To become the best chefs, you will have to overcome 31 levels, across 5 different biomes, overcoming the obstacles you encounter along the way. Find the ingredients, feed your customers, clean up, avoid burning the food and, above all, do it as a team! Enjoy this wonderful project and remember:

                    Pay attention to the cooking and don't forget to check the fire!!!!

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
            badges:["Block Puzzler", "Android", "C# Unity", "2023"],
            ImagesToShow:[
                "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
                "https://wallpapercave.com/wp/wp3386769.jpg",
                "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
            ],
            VideosToShow:[],
            ModalContent: ()=>{
                return <div>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit, lacinia neque justo mollis sagittis nisi phasellus taciti, urna faucibus montes in dictumst ridiculus. Primis tellus rutrum auctor venenatis tristique ridiculus netus pulvinar nostra pretium malesuada arcu, facilisis enim risus magnis felis morbi congue laoreet cursus metus ad proin dapibus, tempus luctus vivamus montes nisl dui donec condimentum nibh nisi aliquam. Tortor venenatis curabitur id taciti lacinia posuere bibendum aliquam lectus, faucibus sapien iaculis donec sociosqu urna conubia metus, commodo consequat accumsan mi purus varius interdum maecenas.                
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
            badges:["Block Puzzler", "Android", "C# Unity", "2023"],
            ImagesToShow:[
                "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
                "https://wallpapercave.com/wp/wp3386769.jpg",
                "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
            ],
            VideosToShow:[],
            ModalContent: ()=>{
                return <div>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit, lacinia neque justo mollis sagittis nisi phasellus taciti, urna faucibus montes in dictumst ridiculus. Primis tellus rutrum auctor venenatis tristique ridiculus netus pulvinar nostra pretium malesuada arcu, facilisis enim risus magnis felis morbi congue laoreet cursus metus ad proin dapibus, tempus luctus vivamus montes nisl dui donec condimentum nibh nisi aliquam. Tortor venenatis curabitur id taciti lacinia posuere bibendum aliquam lectus, faucibus sapien iaculis donec sociosqu urna conubia metus, commodo consequat accumsan mi purus varius interdum maecenas.                
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
            badges:["Rythm", "WEB", "GDSCRIPT GODOT", "2024"],
            ImagesToShow:[
                ApruebameEstaModalPreview0,
                ApruebameEstaModalPreview1,
                ApruebameEstaModalPreview2,
            ],
            VideosToShow:[],
            ModalContent: ()=>{
                return <div>
                    Tired of failing and failing, Ragnahilda has not only not given up, but is going to fight for her pass in the noblest of ways. A duel to the death with the most iconic professors of her faculty. Boxing. And to the rhythm of her favourite songs.                
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
            badges:["Arcade", "WEB", "GDSCRIPT GODOT", "2024"],
            ImagesToShow:[
                DGTModalPreview0,
                DGTModalPreview1,
                DGTModalPreview2,
            ],
            VideosToShow:[],
            ModalContent: ()=>{
                return <div className="text-balance">
                    Gibbon wants BANANA. Gibbon has motorized trycicle. There are no BANANAS on sight. But there are people and animals around the city. Maybe they have BANANAS?                    
                </div>
            }
        }
    },
    ////////////////////THE CAT THAT WATCHED THE STARS/////////////////
    {
        CardData:{
            name: "The cat that watched the stars",
            imageSrc: TheCatThatWatchedTheStarsPreview,
            used: "GDScript, Godot",
            description: "A game made for the Mermelada Jam",
        },
        ModalData:{
            title:'The cat that watched the stars',
            badges:["Block Puzzler", "Android", "C# Unity", "2023"],
            ImagesToShow:[
                TheCatThatWatchedTheStarsModalPreview0,
                TheCatThatWatchedTheStarsModalPreview1,
                TheCatThatWatchedTheStarsModalPreview2,
            ],
            VideosToShow:[],
            ModalContent: ()=>{
                return <div className="text-balance">
                    Some say that cats can see beyond the planes of reality we humans are used to, and can even interact with entities beyond our comprehension. Watch the starry sky and capture the shooting stars and fireworks that you, a curious kitty, reach out with your paw.                
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
            badges:["Block Puzzler", "Android", "C# Unity", "2023"],
            ImagesToShow:[
                "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
                "https://wallpapercave.com/wp/wp3386769.jpg",
                "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
            ],
            VideosToShow:[],
            ModalContent: ()=>{
                return <div>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit, lacinia neque justo mollis sagittis nisi phasellus taciti, urna faucibus montes in dictumst ridiculus. Primis tellus rutrum auctor venenatis tristique ridiculus netus pulvinar nostra pretium malesuada arcu, facilisis enim risus magnis felis morbi congue laoreet cursus metus ad proin dapibus, tempus luctus vivamus montes nisl dui donec condimentum nibh nisi aliquam. Tortor venenatis curabitur id taciti lacinia posuere bibendum aliquam lectus, faucibus sapien iaculis donec sociosqu urna conubia metus, commodo consequat accumsan mi purus varius interdum maecenas.                
                </div>
            }
        }
    },
    ////////////////////WOLFESTEIN 3D/////////////////
    {
        CardData:{
            name: "Wolfestein3D on PS4",
            imageSrc: Wolfestein3DPreview,
            used: "C++, PS4 Development Kit",
            description: "A walker of the original Wolfestein3D for the PS4",
        },
        ModalData:{
            title:'Wolfestein3D on PS4',
            badges:["Block Puzzler", "Android", "C# Unity", "2023"],
            ImagesToShow:[
                Wolfestein3DModalPreview0,
                "https://wallpapercave.com/wp/wp3386769.jpg",
                "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
            ],
            VideosToShow:[],
            ModalContent: ()=>{
                return <div>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit, lacinia neque justo mollis sagittis nisi phasellus taciti, urna faucibus montes in dictumst ridiculus. Primis tellus rutrum auctor venenatis tristique ridiculus netus pulvinar nostra pretium malesuada arcu, facilisis enim risus magnis felis morbi congue laoreet cursus metus ad proin dapibus, tempus luctus vivamus montes nisl dui donec condimentum nibh nisi aliquam. Tortor venenatis curabitur id taciti lacinia posuere bibendum aliquam lectus, faucibus sapien iaculis donec sociosqu urna conubia metus, commodo consequat accumsan mi purus varius interdum maecenas.                
                </div>
            }
        }
    },
  ];