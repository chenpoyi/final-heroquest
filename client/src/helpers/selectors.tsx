
import axios from "axios";

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

export const getCharacterWeapons = function (id) {

  return axios
    .get(`/api/character/weapons/${id}`) // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      // console.log(response.data.characters); // The entire response from the Rails API
      console.log('here: ', response.data)
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
export const updateCharacterPoints = function(id :number, body :number, mind :number, gold :number){
  return axios 
      .put(`/api/character/${id}`,{id, body, mind, gold}) // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        // console.log(response.data.characters); // The entire response from the Rails API
        console.log(response.data)
      
      }).catch((err)=>{
        console.log(err)
      });
    }
export const getNewHero = function () {
  return newHero
}

export const getMonsters = function () {
  return monsterData
};

export const getLobbyMonsters = function () {
  return lobbyMonsters
};

export const updateMonsterPoints = function
(id :number, body :number, mind :number, lobby_id :number) {
  return lobbyMonsters
};

    
export const getUserId = function(){
  return axios 
      .get("/api/users") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        // console.log(response.data.characters); // The entire response from the Rails API
        console.log(response.data)
        return response.data.quests
      }).catch((err)=>{
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

export const addCharacter = function(name: string, hero_id: number, user_id: number){

  return axios
    .post(`/api/characters/create`, { name, hero_id, user_id}) // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      // console.log(response.data.characters); // The entire response from the Rails API
      console.log(response.data)

    }).catch((err) => {
      console.log(err)
    });
};

export const getKills = function(category){
  if(category=="Monsters"){
    return monstersKillsData
  }
  return weaponsKillsData;
}

// export const getMonstersKills = function(){
//   return monstersKillsData;
// }

const weaponsKillsData = [
  {name: 'Broadsword', kills: 10},
  {name: 'Small Dagger', kills: 7}
]

const monstersKillsData = [
  {name: 'Orc', kills: 10},
  {name: 'Chaos Warrior', kills: 7}
]

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


const monsterData = [

{
  id: 1,  
  name:"Orc",
  attack: 3,
  defend: 2,
  body: 1, 
  mind: 2,
  movement: 8,
  image: "https://i.imgur.com/MrwYk8c.jpg",
  user: 1
},

{
  id: 2,
  name:"Chaos Warrior",
  attack: 4,
  defend: 4,
  body: 3, 
  mind: 3,
  movement: 7,
  image: "https://i.imgur.com/QPPVnmi.jpg",
  user: 1
},

{
  id: 3,
  name:"Verag - Gargoyle",
  attack: 4,
  defend: 5,
  body: 3, 
  mind: 4,
  movement: 6,
  image: "https://i.imgur.com/ocatT4L.jpeg",
  user: 1
},

{
  id: 4,
  name:"Goblin",
  attack: 2,
  defend: 2,
  body: 1, 
  mind: 1,
  movement: 10,
  image: "https://i.imgur.com/ECPDq44.jpeg",
  user: 1
},

{
  id: 5,
  name:"Fimir",
  attack: 3,
  defend: 3,
  body: 2, 
  mind: 3,
  movement: 6,
  image: "https://i.imgur.com/CcRZrt9.jpeg",
  user: 1
},

{
  id: 6,
  name:"Skeleton",
  attack: 2,
  defend: 2,
  body: 1, 
  mind: 0,
  movement: 6,
  image: "https://i.imgur.com/iDavOB7.jpeg",
  user: 1
},

{
  id: 7,
  name:"Zombie",
  attack: 2,
  defend: 3,
  body: 1, 
  mind: 0,
  movement: 5,
  image: "https://i.imgur.com/VyLtOcn.jpeg",
  user: 1
},

{
  id: 8,
  name:"Mummy",
  attack: 3,
  defend: 4,
  body: 2, 
  mind: 0,
  movement: 4,
  image: "https://i.imgur.com/ql4BBWp.jpeg",
  user: 1
},

{
  id: 9,
  name:"Gargoyle",
  attack: 4,
  defend: 5,
  body: 3, 
  mind: 4,
  movement: 6,
  image: "https://i.imgur.com/ocatT4L.jpeg",
  user: 1
},





];

// monsters in the lobby

const lobbyMonsters = [
// {
//   id: 1,
//   name:"Orc",
//   body: 11, 
//   mind: 12,
//   lobbies_id: 3, 
//   image: "https://i.imgur.com/MrwYk8c.jpg",
//   attack: 3,
//   defend: 2,
//   movement: 8
// },

// {
//   id: 2,
//   name:"Chaos Warrior",
//   body: 23, 
//   mind: 23,
//   lobbies_id: 3,
//   image: "https://i.imgur.com/QPPVnmi.jpg",
//   attack: 4,
//   defend: 4,
//   movement: 7
// },

// {
//   id: 3,
//   name:"Gargoyle",
//   body: 33, 
//   mind: 33,
//   lobbies_id: 3,
//   image: "https://i.imgur.com/ocatT4L.jpeg",
//   attack: 4,
//   defend: 5,
//   movement: 6
// }
];

// make a new character

const newHero = [
  
  {
    id: 1,
    race: 'Barbarian', 
    attack: 3, 
    defend: 2, 
    body: 8 , 
    mind: 2, 
    movement: 2,
    default_weapon: 2,
    image: 'https://i.imgur.com/h0nbSUe.gif'
    },
  
  {
    id: 2,
    race: 'Dwarf', 
    attack: 2, 
    defend: 2, 
    body: 7, 
    mind: 3, 
    movement: 2,
    default_weapon: 7,
    image:'https://i.imgur.com/jHZRMeu.gif'
    },
  
  {
    id: 3,
    race: 'Elf', 
    attack: 2, 
    defend: 2, 
    body: 6, 
    mind: 4, 
    movement: 2,
    default_weapon: 7,
    image: 'https://i.imgur.com/51xJXTf.gif'
    },
    
 {
    id: 4,
    race: 'Wizard', 
    attack: 1, 
    defend: 2, 
    body: 4, 
    mind: 6, 
    movement: 2,
    default_weapon: 4,
    image:'https://i.imgur.com/PEM18xf.gif'
    },
  
  {
    id:5,
    race: 'Zargon', 
    attack: 0, 
    defend: 0, 
    body: 0, 
    mind: 0, 
    movement: 0,
    default_weapon: 4, 
    image:'https://pbs.twimg.com/profile_images/827355229381414912/UOfej4Va_400x400.jpg'
    }
];