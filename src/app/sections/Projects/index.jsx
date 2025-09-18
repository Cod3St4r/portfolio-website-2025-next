"use client"

import React from "react";
import "./styles.scss";
import { useRouter } from 'next/navigation';
import {motion, useMotionValue, useSpring, useTransform} from 'framer-motion'
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';



// Code for Project card hovering
// https://codepen.io/nefejames/pen/ogvNgJq
// https://www.youtube.com/watch?v=aJpjUm71qBM&t=6569s&pp=ygUacG9ydGZvbGlvIHdlYnNpdGUgdHV0b3JpYWzSBwkJsgkBhyohjO8%3D 


const projects =[
    {
        imgSrc: '/images/code.jpg',
        title: 'In Progress',
        description:"I currently do not have a project to show here. Check back next time to see what I am working on.",
        gitLink:'https://github.com/Cod3St4r',
        projectLink:'https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1&pp=ygUJcmljayByb2xsoAcB',
    },
    {
        imgSrc: '/images/code.jpg',
        title: 'In Progress',
        description:"I currently do not have a project to show here. Check back next time to see what I am working on.",
        gitLink:'https://github.com/Cod3St4r',
        projectLink:'https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1&pp=ygUJcmljayByb2xsoAcB',
    },
    {
        imgSrc: '/images/code.jpg',
        title: 'In Progress',
        description:"I currently do not have a project to show here. Check back next time to see what I am working on.",
        gitLink:'https://github.com/Cod3St4r',
        projectLink:'https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1&pp=ygUJcmljayByb2xsoAcB',
    },
]


const Projects = () => {
    useGSAP(
        () => {
            gsap.from('.Page',{
                scrollTrigger: '.Page__Projects',
                opacity: 0,
                y:200
            })
            gsap.to('.Page', {
                scrollTrigger: '.Page__Projects',
                duration: 1.5,
                ease: "power1.out",
                opacity: 1,
                y:0
            })
        }
    )

    return(
        <div className='Page'> 
            <h1 className='Page__Title'>Projects</h1>
            <ul className='Page__Projects'>
                {
                    projects.map((item,key) =>(
                        <ProjectCard key={key} item={item} />
                    ))
                }    
            </ul>
        </div>
    )
}

const ProjectCard = ({ item }) => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const xSpring = useSpring(x, { stiffness: 300, damping: 30 })
    const ySpring = useSpring(y, { stiffness: 300, damping: 30 })

    // Increased tilt angles for more obvious effect
    const xRotation = useTransform(ySpring, [-0.5,0.5], ["25deg", "-25deg"])
    const yRotation = useTransform(xSpring, [-0.5, 0.5], ["-25deg", "25deg"])

    const handleMouseMove = (e) => {
        if(!e.currentTarget) return

        const target = e.currentTarget;
        const clientRect = target.getBoundingClientRect();

        const xPos = (e.clientX - clientRect.left) / 
        clientRect.width - 0.5;

        const yPos = (e.clientY - clientRect.top) / 
        clientRect.height - 0.5;

        x.set(xPos)
        y.set(yPos)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    return (
        <li>
            <motion.div 
                className='Page__Projects__Card'
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    transformStyle: "preserve-3d",
                    rotateX: xRotation,
                    rotateY: yRotation,
                    perspective: "1000px"
                }}
                whileHover={{ 
                    scale: 1.3,
                    z: 50,
                    transition: { duration: 0.3 }
                }}
                initial={{ scale: 1 }}
            >
                <img className='Page__Projects__Card__Image' src={item.imgSrc}></img>
                <h2 className ='Page__Projects__Card__Title'>{item.title}</h2>
                <p className='Page__Projects__Card__Description'>{item.description}</p>
                <div className='Page__Projects__Card__Buttons'>
                    <button className='Page__Projects__Card__Buttons__Github' type="button" onClick={()=> window.open(item.gitLink, '_blank')}>Github</button>
                    <button className='Page__Projects__Card__Buttons__Website' type="button" onClick={()=> window.open(item.projectLink, '_blank')}>Website</button>
                </div>
            </motion.div>
        </li>
    )
}

export default Projects;

