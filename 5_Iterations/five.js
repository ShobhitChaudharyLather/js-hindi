// for each

const coding=["js","java","python","cpp"]

// coding.forEach(element => {
//     console.log(element);
// })

// coding.forEach(function(element) {
//     console.log(element);
// })

// function print(item){
//     console.log(item);
// }

// coding.forEach(print)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

const myCoding=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageFileName);
})