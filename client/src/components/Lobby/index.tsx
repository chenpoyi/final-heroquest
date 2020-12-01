import React, { useState } from 'react';
import axios from "axios";
import {
  BrowserRouter as Router,
  useParams
} from "react-router-dom";
import { Link } from 'react-router-dom';

import useInterval from '@use-it/interval';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import { DataGrid, RowId, ColDef, ValueGetterParams } from '@material-ui/data-grid';
import { SettingsOverscanOutlined } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
import CharacterModal from './CharacterModal'
import CharacterSelection from "./characterSelection"
import { getUsersOfLobby, getCharactersOfLobby } from "../../helpers/selectors"


type LobbyProps = {
  user: any
}
type LobbyParams = {
  lobbyID: string
}
type User = {
  id: number,
  email: string
}
const useStyles = makeStyles({
 
  menuLink: {
    textDecoration: 'none',
  },
});
const emptyPlayer: User = {
  id: 0,
  email: 'No players found.'
}
export default function Lobby({ user }: LobbyProps) {
  let { lobbyID } = useParams<LobbyParams>();
  // const [character, setCharacter] = React.useState('0');
  const [characters, setCharacters] = React.useState([]);
  const [id, setId] = React.useState(Number(lobbyID));
  const [users, setUsers] = React.useState([]);
  const [count, setCount] = useState(0);
  const classes = useStyles();

  React.useEffect(() => {
    getUsersOfLobby(id)
    .then((newUsers)=>{
      setUsers(newUsers);
      getCharactersOfLobby(id)
      .then((newCharacters)=>{
        setCharacters(newCharacters)
      })
    })
    
  }, [])
  
  // FOR POLLING
  useInterval(() => {
    setCount((currentCount) => currentCount + 1);
    getUsersOfLobby(id)
    .then((newUsers)=>{
      setUsers(newUsers);
      getCharactersOfLobby(id)
      .then((newCharacters)=>{
        setCharacters(newCharacters)
      })
    })
  }, 10000);

  return (
    <>
      <Typography gutterBottom variant="h1" component="h2">
        Lobby: {id}
      </Typography>
      <Grid container spacing={3}>
        <CharacterSelection users={users} characters={characters} lobby_id={id} currentUser={user} />
        <Link className={classes.menuLink} to={`/session/${lobbyID}`} >
        <Button variant="contained" size="small" color="primary">
          Start Game
            </Button>
      </Link>
      </Grid>


      {/* <CharacterModal user={user} setCharacter={setCharacter} /> */}
    </>
  );
} 