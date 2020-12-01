import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import CharacterList from "./CharacterList";
import CharacterStats from "./CharacterStats";
import QuestList from "./QuestList";
import WeaponList from "./WeaponList";
import Typography from "@material-ui/core/Typography";

import { Grid, Paper } from "@material-ui/core";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 50,
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
    charpaper: {
      background: "#3c4545",
    },
    questlist: {
      marginLeft: 10,
    },
    mycharactertext: {
      marginTop: 70,
      marginLeft: 130,
    },
    emailtext: {
      marginLeft: 130,
    }
  })
);

type User = {
  id: number;
  email: string;
};
type UserProps = {
  user: any;
};

export default function User({ user }: UserProps) {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.charpaper}>
        <Typography className={classes.mycharactertext} variant={"h2"}>
          My Characters
        </Typography>
        <Grid container spacing={1} className={classes.root}>
          <Grid item xs={12} sm={12}>
            <Typography className={classes.emailtext} variant="h4">{user.email}</Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <CharacterList user={user} />
          </Grid>
        </Grid>

        <Grid container justify={"center"} spacing={1}>
          <Grid className={classes.questlist} item xs={12} sm={4}>
            <QuestList user={user} />
          </Grid>
          <Grid className={classes.questlist} item xs={12} sm={3}>
            <CharacterStats category={"Weapons"} />
          </Grid>
          <Grid className={classes.questlist} item xs={12} sm={3}>
            <CharacterStats category={"Monsters"} />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
