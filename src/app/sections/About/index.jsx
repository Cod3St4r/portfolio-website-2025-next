import React from "react";
import "./styles.scss";

const About=()=>{
    return(
        <section id="about" className="about">
            <div className="PageContent">
                <div className="PageContent__Text">
                    <h1 className="PageContent__Text__Name">Carlos G. Mercado Jimenez</h1>
                    <p className="PageContent__Text__Para"></p>
                </div>
                <div className="PageContent__Image_Container">
                    <img className="PageContent__Image_Container__img" src={'/images/me.jpeg'} alt="Creator: Carlos Gabriel Mercado Jimenez"/>
                </div>
                
            </div>
        </section>
    )
}
export default About;