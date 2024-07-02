const accountId = 144552
let accountEmail = "shivam@google.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

// accountId = 144553       not allowed
accountEmail = "shivam12@google.com"
accountPassword = "123456"
accountCity = "pune"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState] )