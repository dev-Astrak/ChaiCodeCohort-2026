var shipName = "Black Pearl";
console.log("Shipname:", shipName);

let crewCount = 12;
console.log("crew count: ", crewCount);

const captainName = "Jack Sparrow";
console.log("Captain Name: ", captainName);
// captainName = "Will Turner"; // This will cause an error because captainName is a constant

// Always use const for variable declarations ✅ good practice
// const is better than let

if(true){
  var leakyTreasure = "Gold coins"
}
console.log(leakyTreasure); // ✅ accessible outside the block scope, which can lead to bugs

const crewRoster = ["Astrak", "Jack", "Barbossa"]
crewRoster.push("Will")
crewRoster[0] = "Elizabeth"
console.log(crewRoster);

// modification✅, completely reassigning❌

// crewRoster = ["Davy Jones", "Bootstrap Bill"]; // This will cause an error because crewRoster is a constant
// Basically const means you cannot reassign the variable itself, but you can still modify the contents of an object or array declared with const.
