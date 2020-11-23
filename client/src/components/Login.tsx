import React, {useState} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from "axios";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

export default function Login() {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (evt :any) => {
    evt.preventDefault();
    alert(`Submitting Email ${email}`)

    const user = {
      email,
      password,
    };

    axios
      .post("/api/login", {user})// You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data); // The entire response from the Rails API

        console.log(response.data.message); // Just the message
        
      });

    

}
  
  return (
    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic-email" label="Email" onChange={e => setEmail(e.target.value)}/>
      <TextField id="standard-basic-password" type="password" label="Password" onChange={e => setPassword(e.target.value)}/>
      <Button type="submit" variant="contained" size="small" color="primary">
        Login
      </Button>
    </form>
  );
}