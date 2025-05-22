// for of 

const arr=[1,2,3,4,5]

for (const num of arr) {
//    console.log(num); 
}

const greetings="Hello World!"
for (const greet of greetings) {
    // console.log(greet);  
}

// Maps(unique values only)

const map = new Map()
map.set('IN',"India")
map.set('US',"United States of America")
map.set('FR',"France")
map.set('IN',"India")

// console.log(map);

for (const [key,value] of map) {
    // console.log(key,':-', value);
}

const myObj={
    'game1':'NFS',
    'game2':'PUBG'
}

// for (const [key,value] of myObj) {
//     console.log(key,':-', value);
// } //not applicable on objects