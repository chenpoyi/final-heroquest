import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import ListItemText from "@material-ui/core/ListItemText";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

import CardHeader from "@material-ui/core/CardHeader";

import { BrowserRouter as Router, Link } from "react-router-dom";
import { getCharacterWeapons } from "../helpers/selectors";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    borderRadius: 3,
    backgroundColor: "#735D58"
  },
  media: {
    height: 150,
  },
  menuLink: {
    textDecoration: "none",
  },
  paperRoot: {
    backgroundColor: "#3c4545",
  },
  armorybutton: {
    marginTop: 15,
  },
});

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
type Weapon = {
  name: string;
};

export default function WeaponList({ character }: any) {
  const [characterState, setCharacter] = React.useState<Character>(character);
  const [weaponsState, setWeapons] = React.useState<Weapon[]>([]);

  const classes = useStyles();

  const weaponsList = weaponsState.map((weapon) => {
    return (
      <ListItem>
        <ListItemText primary={weapon.name} />
      </ListItem>
    );
  });
  React.useEffect(() => {
    setCharacter(character);
    if (character) {
      getCharacterWeapons(character.id).then((weapons) => {
        setWeapons(weapons);
      });
    }
  }, [character]);

  return (
    <>
      <div className={classes.root}>
        <Card className={classes.root}>
          <CardHeader title={`Weapons`}></CardHeader>
          <CardContent>
            <List component="nav" aria-label="main mailbox folders">
              {weaponsList}
            </List>
          </CardContent>
        </Card>
        <Link className={classes.menuLink} to="/armory">
          <Button
            className={classes.armorybutton}
            variant="contained"
            size="small"
            color="primary"
          >
            Armory
          </Button>
        </Link>
      </div>
    </>
  );
}
