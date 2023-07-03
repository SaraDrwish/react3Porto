import React from 'react'
import "./footer.css"
import Insta from "@iconscout/react-unicons/icons/uil-instagram"
import Git from "@iconscout/react-unicons/icons/uil-github"
import Facebook from "@iconscout/react-unicons/icons/uil-facebook"

function Footer() {
  return (
    <div className='footer'>

      <div className="fcont">
        {/* <span>it.saradarwish@gmail.com</span> */}
        <span> Sara Darwish</span>
        <div className="ficn">
          <Insta size="3rem"   />
          <Git size="3rem"  />
          <Facebook size="3rem"  />
        </div>


      </div>




      <div className="footerGroung">
        <div className="g1"></div>
        <div className="g2"></div>
      </div>



      
    </div>
  )
}

export default Footer
