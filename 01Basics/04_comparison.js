// Equality check is different form comparison check. 
console.log(null > 0);  //false
console.log(null == 0); //false
console.log(null >= 0); //true
// >< converts null to a number, treating as 0.

console.log(undefined < 0);  //false
console.log(undefined == 0); //false
console.log(undefined > 0); //false

// === strict check
console.log("2" == 2); //true
console.log("2" === 2); //false