import React, {useState} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from "axios";
import CharacterList from './CharacterList';
import QuestList from './QuestList'
import WeaponList from './WeaponList';
import Typography from "@material-ui/core/Typography";

import { Grid } from "@material-ui/core";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 50,
      
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
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={12} sm={12}>
        <Typography variant="h3">
          {user.email}
        </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <CharacterList user={user}/>
        </Grid>
        {/* <Grid  item xs={12} sm={3}>
          <h5>Character Stats PlaceHolder</h5>
        </Grid> */}
        <Grid item xs={12} sm={6}>
          <QuestList user={user}/>
        </Grid>
      </Grid>
    </>
  );
}