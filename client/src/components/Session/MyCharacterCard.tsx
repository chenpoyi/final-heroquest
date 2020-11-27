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
  },
 
  
 } );

type CharacterCardProps = {
  id :number,
  name :string, 
  dateCreated :string, 
  lastUsed :string, 
  race :string, 
  questsCompleted :number, 
  image :string,
  body :number,
  mind :number,
  attack :number,
  defend :number,
  movement :number,
  gold :number,
  user :any
}

export default function MyCharacterCard({id, name, dateCreated , lastUsed, race , questsCompleted , image, body, mind, attack, defend, movement, gold, user } :CharacterCardProps){

  const classes = useStyles();
  const [goldState, setGold] = React.useState<number>(gold)
  const [bodyState, setBody] = React.useState<number>(body)
  const [mindState, setMind] = React.useState<number>(mind)
  


  const handleGoldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => {
    const goldNumber = Number(event.target.value)
    setGold(goldNumber);
  };

  const handleBodyChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => {
    const bodyNumber = Number(event.target.value)
    setBody(bodyNumber);
  };

  const handleMindChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => {
    const mindNumber = Number(event.target.value)
    setMind(mindNumber);
  };

  const handleCharacterSave = () => {
    //sending data to db to be saved
    // alert(`${id}, ${bodyState}, ${mindState}, ${goldState}`);
    updateCharacterPoints(id, bodyState, mindState, goldState)
  };

  
  React.useEffect( () => {
    setGold(gold);
    setBody(body);
    setMind(mind);
  }, [gold, body, mind])

  return (
    <Card className={classes.root}>
      <CardHeader 
        title={user.email}
        subheader={`${name}`}
      >
      
      </CardHeader>
      
      <CardMedia className={classes.media} image={image} />
      <CardContent>
       
        <Typography variant="body2" component="p">
       <ul style={{listStyleType:"none"}}> 
          <li>
            Attack Dice: {attack}
          </li>
          <li>
           Defense Dice: {defend}
          </li>
          <li>
            Movement: {movement}
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
       
        <FormControl variant="outlined">
          <TextField
          id="outlined-number"
          label="Gold"
          type="number"
          defaultValue={goldState}
          value={goldState}
          onChange={(e)=>{handleGoldChange(e)}}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        </FormControl>
      </CardContent>
      <Button onClick={handleCharacterSave} size="small">Save</Button>
    </Card>
  );
}

