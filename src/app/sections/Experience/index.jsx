"use client"

import { useState, useEffect } from 'react';
import React from "react";
import "./styles.scss";
import { SiBmw } from "react-icons/si"
import { FaGoogle, FaXbox, FaReact, FaPython, FaUnity, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa"
import { IoIosArrowDown } from "react-icons/io";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { MdOutlineQuestionMark } from "react-icons/md";


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
        description: "As a Financial Controlling Intern at BMW, you support the analysis and optimization of financial processes across various business units. Your responsibilities include preparing reports, developing dashboards, and assisting with budget monitoring to ensure accuracy and compliance."
    },
     {
        icon: MdOutlineQuestionMark,
        name: "Could Be Yours",
        title: "Position; Month Year - Month Year",
        description: "Experience is important and I enjoy learning more and more. If you think I would be a great fit for your company let me know and give me the experience I am looking for. Thank You."
    },
     {
        icon: MdOutlineQuestionMark,
        name: "Could Be Yours",
        title: "Position; Month Year - Month Year",
        description: "Experience is important and I enjoy learning more and more. If you think I would be a great fit for your company let me know and give me the experience I am looking for. Thank You."
    },
];


const Experience = () => {

    const [index, setIndex] = useState(0);
    const [activeItem, setActiveItem] = useState(null);

    const handleItemClick = (itemIndex) => {
        setActiveItem(activeItem === itemIndex ? null : itemIndex);

        requestAnimationFrame(() => {
            document.body.offsetHeight;
        })
    };

    // Icon switching in Tech Stack
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => (prev+1) % iconList.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const CurrentIcon = iconList[index]

    useGSAP(
        () => {
            gsap.from('.MainContainer',{
                scrollTrigger: '.MainContainer',
                opacity: 0,
                y:100
            })
            gsap.to('.MainContainer', {
                scrollTrigger: '.MainContainer',
                duration: 1.5,
                ease: "power1.out",
                opacity: 1,
                y:0
            })
        }
    )

    return (
    <div className="MainContainer">
        <div className="MainContainer__TechStack">
            <h1 className="Header1">Tech Stack</h1>
            <div className="MainContainer__TechStack__Screen">
                <CurrentIcon className="MainContainer__TechStack__Logo"/>
            </div>
        </div>



        <div className="MainContainer__Professional">
            <h1 className="Header2">Experience</h1>
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

