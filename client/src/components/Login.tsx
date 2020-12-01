import React, {Fragment, useState} from 'react';
import  { Redirect, Route } from 'react-router-dom'
import TitleCard from './TitleCard'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from "axios";
import { Grid } from "@material-ui/core";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        marginTop: 125,
        width: '25ch',
      },
    },
  }),
);
type LoginProps = {
  handleSuccessfulLogin :any,
  loggedIn :boolean
}
export default function Login({handleSuccessfulLogin, loggedIn}: LoginProps) {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (evt :any) => {
    evt.preventDefault();
   

    const user = {
      email,
      password,
    };

    axios
      .post("/api/login", {email, password})// You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data); // The entire response from the Rails API

        console.log(response.data.message); // Just the message
        localStorage.setItem('email', email);

        console.log(localStorage.getItem('email'))
        handleSuccessfulLogin(response.data);
        //setLoggedIn(true);

        return <Redirect to='/'  />
        //return <Route path="/" render={TitleCard} />
      });

    

}
  
  return (
    <>
    
    {loggedIn && <Redirect to='/'  />}
    <Grid container spacing={2} >
    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
    <Grid item xs={12} sm={4}>
      <TextField id="standard-basic-email" label="Email" onChange={e => setEmail(e.target.value)}/>
      </Grid>
      <Grid item xs={12} sm={4}>
      <TextField id="standard-basic-password" type="password" label="Password" onChange={e => setPassword(e.target.value)}/>
      </Grid>
      <Grid item xs={12} sm={4}>
      <Button type="submit" variant="contained" size="small" color="primary">
        Login
      </Button>
      </Grid>
    </form>
    </Grid>
    </>
  );
}