import React, { useState } from 'react';
import axios from "axios";

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

type LobbyProps = {

  user: any
}
export default function Lobby({ user }: LobbyProps) {
  const [character, setCharacter] = React.useState('0');


  return (
    <>
  <Grid container spacing={3}>
      <CharacterSelection />
  </Grid>
 
      
      <CharacterModal user={user} setCharacter={setCharacter} />
    </>
  );
}