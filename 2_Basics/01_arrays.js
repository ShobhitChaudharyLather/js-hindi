const arr= [1,2,3,4,5,6,7]
const actors = ["sunny deol","randeep hooda"]
const arr2 = new Array(1,2,3,4)
// console.log(actors[0]);
// console.log(actors[0][4]);

//methods

// arr.push(4)
// arr.push(5)
// console.log(arr);
// arr.pop()

// arr.unshift(0) // insert elements at starting position
// arr.shift() //remove element from starting

// console.log(arr.includes(2));
// console.log(arr.indexOf(12));

// const newArr = arr.join() 
// console.log(arr);
// console.log(newArr);

//slice , splice

// console.log("A" , arr);
// const myArr1= arr.slice(1,3)
// console.log(myArr1)
// console.log("B" , arr);
// const myArr2= arr.splice(1,2)//delete elements from array and return deleted elements
// console.log("C",arr);
// console.log(myArr2);


 const num=[1,2,3,4]
 const str=['a','b','c']
//  num.push(str)
//  console.log(num);

// const c=num.concat(str)
// console.log(c)

const concatedArr = [...num,...str]
// console.log(concatedArr);

const arr1 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const flatArr = arr1.flat(2)
// console.log(flatArr);

console.log(Array.isArray("Shobhit"))
console.log(Array.from("Shobhit"))
console.log(Array.from({name:"Shobhit"}))

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));