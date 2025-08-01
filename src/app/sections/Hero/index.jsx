"use client";

import React from "react";
import './styles.scss';
import { useRouter } from 'next/navigation';
import TypewriterComponent from './typewrite.jsx'
import {motion, useMotionValue, useSpring, useTransform} from 'framer-motion'

const Home = () => {
    const router = useRouter();

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const xSpring = useSpring(x)
    const ySpring = useSpring(y)

    const xRotation = useTransform(ySpring, [-0.5,0.5], ["15deg", "-15deg"])
    const yRotation = useTransform(xSpring, [-0.5, 0.5], ["-15deg", "15deg"])

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

    const handleNavigateToContactMePage = () => {
        router.push('/contact');
    }

    return(
        <div className="home">
            <div className="home__content">
                <motion.div 
                onMouseMove={handleMouseMove} 
                onMouseLeave = {handleMouseLeave} 
                className="home__title"
                style={{
                    transformStyle: "preserve-3d",
                    rotateX: xRotation,
                    rotateY: yRotation,
                }}>
                    <h1 className="home__test">Hello, I'm Carlos,</h1>
                    <TypewriterComponent />
                </motion.div>
            </div>
        </div>
    )
}
export default Home;