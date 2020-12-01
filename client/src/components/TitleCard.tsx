import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Signup from "./Signup";
// import { theme } from "../Theme"
import { useTheme } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useRouteMatch,
} from "react-router-dom";
import { AutoSizer } from "@material-ui/data-grid";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: "80%",
    background: "#735D58",
    padding: 40,
    maxHeight: "80%",
    margin: 150,
    
    
  },
  media: {
    height: 400,
    margin: 50,
    backgroundSize: "contain"
   
  },
  menuLink: {
    textDecoration: 'none',
},
charpaper: {
  width: "100%",
  height: "100%",
  background: "#3c4545"
},
});

export default function TitleCard({user} :any) {
  const classes = useStyles();

  return (
    <Paper className={classes.charpaper}>
    <Grid container>
      <Card className={classes.root}>
        
          <CardMedia
            className={classes.media}
            image="https://i.imgur.com/tmhlFew.jpg"
            title="HeroQuest Title"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              HeroQuest
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              A companion application for the 1990's classic board game. Deep
              inside another dimension, face battling barbarians and evil magic
              on a quest for adventure in a maze of monsters. This is HeroQuest,
              the fantasy adventure game, where winning means mastering the art
              of combat and magic. Once you get into it, you'll never be the
              same
            </Typography>
          </CardContent>
          {/* { charState[index] && (<CharacterCard character={charState[index]}/> )} */}
        <CardActions>
          {!user && (<><Link className={classes.menuLink} to="/login">
            <Button variant="contained" size="small" color="primary">
              Login
            </Button>
          </Link>
          <Link className={classes.menuLink} to="/signup">
            <Button variant="contained" size="small" color="primary">
              Sign Up
            </Button>
          </Link></>)}
          {user && (<><Link className={classes.menuLink} to="/armory">
            <Button variant="contained" size="small" color="primary">
              Armory
            </Button>
          </Link>
          <Link className={classes.menuLink} to="/lobby/3">
            <Button  variant="contained" size="small" color="primary">
              To lobby
            </Button>
          </Link>
          <Link className={classes.menuLink} to="/session/3">
            <Button  variant="contained" size="small" color="primary">
              To session
            </Button>
          </Link></>
          )}
        </CardActions>
      </Card>
    </Grid>
    </Paper>
  );
}
