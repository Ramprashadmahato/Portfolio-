import React from 'react';
import { Element } from 'react-scroll';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Skills from './Components/Skills';
import Projects from './Components/Project';
import Contact from './Components/contact';


function App() {
  return (
    <>
      <NavBar />
      <div className="pt-20">
        <Element name="home">
          <Home />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="service">
          <Services />
        </Element>
        <Element name="skill">
          <Skills />
        </Element>
        <Element name="project">
          <Projects />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
      </div>
    </>
  );
}

export default App;
