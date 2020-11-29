import React, { useState } from "react";
import axios from "axios";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { getOneCharacter, getLobbyMonsters, getUsersOfLobby, getCharactersOfLobby } from "../../helpers/selectors";
import MyCharacterCard from "./MyCharacterCard";
import ZargonCard from "./ZargonCard";
import CharacterCard from "../CharacterCard";

import useInterval from '@use-it/interval';

import {
  BrowserRouter as Router,
  useParams
} from "react-router-dom";
type SessionProps = {
  user: any;
};

type Monster = {
  id: number;
  name: string;
  body: number;
  mind: number;
  lobbies_id: number;
  // name?: string;
  // imgSrc?: string;
  // attack?: number;
  // defend?: number;
  // movement?: number;
  // user?: any;
};

type Character ={
  
id:number,
name:string,
attack:number,
defend:number,
body:number,
mind:number,
gold:number,
created_at:string,
updated_at:string,
users_id:number,
heros_id:number,
movement:string,
weapon:number,
image: string
}

type SessionParams = {
  sessionID: string
}
export default function Session({ user }: SessionProps) {
  let { sessionID } = useParams<SessionParams>();
  const [id, setId] = React.useState(Number(sessionID));
  const [users, setUsers] = React.useState([]);

  // const [character, setCharacter] = React.useState(null);
  const [characters, setCharacters] = React.useState<Character[]>([]);
  const [lobbyMonsters, setLobbyMonsters] = React.useState<Monster[]>();
  
  // const newCharacter = getOneCharacter(1);




  // const getCharacter = () => {
  //   getOneCharacter(4).then((char) => {
  //     setCharacter(char);
  //   });
  // };

  const list = characters.sort(function(x,y){ return x.users_id == user.id ? -1 : y.users_id == user.id ? 1 : 0; })
  .map((character, index)=>{
    return(
    <>
    {character && lobbyMonsters && (character.users_id == user.id && character.name =='Zargon')&&(<ZargonCard lobbyMonsters={lobbyMonsters} user={user}/>)}
    {character &&!(character.users_id == user.id && character.name =='Zargon')&&(<MyCharacterCard {...character} user = {user} users ={users}/>)}
    {/* {character && (character.users_id!=user.id)&&(<CharacterCard {...characters[index]} user = {users[index]}/>)} */}
    </>
    )
  })

  // React.useEffect(getCharacter, []);

  // FOR POLLING
  useInterval(() => {
    // setCount((currentCount) => currentCount + 1);
    getUsersOfLobby(id)
    .then((newUsers)=>{
      setUsers(newUsers);
      getCharactersOfLobby(id)
      .then((newCharacters)=>{
        setCharacters(newCharacters)
      })
    })
  }, 10000);

  React.useEffect(() => {
    getUsersOfLobby(id)
    .then((newUsers)=>{
      setUsers(newUsers);
      getCharactersOfLobby(id)
      .then((newCharacters)=>{
        setCharacters(newCharacters)
      })
    })
    
  }, [])

  React.useEffect(() => {
    setLobbyMonsters(getLobbyMonsters());
  }, []);

  return (
    <div>
      {/* <MyCharacterCard {...character} user = {user}/> */}
{/* {    <ZargonCard lobbyMonsters={lobbyMonsters}/> } */}
{/* {characters && lobbyMonsters && (characters.find((element)=>{element.users_id == user.id}).name =='Zargon')&&(<ZargonCard lobbyMonsters={lobbyMonsters}/>)} */}
   {list}
       
    </div>
  );
}
