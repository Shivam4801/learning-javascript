// Primitive (call by value)

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt




// Non-primitive (call by refrence)

// Arrays, Objects, Functions

// +++++++++++++++++++++++++++++++++++++++++++++

// Memmory

// Stack (Primitive), Heap (Non-primitive)

// stack (primitive => pass by value)
let userOne = "shivam"
let userTwo = userOne
userTwo = "rohit"

console.log(userOne);
console.log(userTwo);

// heap (non-primitive => pass by refrence)
let user_One = {
    email: "user@google.com",
    upi: "user@ybl"
}

let user_Two = user_One
user_Two.email = "shivam@google.com"

console.log(user_One.email)
console.log(user_Two.email)