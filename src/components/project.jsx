import React from "react";

import "../styles/components/project.css"; 

import CardSnake from "./cardSG";
import CardMysite from "./cardMS";
import CardComingSoon from "./cardCS";

import VideoTS from "../img/videots.mp4"

const Project = () => {
  return (
    <div className='container-project' >
      <video 
           src={VideoTS} autoPlay muted loop className='video-gb' >
       </video> 
      <div className="box-h1-project">
        <h1 id="h1-project">Projetos</h1>
      </div>
      <div className="text-project">
        <CardSnake/>
        <CardMysite/>
        <CardComingSoon/>
      </div>
    </div>   
    );
};
export default Project;