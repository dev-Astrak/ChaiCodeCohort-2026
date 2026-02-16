const clue1 = "Muddy footprint near the window";
const clue2 = "Broken glass on the floor";

console.log("Clue found:", clue1);
console.log("Clue found:", clue2);

const suspectName = "Dipesh";
const suspectAge = 20;
console.log("Suspect: ", suspectName, "| Age: ", suspectAge);

// For filtering and debugging purposes
console.warn("Warning: Fingerprint evidence detected");
console.error("Warning: Fingerprint evidence detected");

// Array of objects
const evidenceLog = [
  {id: 1, item: "Muddy footprint", location: "Window still"},
  {id: 2, item: "Broken glass", location: "Living room"},
  {id: 3, item: "Red fiber strand", location: "Door handle"}
]

console.table(evidenceLog)

console.group("Group starts")
console.log("My log 1");
console.log("My log 2");
console.log("My log 3");
console.groupEnd()

console.time("time req")  // For time tracking, we need to use the same string
let dnaMatches = 0
for(let i = 0; i < 1_000_000; i++){ // 1_000_000 only for readability, it is the same as 1000000, no performance difference
  dnaMatches++
}
console.timeEnd("time req")

console.count("Chaicode") // It counts how many times a particular line of code runs.
console.count("Chaicode")
console.count("Chaicode")
console.count("Chaicode")
