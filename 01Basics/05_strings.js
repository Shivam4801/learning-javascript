const name = "shivam";
const repoCount = "10";

//console.log(name + repoCount + " value"); //not recommended

//string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`);

//creating string as an object
const gameName = new String('Shivamst');

// console.log(gameName[0]);
// console.log(gameName.__proto__) // prototype


// console.log(gameName.length);
// console.log(gameName.toUpperCase()); // does not change real value(pass by value).

console.log(gameName.charAt(4));
console.log(gameName.indexOf("t"));

// Note
// All string methods return a new string. They don't modify the original string.

// Formally said:

// Strings are immutable: Strings cannot be changed, only replaced.

