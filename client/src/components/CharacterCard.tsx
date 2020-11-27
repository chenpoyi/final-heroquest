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
    maxWidth: 350,
    margin: 5,
    padding: 5,
  },
  media: {
    height: 150,
    backgroundSize: "contain",
  }
  
 } );

type CharacterCardProps = {
 character : Character
}
type Character = {
  id: number,
  name :string, 
  dateCreated :string, 
  lastUsed :string, 
  race :string, 
  questsCompleted :number, 
  image :string,
  body :number,
  mind :number,
  attack :number,
  defense :number,
  movement :number,

}
 
export default function CharacterCard({character }:CharacterCardProps){

  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;
  
  return (
    <Card className={classes.root}>
      <CardHeader 
        title={character.name}
        subheader={character.race}
      >
      
      </CardHeader>
      
      <CardMedia className={classes.media} image={character.image} />
      <CardContent>
       
        <Typography variant="body2" component="p">
       <ul style={{listStyleType:"none"}}> 
         
          <li>
            Quest Completed: {character.questsCompleted}/14
          </li>
          <li>
            Date Created: {character.dateCreated}
          </li>
          <li>
            Last Used: {character.lastUsed}
          </li>
          <li>
            Body Points: {character.body}
          </li>
          <li>
            Mind Points: {character.mind}
          </li>
          <li>
            Attack Dice: {character.attack}
          </li>
          <li>
           Defense Dice: {character.defense}
          </li>
          <li>
            Movement: {character.movement}
          </li>
        </ul> 
      
        </Typography>
      </CardContent>
      
    </Card>
  );
}

