"use client"

import { useState, useEffect } from 'react';
import React from "react";
import "./styles.scss";
import { SiBmw } from "react-icons/si"
import { FaGoogle, FaXbox, FaReact, FaPython, FaUnity, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa"
import { IoIosArrowDown } from "react-icons/io";


const iconList = [
    FaReact,
    FaPython,
    FaUnity,
    FaHtml5,
    FaCss3Alt,
    FaJs
]

const exp = [
    {
        icon: SiBmw,
        name: "BMW",
        description: "Financial Controlling Intern; May 2025 - Aug 2025",
    },
     {
        icon: FaGoogle,
        name: "Google",
        description: "Software Dev Intern; May 2024 - Aug 2024",
    },
     {
        icon: FaXbox,
        name: "Xbox",
        description: "Game Dev; May 2023 - Aug 2023",
    },
];


const Experience = () => {

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => (prev+1) % iconList.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const CurrentIcon = iconList[index]

    return (
    <div className="MainContainer">
        <div className="MainContainer__TechStack">
            <h1>Tech Stack</h1>
            <div className="MainContainer__TechStack__Screen">
                <CurrentIcon className="MainContainer__TechStack__Logo"/>
            </div>
        </div>



        <div className="MainContainer__Professional">
            <h1>Experience</h1>
            <ul className="MainContainer__Professional__Menu">
                {
                    exp.map((item, key) => (
                        <li key={key}>
                            <div className="MainContainer__Professional__Menu__Item">
                                <item.icon size={50} className="MainContainer__Professional__Menu__Item__Logo"></item.icon>
                                <div className="MainContainer__Professional__Menu__Item__Text">
                                    <h2 className="MainContainer__Professional__Menu__Item__Text__Name">{item.name}</h2>
                                    <p className="MainContainer__Professional__Menu__Item__Text__Desc">{item.description}</p>
                                </div>
                                <IoIosArrowDown size={40} className="MainContainer__Professional__Menu__Item__Arrow"></IoIosArrowDown>
                            </div>
                        </li>                    
                    ))
                }   
            </ul>
        </div>

    </div>
    )
}


export default Experience;

