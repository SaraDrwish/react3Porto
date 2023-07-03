import React from 'react'
import "./Exp.css"
import { useContext } from 'react';
 import { themeContext } from '../../Context';


function Exp() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='Exp'>
      <div className="schev">
        <div className="circl">3+</div>
        <span  style={ {color: darkMode ? "white" : " "      } }>years</span>
        <span>experience</span>
      </div>
      <div className="schev">
        <div className="circl">12+</div>
        <span  style={ {color: darkMode ? "white" : " "      } } >completed</span>
        <span>projects</span>
      </div>
      <div className="schev">
        <div className="circl">4+</div>
        <span  style={ {color: darkMode ? "white" : " "      } } >compaines</span>
        <span>work</span>
      </div>
      
    </div>
  )
}

export default Exp
