//object literals

const mySym= Symbol("key1")
const JsUser={
    name:"Shobhit",
    "full name":"Shobhit Chaudhary",
    [mySym]:"myKey1",
    age:21,
    location:"Shamli",
    email:"sk@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Friday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email="roh@g.com"
// Object.freeze(JsUser)
// console.log(JsUser);

JsUser.greeting= function(){
    console.log("Hello JS user");
}
JsUser.greeting2= function(){
    console.log(`Hello JS user, ${this["full name"]}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());