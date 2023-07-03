import '../src/App.css';
import Navbar from './Componants/Navbar/Navbar';
import Intro from './Componants/Intro/Intro';
import Serv from './Componants/Serv/Serv';
import Exp from './Componants/Experience/Exp.jsx';
import Works from './Componants/Works/Works';
import Portofolio from './Componants/Portofolio/Portofolio';
import Testimon from './Componants/Testimon/Testimon';
import Contact from './Componants/Contact/Contact';
import Footer from './Componants/Footer/Footer';
import { useContext } from 'react';
import { themeContext } from './Context';



function App() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="App"
    
      style={
      
        {

          background: darkMode ? "black" : " ",
          color: darkMode ? "white" : " " ,
          fill: darkMode ? "white" : " " 
          
        }
    }
    
    >
      
      <header className="App-header">

          <Navbar />
          <Intro />
          <Serv />
          <Exp />
          <Works />
          <Portofolio />
          <Testimon />
          <Contact />
          <Footer/>

      </header>
    </div>
  );
}

export default App;
