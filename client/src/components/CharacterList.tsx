import React from "react";
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

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useRouteMatch,
} from "react-router-dom";

import { getCharacters } from "../helpers/selectors";

import CharacterCard from "./CharacterCard";
import WeaponList from "./WeaponList";
import { Grid } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    maxWidth: "100%", 

  },
  media: {
    height: 150,
  },
  list: {
    maxWidth: 125,
    fontSize: 15,
  },
  menuLink: {
    textDecoration: 'none',
},
});

// type CharacterCardProps = {
//   charName :string,
//   dateCreated :string,
//   lastUsed :string,
//   race :string,
//   questsCompleted :number,
//   imgSrc :string,
//   body :number,
//   mind :number,
//   attack :number,
//   defense :number,
//   movement :number,
// }
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

export default function CharacterList({ user }: any) {
  const [characters, setCharacters] = React.useState<Character[]>([]);

  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  const characterList = characters.map((character, index) => {
    return (
      <ListItem
        button
        selected={selectedIndex === index}
        onClick={(event) => handleListItemClick(event, index)}
      >
        <ListItemText primary={character.name} />
      </ListItem>
    );
  });

  React.useEffect(() => {
    getCharacters(user).then((characters) => {
      setCharacters(characters);
    });
  }, []);

  return ( 
    <>
     <Grid container spacing={2} className={classes.root}>
        <Grid item xs={6}>
          <CharacterCard character={characters[selectedIndex]} />
          
        </Grid>

        <Grid item xs={3}>
          <Typography className={classes.list}>
            <List component="nav" aria-label="main mailbox folders">
              {characterList}
            </List>
          </Typography>
          <Link className={classes.menuLink} to="/newcharacter">
              <Button  variant="contained" size="small" color="primary">
                New Character
              </Button>
          </Link>
        </Grid>
    
      <Grid item xs={3}>
      <WeaponList character={characters[selectedIndex]} />
      
        </Grid>
      </Grid>
    </>
  );
}
