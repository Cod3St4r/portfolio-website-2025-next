"use client";
import {React} from "react";
import "./styles.scss"
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

const Contact = () => {

    async function handleSubmit(event) {
          event.preventDefault();
          const formData = new FormData(event.target);

          formData.append("access_key","0dc4db97-7ef5-49ea-a62a-436d65208f14");

          const object = Object.fromEntries(formData);
          const json = JSON.stringify(object);

          const response = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
              },
              body: json
          });
          const result = await response.json();
          if (result.success) {
              console.log(result);
          }
      }

    useGSAP(
        () => {
            gsap.from('.ContactSection',{
                scrollTrigger: '.ContactSection__Form__Input__Email',
                opacity: 0,
                y:200
            })
            gsap.to('.ContactSection', {
                scrollTrigger: '.ContactSection__Form__Input__Email',
                duration: 1.5,
                ease: "power1.out",
                opacity: 1,
                y:0
            })
        }
    )

    return(
        <div id="contact-section" className="ContactSection">
            <form onSubmit={handleSubmit} className="ContactSection__Form">
                <h2 className="ContactSection__Form__Title">Contact Me</h2>
                <div className="ContactSection__Form__Input">
                    <input type="text" name="name" placeholder="Your Name" className="ContactSection__Form__Input__Name" required></input>
                    <input type="email" name="email" placeholder="Your Email" className="ContactSection__Form__Input__Email" required></input>
                    
                    <textarea name="message" placeholder="Your message" className="ContactSection__Form__Input__Text" required></textarea>
                    <button className="ContactSection__Form__Input__Button"type="submit">Submit</button>
                </div>
            </form>
        </div>

    )
}

export default Contact