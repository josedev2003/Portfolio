import React from "react";

import "../styles/components/contact.css"
import Formulario from "./email";


import VideoTS from "../img/videots.mp4"

const Contact = () => {
    return (
        <div className='container-contact' >
             <video 
               src={VideoTS} autoPlay muted loop className='video-gb' >
           </video>
            <h3>Contact</h3>
             <Formulario/>
       </div>
    );
};

export default Contact;