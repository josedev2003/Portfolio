import React from 'react'
import VideoBG from "../img/videobg.mp4"



const MainContent = () => {
  return (

      <div className='container' >
           <video 
               src={VideoBG} autoPlay muted loop className='video-gb' >
           </video> 
          <div className="text">
               <p id="p-home">OLA!! ME CHAMO:</p>
               <h1 id="h1-home">JOSÉ HENRIQUE</h1>
               <div className="buttonn">
               </div>
           </div>
     </div>   
  )
}

export default MainContent