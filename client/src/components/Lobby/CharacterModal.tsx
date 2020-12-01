import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import {getCharacters, selectCharacterOfLobby} from "../../helpers/selectors";
import CharacterCard from "../CharacterCard"
import Button from '@material-ui/core/Button';
import { Grid, Paper } from "@material-ui/core";


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top:'10%',
    left:'10%',
    overflow:'scroll',
    height:'80%',
    width: '60%',
    display:'flex',
    // flexDirection: 'row'
  

  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    modal:{
      display:'flex',
      flexDirection: 'column',
      // minWidth: '75%'
      flexWrap: 'nowrap',
    },
    card:{
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      maxWidth: '30%'
    },
    button:{
      maxWidth: '10%'
    }
  }),
);

type CharacterModalProps = {

  user :any,
  currentUser :any,
  setCharacter :any,
  index :number,
  charState: Character[],
  lobby_id: number
}
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

export default function CharacterModal({user, currentUser, setCharacter, index, charState, lobby_id}:CharacterModalProps) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [characters, setCharacters] = React.useState<Character[]>([]);
  const handleOpen = () => {
    setOpen(true);
  };
  let newArray;
  const handleClose = () => {
    setOpen(false);
  };
  const handleSelect = (character : Character) => {
    handleClose();
    newArray = {...charState};
    newArray[index] = character;
    // setCharacter([1,2,3,4,5])
    console.log(newArray)
    console.log(charState)
    setCharacter(newArray)
    selectCharacterOfLobby(user.id, character.id, lobby_id)
  }

  const list = characters.map((character, index) => {
    return (
    <Grid container item className={classes.card}>
    <CharacterCard character={character} user={user}/>
    <Button variant="contained" size="small" color="primary" className={classes.button} onClick={()=>{handleSelect(character)}}> 
        Select
      </Button>
    </Grid>  )
  });

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Grid container className={classes.modal}>
        <Grid item> <h2 id="simple-modal-title">Choose your character:</h2></Grid>
     
  
        <Grid item container> 
        {list}     
        </Grid> 
      </Grid>     
    </div>
  );

  React.useEffect(()=>{
    getCharacters(user)
    .then((characters)=>{
      setCharacters(characters);
    });
    
  },[])

  return (
    <>
      {(currentUser.email == user.email) && (<button type="button" onClick={handleOpen}>
        Choose Character
      </button>)}
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
  </>
  );
}