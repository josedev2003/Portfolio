import "../styles/components/slider.css"
import {Swiper, SwiperSlide} from 'swiper/react'
import { useState } from 'react';

import certificadoFun from "../img/certfund.png"
import certificadoCon from "../img/certcon.png"

function Slider() {
    
    const [slidesPerView, setSlidesPerView] = useState(1)
    const data = [
        { id: '1', image: certificadoFun},
        { id: '2', image: certificadoCon},
    ]
    
    return(
        <div className="container-slider">
            <h1 className="title-slider">certificados</h1>
            <Swiper 
            slidesPerView={slidesPerView}
            pagination = {{clickable: true}}
            navigation 
            >
            {data.map((item) =>(
                <SwiperSlide key={item.id} >
                    <img 
                        src={item.image}
                        alt="slider-img" 
                        className='slide-item'
                    />
                </SwiperSlide>
           ))}
        </Swiper>
    </div>
    )
}

export default Slider;