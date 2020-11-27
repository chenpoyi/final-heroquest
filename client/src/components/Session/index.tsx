import React, { useState } from "react";
import axios from "axios";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { getOneCharacter, getLobbyMonsters } from "../../helpers/selectors";
import MyCharacterCard from "./MyCharacterCard";
import ZargonCard from "./ZargonCard";

type SessionProps = {
  user: any;
};

type Monster = {
  id: number;
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

export default function Session({ user }: SessionProps) {
  const [character, setCharacter] = React.useState(null);
  const [lobbyMonsters, setLobbyMonsters] = React.useState<Monster[]>([]);
  // const newCharacter = getOneCharacter(1);

  const getCharacter = () => {
    getOneCharacter(4).then((char) => {
      setCharacter(char);
    });
  };

  React.useEffect(getCharacter, []);

  React.useEffect(() => {
    setLobbyMonsters(getLobbyMonsters());
  }, []);

  return (
    <div>
      {/* <MyCharacterCard {...character} user = {user}/> */}
      <ZargonCard lobbyMonsters={lobbyMonsters} />
    </div>
  );
}
