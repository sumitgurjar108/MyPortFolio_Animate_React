import React, { useEffect } from 'react';

import Navbar from "./Components/Navbar.js";
import HomePage from "./Components/HomePage.js";
import Experience from "./Components/Experience";
import Skills from './Components/Skills.js';
import Projects from './Components/Projects.js';
import Contact from './Components/Contact.js';
import Aos from 'aos';
import "aos/dist/aos.css";


const App = () => {
  useEffect(()=>{
    Aos.init();

  },[])
  return (
    <div>
      <Navbar/>
    <div className='container'>
      <HomePage/>
      <Experience/>
      <Skills/>
      <Projects/> 
      <Contact/>
      
    </div>
    </div>
  )
}

export default App;
