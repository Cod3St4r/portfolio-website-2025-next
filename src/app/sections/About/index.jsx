"use client"

import React from "react";
import "./styles.scss";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const About=()=>{

    useGSAP(
        () => {
            gsap.from('.PageContent',{
                scrollTrigger: '.PageContent',
                opacity: 0,
                y:100
            })
            gsap.to('.PageContent', {
                scrollTrigger: '.PageContent',
                duration: 1.5,
                ease: "power1.out",
                opacity: 1,
                y:0
            })
        }
    )

    return(
        <section id="about" className="about">
            <div className="PageContent" id="Page">
                <div className="PageContent__Image_Container">
                    <img className="PageContent__Image_Container__img" src={'/images/me.jpeg'} alt="Creator: Carlos Gabriel Mercado Jimenez"/>
                </div>
                <div className="PageContent__Text">
                    <h1 className="PageContent__Text__Name">A Jack of All Trades</h1>
                    <p className="PageContent__Text__Para">
                       I’m a computer science grad who loves building things—whether it’s a clean, responsive website, a game that pulls you in, or a piece of tech that just works better than before. I’m just as happy tinkering with code and automation as I am designing visuals or snapping photos, and I’ve found that creativity makes the technical side even stronger. For me, every project is a mix of logic and imagination—and that’s where the fun really starts.
                    </p>
                    <a href="#contact-section">
                        <button type="button" className="PageContent__Text__Btn">Contact Me</button>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About;