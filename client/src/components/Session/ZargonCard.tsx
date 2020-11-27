import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import { updateMonsterPoints, getMonsters } from "../../helpers/selectors";
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import MonsterCard from './MonsterCard'
const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 150,
  },
});

type Monster = {
  id: number;
  name: string;
  // image: string;
  body: number;
  mind: number;
  // attack: number;
  // defend: number;
  // movement: number;
  // user: any;
  lobbies_id: number
};

export default function ZargonCard({lobbyMonsters}) {
  const classes = useStyles();
  const [monstersState, setMonstersState] = React.useState<any>([]);
  const [selectedMonsterId, setSelectedMonsterId] = React.useState<any>([]);
  const [currentlySelectedMonsters, setcurrentlySelectedMonsters] = React.useState<any>([]);
  const [selectedActiveMonster, setSelectedActiveMonster] = React.useState<any>(currentlySelectedMonsters[0]);

  const [selectedIndex, setSelectedIndex] = React.useState(1); //For list highlighting
  // const [bodyState, setBody] = React.useState<number>(body);
  // const [mindState, setMind] = React.useState<number>(mind);
  // const [monster, setMonster] = React.useState<any>();
    // alert(lobbyMonsters)
  const monsterList = monstersState.map((monster, index) => {
    return (<MenuItem key={monster.id} value={index}>{monster.name}</MenuItem>)
  });


  // const activeMonsterList = currentlySelectedMonsters.map((monster) => {
  //   return (<MenuItem key={monster.id} value={monster.id}>{monster}</MenuItem>)
  // });

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };

  const activeMonsterList = currentlySelectedMonsters.map((monster, index) => {
    return (
    
      
    <ListItem
      button
      selected={selectedIndex === index}
      onClick={(event) => handleListItemClick(event, index)}
    >
      
      <ListItemText primary={monster.name} />
    </ListItem>)
    
  });

  
  
  // React.useEffect(()=>{ 
  //   activeMonsterList = currentlySelectedMonsters.map((monster) => {
  //     return (<MenuItem key={monster.id} value={monster.id}>{monster.id}</MenuItem>)
  //   });
  // }
  //   , [currentlySelectedMonsters])

  
  
  
  
  // const activeMonsterList2 = 
  //   [
  //   <MenuItem value={10}>Ten</MenuItem>,
  //   <MenuItem value={20}>Twenty</MenuItem>,
  //   <MenuItem value={30}>Thirty</MenuItem>
  //   ];
  // const handleBodyChange = (
  //   event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const bodyNumber = Number(event.target.value);
  //   setBody(bodyNumber);
  // };

  // const handleMindChange = (
  //   event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const mindNumber = Number(event.target.value);
  //   setMind(mindNumber);
  // };

  const handleMonsterSave = () => {
    setcurrentlySelectedMonsters( (prev) => {
     
      const newArr = [...prev, monstersState[selectedMonsterId]] 
      console.log(newArr)
      return newArr
    })

    //sending data to db to be saved => not to monster table to LobbyMonster table
    // alert(`${id}, ${bodyState}, ${mindState}, ${goldState}`);
    //updateMonsterPoints(id, bodyState, mindState, lobby_id); // make this function in helpers
  };

  // React.useEffect(() => {
  //   setBody(body);
  //   setMind(mind);
  // }, [body, mind]);

  // React.useEffect(() => {
  //   setMonster(getMonsters(""))
  // }, []);

  React.useEffect(()=>{
    setMonstersState(getMonsters())
  },[])

  return (
    <>
    <MonsterCard monster={currentlySelectedMonsters[selectedIndex]}/>
    <Card className={classes.root}>
      <CardHeader title={"Test"} subheader={"monster"}></CardHeader>

      <CardMedia className={classes.media} image={"imgSrc"} />
      <CardContent>
        
        
      <List component="nav" aria-label="main mailbox folders">
      {activeMonsterList}
      </List>
        <FormControl >
        <InputLabel id="demo-simple-select-helper-label">Character</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={selectedMonsterId}
          onChange={(event) => setSelectedMonsterId(event.target.value)}
        >
          {monsterList}
        </Select>
        <Button onClick={handleMonsterSave}>
          ADD MONSTER
        </Button>
        {/* <FormHelperText></FormHelperText> */}
      </FormControl>

      
      </CardContent>


    
    </Card>
    </>
  );
}



{/* <FormControl >
        <InputLabel id="demo-simple-select-helper-label">Character</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={selectedActiveMonster}
          onChange={(event) => setSelectedActiveMonster(event.target.value)}
        >
        
        </Select>
        <Button onClick={handleMonsterSave}>
          Destroy Monster
        </Button>
        <FormHelperText>Select a character</FormHelperText>
      </FormControl> */}