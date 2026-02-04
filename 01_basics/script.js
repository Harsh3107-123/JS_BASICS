const account_id=10
let accountEmail="abc@gmail.com"
var accountPassword="1234"
accountCity="Jaipur"
let accountState;

// account_id=112

/*
prefer not to use var because of issuse in block scope and functional scope
*/
console.log(account_id)
console.log(accountEmail)
console.log(accountCity)
console.log(accountPassword)
console.log(accountState)
console.table([account_id,accountEmail,accountPassword,accountCity
])