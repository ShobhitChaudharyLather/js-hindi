// const tinderUser= new Object()
const tinderUser={}

tinderUser.id="123a"
tinderUser.name="Samman"
tinderUser.isLoggedIn=false

// console.log(tinderUser)

const regularUser ={
    email:"some@gmail.com",
    fullname:{
        firstname:"Sumit",
        lastname:"Kandpal"
    }
}
// console.log(regularUser.fullname)
// console.log(regularUser.fullname.firstname)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}

// const obj3={obj1,obj2}

// const obj3=Object.assign(obj1,obj2)
// const obj3=Object.assign({},obj1,obj2,obj4)

const obj3={...obj1,...obj2}
// console.log(obj3)

const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"h1@gmail.com"
    },
    {
        id:3,
        email:"h2@gmail.com"
    }
]

users[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'));