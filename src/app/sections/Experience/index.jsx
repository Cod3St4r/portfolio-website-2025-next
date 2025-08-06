"use client"

import { useState, useEffect } from 'react';
import React from "react";
import "./styles.scss";
import { SiBmw } from "react-icons/si"
import { FaGoogle, FaXbox, FaReact, FaPython, FaUnity, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa"


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
        description: "this is my experience",
    },
     {
        icon: FaGoogle,
        name: "Google",
        description: "this is my experience",
    },
     {
        icon: FaXbox,
        name: "Xbox",
        description: "this is my experience",
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
                                <item.icon></item.icon>
                                <h2>{item.name}</h2>
                                <p>{item.description}</p>
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

