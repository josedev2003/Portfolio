import React from "react";
import "../styles/card.css";
import CoomingSoon from "./visualizarCS"

const CardComingSoon = () => {
    return (
        <div className="container-card">
            <div class="card">
                <div className="img-card-ComingSoon">
                    <span>ShoppingCart</span>
                </div>

                <div className="content-card">
                    <span className="title">Descrição :</span>
                    <p className="desc">
                     Destacando características como componentização e atualização em tempo real,
                    a página de pesquisa de compras permite uma experiência de usuário suave e dinâmica.<strong>Tecnologias envolvidas : Biblioteca ReactJS</strong><br />
                    </p>
                </div>
                
                <div className="arrow">
                    <span>&#8673;</span>
                </div>
                
            </div>
            <CoomingSoon/>
        </div>      
    );
};
export default CardComingSoon;