import React, { useState } from "react";
import axios from "axios";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { getOneCharacter, getLobbyMonsters, getUsersOfLobby, getCharactersOfLobby } from "../../helpers/selectors";
import MyCharacterCard from "./MyCharacterCard";
import ZargonCard from "./ZargonCard";
import CharacterCard from "../CharacterCard";
import { Grid } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import useInterval from '@use-it/interval';
import Typography from '@material-ui/core/Typography';

import {
  BrowserRouter as Router,
  useParams
} from "react-router-dom";
type SessionProps = {
  user: any;
};

type Monster = {
  id: number;
  name: string;
  body: number;
  mind: number;
  lobbies_id: number;
  // name?: string;
  // imgSrc?: string;
  // attack?: number;
  // defend?: number;
  // movement?: number;
  // user?: any;
};

type Character = {

  id: number,
  name: string,
  race: string,
  attack: number,
  defend: number,
  body: number,
  mind: number,
  gold: number,
  created_at: string,
  updated_at: string,
  user_id: number,
  hero_id: number,
  movement: number,
  weapon: number,
  image: string
}

type SessionParams = {
  sessionID: string
}

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    width: "100%",
    margin: 50,
    alignItems: "center"
  },
  media: {
    height: 150,
  },
  list: {
    maxWidth: 125,
    fontSize: 15,

  },
  charpaper: {
    width: "100%",
    height: "100%",
    background: "#212626"
  },

  card: {
    width: "100%"
  }




});

export default function Session({ user }: SessionProps) {
  let { sessionID } = useParams<SessionParams>();
  const [id, setId] = React.useState(Number(sessionID));
  const [users, setUsers] = React.useState<any[]>([]);

  const [characters, setCharacters] = React.useState<Character[]>([]);
  const [lobbyMonsters, setLobbyMonsters] = React.useState<Monster[]>();

  // const newCharacter = getOneCharacter(1);

  const classes = useStyles();



  // const getCharacter = () => {
  //   getOneCharacter(4).then((char) => {
  //     setCharacter(char);
  //   });
  // };

  const list = characters.sort(function (x, y) { return x.user_id == user.id ? -1 : y.user_id == user.id ? 1 : 0; })
    .map((character, index) => {
      return (
        <>
          {character && lobbyMonsters && (character.user_id == user.id && character.name == 'Zargon') && (<Grid item sm={12}><ZargonCard lobbyMonsters={lobbyMonsters} user={user} /></Grid>)}
          {character && character.user_id == user.id && character.name != 'Zargon' && (<Grid item sm={12}><MyCharacterCard {...character} user={user} users={users} /></Grid>)}
          {character && character.user_id != user.id && (<Grid item sm={5}><CharacterCard character={character} user={users.find(element => element.id == character.user_id)} /></Grid>)}
        </>
      )
    })


  // FOR POLLING
  useInterval(() => {
    // setCount((currentCount) => currentCount + 1);
    getUsersOfLobby(id)
      .then((newUsers) => {
        setUsers(newUsers);
        getCharactersOfLobby(id)
          .then((newCharacters) => {
            setCharacters(newCharacters)
          })
      })
  }, 10000);

  React.useEffect(() => {
    getUsersOfLobby(id)
      .then((newUsers) => {
        setUsers(newUsers);
        getCharactersOfLobby(id)
          .then((newCharacters) => {
            setCharacters(newCharacters)
          })
      })

  }, [])

  React.useEffect(() => {
    setLobbyMonsters(getLobbyMonsters());
  }, []);

  return (
    <Paper className={classes.charpaper} elevation={10}>
      <Typography gutterBottom variant="h1" component="h2">
                  Session: {id}
                </Typography>
      <Grid container className={classes.root} spacing={3} alignItems="flex-start" justify="flex-start" direction="row">
    
        {list}
     
      </Grid>
    </Paper>);
}
