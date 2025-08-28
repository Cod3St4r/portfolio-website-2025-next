"use client"

import React from "react";
import "./styles.scss";

// Code for Project card hovering
// https://codepen.io/nefejames/pen/ogvNgJq
// https://www.youtube.com/watch?v=aJpjUm71qBM&t=6569s&pp=ygUacG9ydGZvbGlvIHdlYnNpdGUgdHV0b3JpYWzSBwkJsgkBhyohjO8%3D 


const projects =[
    {
        imgSrc: '/images/frpic.jpg',
        title: 'Pokemon Red',
        description:'Pokémon Red Version is a foundational 1996 Game Boy role-playing video game developed by Game Freak and published by Nintendo. Players travel through the Kanto region, capturing and training a variety of Pokémon, battling Gym Leaders, and preventing Team Rocket from stealing Pokémon to become the greatest trainer.',
        gitLink:'https://en.wikipedia.org/wiki/Pok%C3%A9mon_Red,_Blue,_and_Yello',
        projectLink:'https://arcadespot.com/game/pokemon-red/',
    },
    {
        imgSrc: '/images/ygo5ds.jpg',
        title: '5ds Tagforce',
        description:"Yu-Gi-Oh! 5D's Tag Force 4 is a card battle strategy game for the PlayStation Portable (PSP) released by Konami in 2009, featuring over 3,500 cards and focusing on the story and characters from the Yu-Gi-Oh! 5D's animated series.",
        gitLink:"https://yugioh.fandom.com/wiki/Yu-Gi-Oh!_5D%27s_Tag_Force_4",
        projectLink:"https://www.emulatorgames.net/roms/playstation-portable/yu-gi-oh-5ds-tag-force-4/",
    },
    {
        imgSrc: '/images/titanfall.jpg',
        title: 'TitanFall',
        description:"Titanfall is a media franchise that mainly features first-person shooter games. The series was created by Respawn Entertainment and debuted on Xbox and Microsoft Windows; it has expanded to other consoles and platforms.",
        gitLink:"https://en.wikipedia.org/wiki/Titanfall",
        projectLink:"https://www.ea.com/en/games/titanfall/titanfall-2",
    }
]


const Projects = () => {
    return(
        <div className='Page'> 
            <h1 className='Page__Title'>Projects</h1>
            <ul className='Page__Projects'>
                {
                    projects.map((item,key) =>(
                        <li key={key}>
                            <div className='Page__Projects__Card'>
                                <img className='Page__Projects__Card__Image' src={item.imgSrc}></img>
                                <h2 className ='Page__Projects__Card__Title'>{item.title}</h2>
                                <p className='Page__Projects__Card__Description'>{item.description}</p>
                                <div className='Page__Projects__Card__Buttons'>
                                    <button className='Page__Projects__Card__Buttons__Github' type="button" onClick={()=> window.open(item.gitLink, '_blank')}>Github</button>
                                    <button className='Page__Projects__Card__Buttons__Website' type="button" onClick={()=> window.open(item.projectLink, '_blank')}>Website</button>
                                </div>
                            </div>
                        </li>
                    ))
                
}    
            </ul>
        </div>

    )
}

export default Projects;

