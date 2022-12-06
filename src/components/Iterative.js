import { withTheme } from "@emotion/react";
import React from "react";
import "./Iterative.css";
import roomkastDescr from '../images/roomcast_description.png';


const Iterative = () => {
    return  <div className="background">
        <div className="background-1">
            
    <div className="iterative-space">
   <h1> Iterative Design: Prototyping a Roommate-Matching App </h1>
   <div>     In this project, we chose an emerging startup and designed their product’s interface. 
        We ideated and designed all of our interfaces from scratch, without looking at any of the startup’s 
        existing designs.</div>
        
        <hr/>
        <div class="section">
            <div class="subsection">
                <h2>01. Research</h2>
                <h3>Selecting a Startup</h3>
                <p>When thinking about which startup to select, we thought about the following criteria:</p>
                <ul>
                <li>We wanted to choose a company that was still in its starting stages and had not yet developed a fully fleshed-out product.</li>
                <li>The startup’s product had to be centered around a digital interface.</li>
                <li> The company had to have a clear purpose and view, so that there were clear goals we could develop solutions for in our interfaces. </li>
                </ul>

                <p>Keeping the above criteria in mind, we searched through startup accelerators such as <a href="https://www.ycombinator.com/" style={{ textDecoration: 'none'}}>YCombinator </a>and <a href="https://www.techstars.com/portfolio" style={{ textDecoration: 'none' }}>Techstars</a>. Ultimately we chose to develop an interface for a startup called Roomkast. As stated on their <a href="https://www.techstars.com/portfolio?name=Roomkast" style={{ textDecoration: 'none' }}>Techstars profile</a>, “Roomkast is a profile-matching tool for people who see the value in co-sharing a place to live”: </p>

                <div class="image-wrapper">
                    <img src={roomkastDescr} className="room-desc"/>
                    </div>
                </div>
            </div>
    </div>
    </div>
</div>
};

export default Iterative;