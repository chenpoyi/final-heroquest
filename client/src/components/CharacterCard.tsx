import React from "react";
import axios from "axios";
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
import Paper from "@material-ui/core/Paper";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    margin: 5,
    padding: 5,
    display: "flex",
    background: "#735D58",
  },
  media: {
    minHeight: 160,
    minWidth: 160,
    backgroundSize: "contain",
  },

  details: {
    display: "flex",
    flexDirection: "column",
  },
  header: {
    fontSize: 20,
    margin: 5,
  },
  subheader: {
    fontSize: 13,
    margin: 5,
  },
  mediaPaper: {
    padding: 5,
    background: " #212626",
  },
});

type CharacterCardProps = {
  character: Character;
  refreshCharacters?: () => void;
  user: any;
};
type Character = {
  id: number;
  name: string;
  // dateCreated: string;
  // lastUsed: string;
  race: string;
  // questsCompleted: number;
  image: string;
  body: number;
  mind: number;
  attack: number;
  defend: number;
  movement: number;
  gold: number;
};

export default function CharacterCard({
  character,
  refreshCharacters = () => {},
  user,
}: CharacterCardProps) {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;

  const destroyCharacter = function (id) {
    return axios
      .post(`/api/characters/${id}/destroy`) // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        // console.log(response.data.characters); // The entire response from the Rails API
        console.log(response.data); // => "Yep this route works"
        refreshCharacters();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {character && (
        <>
          <Card className={classes.root}>
            <div>
              <Typography className={classes.header}>
                {character.name}
              </Typography>
              <Typography className={classes.subheader}>
                {user.email}
              </Typography>

              <CardMedia className={classes.media} image={character.image} />
            </div>
            <CardContent>
              <Typography variant="body2" component="p">
                <ul style={{ listStyleType: "none", padding: 0, fontSize: 14 }}>
                  {/* <li>Quest Completed: {character.questsCompleted}/14</li>
                <li>Date Created: {character.dateCreated}</li>
                <li>Last Used: {character.lastUsed}</li> */}
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

          <CardActions>
            <Button
              onClick={() => {
                destroyCharacter(character.id);
              }}
              color="primary"
              size="small"
              variant="contained"
            >
              Delete
            </Button>
          </CardActions>
        </>
      )}
    </>
  );
}
