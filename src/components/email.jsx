import React from "react";

import "../styles/components/email.css";




const Formulario = () => {
    return (
        <section>
            <form action="https://api.staticforms.xyz/submit" method="post">
                <label >Nome:</label>
                <input type="text" name="name" placeholder="Digite seu nome"  autoComplete="off" required/>
                <label >Email:</label>
                <input type="email" name="email" placeholder="Digite seu Email"  autoComplete="off" required/>
                <label >Mensagem:</label>
                <textarea name="message" cols="30" rows="10" placeholder="Digite sua mensagem" required></textarea>
                <button type="submit">Enviar</button>
                <input type="hidden" name="accessKey" value="069da49b-e461-4165-bcd6-8a9203fe65c3"></input>
                <input type="hidden" name="redirectTo" value="http://localhost:5173"></input>
            </form>
        </section>
      
    );
};
export default Formulario;