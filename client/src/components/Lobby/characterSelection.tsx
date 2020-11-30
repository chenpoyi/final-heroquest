import React, { useState } from "react";
import axios from "axios";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import {
  DataGrid,
  RowId,
  ColDef,
  ValueGetterParams,
} from "@material-ui/data-grid";
import { SettingsOverscanOutlined } from "@material-ui/icons";
import List from "@material-ui/core/List";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { getUserId } from "../../helpers/selectors";
import Grid from '@material-ui/core/Grid';
import CharacterModal from './CharacterModal';
import CharacterCard from '../CharacterCard';

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
    maxHeight: 100,
    marginTop: 150,
    margin: 10,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  }
});
type Character = {
  id: number,
  name :string, 
  dateCreated :string, 
  lastUsed :string, 
  race :string, 
  questsCompleted :number, 
  image :string,
  body :number,
  mind :number,
  attack :number,
  defend :number,
  movement :number,
  gold :number
}
// List Functions //

// function ListItemLink(props: ListItemProps<"a", { button?: true }>) {
//   return <ListItem button component="a" {...props} />;
// }

//maps through the users in the lobby and creates a card for each user => is a button for the modal

// Fake Data for Card //
const  userData :User[] = [
  {id: 1, email: "scott@m.ca"},
  { id: 2, email: "paul@c.ca"},
  { id: 3, email: "jake@p.ca"},
  { id: 4, email: "john@m.ca"},
  { id: 5, email: "howard@c.ca"}
];


type User = {
  id :number,
  email :string
};
type charSelectionProps = {
  users : User[],
  characters : Character[],
  lobby_id :number
};
// type Char = {
//   id :number,
//   email :string
//   character: number

// };


export default function CharacterSelection({users, characters, lobby_id}:charSelectionProps) {
  const classes = useStyles();
  const [usersState, setUsersState] = React.useState<User[]>(users);
  const [charState, setCharState] = React.useState<Character[]>(characters);
  // const [character, setCharacter] = React.useState('0');
  React.useEffect(() => {
    setUsersState(users)
    setCharState(characters)
  }, [users, characters]);

 

 const playerCards = usersState.map((user, index) => {
   return (
     
<>
    { charState[index] && (<CharacterCard character={charState[index]} user={user}/> )}
    {!charState[index] && (<Card className={classes.root}>
        <CardContent>
        <Typography
    className={classes.title}
    color="textSecondary"
    gutterBottom
  >
    {user.email}
  
  </Typography>
          <Divider />
          <Typography variant="h6" component="h2">
            <List component="nav" aria-label="Pick a Character">
              {/* <ListItem button> */}
                {/* <ListItemText primary="Pick a Character" /> */}
                <CharacterModal user={user} setCharacter={(characters: Character[])=>{setCharState(characters)}} index={index} charState={charState} lobby_id ={lobby_id} />
              {/* </ListItem> */}
            </List>
          </Typography>
        </CardContent>
      </Card>)}

   </>
   )
 })

  return (
    <>
  <Grid container spacing={3} justify="center">
      {playerCards}
      {/* <CharacterModal user={user} setCharacter={setCharacter} /> */}
  </Grid>
   
    </>
  );
}
