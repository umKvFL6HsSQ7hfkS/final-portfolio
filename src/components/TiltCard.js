
import React from 'react'
import Tilt from "react-parallax-tilt";
import "./TiltCard.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// import "./Projects.css";
import { NavLink } from "react-router-dom";
import { FormatColorResetOutlined } from '@mui/icons-material';

const TiltCard = () => {
    return (
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
            
        <NavLink to={'../Storyboard'} style={{ textDecoration: 'none' }} >
        <Card className="story-card">
          <CardActionArea className="action">
            <CardContent className="head">
              <Typography gutterBottom variant="h5" component="div" fontSize={30} className="header">
              <br/>
                Storyboard & Personas
              </Typography>
              <Typography className="content">
                  <br/>
              In this project, I considered the effectiveness of the Brown Mailroom kiosks as interfaces for retrieving mail. 
              I centered the personas and storyboards around the kiosk -- how people interact with the kiosk day to day and 
              what they're thinking and feeling when they're using it. 
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </NavLink> 
          </Tilt>
    )
}
  
export default TiltCard;