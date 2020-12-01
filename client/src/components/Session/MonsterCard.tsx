import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import { updateCharacterPoints } from "../../helpers/selectors";
import { Grid } from "@material-ui/core";

// monster card for Zargon view

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    marginTop: 10
    // maxHeight: 150
  },
  media: {
    minWidth: 150,
    height: 150,
    backgroundSize: "contain",
  },
});

type MonsterCardProps = {
  monster: Monster;
  setcurrentlySelectedMonsters: any;
  currentlySelectedMonsters: any;
  index: number;
};
// Need all monster information to display on card
type Monster = {
  id: number;
  name: string;
  image: string;
  body: number;
  mind: number;
  attack: number;
  defend: number;
  movement: number;
  user: any;
  lobbies_id: number;
};

// Two states to deal with on the card body points and mind points
// Data for the initial state comes from the monster table in the db
export default function MonsterCard({ monster, setcurrentlySelectedMonsters, currentlySelectedMonsters, index }: MonsterCardProps) {
  const classes = useStyles();
  const [bodyState, setBody] = React.useState<number>();
  const [mindState, setMind] = React.useState<number>();

  // The handle change functions allow the Zargon player to adjust the body and mind points during the game - these states are not saved and are lost when Zargon exits the lobby
  //Stretch: add a save game to save these states 
  const handleBodyChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const bodyNumber = Number(event.target.value);
    const newState = [...currentlySelectedMonsters];
    newState[index].body = bodyNumber;
    setcurrentlySelectedMonsters(newState);
    setBody(bodyNumber);
  };

  const handleMindChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const mindNumber = Number(event.target.value);
    const newState = [...currentlySelectedMonsters];
    newState[index].mind = mindNumber;
    setcurrentlySelectedMonsters(newState);
    setMind(mindNumber);
  };

  //Setting inital state for monsters in the game currently hardcoded 
  //This is not an issue these do not change

  React.useEffect(() => {
    if (monster) {
      setBody(monster.body);
      setMind(monster.mind);
    }
  }, [monster]);

  

  // The card will only render when monster is true
  // and body and mind points will be adjustable
  return (
    <>
      {monster && (
        <Card className={classes.root}>
          <CardHeader title={monster.name}></CardHeader>
          <Grid container direction="row">
            <Grid item>
              <CardMedia className={classes.media} image={monster.image} />
            </Grid>
            <Grid item >
              <CardContent>
                <Grid container direction="column">
             
                <Typography variant="body2" >
                  <ul style={{ listStyleType: "none" }}>
                    <li>Attack Dice: {monster.attack}</li>
                    <li>Defense Dice: {monster.defend}</li>
                    <li>Movement: {monster.movement}</li>
                  </ul>
                </Typography>
                
 
                <FormControl variant="outlined">
                  <TextField
                    id="outlined-number"
                    label="Body"
                    type="number"
                    defaultValue={bodyState}
                    value={bodyState}
                    onChange={(e) => {
                      handleBodyChange(e);
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                </FormControl>
             
             
                <FormControl variant="outlined">
                  <TextField
                    id="outlined-number"
                    label="Mind"
                    type="number"
                    defaultValue={mindState}
                    value={mindState}
                    onChange={(e) => {
                      handleMindChange(e);
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                </FormControl>
     
                    </Grid>
              </CardContent>
         
            </Grid>
          </Grid>
        </Card>
      )}
    </>
  );
}
