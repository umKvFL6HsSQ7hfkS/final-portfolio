import './App.css';
import React from "react";
import Typed from "typed.js";
import { useRef } from 'react';
import { useEffect } from 'react';
import Navbar from './Navbar';


function App() {

    // Create Ref element.
    const el = useRef(null);

    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ["Hi, and welcome to my CS1300 portfolio!"], // Strings to display
        // Speed settings, try diffrent values untill you get good results

        startDelay: 0,
        typeSpeed: 40,
        // backSpeed: 100,
        // backDelay: 100
      });
  
      // Destropying
      return () => {
        typed.destroy();
      };
    }, []);
  
    return (
      <div className='page'>
        <div className="background">
        <Navbar/>
        
        {/* Element to display typing strings */}
        <p className="words" ref={el}></p>

        
       
        <div className='aboutme'> 
        <h1>About me</h1>
        I'm a student at Brown University interested in user interface and user experience. 
        This year, I was able to take UI/UX, a class that allowed me to focus on just that!
        I explored various aspects of the design process, from using Figma and experiencing 
        critiques to learning HTML/CSS and React. This website is a culmination of my work from 
        this semester. I hope you enjoy exploring it as much as I had making it!
        </div>
        </div> 
      </div>
    );
}

export default App;
