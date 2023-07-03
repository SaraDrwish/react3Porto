import React from 'react'
// import imoji2 from "../../img/lvvvvvo.png";
import "./flootingDiv.css"

const FlootingDiv = ({image , txt1 , txt2})=> {
  return (
      <div className='flootingDiv'>
          <img src={image} alt="imoji2" />
          <span>
                {txt1} 
                <br></br>
                {txt2}
          </span>
         
      
    </div>
  )
}

export default FlootingDiv
