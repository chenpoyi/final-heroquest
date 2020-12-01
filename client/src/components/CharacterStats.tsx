import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {getKills} from '../helpers/selectors'
// const useStyles = makeStyles({
//   root: {
//     maxWidth: 350,
//     margin: 5,
//     padding: 5,
//     display: "flex",
//     background: "#735D58",
//   },
//   media: {
//     minHeight: 160,
//     minWidth: 160,
//     backgroundSize: "contain",
//   },

//   details: {
//     display: "flex",
//     flexDirection: "column",
//   },
//   header: {
//     fontSize: 20,
//     margin: 5,
//   },
//   subheader: {
//     fontSize: 13,
//     margin: 5,
//   },
//   mediaPaper: {
//     padding: 5,
//     background: " #212626",
//   },
// });

type CharacterStatsProps = {
  // refreshCharacters?: () => void;
  // user: any;
  category :string
};
type Character = {
  id: number;
  name: string;
  // dateCreated: string;
  // lastUsed: string;
  race: string;
  // questsCompleted: number;
  image: string;
  body: number;
  mind: number;
  attack: number;
  defend: number;
  movement: number;
  gold: number;
};
const useStyles = makeStyles({
  table: {
    minWidth: 300,
    overFlow: "scroll",
  },
});

function createData(name: string, kills: number) {
  return { name, kills};
}

export default function CharacterStats({
  category 
  // refreshCharacters = () => {},
  // user,
}: CharacterStatsProps) {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;
  const rows = getKills(category);
  return (
    <>
  
        <>
          <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="Character Stats">
              <TableHead>
                <TableRow>
                  <TableCell>{category}</TableCell>
                  <TableCell align="right">Kills</TableCell>
             
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.kills}</TableCell>
            
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
        
   
    </>
  );
}
