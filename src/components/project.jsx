import React from "react";

import "../styles/components/project.css"; 

import CardSnake from "./cardSG";
import CardMysite from "./cardMS";
import CardComingSoon from "./cardCS";

const Project = () => {
  return (
    <div className='container-project' >
      <div className="box-h1-project">
        <h1 id="h1-project">Projects</h1>
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