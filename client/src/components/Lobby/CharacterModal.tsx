import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import {getCharacters} from "../../helpers/selectors";
import CharacterCard from "../CharacterCard"
import Button from '@material-ui/core/Button';


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
    height:'100%',
    display:'block'
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
  }),
);

type CharacterModalProps = {

  user :any,
  setCharacter :any
}
type Character = {
  name :string, 
  dateCreated :string, 
  lastUsed :string, 
  race :string, 
  questsCompleted :number, 
  imgSrc :string,
  body :number,
  mind :number,
  attack :number,
  defense :number,
  movement :number,
}

export default function CharacterModal({user, setCharacter}:CharacterModalProps) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [characters, setCharacters] = React.useState<Character[]>([]);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSelect = () => {
    handleClose();
    setCharacter('1')
  }

  const list = characters.map((character, index) => {
    return (
    <>
    <CharacterCard {...character}/>
    <Button variant="contained" size="small" color="primary" onClick={handleSelect}> 
        Select
      </Button>
    </>  )
  });

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        {list}     
      </p>
            
    </div>
  );

  React.useEffect(()=>{
    getCharacters(user)
    .then((characters)=>{
      setCharacters(characters);
    });
    
  },[])

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Choose Character
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}