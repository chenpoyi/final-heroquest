import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import SecurityIcon from '@material-ui/icons/Security';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  root:{
    maxWidth: 300
  },
  media: {
    height: 150,
  }
  
 } );

type CharacterCardProps = {
  name :string, 
  dateCreated :string, 
  lastUsed :string, 
  race :string, 
  questsCompleted :number, 
  imgSrc :string,
  body :number,
  mind :number,
  attack :number,
  defense :number,
  movement :number,
}

export default function CharacterCard({name, dateCreated , lastUsed, race , questsCompleted , imgSrc, body, mind, attack, defense, movement } :CharacterCardProps){

  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;
  
  return (
    <Card className={classes.root}>
      <CardHeader 
        title={name}
        subheader={race}
      >
      
      </CardHeader>
      
      <CardMedia className={classes.media} image={imgSrc} />
      <CardContent>
       
        <Typography variant="body2" component="p">
       <ul style={{listStyleType:"none"}}> 
         
          <li>
            Quest Completed: {questsCompleted}/14
          </li>
          <li>
            Date Created: {dateCreated}
          </li>
          <li>
            Last Used: {lastUsed}
          </li>
          <li>
            Body Points: {body}
          </li>
          <li>
            Mind Points: {mind}
          </li>
          <li>
            Attack Dice: {attack}
          </li>
          <li>
           Defense Dice: {defense}
          </li>
          <li>
            Movement: {movement}
          </li>
        </ul> 
      
        </Typography>
      </CardContent>
      
    </Card>
  );
}

