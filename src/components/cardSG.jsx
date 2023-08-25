import React from "react";
import "../styles/card.css";

import SnakeGame from "./visualizarSG";

const Card = () => {
    return (
        <div className="container-card">
            <div class="card">
                <div className="img-card-snake">
                    <span>Snake-Game</span>
                </div>

                <div className="content-card">
                    <span className="title">Descrição :</span>
                    <p className="desc">
                        Snake Game é um jogo viciante que traz de volta a nostalgia de jogos classicos.
                        Os jogadores assumem o controle de uma cobra faminta que devem guiar pelo tabuleiro em busca de comida para crescer. <br /><strong>Tecnologias envolvidas : HTML , CSS e JavaScript. </strong>
                    </p>
                </div>
                
                <div className="arrow">
                    <span>&#8673;</span>
                </div>
                
            </div>
            <SnakeGame/>
        </div>
    );
};
export default Card;