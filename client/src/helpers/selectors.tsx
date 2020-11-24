export function getDrawerList():string[] {
  //... returns an array of the items on the left drawer
  return ['Game', 'Statistics', 'Resources', 'Settings'];
}

export const getCharacters = function(){
  return charactersData;
}

export const getWeapons = function(){
  return weaponsData;
}

const charactersData = [
  { name: 'Character 1', gold: 60 },
  { name: 'Character 2', gold: 90 },
  { name: 'Character 3', gold: 120 },
  { name: 'Character 4', gold: 150 }];


const weaponsData = [
  { id: 1, name: 'Weapon 1', description: "this is weapon 1", cost: 10 },
  { id: 2, name: 'Weapon 2', description: "this is weapon 2", cost: 20 },
  { id: 3, name: 'Weapon 3', description: "this is weapon 3", cost: 30 },
  { id: 4, name: 'Weapon 4', description: "this is weapon 4", cost: 40 },
  { id: 5, name: 'Weapon 5', description: "this is weapon 5", cost: 50 },
];