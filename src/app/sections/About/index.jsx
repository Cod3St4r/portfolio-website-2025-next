"use client"

import React from "react";
import "./styles.scss";

const About=()=>{
    return(
        <section id="about" className="about">
            <div className="PageContent">
                <div className="PageContent__Text">
                    <h1 className="PageContent__Text__Name">A Jack of All Trades</h1>
                    <p className="PageContent__Text__Para">
                        In ex anim tempor reprehenderit velit et. Cillum occaecat cupidatat sunt pariatur non adipisicing nulla. Consectetur do tempor fugiat nostrud quis laboris magna.
                        </p>
                    <button type="button" className="PageContent__Text__Btn" onClick={() => console.log('Hello world!')}>Contact Me</button>
                </div>
                <div className="PageContent__Image_Container">
                    <img className="PageContent__Image_Container__img" src={'/images/me.jpeg'} alt="Creator: Carlos Gabriel Mercado Jimenez"/>
                </div>
            </div>
        </section>
    )
}
export default About;