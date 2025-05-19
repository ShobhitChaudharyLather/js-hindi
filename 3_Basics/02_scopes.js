// var c = 300
let a = 300

if(true){
    let a=10
    const b=20
    // console.log("inner: ",a)
}

// console.log(a)
// console.log(b)


function one(){
    const username="Shobhit"

    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}
// one()

if(true){
    const username="rohit"
    if(username==="rohit"){
        const website=" youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

//________________________________

console.log(addone(5));
function addone(num){
    return num+1
}

// addTwo(5) //error in this type of function declaration
const addTwo = function(num){
    return num+2
}
console.log(addTwo(5))
