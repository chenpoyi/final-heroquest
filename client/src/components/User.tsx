import React, {useState} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from "axios";
import CharacterList from './CharacterList';
import QuestList from './QuestList'
import WeaponList from './WeaponList';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

type User = {
  id: number,
  email: string
}
 type UserProps = {
   user : any
 }

export default function User({user}: UserProps) {
  const classes = useStyles();

 


  
  return (
    <>
      <CharacterList user={user}/>
      <QuestList />
    
    </>
  );
}