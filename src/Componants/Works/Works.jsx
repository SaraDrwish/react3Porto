import React from 'react'
import "./works.css"
import img1 from "../../img/rolx.png"
import img2 from "../../img/subway.png"
import img3 from "../../img/payappl.png"
import img4 from "../../img/play.png"
import img5 from "../../img/suzuki.png"

import { motion } from 'framer-motion'

// import { Link } from 'react-scroll'


function Works() {

        const transition = { type: "spring", duration: 1 };

  return (
      <div className='works' id='works'>
          <div className="left-works">
              <span >My Work</span>
              <span >Brands & Clints</span>
              <span >Lorem, ipsum dolor sit amet consecteturdolor sit 
                  amet consturdolor sit amet consectetur elit. 
              <br></br>
                  Lorem ipsum dolor sit.
             <br></br>
                 amet consturdolor sit amet consectetur sit amet elit. 
              </span>
                   <button className='s-btn'>Hire Me</button>
             <div className="blur" > </div>
          </div>

          <div className="right-works">
              
              <motion.div
                  
                  initial={{ rotate: 45 }}
                  whileInView={{ rotate: 0 }}
                  transition={transition}
                  viewport={ {margin:"-11%"} }

                  className="works-mainCircl">
                  
                  <div className="works-secndCircl">
                      <img src={img1} alt="" />
                  </div>
                  <div className="works-secndCircl">
                      <img src={img2} alt="" />
                  </div>
                  <div className="works-secndCircl">
                      <img src={img3} alt="" />
                  </div>
                  <div className="works-secndCircl">
                      <img src={img4} alt="" />
                  </div>
                  <div className="works-secndCircl">
                      <img src={img5} alt="" />
                  </div>
                  
              </motion.div>

              <div className="works-backCicl bluCircl"></div>
              <div className="works-backCicl orngCircl"></div>
              
          </div>
     
    </div>
  )
}

export default Works
