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

import CheckoutCard from './CheckoutCard'
import { getCharacters, getWeapons } from "../helpers/selectors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);
type Character = {
  name :string,
  gold :number

}
export default function Armory() {
  const classes = useStyles();
  const [char, setChar] = React.useState(0);
  const [selections, setSelection] = React.useState<RowId[]>([]);
  const [total, setTotal] = React.useState<number>(0);
  const [characters, setCharacters] = React.useState<Character[]>([]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setChar(event.target.value as number);
  };

  // const characters = getCharacters();
  const weapons = getWeapons();
  
  const list = characters.map((character, index) => {
    return (<MenuItem key={index} value={index}>{character.name}</MenuItem>)
  });

  
 


  const columns: ColDef[] = [
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'description', headerName: 'Description', width: 150 },
    { field: 'cost', headerName: 'Cost', width: 100 },
  ];

  const handleSelectionChange = (newSelection: any) => {
    setSelection(newSelection.rowIds);
  }

  const calculateTotal = () => {
    console.log(weaponInfo)
    setTotal(weaponInfo.reduce((a, b) => a + (b['cost'] || 0), 0));
    console.log(total)
  }

  const weaponInfo = selections.map((selection) => {
    //  return (<li>{weapons[selection].name}</li>);
    const id = selection.toString();
    return weapons[parseInt(id) - 1]
  })

  const handleBuy = () => {
    alert('SUBMIT')
  }


  React.useEffect(calculateTotal
    , [selections])

  React.useEffect(()=>{
    getCharacters()
    .then((characters)=>{
      setCharacters(characters);
    });
  },[])

  const gold = ()=>{
    if(characters[char]){
      return characters[char].gold
    } 
    return 0;
  }

  return (
    <>
      <Typography variant="body2" component="p">
        This character has: {gold()} gold.
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label">Character</InputLabel>
        <Select
          // labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={char}
          onChange={handleChange}
        >
          {list}
        </Select>
        <FormHelperText>Select a character</FormHelperText>
      </FormControl>

      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={weapons} columns={columns} pageSize={5} checkboxSelection
          onSelectionChange={(newSelection) => {
            handleSelectionChange(newSelection)
          }} />

      </div>
      <CheckoutCard weapons={weapons} selections={selections} total={total} handleBuy={handleBuy} />
    </>
  );
}