import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: '75%',
  },
  media: {
    height: 360,
  },
  
});

export default function TitleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
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
          A companion application for the 1990's classic board game. 

Deep inside another dimension, face battling barbarians and evil magic on a quest for adventure in a maze of monsters. This is HeroQuest, the fantasy adventure game, where winning means mastering the art of combat and magic. Once you get into it, you'll never be the same
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" size="small" color="primary">
          Login
        </Button>
        <Button variant="contained" size="small" color="primary">
          Sign Up
        </Button>
      </CardActions>
    </Card>
  );
}