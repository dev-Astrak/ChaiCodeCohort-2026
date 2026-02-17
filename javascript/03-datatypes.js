const weaponName = "Flame Sword";
console.log("Weapon: ", weaponName, "| type: ", typeof weaponName);

const attackPower = 75n;
const attackUpgrade = 1.5;

console.log(typeof attackPower);
console.log(typeof attackUpgrade);

const isLoggedIn = true;

let bonousEffect; // undefined -> no value
let currentStatus = null; // null -> explicitly no value

//----Usecase----//

// In a weather api, when there is no data for a particular area, we can set it to null, if we set undefined, it might be a mistake and we might forget to assign a value to it later on, but if we set it to null, it indicates that we intentionally set it to no value.

let weatherAPIResponse = null; // no data for the area

console.log(weatherAPIResponse); // datatype of null is null --> which is a bug or a famous js quirk
console.log(typeof weatherAPIResponse);

// Symbols --> to make things unique + immutable
const uniqueRuneId = Symbol("rune_of_fire");
console.log(
  "Rune: ",
  uniqueRuneId.toString(),
  "| type of: ",
  typeof uniqueRuneId,
);

const heroStats = {
  name: "Astrak",
  levvel: 12,
  class: "Ranger"
}
console.log("Hero: ", heroStats, " | type: ", typeof heroStats);

const inventoryItems = ["Flame Sword","Health Potion", "Shield"];
console.log("Inventory: ", inventoryItems, " | type: ", typeof inventoryItems);

function castSpell(){
  return "Fireball"
}
console.log("Spell type: ", typeof castSpell);

console.log(typeof "chaicode");
console.log(typeof 42);
console.log(typeof 42n);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof Symbol());
console.log(typeof {});
console.log(typeof []);
console.log(typeof function(){}); // use on OnClick in DOM, they need a function as a datatype, handler function req

// Copy methods

let originalHP = 100
let cloneHP = originalHP  // Independent copy, changing cloneHP will not affect originalHP
cloneHP = 80

console.log("Original HP: ", originalHP);
console.log("Clone HP: ", cloneHP);

const originalSword = {
  name: "Flame Sword",
  damage: 75,
  typeofW: "Fire"
}

const cloneSword = originalSword;
cloneSword.damage = 100 // This will change the damage of originalSword as well, because both originalSword and cloneSword reference the same object in memory
console.log("Original Sword: ", originalSword);
console.log("Clone Sword: ", cloneSword)

const armorOriginal = {
  name: "Iron Plate",
  defence: 80,
  buff:{
    fire: 10,
  }
}

const armorCopy = {...armorOriginal}
// armorCopy.buff.fire = 50
console.log(armorCopy);
console.log(armorOriginal);

const potionOriginal = {
  name: "Health",
  effects: {
    heal: 40,
    mana : 30
  }
}
const potionCopy = structuredClone(potionOriginal) // structuredClone creates a deep copy of the object, so changes to potionCopy will not affect potionOriginal
potionCopy.effects.heal = 100
console.log("Original Potion: ", potionOriginal);
console.log("Copy Potion: ", potionCopy);
