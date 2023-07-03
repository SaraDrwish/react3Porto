import React from 'react'
import "./serv.css"
import Card from '../Card/Card'
import calm from "../../img/cvcvcv.png";
// import shi from "../../img/zxzx.png"
import tong from "../../img/tong.png"
import imoj from "../../img/azazaz.png"
import cv from "../../Componants/Serv/CV_SAraDArwish_Front_2023_v6.pdf"
 import { themeContext } from '../../Context';
import { useContext } from 'react';


import { motion } from 'framer-motion';


function Serv() {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const transition = { type: "spring", duration: 1 };

  return (
      <div className='serv' id='Serv'>
          
          {/* left side */}
          <div className='aesom'>
              <span  style={ {color: darkMode ? "white" : " "      } } >My Awesome</span>
              <span>Services</span>
              <span>Lorem, ipsum dolor sit amet consecteturdolor sit 
                  amet consturdolor sit amet consectetur elit. 
              <br></br>
                  Lorem ipsum dolor sit.</span>
              <a href={cv} download >
                  <button className='s-btn'>Downlaod My CV</button>
              </a>
              <div className="blur  " > </div>
          </div>

          {/* right side */}
          <div className="cards">
              <motion.div
                  
                  initial={{ left: "22rem" }}
                  whileInView={{ left: "12rem" }}
                  transition={transition}
                  
                  className='cards-small-box' style={{ left: "16rem", top: "0rem" }} >
                    <Card emoji={calm} heading={'design'}
                        detail= {'Figma , Adobe , photoshop '}
                    />
              </motion.div>  
              
              <motion.div
                  initial={{ left: "22rem" }}
                  whileInView={{ left: "18rem" }}
                  transition={transition}
                  className='cards-small-box' style={{ left: "10rem", top: "21rem" }} >
                        <Card emoji={tong} heading={'Developer'}
                        detail= {'HTML , CSS , JS , REACT JS , BOOTSTRAP '}
                        /> 
              </motion.div>  
              
              <motion.div
                  
                   initial={{ left: "-11rem" }}
                  whileInView={{ left: "-8rem" }}
                  transition={transition}
                  
                  className='cards-small-box' style={{ left: "-9rem", top: "13rem" }} >
                    <Card emoji={imoj} heading={'UI/UX'}
                        detail= {' lorem4 '}
                    />
              </motion.div>
              
              <div className="blur3"   > </div>

          </div>
        
      
    </div>
  )
}

export default Serv
