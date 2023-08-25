import React from "react";

import "../styles/components/contact.css"
import Formulario from "./email";

const Contact = () => {
    return (
        <div className='container-contact' >
            <h3>Contact</h3>
             <Formulario/>
       </div>
    );
};

export default Contact;