const user={
    username:"shobhit",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }

}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this);

//note: window is the global object in the browser

// function chai(){
//     let username="shobhit"
//     console.log(this.username);
// }
// chai()

const chai =()=>{
    let username="sumit"
    console.log(this.username);
}
// chai()

// const addTwo=(num1,num2)=>{
//     return num1 + num2
// }

// const addTwo=(num1,num2)=> num1 + num2

// const addTwo=(num1,num2)=> (num1 + num2)

const addTwo=(num1,num2)=> ({username:"abhi"})

// console.log(addTwo(3,8));

