import React from "react";
import "./AboutMe.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import TiltCard from "./TiltCard";
import Tilt from "react-parallax-tilt";


const AboutMe = () => {
    return  <div className="background">
    <div className="abtme-space">
    
    <Tilt className='tilt-card'
    // glareEnable={true} 
    // glareMaxOpacity={0.45}
    scale={.9}
    tiltMaxAngleX={10} 
    tiltMaxAngleY={10} 
    perspective={750} 
    // glareColor="red"
    // glarePosition="all"
    >    
    <Card  className="card-abtme">
      <CardActionArea>
        <CardContent>
      
          <Typography gutterBottom variant="h5" component="div">
            A little bit about me
          </Typography>
          <Typography variant="body2" color="text.primary" fontSize="17px" >
          I'm a student at Brown University interested in user interface and user experience. 
    This year, I was able to take UI/UX, a class that allowed me to focus on just that!
    I explored various aspects of the design process, from using Figma and experiencing 
    critiques to learning HTML/CSS and React. This website is a culmination of my work from 
    this semester. I hope you enjoy exploring it as much as I had making it!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Tilt>

    <Tilt className='tilt-card'
    // glareEnable={true} 
    // glareMaxOpacity={0.45}
    scale={.9}
    tiltMaxAngleX={10} 
    tiltMaxAngleY={10} 
    perspective={750} 
    // glareColor="red"
    // glarePosition="all"
    >    
    <Card  className="card-abtme">
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Design inspiration
          </Typography>
          <Typography variant="body2" color="text.primary" fontSize="17px">
         I used a number of different things to inspire my design this semester. I considered how
         shapes on webpages flow together and how placement effects eye-movement. I also considered
         how colors guide the flow of an interface and considered how to balance the interplay of fonts and 
         colors to create readable and usable pieces.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Tilt>
    </div>
</div>
};

export default AboutMe;