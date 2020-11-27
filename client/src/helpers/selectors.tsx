
import axios from "axios";

export function getDrawerList(): string[] {
  //... returns an array of the items on the left drawer
  return ['Game', 'Statistics', 'Resources', 'Settings'];
}

export const getCharacters = function (user: any) {
  let id: number;
  if (user) {
    id = user.id;
  } else {
    id = 0;
  }

  return axios
    .get(`/api/users/${id}/characters`) // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      // console.log(response.data.characters); // The entire response from the Rails API
      console.log(response.data.characters)
      return response.data.characters
    }).catch((err) => {
      console.log(err)
    });

  // return charactersData;
}

export const getOneCharacter = function (characterID: number) {
  return axios
    .get(`/api/characters/${characterID}`) // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      // console.log(response.data.characters); // The entire response from the Rails API
      console.log(response.data.character)
      return response.data.character
    }).catch((err) => {
      console.log(err)
    });
}

export const getWeapons = function () {

  return axios
    .get(`/api/weapons`) // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      // console.log(response.data.characters); // The entire response from the Rails API
      console.log('her: ', response.data)
      return response.data.weapons
    }).catch((err) => {
      console.log(err)
    });
}

export const getQuests = function () {
  return axios
    .get("/api/quests/1") // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      // console.log(response.data.characters); // The entire response from the Rails API
      console.log(response.data)
      return response.data.quests
    }).catch((err) => {
      console.log(err)
    });

  // return charactersData;
}
export const updateCharacterPoints = function (id: number, body: number, mind: number, gold: number) {
  return axios
    .put(`/api/character/${id}`, { id, body, mind, gold }) // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      // console.log(response.data.characters); // The entire response from the Rails API
      console.log(response.data)

    }).catch((err) => {
      console.log(err)
    });
}


export const getUserId = function () {
  return axios
    .get("/api/users") // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      // console.log(response.data.characters); // The entire response from the Rails API
      console.log(response.data)
      return response.data.quests
    }).catch((err) => {
      console.log(err)
    });

  // return charactersData;
}

type User = {
  id: number,
  email: string
}
const userData: User[] = [
  { id: 1, email: "scott@m.ca" },
  { id: 2, email: "paul@c.ca" },
  { id: 3, email: "jake@p.ca" },
  { id: 4, email: "john@m.ca" },
  { id: 5, email: "howard@c.ca" }
];
export const getUsersOfLobby = function (id: number) {


  return axios
    .get(`/api/lobby/${id}/users`) // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      // console.log(response.data.characters); // The entire response from the Rails API
      console.log(response.data.users)
      // return response.data.users
      return response.data.users
    }).catch((err) => {
      console.log(err)
    });

  // return userData

  // return charactersData;
}
export const getCharactersOfLobby = function (id: number) {


  return axios
    .get(`/api/lobby/${id}/characters`) // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      // console.log(response.data.characters); // The entire response from the Rails API
      console.log(response.data.characters)
      // return response.data.users
      return response.data.characters
    }).catch((err) => {
      console.log(err)
    });

  // return userData

  // return charactersData;
}

export const selectCharacterOfLobby = function (user_id: number, character_id: number, lobby_id: number) {
  console.log('SENDING CHARACTER FOR LOBBY: ', lobby_id);
  return axios
    .post(`/api/lobby/characters`, { user_id, character_id, lobby_id }) // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      // console.log(response.data.characters); // The entire response from the Rails API
      console.log(response.data)

    }).catch((err) => {
      console.log(err)
    });
}


const charactersData = [
  { name: 'Character 1', gold: 60 },
  { name: 'Character 2', gold: 90 },
  { name: 'Character 3', gold: 120 },
  { name: 'Character 4', gold: 150 }
];


const weaponsData = [
  { id: 1, name: 'Weapon 1', description: "this is weapon 1", cost: 10 },
  { id: 2, name: 'Weapon 2', description: "this is weapon 2", cost: 20 },
  { id: 3, name: 'Weapon 3', description: "this is weapon 3", cost: 30 },
  { id: 4, name: 'Weapon 4', description: "this is weapon 4", cost: 40 },
  { id: 5, name: 'Weapon 5', description: "this is weapon 5", cost: 50 },
];