import React from 'react';
import "./portofolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import imgSlid1 from "../../img/porto1.jpeg";
import imgSlid2 from "../../img/plant.png";
import imgSlid3 from "../../img/react2.jpeg";
import imgSlid4 from "../../img/gost temlate 4.png";

import { useContext } from 'react';
import { themeContext } from '../../Context';
 

function Portofolio() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
      <div className='portofolio' id='Portofolio'>
          <span className="recntProjs"  style={ {color: darkMode ? "white" : " "      } } > recent projects</span>
          <span className="porto"> Portofolio</span>

          {/* <div className="slideer-container"> */}
            
                <Swiper
                    spaceBetween={30}
                    slidesPerView={3}
                    grabCursor={true}
                    className='portofolio-slider' >
                    
                    <SwiperSlide className='SwiperSlide' >
                        <img src={imgSlid1} alt="imgSlid1" />
                    </SwiperSlide >
                        <SwiperSlide   className='SwiperSlide' >
                        <img src={imgSlid3} alt="imgSlid1" />
                    </SwiperSlide>
                    <SwiperSlide  className='SwiperSlide' >
                        <img src={imgSlid2} alt="imgSlid1" />
                    </SwiperSlide>
                    <SwiperSlide className='SwiperSlide' >
                        <img src={imgSlid4} alt="imgSlid4" />
                    </SwiperSlide>
                    
                </Swiper>
          {/* </div> */}
          
    </div>
  )
}

export default Portofolio
