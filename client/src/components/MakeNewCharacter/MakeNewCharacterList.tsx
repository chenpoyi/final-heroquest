import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { getNewHero, addCharacter } from "../../helpers/selectors";
import MakeNewCharacterCard from "./MakeNewCharacterCard";
 
const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    marginTop: 25,
  },
  media: {
    height: 150,
  },
  list: {
    maxWidth: 125,
    fontSize: 15,
  },
});

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

// id: 1,
//     race: 'barbarian', 
//     attack: 3, 
//     defend: 2, 
//     body: 8 , 
//     mind: 2, 
//     default_weapon: 2,
//     image: 'https://i.imgur.com/h0nbSUe.gif'

export default function MakeNewCharacterList({ user }: any) {
  const [heroes, setHeroes] = React.useState<Hero[]>([]);

  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [nameState, setNameState] = React.useState('');

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  // needs to be changed to heroes
  const heroList = heroes.map((hero, index) => {
    return (
      <ListItem
        button
        selected={selectedIndex === index}
        onClick={(event) => handleListItemClick(event, index)}
      >
        <ListItemText primary={hero.race} />
      </ListItem>
    );
  });

  // need help with this call
  React.useEffect(() => {
    setHeroes(getNewHero());
    // getNewHero().then((heroes) => {
    //   setHeroes(heroes);
    // }); 
  }, [heroes]);

  const handleCharacterSave = () => {
    //sending data to db to be saved
    // alert(`${id}, ${bodyState}, ${mindState}, ${goldState}`);
    // updateCharacterPoints(id, bodyState, mindState, goldState)
    alert(heroes[selectedIndex].race);
    addCharacter(nameState, heroes[selectedIndex].id, user.id);
  };
 
  return ( 
    <>
      <Card className={classes.root}>
        <CardHeader title={`Select a Hero`}></CardHeader>
        <CardContent>
          <MakeNewCharacterCard hero={heroes[selectedIndex]} />
          <Typography className={classes.list}>
            <List component="nav" aria-label="main mailbox folders">
              {heroList}
            </List>
          </Typography>
          <FormControl variant="outlined">
            <TextField
              id="outlined-number"
              label="Name"
              // type="number"
              defaultValue={nameState}
              value={nameState}
              onChange={(e) => { setNameState(e.target.value) }}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
            <Button onClick={handleCharacterSave} variant="contained" size="small" color="primary">
              Save Character
            </Button>
          </FormControl>
        </CardContent>
      </Card>
    </>
  );
} 



   