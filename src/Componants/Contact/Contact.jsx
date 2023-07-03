import React , { useRef, useState } from 'react';
import "./contact.css";
import emailjs from '@emailjs/browser';
  
function Contact() {

    const form = useRef(null);
    const [done, setDone] = useState(false);
    
    const handleReset = () => {
    if (form.current) {
      form.current.reset();
    }
  };

    const sendEmail = (e) => {
    e.preventDefault();
     emailjs.sendForm('service_njoiiuf', 'template_dugg5bs', form.current, 'XekGWAkZmKhy1iUW5')
       .then((result) => {
          
           console.log(result.text);
        //  handleReset();

          setDone(true);
       }, (error) => {
          console.log(error.text);
        });
         handleReset();
  };
    
  return (
      <div className='contact'>
          
          <div className="cont-left">
              <span>Get in touch </span>
               <span> contact me </span>
              <div className="blur"></div>
          </div>
          <div className="cont-right">
              <form ref={form} onSubmit={sendEmail}   >
                  <input
                    
                      type="text" name='userName' className='user' placeholder='Name'   id='name'    />
                  <input   
                      
                      type="email" name="userEmail" className='email' placeholder='Email'  id='email'  />                 
                  <textarea name="texteria" className='texteria' cols="20" rows="8" placeholder='Message'  ></textarea>
                   <button                     
                     
                     onClick={handleReset}
            
                      type='submit' value="send" className='btn'  > Send </button>
                  <span> { done && "Thanks for Contact me,I'll replay you soon" } </span>
                  <div className="blur"></div>
              </form>
          </div>
      
      </div>

  )
}

export default Contact
