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
        title: "Financial Controlling Intern; May 2025 - Aug 2025",
        description: "As a Financial Controlling Intern at BMW, you support the analysis and optimization of financial processes across various business units. Your responsibilities include preparing reports, developing dashboards, and assisting with budget monitoring to ensure accuracy and compliance. You collaborate closely with senior controllers, gaining hands-on experience with data visualization tools and process automation."
        
    },
     {
        icon: FaGoogle,
        name: "Google",
        title: "Software Dev Intern; May 2024 - Aug 2024",
        description: "As a Software Developer at Google, you design, code, test, and maintain high-performance applications that serve millions of users worldwide. You work in cross-functional teams to solve complex technical challenges, leveraging scalable infrastructure and cutting-edge technologies. Your role involves writing clean, efficient code while contributing to system architecture and product innovation."
    },
     {
        icon: FaXbox,
        name: "Xbox",
        title: "Game Dev; May 2023 - Aug 2023",
        description: "As a Game Developer for Xbox, you create engaging, interactive experiences optimized for the Xbox ecosystem. You work on game mechanics, performance optimization, and platform-specific features to ensure a smooth player experience. Collaborating with artists, designers, and other developers, you bring game concepts to life from prototype to final release."

    },
];


const Experience = () => {

    const [index, setIndex] = useState(0);
    const [activeItem, setActiveItem] = useState(null);

    const handleItemClick = (itemIndex) => {
        setActiveItem(activeItem === itemIndex ? null : itemIndex);
    };

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
                            <div 
                                className={`MainContainer__Professional__Menu__Item ${activeItem === key ? 'active' : ''}`}
                                onClick={() => handleItemClick(key)}
                            >
                                <item.icon size={50} className="MainContainer__Professional__Menu__Item__Logo"></item.icon>
                                <div className="MainContainer__Professional__Menu__Item__Text">
                                    <h2 className="MainContainer__Professional__Menu__Item__Text__Name">{item.name}</h2>
                                    <p className="MainContainer__Professional__Menu__Item__Text__Title">{item.title}</p>
                                    <div className={`MainContainer__Professional__Menu__Item__Text__Desc ${activeItem === key ? 'expanded' : 'collapsed'}`}>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                                <IoIosArrowDown size={40} className={`MainContainer__Professional__Menu__Item__Arrow ${activeItem === key ? 'rotated' : ''}`}></IoIosArrowDown>
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

