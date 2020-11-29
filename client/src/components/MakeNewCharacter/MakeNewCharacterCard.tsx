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
    background: "#735D58",
  },
  media: {
    minHeight: 200,
    minWidth: 200,

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

type MakeNewCharacterCardProps = {
  hero: Hero;
};
type Hero = {
  id: number;
  // name: string;
  race: string;
  image: string;
  body: number;
  mind: number;
  attack: number;
  defend: number;
  movement: number;
  default_weapon: number;
};

export default function MakeNewCharacterCard({ hero }: MakeNewCharacterCardProps) {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;

  return (
    <>
      {hero && (
        <Card className={classes.root}>
        <div>
            <Typography className={classes.header}>
            {hero.race}
            </Typography>
          <CardMedia className={classes.media} image={hero.image} />
        </div>
          <CardContent>
            <Typography
              
              variant="body2"
              component="p"
            >
              <ul style={{ listStyleType: "none", padding: 0, fontSize: 14}}>
                <li>Body Points: {hero.body}</li>
                <li>Mind Points: {hero.mind}</li>
                <li>Attack Dice: {hero.attack}</li>
                <li>Defense Dice: {hero.defend}</li>
                <li>Movement: {hero.movement}</li>
              </ul>
            </Typography>
          </CardContent>
        </Card>
      )}
    </>
  );
}
