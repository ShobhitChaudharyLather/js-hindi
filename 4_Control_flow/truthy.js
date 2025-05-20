const email=[]

if(email){
    console.log("Got the user email");
}
else{
    console.log("Don't have user email");
}

//falsy values -> false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy ->"0", 'false'," ", [], {}, function(){}

// if(email.length === 0){
//     console.log("Empty array!");
// }

const emptyObject ={}

// if(Object.keys(emptyObject).length===0){
//     console.log("Empty object!");
// }

//Nullish Coalescing Operator(??):null undefined

let val1;
// val1=5 ?? 10
// val1 = null ?? 10
val1= null ?? 10 ?? 15
console.log(val1);


//ternary operator
//condition ? true : false

const iceteaPrice =100
iceteaPrice <=80 ? console.log("less than 80") : console.log("more than 80")