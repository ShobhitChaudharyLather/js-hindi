function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("O");
    console.log("B");
    console.log("H");
    console.log("I");
    console.log("T");
}

// sayMyName()

// function addTwoNum(num1,num2){ // num1,num2 are parameters
//     console.log(num1 + num2);
// }

// addTwoNum(3,4); //3 , 4 are arguments

function addTwoNum(num1,num2){ 
    // let result = num1 + num2;
    // return result;
    return num1 + num2
}

const res=addTwoNum(3,4)
// console.log("Result: ",res);

function loginUserMessage(username="Unknown user"){
    if(!username){
        console.log("Please enter a username")
        return;
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Shobhit"))
// console.log(loginUserMessage())

function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500))

const user ={
    username:"Shobhit",
    price: 199
}

function handleObj(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObj(user)
handleObj({
    username:"Rohit",
    price:399
})

const myArr=[200,300,100,400]

function returnSecondValue(getArray){
    return getArray[1];
}
// console.log(returnSecondValue(myArr))
console.log(returnSecondValue([50,11,80,40]))