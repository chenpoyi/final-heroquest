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

import { getNewHero } from "../../helpers/selectors";
import CharacterCard from "./MakeNewCharacterCard";

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
  name: string;
  race: string;
  image: string;
  body: number;
  mind: number;
  attack: number;
  defend: number;
  movement: number;
};

export default function MakeNewCharacterList({ user }: any) {
  const [heroes, setHeroes] = React.useState<Hero[]>([]);

  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  // needs to be changed to heroes
  const characterList = heroes.map((hero, index) => {
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

  //need help with this call
  React.useEffect(() => {
    getNewHero().then((heroes) => {
      setHeroes(heroes);
    });
  }, [heroes]);

  return (
    <>
      <Card className={classes.root}>
        <CardHeader title={`Select a Hero`}></CardHeader>
        <CardContent>
          <CharacterCard hero={heroes[selectedIndex]} />
          <Typography className={classes.list}>
            <List component="nav" aria-label="main mailbox folders">
              {characterList}
            </List>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
