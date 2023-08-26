import React from "react";
import Curriculo from "../img/curriculo.pdf";
import imagemMe from "../img/myimg.svg"
import Slider from "./slider"

import "../styles/components/about.css"

import VideoTS from "../img/videots.mp4"

const About = () => {
    return (
      
      <div className='container-about' >
            <video 
               src={VideoTS} autoPlay muted loop className='video-gb' >
           </video> 
           <div className="text-about">
               <h1>Sobre mim</h1>
                <p>
                Nome: José Henrique Saggioratto<br />
                Idade: 19 anos <br />
                Localização: Medianeira (PR)<br />
                Instituição: Universidade Tecnológica Federal do Paraná (UTFPR) <br /><br />
                Visão Geral
                Sou um estudante apaixonado por tecnologia, atualmente na UTFPR. Meu objetivo é me tornar um programador qualificado e inovador, impulsionado pela curiosidade e autodidatismo.
                enquanto busco aprendizado extra por conta própria. <br /><br />
                Objetivos Futuros: 
                Aspiro construir uma carreira sólida como programador, impactando positivamente o mundo com soluções inovadoras e transformadoras. <br /><br />
                </p>
                <a href={Curriculo} download={Curriculo} className="buttonn"> 
                    <button> Currículo (PDF) </button>
                </a>
                
            </div>
            <img  className="imagem" src={imagemMe} alt="" /> 
           <div className="slider-about">  
            <Slider/>
          </div>
      </div>   
    );
};
export default About;