import React, { useState } from 'react';
import axios from "axios";

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import { DataGrid, RowId, ColDef, ValueGetterParams, RowParams, STATE_CHANGE } from '@material-ui/data-grid';
import { SettingsOverscanOutlined } from '@material-ui/icons';
import Tooltip from '@material-ui/core/Tooltip';
import CheckoutCard from './CheckoutCard'
import { getCharacters, getWeapons } from "../helpers/selectors";
import { wrap } from 'module';
import WeaponCard from "./WeaponCard"
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(3),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    dataGrid: {
      background: "#555",
      wrap: "wrap",
      backgroundSize: "contain"
    },
    checkout: {
      width: "50%",
    }
  }),
);
type Character = {
  id :number,
  name :string,
  gold :number
}
type Weapon = {
  id: number,
  name: string,
  description: string,
  price: number
}
type ArmoryProps = {
  user :{} | null
}

export default function Armory({user}:ArmoryProps) {
  const classes = useStyles();
  const [currentChar, setcurrentChar] = React.useState(0);
  const [selections, setSelection] = React.useState<RowId[]>([]);
  const [total, setTotal] = React.useState<number>(0);
  const [characters, setCharacters] = React.useState<Character[]>([]);
  const [weapons, setWeapons] = React.useState<Weapon[]>([]);
  const [weaponHover, setWeaponHover] = React.useState<any>(weapons[0]);
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setcurrentChar(event.target.value as number);
  };

  // const characters = getCharacters();
  //const weapons = 
  
  const list = characters.map((character, index) => {
    return (<MenuItem key={index} value={index}>{character.name}</MenuItem>)
  });

  const columns: ColDef[] = [
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'description', headerName: 'Description', width: 0.001, hide:true},
    { field: 'price', headerName: 'Cost', width: 100 },
  ];

  const handleSelectionChange = (newSelection: any) => {
    setSelection(newSelection.rowIds);
  }

  const calculateTotal = () => {
    console.log(weaponInfo)
    setTotal(weaponInfo.reduce((a, b) => a + (b['price'] || 0), 0));
    console.log(total)
  }

  const weaponInfo = selections.map((selection) => {
    //  return (<li>{weapons[selection].name}</li>);
    const id = selection.toString();
    return weapons[parseInt(id) - 1]
  })

  const handleBuy = () => {
    //alert('SUBMIT')
    if (total <= characters[currentChar].gold && total > 0) {
      
      console.log(weaponInfo);
      console.log(characters[currentChar].id)
      const sendData = weaponInfo.map((weapon)=>{
        return weapon.id
      })
      console.log('sendData: ', sendData);
      axios
      .post("/api/weapons/purchase", {id: characters[currentChar].id, total, sendData})// You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        characters[currentChar].gold -= total;
        setCharacters(characters)
        console.log(response.data); // The entire response from the Rails API
        setSelection([]);
        console.log(response.data.message); // Just the message
        
      });
    }
  }


  React.useEffect(calculateTotal
    , [selections])

  React.useEffect(()=>{
    getCharacters(user)
    .then((characters)=>{
      setCharacters(characters);
    });
    getWeapons()
    .then((weapons)=>{
      setWeapons(weapons)
    });
  },[])

  const gold = ()=>{
    if(characters[currentChar]){
      return characters[currentChar].gold
    } 
    return 0;
  }

  const weaponText = "This light metal armor gives you 1 extra combat die in defense. May be combined with the Helmet and/or Shield."
  
  // const weaponToolTip = () => {
  //   // alert("onHover")
  //   return (

  //     <>
  //       <Tooltip disableFocusListener title={} >
  //         <Button> Test for tool tip</Button>
  //       </Tooltip>
     
  //     </> 
  //   )
  // }


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
          value={currentChar}
          onChange={handleChange}
        >
          {list}
        </Select>
        
        <FormHelperText>Select a character</FormHelperText>
      </FormControl>

      <div style={{ height: 300, width: '10%' }}>
     
        <DataGrid className={classes.dataGrid} onRowHover={(RowParams) => {setWeaponHover (RowParams.data)}} rows={weapons} columns={columns} pageSize={20} checkboxSelection
          onSelectionChange={(newSelection) => {
            handleSelectionChange(newSelection)
          }} />
     
      </div>
      <div style={{width: '10%' }}>
      <CheckoutCard weapons={weapons} selections={selections} total={total} handleBuy={handleBuy} />
      </div>
  
    <div style={{width: '100%' }}>
      <WeaponCard weapon={weaponHover}/>
    </div>


    </>
  );
}