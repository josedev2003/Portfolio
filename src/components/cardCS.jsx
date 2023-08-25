import React from "react";
import "../styles/card.css";
import CoomingSoon from "./visualizarCS"

const CardComingSoon = () => {
    return (
        <div className="container-card">
            <div class="card">
                <div className="img-card-ComingSoon">
                    <span>Coming soon</span>
                </div>

                <div className="content-card">
                    <span className="title">Descrição :</span>
                    <p className="desc">
                     <strong>Coming Soon.  .  .  .  .</strong><br />
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