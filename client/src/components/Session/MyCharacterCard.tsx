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

import { Grid } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';

import { updateCharacterPoints } from '../../helpers/selectors'

const useStyles = makeStyles({
  root: {
  maxWidth: 350,
  minWidth: 340,
  // margin: 5,
  padding: 5,
  display: "flex",
  background: "#735D58",
  },
  media: {
    minHeight: 160,
    minWidth: 160,

    backgroundSize: "contain",
  },
  mediaPaper:{
    padding: 5,
    background: " #212626"
  },
  header: {
    fontSize: 15,
    margin: 5
  },
  subheader: {
    fontSize: 13,
    margin: 5
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    marginTop: 5
  },
  textfield: {
    marginTop: 5
  }
});

// root: {
//   maxWidth: 350,
//   minWidth: 340,
//   margin: 5,
//   padding: 5,
//   display: "flex",
//   background: "#735D58",
// },

type CharacterCardProps = {
  id: number,
  name: string,
  // dateCreated :string, 
  // lastUsed :string, 
  // race :string, 
  // questsCompleted :number, 
  image: string,
  body: number,
  mind: number,
  attack: number,
  defend: number,
  movement: number,
  gold: number,
  user_id: number,
  user: any,
  users: any
}

export default function MyCharacterCard({ id, name, image, body, mind, attack, defend, movement, gold, user_id, user, users }: CharacterCardProps) {

  const classes = useStyles();
  const [goldState, setGold] = React.useState<number>(gold)
  const [bodyState, setBody] = React.useState<number>(body)
  const [mindState, setMind] = React.useState<number>(mind)



  const handleGoldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const goldNumber = Number(event.target.value)
    setGold(goldNumber);
  };

  const handleBodyChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const bodyNumber = Number(event.target.value)
    setBody(bodyNumber);
  };

  const handleMindChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const mindNumber = Number(event.target.value)
    setMind(mindNumber);
  };

  const handleCharacterSave = () => {
    //sending data to db to be saved
    // alert(`${id}, ${bodyState}, ${mindState}, ${goldState}`);
    updateCharacterPoints(id, bodyState, mindState, goldState)
  };


  React.useEffect(() => {
    setGold(gold);
    setBody(body);
    setMind(mind);
  }, [gold, body, mind])

  return (
   
    <Card className={classes.root}>
      <Grid>
      <Typography className={classes.header}>
        {name}
      </Typography>
      <Typography className={classes.subheader}>
        {users.find(element => element.id == user_id).email}
      </Typography>
      <Paper className={classes.mediaPaper}>
      <CardMedia className={classes.media} image={image} />
      </Paper>
      </Grid>
      <CardContent>
        <Typography variant="body2" component="p">
          <ul style={{ listStyleType: "none", padding: 0, fontSize: 14 }}>
            <li>
              Attack Dice: {attack}
            </li>
            <li>
              Defense Dice: {defend}
            </li>
            <li>
              Movement: {movement}
            </li>
            <> {!(user_id == user.id) && (name != 'Zargon') && (<>
              <li>
                Body: {body}
              </li>
              <li>
                Mind: {mind}
              </li>
              <li>
                Gold: {gold}
              </li>

            </>)}</>
          </ul>

        </Typography>
        <> {(user_id == user.id) && (<>
          <FormControl className={classes.textfield} variant="outlined">
            <TextField
              id="outlined-number"
              label="Body"
              type="number"
              size="small"
              defaultValue={bodyState}
              value={bodyState}
              onChange={(e) => { handleBodyChange(e) }}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </FormControl>


          <FormControl  className={classes.textfield} variant="outlined">
            <TextField
              id="outlined-number"
              label="Mind"
              type="number"
              size="small"
              defaultValue={mindState}
              value={mindState}
              onChange={(e) => { handleMindChange(e) }}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </FormControl>

          <FormControl className={classes.textfield} variant="outlined">
            <TextField
              id="outlined-number"
              label="Gold"
              type="number"
              size="small"
              defaultValue={goldState}
              value={goldState}
              onChange={(e) => { handleGoldChange(e) }}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </FormControl>
          <Grid container justify="center">
          {(user_id == user.id) && (<Button className={classes.button }onClick={handleCharacterSave} size="small" variant="contained">Save</Button>)}

          </Grid>
</>)}</>



      </CardContent>
    </Card>
  );
}

