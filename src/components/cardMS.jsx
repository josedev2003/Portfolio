import React from "react";
import "../styles/components/card.css";
import Mysite from "./visualizarMS";

const CardMysite = () => {
    return (
        <div className="container-card">
            <div class="card">
                <div className="img-card-Mysite">
                    <span>Mysite</span>
                </div>

                <div className="content-card">
                    <span className="title">Descrição :</span>
                    <p className="desc">
                        Site de exibição criativa e moderna que destaca minhas habilidades, projetos e conquistas de maneira elegante e interativa. Desenvolvido 
                        com o intuito de oferecer uma experiência de usuário envolvente. <br /><strong>Tecnologias envolvidas : Biblioteca ReactJS </strong>
                    </p>
                </div>
                
                <div className="arrow">
                    <span>&#8673;</span>
                </div>  

            </div>
            <Mysite/>
        </div>
    );
};
export default CardMysite;