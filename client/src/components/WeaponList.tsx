import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { getCharacterWeapons } from "../helpers/selectors";


const useStyles = makeStyles({
  root: {
    maxWidth: 300
  },
  media: {
    height: 150,
  },
  menuLink: {
    textDecoration: 'none',
  },
});

// type CharacterCardProps = {
//   charName :string, 
//   dateCreated :string, 
//   lastUsed :string, 
//   race :string, 
//   questsCompleted :number, 
//   imgSrc :string,
//   body :number,
//   mind :number,
//   attack :number,
//   defense :number,
//   movement :number,
// }
type Character = {
  id: number,
  name: string,
  dateCreated: string,
  lastUsed: string,
  race: string,
  questsCompleted: number,
  image: string,
  body: number,
  mind: number,
  attack: number,
  defend: number,
  movement: number,
  gold: number
}
type Weapon = {
  name: string
}

export default function WeaponList({ character }: any) {
  const [characterState, setCharacter] = React.useState<Character>(character);
  const [weaponsState, setWeapons] = React.useState<Weapon[]>([]);

  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;
  // const [selectedIndex, setSelectedIndex] = React.useState(1);

  // const handleListItemClick = (
  //   event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  //   index: number,
  // ) => {
  //   setSelectedIndex(index);
  // };

  // const characterList = characters.map((character, index) => {
  //   return (  
  //     <ListItem

  //       selected={selectedIndex === index}
  //     >
  //       <ListItemText primary={character.name} />
  //     </ListItem>)
  // });

  // React.useEffect(()=>{

  //   if(character){
  //     getCharacterWeapons(character.id).then(
  //     (weapons)=>{
  //       setWeapons(weapons);
  //     }
  //   )}

  // },[])
  const weaponsList = weaponsState.map((weapon) => {
    return (<ListItem
    // button
    // selected={selectedIndex === index}
    // onClick={(event) => handleListItemClick(event, index)}
    >
      <ListItemText primary={weapon.name} />
    </ListItem>)
  })
  React.useEffect(() => {
    setCharacter(character);
    if (character) {
      getCharacterWeapons(character.id).then(
        (weapons) => {
          setWeapons(weapons);
        }
      )
    }
  }, [character])

  return (
    <>

      <Card className={classes.root}>
        <CardHeader title={`Weapons`} >

        </CardHeader>
        <CardContent>
          <List component="nav" aria-label="main mailbox folders">
            {weaponsList}
          </List>

        </CardContent>
      </Card>
      <Link className={classes.menuLink} to="/armory">
        <Button variant="contained" size="small" color="primary">
          Armory
            </Button>
      </Link>
    </>
  );
}

