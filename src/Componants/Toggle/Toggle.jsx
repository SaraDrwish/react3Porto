import React from 'react'
import "./toggle.css"
import Sun from "@iconscout/react-unicons/icons/uil-sun"
import Moon from "@iconscout/react-unicons/icons/uil-moon"
import { themeContext } from '../../Context'
import { useContext } from 'react'


function Toggle() {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode


    const handleToggleBtn = () => {
        theme.dispatch( {type : "toggle"})
    }

  return (
      <div className='toggle' onClick={handleToggleBtn} >
          
          <Moon />
          <Sun/>
          
          <div className="toggle-btn"
              
           style= {darkMode ? {left:"0.2rem"} : {right:"0.2rem"}  }  
          
          >
              
          </div>

    </div>
  )
}

export default Toggle
