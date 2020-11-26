import React, { useState } from "react";
import axios from "axios";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import {
  DataGrid,
  RowId,
  ColDef,
  ValueGetterParams,
} from "@material-ui/data-grid";
import { SettingsOverscanOutlined } from "@material-ui/icons";
import List from "@material-ui/core/List";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { getUserId } from "../../helpers/selectors";



const useStyles = makeStyles({
  root: {
    maxWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

// List Functions //

// function ListItemLink(props: ListItemProps<"a", { button?: true }>) {
//   return <ListItem button component="a" {...props} />;
// }

//maps through the users in the lobby and creates a card for each user => is a button for the modal

// Fake Data for Card //
const  userData :Users = [
  {id: 1, email: "scott@m.ca"},
  { id: 2, email: "paul@c.ca"},
  { id: 3, email: "jake@p.ca"},
  { id: 4, email: "john@m.ca"},
  { id: 5, email: "howard@c.ca"}
];

// const characters = [{ user_id: 1 }, { hero_id: 1 }];
// const hero = [{ id: 1, name: "Elf" }];

type Users = {
  id :number,
  email :string
}[];

export default function CharacterSelection() {
  const classes = useStyles();
  const [users, setUsers] = React.useState<Users>(userData);
  React.useEffect(() => {
    getUserId().then((users) => {
      setUsers(users);
    });
  }, []);

 const playerCards = userData.map((user, index) => {
   return (
    <Card className={classes.root}>
        <CardContent>
        <Typography
    className={classes.title}
    color="textSecondary"
    gutterBottom
  >
    {user.email}
    {/* {playerCards} */}
  </Typography>
          <Divider />
          <Typography variant="h6" component="h2">
            <List component="nav" aria-label="Pick a Character">
              <ListItem button>
                <ListItemText primary="Pick a Character" />
              </ListItem>
            </List>
          </Typography>
        </CardContent>
      </Card>
   )
 })

  return (
    <>
      {playerCards}
    </>
  );
}
