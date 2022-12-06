import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./Projects.css";
import { NavLink } from "react-router-dom";


const Projects = () => {
    return  <div className="background">
    <div className="space">
    <NavLink to={'../Storyboard'} style={{ textDecoration: 'none' }} >
    <Card sx={{ maxWidth: 400, height: 350 }} className="story-card card1">
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

    <NavLink to={'../Iterative'} style={{ textDecoration: 'none' }} >
    <Card sx={{ maxWidth: 400, height: 350 }} className="story-card card2" >
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

    <NavLink to={'../Redesign'} style={{ textDecoration: 'none' }} >
    <Card sx={{ maxWidth: 400, height: 350 }} className="story-card card3" >
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
              a more responsive webpage. I also considered accessibility issues in my design process.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </NavLink> 

    <NavLink to={'../AnimeList'} style={{ textDecoration: 'none' }} >
    <Card sx={{ maxWidth: 400, height: 350 }} className="story-card card4" >
      <CardActionArea className="action">
        <CardContent className="head">
          <Typography gutterBottom variant="h5" component="div" fontSize={30} className="header" className="header">
          <br/>
            My Anime List
          </Typography>
          <Typography className="content">
              <br/>
              In this project, I implemented React in order to filter, sort, and aggregate different animes. The React app allows
              users to add different anime to their "Favorites" list, stack filters, and sort all at the same time. Additionally,
              users can see the total amount of seasons they can watch across all of their favorited anime. 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </NavLink> 

    </div>
</div>

};

export default Projects;