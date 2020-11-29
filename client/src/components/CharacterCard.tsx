import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import SecurityIcon from "@material-ui/icons/Security";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    margin: 5,
    padding: 5,
    display: "flex",
  },
  media: {
    minHeight: 160,
    minWidth: 160,

    backgroundSize: "contain",
  },
  header: {
    fontSize: 15,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
});

type CharacterCardProps = {
  character: Character;
};
type Character = {
  id: number;
  name: string;
  dateCreated: string;
  lastUsed: string;
  race: string;
  questsCompleted: number;
  image: string;
  body: number;
  mind: number;
  attack: number;
  defend: number;
  movement: number;
  gold: number;
};

export default function CharacterCard({ character }: CharacterCardProps) {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;

  return (
    <>
      {character && (
        <Card className={classes.root}>
        <div>
            <Typography className={classes.header}>
            {character.name}
            {character.race}
            </Typography>
          <CardMedia className={classes.media} image={character.image} />
        </div>
          <CardContent>
            <Typography
              
              variant="body2"
              component="p"
            >
              <ul style={{ listStyleType: "none", padding: 0, fontSize: 14}}>
                <li>Quest Completed: {character.questsCompleted}/14</li>
                <li>Date Created: {character.dateCreated}</li>
                <li>Last Used: {character.lastUsed}</li>
                <li>Body Points: {character.body}</li>
                <li>Mind Points: {character.mind}</li>
                <li>Attack Dice: {character.attack}</li>
                <li>Defense Dice: {character.defend}</li>
                <li>Movement: {character.movement}</li>
                <li>Gold: {character.gold}</li>
              </ul>
            </Typography>
          </CardContent>
        </Card>
      )}
    </>
  );
}
