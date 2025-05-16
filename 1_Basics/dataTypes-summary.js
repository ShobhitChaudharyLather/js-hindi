/* Primitive 
    string, number, boolean, null, undefined, BigInt, symbol

    null type- object
    object- object
     
*/
const id=Symbol('123');
const anotherId= Symbol('123');
console.log(id==anotherId);


/* Reference type(non primitive)
    Array, Objects, function
*/

const arr= ["shaktiman","doga"];

let myObj={
    name:"Shobhit",
    age:22
};

const myFunction = function(){
    console.log("Hello World");
}
 
/* JS a dynamically typed language-

a)Dynamic typing means that you don't need to declare variable types explicitly.
b)The type of a variable is determined at runtime, and it can change as the program runs.

*/


// Memory 
// Stack(primitive dataTypes)-> change in copy

// Heap(non-primitive dataTypes)-> reference (change in actual value)

let name="shobhit"
let name2=name
name2="rohit"
console.log(name)
console.log(name2)

let user1={
    email:"sk@g.com",
    upi:"user@ybl"
}
let user2=user1
user2.upi="abc@pnb"
console.log(user1.upi)
console.log(user2.upi)