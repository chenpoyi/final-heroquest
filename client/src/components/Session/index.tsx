import React, { useState } from 'react';
import axios from "axios";

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import {getOneCharacter} from '../../helpers/selectors'
import MyCharacterCard from './MyCharacterCard'

type SessionProps = {

  user: any
}
export default function Session({ user }: SessionProps) {
  const [character, setCharacter] = React.useState(null);

  // const newCharacter = getOneCharacter(1);

  const getCharacter = () =>
{
  getOneCharacter(4).
  then((char)=>{
    setCharacter(char)
  })

  
}  

  React.useEffect(getCharacter
  , [])
  return (
    <>
      <h1>This is the session page</h1>
      <MyCharacterCard {...character} user = {user}/>

    </>
  );
}