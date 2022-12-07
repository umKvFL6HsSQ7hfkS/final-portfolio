import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Tilt from "react-parallax-tilt";
import "./Projects.css";
import { NavLink } from "react-router-dom";

const Projects = () => {
    return  <div className="background">
    <div className="space">
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
              how they were feeling when using it. 
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </NavLink> 
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
    <NavLink to={'../Iterative'} style={{ textDecoration: 'none' }} >
    <Card className="story-card" >
      <CardActionArea className="action">
        <CardContent className="head">
          <Typography gutterBottom variant="h5" component="div" fontSize={30} className="header" className="header">
          <br/>
            Iterative Design
          </Typography>
          <Typography className="content">
              <br/>
              In this project, I worked in a group to chose an emerging startup and designed their product’s interface. 
              We ideated and designed all of our interfaces from scratch, without looking at any of the startup’s existing designs.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </NavLink> 
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
    <NavLink to={'../Redesign'} style={{ textDecoration: 'none' }} >
    <Card className="story-card" >
      <CardActionArea className="action">
        <CardContent className="head">
          <Typography gutterBottom variant="h5" component="div" fontSize={30} className="header" className="header">
          <br/>
            Responsive Redesign
          </Typography>
          <Typography className="content">
              <br/>
              The goal of this project was to pick a poorly designed website and redesign it into something "better". I focused
              on improving the sites' usability by creating more structure hierarchy, changing the color scheme, and providing
              a more responsive webpage. 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </NavLink> 
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
    <NavLink to={'../AnimeList'} style={{ textDecoration: 'none' }} >
    <Card className="story-card" >
      <CardActionArea className="action">
        <CardContent className="head">
          <Typography gutterBottom variant="h5" component="div" fontSize={30} className="header" className="header">
          <br/>
            My Anime List
          </Typography>
          <Typography className="content">
              <br/>
              In this project, I implemented React in order to filter, sort, and aggregate different animes. The React app allows
              users to add different anime to their "Favorites" list, stack filters, and sort all at the same time. 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </NavLink> 
    </Tilt>
    </div>
</div>

};

export default Projects;