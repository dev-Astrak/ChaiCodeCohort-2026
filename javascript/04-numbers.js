const crewMembers = 40;
const fuelTons = 142.42;
const light_speed = 299_888_999;  // Only for readability

const infiniteRange = Infinity;
const negativeInfiniteRange = -Infinity;
const notANumber = NaN; // which we cannot convert into number like "Astrak" ----try to convert it into number----> NaN, 2-NaN can never be equal to each other.

// Used in DSA
console.log(1 / 0);
console.log(-1 / 0);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.EPSILON);
console.log(Number.isNaN(notANumber));  // gives true and false value

// Parsing and Conversion
const fuelReading = "142.75 tons";
const sectorCode = "0xA3";  // 0x -> hexadecimal
const countDown = "007";

console.log(parseInt(countDown)); // string to integer
console.log(parseFloat(fuelReading)); // string to float
console.log(parseInt("111", 2));  // radix

const thrustForce = 4.567;

console.log(Math.round(thrustForce));
console.log(Math.floor(thrustForce));
console.log(Math.ceil(thrustForce));
console.log(Math.trunc(thrustForce));

const temps = [-120, 43, 56, -23];
console.log(Math.min(temps));

console.log(0.1 + 0.2); // Not 3 exactly, why? Because of the way floating-point numbers are represented in binary, it can lead to precision issues. This is a common quirk in JavaScript and many other programming languages that use floating-point arithmetic.
console.log(0.1 + 0.2 === 0.3);

function almostEqual(a, b) {
  return Math.abs(a - b) < Number.EPSILON;
}

console.log(almostEqual(0.1 + 0.2, 0.3));
