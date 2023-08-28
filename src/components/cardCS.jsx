import React from "react";
import "../styles/card.css";
import CoomingSoon from "./visualizarCS"

const CardComingSoon = () => {
    return (
        <div className="container-card">
            <div class="card">
                <div className="img-card-ComingSoon">
                    <span>Em Breve . . .</span>
                </div>

                <div className="content-card">
                    <span className="title">Descrição :</span>
                    <p className="desc">
                     <strong>Em Breve.  .  .  .  .</strong><br />
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