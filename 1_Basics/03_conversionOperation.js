//________Conversion______________
let score="33abc"
// console.log(typeof score)
let valInNumber= Number(score)
// console.log(typeof valInNumber)
// console.log(valInNumber)

/* 
    "33" -> 33
    "33abc"-> NaN
    true-> 1
    false-> 0
*/

let isLoggedIn= 1
let booleanIsLoggedIn=Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

/* 1-> true
   ""-> false
   "shobhit"->true
*/

let num=33
let stringNum=String(num)
// console.log(stringNum)
// console.log(typeof stringNum)

//__________________Operations_______________
let val= 3;
let negVal= -val;
// console.log(negVal);

let str1="Hello";
let str2=" shobhit";
let str3=str1 + str2;
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(2 + 2 + "1" );

let x=3;
const y=x++;
console.log(`x:${x}, y:${y}`);

let a=3;
const b=++a;
console.log(`a:${a}, b:${b}`);
