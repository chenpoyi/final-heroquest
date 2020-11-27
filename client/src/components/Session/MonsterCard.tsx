import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';

import CardMedia from '@material-ui/core/CardMedia';


import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

import Divider from '@material-ui/core/Divider'

import {updateCharacterPoints} from '../../helpers/selectors'

const useStyles = makeStyles({
  root:{
    maxWidth: 300
  },
  media: {
    height: 150,
    backgroundSize: "contain"
  },
 
  
 } );

type MonsterCardProps = {
  monster :Monster
}

type Monster = {
  id: number;
  name: string;
  image: string;
  body: number;
  mind: number;
  attack: number;
  defend: number;
  movement: number;
  user: any;
  lobbies_id: number
};
export default function MonsterCard({monster} :MonsterCardProps){

  const classes = useStyles();
  
  const [bodyState, setBody] = React.useState<number>()
  const [mindState, setMind] = React.useState<number>()
  


 

  const handleBodyChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => {
    const bodyNumber = Number(event.target.value)
    setBody(bodyNumber);
  };

  const handleMindChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => {
    const mindNumber = Number(event.target.value)
    setMind(mindNumber);
  };

  React.useEffect( () => {
    if(monster){
    setBody(monster.body);
    setMind(monster.mind);
    };
  }, [monster])

  return (
    <>
    {monster && (

      <Card className={classes.root}>
      <CardHeader 
        title={monster.name} 
      >
      
      </CardHeader>
      
      <CardMedia className={classes.media} image={monster.image} />
      <CardContent>
       
        <Typography variant="body2" component="p">
       <ul style={{listStyleType:"none"}}> 
          <li>
            Attack Dice: {monster.attack}
          </li>
          <li>
           Defense Dice: {monster.defend}
          </li>
          <li>
            Movement: {monster.movement}
          </li>
        
        </ul> 
      
        </Typography>

        <FormControl variant="outlined">
          <TextField
          id="outlined-number"
          label="Body"
          type="number"
          defaultValue={bodyState}
          value={bodyState}
          onChange={(e)=>{handleBodyChange(e)}}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        </FormControl>
        
       
        <FormControl variant="outlined"> 
          <TextField
          id="outlined-number"
          label="Mind"
          type="number"
          defaultValue={mindState}
          value={mindState}
          onChange={(e)=>{handleMindChange(e)}}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        </FormControl>
       
        
      </CardContent>
    </Card>)}
    </>
  );
}

