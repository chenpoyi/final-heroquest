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
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: "60%",
  
    margin: 10,
  },
  media: {
    height: 150,
  },
  title: {
    fontSize: 10,
  },
});

// card is the view that the Zargon player sees
// the player can pick a monster to play
// monster is added to the list of current monster
// monster card is rendered when the monster is selected from the list of current monsters


export default function ZargonCard({ lobbyMonsters, user }) {
  const classes = useStyles();
  // These states are used to set the the monsters in the two lists 
  // List one data from the monsters - Selecting a monster
  // List two data from List one is passed to list two and is then used by the MonsterCard to render the selected monster card
  const [monstersState, setMonstersState] = React.useState<any>([]);
  const [selectedMonsterId, setSelectedMonsterId] = React.useState<any>([]);
  const [currentlySelectedMonsters, setcurrentlySelectedMonsters] = React.useState<any>([]);
  // const [selectedActiveMonster, setSelectedActiveMonster] = React.useState<any>(currentlySelectedMonsters[0]);

  // this useEffect pulls the monster data for List one
  React.useEffect(() => {
    setMonstersState(getMonsters())
  }, [])
  React.useEffect(() => {
    // if(lobbyMonsters){
    // const lobbyMonstersInfo = lobbyMonsters.map((lobbyMonster)=>{
    //   return monstersState.find(element => element.id == lobbyMonster.id)
    // })
    setcurrentlySelectedMonsters(lobbyMonsters)
  }, [lobbyMonsters])

  // This state is used For list highlighting
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const monsterList = monstersState.map((monster, index) => {
    return (<MenuItem key={monster.id} value={index}>{monster.name}</MenuItem>)
  });

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

  const handleMonsterSave = () => {
    setcurrentlySelectedMonsters((prev) => {
      const newArr = [...prev, monstersState[selectedMonsterId]]
      console.log(newArr)
      return newArr
    })
  };


  return (
    <>
      <Card className={classes.root}>
        <CardHeader title={`Zargon`} subheader={`${user.email}`}>

        </CardHeader>
        {/* <CardMedia className={classes.media} image={"imgSrc"} /> */}
        <CardContent>
          <Grid container>
            <Grid item>
              <MonsterCard monster={currentlySelectedMonsters[selectedIndex]} />
            </Grid>
            <Grid item>

              <List component="nav" aria-label="main mailbox folders">
                <>{currentlySelectedMonsters && (<>{activeMonsterList}</>)}</>
              </List>

              <FormControl >
                <InputLabel id="demo-simple-select-helper-label">Monster</InputLabel>
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

              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}


