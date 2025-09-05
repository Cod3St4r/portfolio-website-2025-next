import {React} from "react";
import "./styles.scss"

const Contact = () => {
    return(
        <div className="ContactSection">
            <form action="" className="ContactSection__Form">
                <h2 className="ContactSection__Form__Title">Contact Me</h2>
                <div className="ContactSection__Form__Input">
                    <div className="ContactSection__Form__Input__Info">
                        <input type="text" name="name" placeholder="Your Name" className="ContactSection__Form__Input__Info__Name" required></input>
                        <input type="email" name="email" placeholder="Your Email" className="ContactSection__Form__Input__Info__Email" required></input>
                        <button type="submit">Submit</button>
                    </div>
                    <textarea name="message" placeholder="Your message" className="ContactSection__Form__Input__Text" required></textarea>
                </div>
            </form>
        </div>

        // <div className="MainContainer">
        //     <form action="" className="MainContainer__Contact-Left">
        //         <div className="MainContainer__Contact-Left__Title">
        //             <h2>Contact Me</h2>
        //             <hr></hr>
        //         </div>
        //         <div>
        //             <input type="text" name="name" placeholder="Your Name" className="Main__Container-Left__Contact-Input" required></input> 
        //             <input type="email" name="email" placeholder="Your Email" className="Main__Container-Left__Contact-Input" required></input> 
        //             <button type="submit">Submit</button>
        //         </div>
        //         <textarea name="message" placeholder="Your message" className="Main__Container-Left__Contact-Input required"></textarea>
                
        //     </form>
        //     <div className="MainContainer__Contact-Right">

        //     </div>
        // </div>

    )
}

export default Contact