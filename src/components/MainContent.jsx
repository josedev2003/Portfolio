import React from 'react'
import VideoTS from "../img/videots.mp4"
import imagem from "../img/imghome.svg"

import "../styles/components/maincontent.css"

import Linkedin from "./visualizarLK";
import GitHub from "./visualizarGH";




const MainContent = () => {
  return (

      <div className='container' >
           <video 
               src={VideoTS} autoPlay muted loop className='video-gb' >
           </video> 
          <div className="text">
               <p id="p-home">OLA!! ME CHAMO:</p>
               <h1 id="h1-home">JOSÉ HENRIQUE</h1>
               <div className="buttonn">
                <Linkedin/>
                <GitHub/>
               </div>
           </div>
           <img  className="imagem" src={imagem} alt="" /> 
     </div>   
  )
}

export default MainContent