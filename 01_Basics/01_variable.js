const accountId = 227;
let accountEmail = "hello@there.com";
var accountPass = "youcannotseeit";
accountCity = "ahmedabad";
let accountState;

// accountId = 50 can not change the const
accountEmail = "hi@there.com";
accountPass = "seeit";
accountCity = "patan";

console.table([
  accountId,
  accountEmail,
  accountPass,
  accountCity,
  accountState,
]);

// console.log(accountId);
// console.log(accountCity);
